import { ThemeProvider } from 'styled-components';
import { FavoriteHeroesProvider } from 'hooks/useFavoriteHeroes';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme/default';

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
