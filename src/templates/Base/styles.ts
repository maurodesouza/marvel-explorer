import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  `}
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
