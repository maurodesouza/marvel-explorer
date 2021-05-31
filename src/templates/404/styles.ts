import styled, { css } from 'styled-components';

export const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
  `}
`;

export const GoBackHome = styled.a`
  ${({ theme }) => css`
    display: block;
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.secondary};

    &:hover {
      text-decoration: underline;
    }
  `}
`;
