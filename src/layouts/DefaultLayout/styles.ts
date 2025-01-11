import styled from 'styled-components';

export const DefaultContainerLayout = styled.div`
  max-width: 70rem;
  margin: auto;
  @media (max-width: 70rem) {
    padding: 0 2rem; /* Mais espaço em telas maiores */
  }
`;
