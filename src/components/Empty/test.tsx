import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import Empty from '.';

const datas = {
  imagePath: '/images/no-search.svg',
  imageAlt:
    'A magnifying glass with sad face and with some bubbles in the background',
  children: 'Some text',
};

describe('<Empty />', () => {
  it('should render the empty correct', () => {
    renderWithProviders(<Empty {...datas} />);

    const image = screen.getByRole('img', { name: datas.imageAlt });
    const children = screen.getByText(datas.children);

    expect(children).toBeInTheDocument();

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', datas.imagePath);
  });

  it('should render the empty styles correct', () => {
    const { container } = renderWithProviders(<Empty {...datas} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
