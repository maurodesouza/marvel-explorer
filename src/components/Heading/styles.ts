import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.h1`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    color: ${theme.colors.white};
    font-weight: ${theme.font.xbold};
    font-size: ${theme.font.sizes.large};
    max-width: 33rem;
    text-align: center;

    ${media.greaterThan('small')`
      font-size: calc(${theme.font.sizes.medium} * 2);
      max-width: 44rem;

    `}

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      max-width: 55rem;
    `}
  `}
`;
