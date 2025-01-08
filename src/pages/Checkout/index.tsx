import { BillOrderCard } from './components/BillOrderCard';
import { DeliveryFormCard } from './components/DeliveryFormCard';
import { PaymentTypeCard } from './components/PaymentTypeCard';
import { CardLabel, CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <CardLabel>Complete seu pedido</CardLabel>
        <DeliveryFormCard />
        <PaymentTypeCard />
      </div>
      <div>
        <CardLabel>Cafés selecionados</CardLabel>
        <BillOrderCard />
      </div>
    </CheckoutContainer>
  );
}
