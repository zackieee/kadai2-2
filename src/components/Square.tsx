import React from 'react';
import { css } from '@emotion/css';
import { TSquare } from '../interface';

export interface SquareProps {
  value: TSquare;
  highRight: boolean;
  onClick: () => void;
}

const highRightStyle = css`
  background: #f0e68c;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  &:focus {
    outline: none;
  }
`;

const normalStyle = css`
  background: #ffffff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  &:focus {
    outline: none;
  }
`;

export const Square: React.FunctionComponent<SquareProps> = (
  props: SquareProps
) => {
  const style = props.highRight ? highRightStyle : normalStyle;
  return (
    <button className={style} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
