import { ShoppingCart } from "phosphor-react";
import { IconItem } from "../../styles";
import { AddToShoppingCart, CoffeItemStyle } from "./styles";
import { defaultTheme } from "../../../../styles/themes/default";

export const CoffeItem = () => {
  return (
    <CoffeItemStyle>
      <div className="ProductImage">foto do cafezinho</div>
      <div className="Categories">
        <p>tradicional</p>
        <p>com leite</p>
      </div>
      <h1>Expresso Tradicional</h1>
      <p>descrição do item</p>
      <div className="FooterDOCard">
        <p>R$ 9,90</p>
        <div>
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </div>
        <IconItem variant={"yellow-dark"}>
          <AddToShoppingCart>
            <ShoppingCart size={16} weight="fill" color={defaultTheme.white} />
          </AddToShoppingCart>
        </IconItem>
      </div>
    </CoffeItemStyle>
  );
};
