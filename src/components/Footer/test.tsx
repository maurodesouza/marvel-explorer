import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import Footer from '.';

describe('<Footer />', () => {
  it('should render the footer content correct', () => {
    renderWithProviders(<Footer />);

    const linkText = 'Mauro de Souza';
    const copy = 'Data provided by Marvel. © 2020 MARVEL';

    const linkElement = screen.getByRole('link', { name: linkText });

    expect(linkElement).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/maurodesouzaa/'
    );

    expect(linkElement).toHaveAttribute('target', '_blank');

    expect(screen.getByText(copy)).toBeInTheDocument();
  });

  it('should render the footer styles correct', () => {
    const { container } = renderWithProviders(<Footer />);

    const footer = container.firstChild;

    expect(footer).toMatchSnapshot();
  });
});
