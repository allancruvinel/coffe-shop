import styled from 'styled-components';

export const CoffeListStyle = styled.div``;

export const List = styled.div`
  margin-top: 54px;
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  column-gap: 32px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 28px;
    column-gap: 11px;
  }
  @media (max-width: 634px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
