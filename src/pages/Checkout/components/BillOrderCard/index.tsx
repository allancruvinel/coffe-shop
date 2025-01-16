import { useContext } from 'react';
import { CoffeeCart } from './components/CoffeeCart';
import {
  BillOrderCardContainer,
  BillPrice,
  CommitOrderButton,
  DemonstrativeCalc,
  DemonstrativeTotal,
  Divider,
} from './styles';
import { CartContext } from '../../../../context/CartContext';

export const BillOrderCard = () => {
  const { deliveryInfo } = useContext(CartContext);
  return (
    <BillOrderCardContainer>
      {deliveryInfo.cart.orders.map((order) => (
        <div>
          <CoffeeCart key={order.id} order={order} />
          <Divider />
        </div>
      ))}
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
