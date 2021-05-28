import { Meta, Story } from '@storybook/react/types-6-0';

import ShowWhen, { ShowWhenProps } from '.';

export default {
  title: 'ShowWhen',
  component: ShowWhen,
  args: {
    condition: true,
    children: 'Just a text',
  },
} as Meta<ShowWhenProps>;

export const Basic: Story<ShowWhenProps> = args => <ShowWhen {...args} />;
