import type { Meta, StoryObj } from '@storybook/react';

import Index from '../pages/index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Homepage',
  component: Index,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    header: { control: 'text' },
    bodyText: { control: 'text'},
  },
} satisfies Meta<typeof Index>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    header: 'Welcome to storybook',
    bodyText: 'Ut a nisl id ante tempus hendrerit. Aenean ut eros et nisl sagittis vestibulum. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Ut varius tincidunt libero. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Etiam iaculis nunc ac metus.',
  },
};

export const Secondary: Story = {
  args: {
    header: 'Welcome to storybook secondary',
    bodyText: 'Ut a nisl id ante tempus hendrerit. Aenean ut eros et nisl sagittis vestibulum. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Ut varius tincidunt libero. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Etiam iaculis nunc ac metus.',
  },
};

