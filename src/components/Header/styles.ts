import styled from 'styled-components';
import { ShoppingCartBase } from '../../styles/global';

export const HeaderContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const ActionsField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const LocationField = styled.div`
  background-color: ${(props) => props.theme['purple-light']};
  display: flex;

  align-items: center;
  justify-content: center;
  height: 40px;
  gap: 0.25rem;
  padding: 0 8px;
  border-radius: 6px;

  p {
    color: ${(props) => props.theme['purple-dark']};
  }
`;

export const ShoppingCartButton = styled(ShoppingCartBase)`
  p {
    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 5000px;
    width: 20px;
    height: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    color: ${(props) => props.theme.white};
    font-size: 13px;
    font-weight: bold;
    position: absolute;
    top: -10px;
    right: -10px;
  }
`;
