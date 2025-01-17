import styled from 'styled-components';

export const CoffeeCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Info = styled.div`
  display: flex;
  gap: 20px;
`;
export const CoffeItemImage = styled.img`
  width: 64px;
  height: 64px;
`;

export const Title = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'roboto';
  font-size: 16px;
`;

export const RemoveToShoppingCartButton = styled.button`
  display: flex;
  width: 91px;
  height: 32px;
  background-color: ${(props) => props.theme['base-button']};
  gap: 4px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 6px;
  outline: 0;
  border: 0;
  p {
    font-family: 'roboto';
    font-size: 12px;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }
  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`;

export const Price = styled.p`
  font-family: 'roboto';
  font-weight: bold;
  font-size: 16px;
`;

export const ProductCounter = styled.div`
  display: flex;
  width: 72px;
  height: 32px;
  background-color: ${(props) => props.theme['base-button']};
  gap: 4px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  p {
    color: ${(props) => props.theme['base-title']};
    font-family: 'roboto';
    font-size: 16px;
    width: 20px;
    text-align: center;
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
  svg:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`;

