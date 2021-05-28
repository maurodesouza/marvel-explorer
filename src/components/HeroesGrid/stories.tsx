import { Meta, Story } from '@storybook/react/types-6-0';

import HeroesGrid from '.';

export default {
  title: 'HeroesGrid',
  component: HeroesGrid,
} as Meta;

export const Basic: Story = args => <HeroesGrid {...args} />;
