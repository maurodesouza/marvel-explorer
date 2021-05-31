import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import HeroInfo from '.';

const props = {
  id: 123,
  name: 'iron man',
  description:
    'Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.',
  wikiLink: 'https://google.com',
  comics: 123,
  series: 1234,
  stories: 12345,
};

describe('<HeroInfo />', () => {
  it('should render the HeroInfo correct', () => {
    renderWithProviders(<HeroInfo {...props} />);

    const link = screen.getByRole('link', { name: /see more/i });
    expect(screen.getByText(props.name)).toBeInTheDocument();

    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.comics)).toBeInTheDocument();

    expect(screen.getByText(props.series)).toBeInTheDocument();
    expect(screen.getByText(props.stories)).toBeInTheDocument();

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', props.wikiLink);
  });

  it('should alter icon between add/remove favorite', () => {
    renderWithProviders(<HeroInfo {...props} />);

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
});
