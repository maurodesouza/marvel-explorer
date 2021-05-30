import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export type HeroesGridProps = {
  applyAutoFit?: boolean;
};

const heroesGridModifiers = {
  applyAutoFit: () => css`
    grid-template-columns: repeat(auto-fit, minmax(12.8rem, 1fr));

    ${media.greaterThan('small')`
      grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    `}
  `,
};

const HeroesGrid = styled.div<HeroesGridProps>`
  ${({ theme, applyAutoFit = false }) => css`
    width: 100%;
    display: grid;
    gap: ${theme.spacings.xsmall};
    grid-template-columns: repeat(2, minmax(12.8rem, 1fr));

    ${media.greaterThan('small')`
      gap: ${theme.spacings.small};
      grid-template-columns: repeat(5, minmax(16rem, 1fr));
    `}

    ${applyAutoFit && heroesGridModifiers.applyAutoFit}
  `}
`;

export default HeroesGrid;
