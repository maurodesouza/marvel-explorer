import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';

import { FavoriteHeroesProvider } from 'hooks/useFavoriteHeroes';

import theme from 'styles/theme/default';

export const renderWithProviders = (children: React.ReactNode): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <FavoriteHeroesProvider>{children}</FavoriteHeroesProvider>
    </ThemeProvider>
  );
