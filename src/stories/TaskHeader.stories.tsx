import { Meta, StoryObj } from '@storybook/react';
import TaskHeader from './TaskHeader';

const meta: Meta<typeof TaskHeader> = {
  title: 'Components/TaskHeader',
  component: TaskHeader,
  argTypes: { 
    onAddTask: { action: 'Add Task Clicked' },
  },
};

export default meta;

export const Default: StoryObj<typeof TaskHeader> = {
  args: {
    title: '할 일',
    taskCount: 3,
  },
};