/* eslint-disable @typescript-eslint/no-var-requires */

import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import HeroCard from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
}));

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

  it('should alter icon between add/remove favorite', () => {
    renderWithProviders(<HeroCard {...heroData} />);

    let addToFavoriteElement = screen.getByLabelText(/add hero to favorites/i);

    expect(addToFavoriteElement).toBeInTheDocument();
    fireEvent.click(addToFavoriteElement);

    const removeFromFavoriteElement = screen.getByLabelText(
      /remove hero to favorites/i
    );

    expect(removeFromFavoriteElement).toBeInTheDocument();
    expect(addToFavoriteElement).not.toBeInTheDocument();

    fireEvent.click(removeFromFavoriteElement);

    addToFavoriteElement = screen.getByLabelText(/add hero to favorites/i);

    expect(removeFromFavoriteElement).not.toBeInTheDocument();
    expect(addToFavoriteElement).toBeInTheDocument();
  });

  it('should navigate to hero page', () => {
    const { container } = renderWithProviders(<HeroCard {...heroData} />);

    const heroCard = container.firstChild!;
    fireEvent.click(heroCard);

    expect(push).toBeCalledTimes(1);
    expect(push).toBeCalledWith(`/characters/${heroData.heroId}`);
  });
});
