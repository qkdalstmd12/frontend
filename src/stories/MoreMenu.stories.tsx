import { Meta, StoryObj } from '@storybook/react';
import MoreMenu from './MoreMenu';

const meta: Meta<typeof MoreMenu> = {
  title: 'Components/MoreMenu',
  component: MoreMenu,
  argTypes: { 
    onDelete: { action: 'Deleted' },
    onEdit: { action: 'Edited' }
  },
};

export default meta;

export const Default: StoryObj<typeof MoreMenu> = {
  args: {
    onDelete: () => console.log('Task Deleted'),
    onEdit: () => console.log('Task Edited'),
  },
};
