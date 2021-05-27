import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 12.8rem;
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

    ${media.greaterThan('medium')`
      width: 100%;
      max-width: 17.7rem;
    `}
  `}
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 17rem;
  flex-shrink: 0;
  object-fit: cover;
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
