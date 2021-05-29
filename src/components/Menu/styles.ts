import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as FooterStyles from 'components/Footer/styles';

export const Container = styled.menu`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuNav = styled.nav`
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
    justify-content: initial;
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};

    & + & {
      margin-top: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
      position: relative;
      font-size: ${theme.font.sizes.large};

      & + & {
        margin-top: 0;
        margin-left: calc(${theme.spacings.large} * 2);
      }

      &:hover {
        &::after {
          content: '';
          position: absolute;
          display: block;
          background-color: ${theme.colors.secondary};
          height: 2px;
          animation: hoverAnimation 0.2s forwards;
        }

        @keyframes hoverAnimation {
          from {
            width: 0%;
            left: 50%;
          }
          to {
            left: 0%;
            width: 100%;
          }
        }
      }
    `}
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.div<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: ${theme.colors.black};
    transition: opacity 0.2s;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    padding: 0 ${theme.spacings.small} 0;
    z-index: 20;

    ${IconWrapper} {
      position: absolute;
      top: ${theme.spacings.small};
      right: ${theme.spacings.small};
    }

    ${MenuNav} {
      display: flex;
      flex: 1;
      transition: transform 0.2s;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3.2rem)'};
    }

    ${FooterStyles.Container} {
      transition: transform 0.2s;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3.2rem)'};
    }

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`;
