import styled from 'styled-components';
import { ShoppingCartBase } from '../../../../styles/global';

export const CoffeItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  position: relative;
  align-items: center;
  text-align: center;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const AddToShoppingCart = styled(ShoppingCartBase)`
  background-color: ${(props) => props.theme['purple-dark']};
  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;

export const CoffeItemImage = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -20px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Categories = styled.div`
  margin-top: 112px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 4px;
`;

export const Title = styled.h1`
  margin-top: 16px;
  font-weight: bold;
  font-size: 20px;
`;
export const Description = styled.p`
  margin-top: 8px;
  font-family: 'roboto';
  width: 216px;
  size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
`;

export const ProductFooter = styled.div`
  margin-top: 25px;
  display: flex;
  width: 206px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 3px;
  p:nth-child(1) {
    font-family: 'roboto';
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
  p:nth-child(2) {
    font-size: 24px;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProductCounter = styled.div`
  display: flex;
  width: 72px;
  height: 38px;
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
