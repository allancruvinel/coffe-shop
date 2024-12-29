import { CoffeItem } from "../CoffeItem";
import { CoffeListStyle, List } from "./styles";

export const CoffeList = () => {
  return (
    <CoffeListStyle>
      <h1>lista de cafés</h1>
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
