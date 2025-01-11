import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  @media (max-width: 580px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardBaseContainer = styled.div`
  width: 640px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 40px;
  border-radius: 6px;
  @media (max-width: 580px) {
    width: 400px;
  }
`;
export const CardLabel = styled.h1`
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const TitleCard = styled.div`
  display: flex;
  gap: 8px;
  div {
    p {
      font-family: 'roboto';
      font-size: 16px;
      color: ${(props) => props.theme['base-subtitle']};
    }
    p:nth-of-type(2) {
      font-family: 'roboto';
      font-size: 14px;
      color: ${(props) => props.theme['base-text']};
    }
  }
`;
