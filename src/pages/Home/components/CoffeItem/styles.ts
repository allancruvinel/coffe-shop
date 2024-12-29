import styled from "styled-components";
import { ShoppingCartBase } from "../../../../styles/global";

export const CoffeItemStyle = styled.div``;

export const AddToShoppingCart = styled(ShoppingCartBase)`
  background-color: ${(props) => props.theme["purple-dark"]};
`;
