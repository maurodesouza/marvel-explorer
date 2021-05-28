import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import theme from 'styles/theme/default';
import Heading from '.';

describe('<Heading />', () => {
  it('should render the heading with children', () => {
    const text = 'Just a text to test';

    renderWithProviders(<Heading>{text}</Heading>);

    const heading = screen.getByRole('heading', { name: text });

    expect(heading).toBeInTheDocument();

    expect(heading).toMatchInlineSnapshot(`
      .c0 {
        margin-top: 4.8rem;
        color: #FFF;
        font-weight: 900;
        font-size: 2.4rem;
        max-width: 33rem;
        text-align: center;
      }

      @media (min-width:450px) {
        .c0 {
          font-size: calc(1.6rem * 2);
          max-width: 44rem;
        }
      }

      @media (min-width:768px) {
        .c0 {
          font-size: 4.0rem;
          max-width: 55rem;
        }
      }

      <h1
        class="c0"
      >
        Just a text to test
      </h1>
    `);
  });

  it('should render the heading with correct styles', () => {
    const text = 'Just a text to test';

    renderWithProviders(<Heading>{text}</Heading>);

    const heading = screen.getByRole('heading', { name: text });

    expect(heading).toHaveStyle({
      fontSize: theme.font.sizes.large,
      fontWeight: theme.font.xbold,
      color: theme.colors.white,
    });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: '(min-width: 768px)',
    });
  });
});
