import React, { useState } from 'react';
import SortSwitch from './SortSwitch';
import { THistory } from '../interface';
import { css } from '@emotion/css';

export interface MovesProps {
  history: THistory[];
  stepNumber: number;
  jumpTo: (move: number) => void;
}

const moveStyle = css`
  ol,
  ul {
    padding: 0px 0px 0px 30px;
    margin: 5px 0px;
  }
`;

export const Moves: React.FunctionComponent<MovesProps> = (
  props: MovesProps
) => {
  const [asc, setAsc] = useState<boolean>(true);

  // 履歴のソートを行う
  const handleSort = () => {
    setAsc(!asc);
  };

  const moves = props.history.map((step, move) => {
    const desc = move
      ? `Go to move # ${move} (col: ${step.selected.col}, row:${step.selected.row})`
      : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => props.jumpTo(move)}>
          {move === props.stepNumber ? <b>{desc}</b> : desc}
        </button>
      </li>
    );
  });
  // ソート順の適用
  if (!asc) moves.reverse();

  return (
    <div className={moveStyle}>
      <SortSwitch value={asc} onClick={() => handleSort()} />
      <ol>{moves}</ol>
    </div>
  );
};

export default Moves;
