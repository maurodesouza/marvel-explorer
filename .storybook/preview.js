import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router';

import { ThemeProvider } from 'styled-components';
import { FavoriteHeroesProvider } from 'hooks/useFavoriteHeroes';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme/default';

addDecorator(withNextRouter());

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <FavoriteHeroesProvider>
        <Story />
        <GlobalStyles />
      </FavoriteHeroesProvider>
    </ThemeProvider>
  ),
];
