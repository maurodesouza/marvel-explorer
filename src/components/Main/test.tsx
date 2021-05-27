import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helpers';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />);

    expect(
      screen.getByRole('heading', { name: /next boilerplate/i })
    ).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
