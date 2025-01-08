import { CoffeeCart } from './components/CoffeeCart';
import {
  BillOrderCardContainer,
  BillPrice,
  CommitOrderButton,
  DemonstrativeCalc,
  DemonstrativeTotal,
  Divider,
} from './styles';

export const BillOrderCard = () => {
  return (
    <BillOrderCardContainer>
      <CoffeeCart />
      <Divider />
      <CoffeeCart />
      <Divider />
      <CoffeeCart />
      <Divider />
      <BillPrice>
        <DemonstrativeCalc>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </DemonstrativeCalc>
        <DemonstrativeCalc>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </DemonstrativeCalc>
        <DemonstrativeTotal>
          <p>Total</p>
          <p>R$ 33,20</p>
        </DemonstrativeTotal>
      </BillPrice>
      <CommitOrderButton>confirmar pedido</CommitOrderButton>
    </BillOrderCardContainer>
  );
};
