import { Meta, Story } from '@storybook/react/types-6-0';

import HeroCard from '../HeroCard';

import HeroesGrid, { HeroesGridProps } from '.';

type HeroesGridStoryProps = HeroesGridProps & {
  renderHeroCards: number;
};

const props = {
  heroId: 123,
  heroName: 'Iron man',
  heroThumbnail:
    'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
};

export default {
  title: 'HeroesGrid',
  component: HeroesGrid,

  argTypes: {
    theme: { table: { disable: true } },
    ref: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
  },

  args: {
    renderHeroCards: 1,
  },
} as Meta<HeroesGridStoryProps>;

const createArray = (lenght: number): string[] => new Array(lenght).fill('');

export const Basic: Story<HeroesGridStoryProps> = args => {
  const { renderHeroCards, ...rest } = args;

  return (
    <div style={{ width: '100%', maxWidth: '1040px' }}>
      <HeroesGrid {...rest}>
        {createArray(renderHeroCards).map((_, index) => (
          <HeroCard key={props.heroId * (index + 1)} {...props} />
        ))}
      </HeroesGrid>
    </div>
  );
};
