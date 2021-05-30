import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { storageKey } from 'hooks/useFavoriteHeroes';
import HeroCard from '.';

const heroData = {
  heroId: 123,
  heroName: 'Iron man',
  heroThumbnail:
    'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
};

describe('<HeroCard />', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should render the hero card correct', () => {
    renderWithProviders(<HeroCard {...heroData} />);

    expect(
      screen.getByRole('img', { name: heroData.heroName })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: heroData.heroName })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/add hero to favorites/i)).toBeInTheDocument();
  });

  it('should render the hero card styles correct', () => {
    const { container } = renderWithProviders(<HeroCard {...heroData} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add hero to favorites', () => {
    renderWithProviders(<HeroCard {...heroData} />);

    const addToFavoriteElement = screen.getByLabelText(
      /add hero to favorites/i
    );

    expect(addToFavoriteElement).toBeInTheDocument();
    fireEvent.click(addToFavoriteElement);

    const removeFromFavoriteElement = screen.getByLabelText(
      /remove hero to favorites/i
    );

    expect(removeFromFavoriteElement).toBeInTheDocument();
    expect(addToFavoriteElement).not.toBeInTheDocument();

    const storagedHero = JSON.parse(window.localStorage.getItem(storageKey)!);

    expect(storagedHero).toEqual([heroData]);
  });

  it('should remove hero to favorites', () => {
    window.localStorage.setItem(storageKey, JSON.stringify([heroData]));

    renderWithProviders(<HeroCard {...heroData} />);

    const removeFromFavoriteElement = screen.getByLabelText(
      /remove hero to favorites/i
    );

    expect(removeFromFavoriteElement).toBeInTheDocument();
    fireEvent.click(removeFromFavoriteElement);

    const addToFavoriteElement = screen.getByLabelText(
      /add hero to favorites/i
    );

    expect(removeFromFavoriteElement).not.toBeInTheDocument();
    expect(addToFavoriteElement).toBeInTheDocument();

    const storagedHero = JSON.parse(window.localStorage.getItem(storageKey)!);
    expect(storagedHero).toEqual([]);
  });
});
