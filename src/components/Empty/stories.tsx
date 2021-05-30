import { Meta, Story } from '@storybook/react/types-6-0';

import Empty, { EmptyProps } from '.';

export default {
  title: 'Empty',
  component: Empty,
  args: {
    imagePath: '/images/no-search.svg',
    imageAlt:
      'A magnifying glass with sad face and with some bubbles in the background',
    children: 'Some text',
  },
} as Meta<EmptyProps>;

export const Basic: Story<EmptyProps> = args => <Empty {...args} />;
