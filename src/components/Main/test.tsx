import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithProviders(<Main />);

    expect(
      screen.getByRole('heading', { name: /next boilerplate/i })
    ).toBeInTheDocument();
  });
});
