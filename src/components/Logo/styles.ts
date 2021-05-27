import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  height: 3.2rem;
  max-width: 8rem;

  ${media.greaterThan('medium')`
    height: 5rem;
    max-width: 12.5rem;
  `}
`;
