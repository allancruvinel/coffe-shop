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

  const somaTotalDeItems = deliveryInfo.cart.orders.reduce((soma, atual) => {
    return soma + atual.product.price * atual.quantity;
  }, 0);

  const valorDeEntrega = 3.5;

  const somaTotalDeItemsComEntrega = somaTotalDeItems + valorDeEntrega;

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
          <p>
            R${' '}
            {somaTotalDeItems.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </p>
        </DemonstrativeCalc>
        <DemonstrativeCalc>
          <p>Entrega</p>
          <p>
            R${' '}
            {valorDeEntrega.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </p>
        </DemonstrativeCalc>
        <DemonstrativeTotal>
          <p>Total</p>
          <p>
            R${' '}
            {somaTotalDeItemsComEntrega.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </p>
        </DemonstrativeTotal>
      </BillPrice>
      <CommitOrderButton>confirmar pedido</CommitOrderButton>
    </BillOrderCardContainer>
  );
};
