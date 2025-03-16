import { Meta, StoryObj } from '@storybook/react';
import TaskCard from './TaskCard';

const meta: Meta<typeof TaskCard> = {
  title: 'Components/TaskCard',
  component: TaskCard,
};

export default meta;

export const Default: StoryObj<typeof TaskCard> = {
  args: {
    title: '프론트 개발 공부하기',
    category: '1주차',
    date: new Date('2025-08-24').getTime(), 
    comments: ['정말 잘했어요!', '수정이 필요해요.'],
  },
};
