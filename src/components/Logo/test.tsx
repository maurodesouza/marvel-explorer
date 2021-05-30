import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the logo correct', () => {
    renderWithProviders(<Logo />);

    expect(screen.getByRole('img', { name: /marvel/i })).toBeInTheDocument();
  });

  it('should render the logo styles correct', () => {
    const { container } = renderWithProviders(<Logo />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
