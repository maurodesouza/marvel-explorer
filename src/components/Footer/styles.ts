import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    width: 100%;
    max-width: 57rem;
    border-top: 4px solid ${theme.colors.secondary};
    padding-top: calc(${theme.spacings.large} / 2);
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.small};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

export const MadeBy = styled.p`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};

    a {
      color: ${theme.colors.white};

      &:hover {
        color: ${theme.colors.secondary};
        text-decoration: underline;
      }
    }
  `}
`;

export const Copy = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
  `}
`;
