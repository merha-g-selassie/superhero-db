import Progress, { ProgressProps } from './Progress';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'UI/Progress',
  component: Progress,
  argTypes: {
    isCentered: {
      name: 'isCentered',
      type: { name: 'boolean', required: false },
      defaultValue: null,
      description: 'center the loading indicator',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta;

const Template: Story<ProgressProps> = (args) => {
  return <Progress {...args} />;
};

export const Default = Template.bind({});
export const Centered = Template.bind({});
Centered.args = {
  isCentered: true,
};
