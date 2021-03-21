import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Board, BoardProps } from '../components/Board';

export default {
  title: 'Board',
  component: Board,
} as Meta;

const Template: Story<BoardProps> = (args) => <Board {...args} />;

export const Control = Template.bind({});
Control.args = {
  squares: new Array(9).fill(null),
  winSquares: [],
};
