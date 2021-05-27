import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the logo correct', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByRole('img', { name: /marvel/i })).toBeInTheDocument();
  });

  it('should render the logo styles correct', () => {
    const { container } = renderWithTheme(<Logo />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
