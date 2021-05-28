import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.form`
  ${({ theme }) => css`
    width: 100%;
    max-width: 40rem;
    position: relative;
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      max-width: 57rem;
      margin-top: calc(${theme.spacings.large} * 2);
      margin-bottom: ${theme.spacings.xlarge};
    `}
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    margin-top: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    border: 0;
    border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};

    &::placeholder {
      color: ${theme.colors.black};
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 0 ${theme.spacings.small};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    flex-shrink: 0;
    border: 0;
    border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    ${media.greaterThan('small')`
      padding: 0 ${theme.spacings.medium};
    `}

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.large};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: calc(100% + ${theme.spacings.xxsmall});
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
      top: calc(100% + ${theme.spacings.xsmall});
    `}
  `}
`;
