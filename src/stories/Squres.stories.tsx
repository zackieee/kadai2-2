import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Square, SquareProps } from '../components/Square';

export default {
  title: 'Square',
  component: Square, // eslint-disable-line
} as Meta;

const Template: Story<SquareProps> = (args) => <Square {...args} />;

export const Control = Template.bind({});
Control.args = {
  value: 'X',
  highRight: false,
};
