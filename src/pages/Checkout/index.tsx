import { BillOrderCard } from './components/BillOrderCard';
import { DeliveryFormCard } from './components/DeliveryFormCard';
import { PaymentTypeCard } from './components/PaymentTypeCard';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <DeliveryFormCard />
        <PaymentTypeCard />
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <BillOrderCard />
      </div>
    </CheckoutContainer>
  );
}
