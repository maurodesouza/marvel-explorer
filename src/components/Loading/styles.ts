import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.span`
  ${({ theme }) => css`
    position: relative;
    top: 1.5rem;
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 10rem;
    background-color: ${theme.colors.secondary};
    animation: wave 0.6s ease-in alternate infinite;

    & + & {
      margin-left: ${theme.spacings.xsmall};
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }

    &:nth-child(4) {
      animation-delay: 0.6s;
    }

    @keyframes wave {
      0% {
        top: 1.5rem;
      }

      100% {
        top: -1.5rem;
      }
    }
  `}
`;
