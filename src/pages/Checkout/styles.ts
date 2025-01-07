import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
`;

export const CardBaseContainer = styled.div`
  width: 640px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 40px;
  border-radius: 6px;
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
