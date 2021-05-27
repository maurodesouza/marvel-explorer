import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.xbold};
    font-size: ${theme.font.sizes.large};
    max-width: 55rem;
    text-align: center;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;
