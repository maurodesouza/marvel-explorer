import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Results = styled.div`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: ${theme.spacings.large};

    ${media.greaterThan('small')`
      margin-top: ${theme.spacings.xlarge};
    `}
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
  `}
`;

export const GoToSearch = styled.a`
  ${({ theme }) => css`
    display: block;
    margin-top: ${theme.spacings.xsmall};
    color: ${theme.colors.secondary};

    &:hover {
      text-decoration: underline;
    }
  `}
`;
