import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  max-width: 44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    max-width: 40rem;
    text-align: center;

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
