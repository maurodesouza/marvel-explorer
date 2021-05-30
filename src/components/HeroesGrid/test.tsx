import { renderWithProviders } from 'utils/test/helpers';

import HeroesGrid from '.';

describe('<HeroesGrid />', () => {
  it('should render the HeroesGrid styles correct', () => {
    const { container } = renderWithProviders(<HeroesGrid />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should aplly auto fit styles when the prop is passed', () => {
    const { container } = renderWithProviders(<HeroesGrid applyAutoFit />);

    const component = container.firstChild;

    expect(component).toHaveStyle({
      'grid-template-columns': 'repeat(auto-fit,minmax(12.8rem,1fr))',
    });

    expect(component).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fit,minmax(16rem,1fr))',
      {
        media: '(min-width: 450px)',
      }
    );
  });
});
