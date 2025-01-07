import { CoffeeCart } from './components/CoffeeCart';
import { BillOrderCardContainer } from './styles';

export const BillOrderCard = () => {
  return (
    <BillOrderCardContainer>
      <CoffeeCart />
      <CoffeeCart />
      <div>
        <div>
          <p>Total de itens</p>
          <p>preço sem frete</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>preço entrega</p>
        </div>
        <div>
          <p>Total</p>
          <p>preço total</p>
        </div>
        <button>Confirmar Pedido</button>
      </div>
    </BillOrderCardContainer>
  );
};
