import { Meta, Story } from '@storybook/react/types-6-0';

import HeroCard, { HeroCardProps } from '.';

export default {
  title: 'HeroCard',
  component: HeroCard,
  args: {
    heroId: 123,
    heroName: 'Iron man',
    heroThumbnail:
      'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
  },
} as Meta<HeroCardProps>;

export const Basic: Story<HeroCardProps> = args => <HeroCard {...args} />;
