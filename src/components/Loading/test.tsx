import { renderWithProviders } from 'utils/test/helpers';

import Loading from '.';

describe('<Loading />', () => {
  it('should render the Loading', () => {
    const { container } = renderWithProviders(<Loading />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
