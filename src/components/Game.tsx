import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { THistory, TSquare } from '../interface';
import Board from './Board';
import Moves from './Moves';

export const Game: React.FunctionComponent = () => {
  const [history, setHistory] = useState<THistory[]>([
    {
      squares: new Array<TSquare>(9).fill(null),
      selected: {
        col: 0,
        row: 0,
      },
    },
  ]);
  const [winSquares, setWinSquares] = useState<number[]>(
    new Array<number>().fill(-1) // 0~9以外の値を設定して初期表示がハイライトされないようにする
  );
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [gameStatus, setGameStatus] = useState<string>('Playing');
  const [stateMessage, setStateMessage] = useState<string>(
    'Next player: ' + (xIsNext ? 'X' : 'O')
  );

  // 盤面が進んだことを検知して勝者判定
  useEffect(() => {
    calculateWinner();
  }, [history]);

  // 盤面が進んだ、又はゲームステータスが変更されたことを検知してメッセージ更新
  useEffect(() => {
    statusMessageUpdate();
  }, [xIsNext, gameStatus]);

  // 盤面を進める
  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[stepNumber];
    const squares = current.squares.slice();

    // 既にクリック済みのセルを選択した場合は処理中断
    if (squares[i]) return;

    // クリックセルを置き換え
    squares[i] = xIsNext ? 'X' : 'O';

    // 履歴を更新する
    setHistory(
      _history.concat([
        {
          squares: squares,
          selected: {
            col: (i % 3) + 1,
            row: Math.floor(i / 3) + 1,
          },
        },
      ])
    );
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };

  // 勝敗を判定する
  const calculateWinner = () => {
    // 勝敗が確定している場合は処理中断
    if (gameStatus === 'Win' || gameStatus === 'Draw') return;

    const squares = history[stepNumber].squares;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares !== null &&
        squares !== undefined &&
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setGameStatus('Win');
        setWinSquares(lines[i]);
        return;
      }
    }

    // 盤面に空きが無くなった場合はDraw判定
    if (!squares.includes(null)) {
      setGameStatus('Draw');
    }
  };

  // ステータスメッセージを更新する
  const statusMessageUpdate = () => {
    switch (gameStatus) {
      case 'Win':
        setStateMessage('Winner:' + (xIsNext ? 'O' : 'X'));
        break;
      case 'Draw':
        setStateMessage('This game is draw !!');
        break;
      case 'Playing':
        setStateMessage('Next player: ' + (xIsNext ? 'X' : 'O'));
        break;
      default:
        break;
    }
  };

  // 選択した履歴に移動する
  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);

    // 状態をクリアする
    setGameStatus('Playing');
    setWinSquares(new Array<number>().fill(-1));
  };

  // 現在の盤面を取得
  const current = history[stepNumber];

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
      `}
    >
      <div className="game-board">
        <Board
          squares={current.squares}
          winSquares={winSquares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div
        className={css`
          margin-left: 20px;
        `}
      >
        <div>{stateMessage}</div>
        <Moves history={history} stepNumber={stepNumber} jumpTo={jumpTo} />
      </div>
    </div>
  );
};

export default Game;
