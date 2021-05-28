import { renderWithProviders } from 'utils/test/helpers';

import HeroesGrid from '.';

describe('<HeroesGrid />', () => {
  it('should render the HeroesGrid styles correct', () => {
    const { container } = renderWithProviders(<HeroesGrid />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
