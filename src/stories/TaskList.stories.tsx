import { Meta, StoryObj } from '@storybook/react';
import TaskList from './TaskList';

const meta: Meta<typeof TaskList> = {
  title: 'Components/TaskList',
  component: TaskList,
  argTypes: {
    onAddTask: { action: 'Add Task Clicked' },
  },
};

export default meta;

export const Default: StoryObj<typeof TaskList> = {
  args: {
    title: '할 일',
    tasks: [
      {
        id: 1,
        title: 'Design new UI presentation',
        category: 'Dribbble marketing',
        date: '24 Aug 2025',
        comments: ['Looks great!', 'Consider changing the colors.'],
      },
      {
        id: 2,
        title: 'Design few mobile screens',
        category: 'Dropbox mobile app',
        date: '26 Aug 2025',
        comments: ['Add animations'],
      },
    ],
  },
};
