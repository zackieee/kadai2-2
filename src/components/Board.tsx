import React from 'react';
import { css } from '@emotion/css';
import { TSquare } from '../interface';
import Square from './Square';

export interface BoardProps {
  squares: TSquare[];
  winSquares: number[];
  onClick: (i: number) => void;
}

export const Board: React.FunctionComponent<BoardProps> = (
  props: BoardProps
) => {
  const isHighRightSquare = (i: number) => {
    if (props.winSquares != null && props.winSquares.includes(i)) {
      return true;
    }
    return false;
  };

  const renderSquare = (i: number) => {
    return (
      <Square
        value={props.squares[i] || null}
        highRight={isHighRightSquare(i)}
        onClick={() => props.onClick(i)}
        key={`square" ${i}`}
      />
    );
  };

  const bord = [];
  for (let row = 0; row < 3; row++) {
    const rowBoard = [];
    for (let col = 0; col < 3; col++) {
      rowBoard.push(renderSquare(col + 3 * row));
    }
    bord.push(
      <div
        className={css`
          after {
            clear: both;
            content: '';
            display: table;
          }
        `}
        key={`row ${row}`}
      >
        {rowBoard}
      </div>
    );
  }

  return <div>{bord}</div>;
};

export default Board;
