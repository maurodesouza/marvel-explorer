import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 57rem;
    color: ${theme.colors.white};
    user-select: none;
  `}
`;

export const HeroDetails = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas: 'name favorite' 'infos infos';
    row-gap: ${theme.spacings.small};
    align-items: center;
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.primary};
  `}
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    grid-area: name;
    text-transform: uppercase;
    font-size: ${theme.font.sizes.medium};
    margin-left: ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: favorite;
    justify-self: end;
    height: 2.4rem;
    width: 2.4rem;
    color: ${theme.colors.primary};
    cursor: pointer;

    & * {
      cursor: pointer;
    }
  `}
`;

export const Infos = styled.div`
  justify-self: end;

  grid-area: infos;
  display: flex;
  align-items: center;
`;

export const InfoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    & + & {
      margin-left: ${theme.spacings.small};
    }
  `}
`;

export const Label = styled.strong`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

export const Value = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-top: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

export const SeeMore = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    align-self: center;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border-width: 3px;
      border-style: solid;
      border-top-color: ${theme.colors.black};
      border-left-color: ${theme.colors.black};
      border-bottom-color: transparent;
      border-right-color: transparent;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      border-width: 3px;
      border-style: solid;
      border-bottom-color: ${theme.colors.black};
      border-right-color: ${theme.colors.black};
      border-top-color: transparent;
      border-left-color: transparent;
    }

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.xsmall} ${theme.spacings.large};

      &::after, &::before {
        border-width: 5px;
      }
    `}
  `}
`;
