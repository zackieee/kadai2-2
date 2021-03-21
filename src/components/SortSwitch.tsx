import React from 'react';
import { css } from '@emotion/css';

export interface SortSwitchProps {
  value: boolean;
  onClick: () => void;
}

const switchStyle = css`
  margin-top: 10px;
`;

export const SortSwitch: React.FunctionComponent<SortSwitchProps> = ({
  value,
  onClick,
}) => {
  return (
    <button className={switchStyle} onClick={onClick}>
      {value ? '昇順' : '降順'}
    </button>
  );
};

export default SortSwitch;
