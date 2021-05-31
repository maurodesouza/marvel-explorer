import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const ThumbnailWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: calc(100% + ${theme.spacings.small});
    margin-top: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.small};
    height: 25rem;

    ${media.greaterThan('small')`
      height: 35rem;
    `}

    ${media.greaterThan('medium')`
      width: 100%;
      height: 45rem;
    `}
  `}
`;

export const InfoWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
