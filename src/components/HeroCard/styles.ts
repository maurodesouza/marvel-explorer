import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 31.5rem;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      border-width: 12px;
      border-style: solid;
      border-bottom-color: ${theme.colors.black};
      border-right-color: ${theme.colors.black};
      border-top-color: transparent;
      border-left-color: transparent;
    }
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 17rem;
    flex-shrink: 0;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      box-sizing: border-box;
      top: calc(50% - 1.6rem);
      left: calc(50% - 1.6rem);
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 10rem;
      border-width: 4px;
      border-style: solid;
      border-color: ${theme.colors.black};
      border-top-color: ${theme.colors.secondary};
      animation: spin 1s ease infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(720deg);
      }
    }
  `}
`;

export const HeroContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};

    &::after {
      content: '';
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      height: 4px;
      background-color: ${theme.colors.primary};
      transition: height 0.2s;
      cursor: pointer;
    }

    ${media.greaterThan('large')`
      &:hover {
        &::after {
          height: 100%;
        }

        ${IconWrapper} {
          color: ${theme.colors.white};
          cursor: pointer;
        }

        ${HeroName} {
          color: ${theme.colors.white} !important;
          pointer-events: none;
        }
      }
    `}
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.primary};
    position: absolute;
    bottom: 2.4rem;
    right: 2.4rem;
    cursor: pointer;
    z-index: 10;

    & * {
      cursor: pointer;
    }
  `}
`;

export const HeroName = styled.h3`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    text-transform: uppercase;
    z-index: 10;
  `}
`;
