import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Game } from '../components/Game';

export default {
  title: 'Game',
  component: Game,
} as Meta;

const Template: Story<{}> = () => <Game />; // eslint-disable-line

export const Control = Template.bind({});
Control.args = {
  squares: new Array(9).fill(null),
  winSquares: [],
};
