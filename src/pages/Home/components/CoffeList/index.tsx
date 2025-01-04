import { CoffeItem } from "../CoffeItem";
import { CoffeListStyle, List } from "./styles";

export const CoffeList = () => {
  return (
    <CoffeListStyle>
      <h1>Nossos Cafés</h1>
      <List>
        <CoffeItem />
        <CoffeItem />
        <CoffeItem />
        <CoffeItem />
        <CoffeItem />
        <CoffeItem />
        <CoffeItem />
        <CoffeItem />
        <CoffeItem />
      </List>
    </CoffeListStyle>
  );
};
