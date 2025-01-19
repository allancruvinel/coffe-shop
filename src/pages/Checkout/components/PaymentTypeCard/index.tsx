import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { TitleCard } from '../../styles';
import {
  PaymentOption,
  PaymentOptions,
  PaymentTypeCardContainer,
} from './styles';
import { defaultTheme } from '../../../../styles/themes/default';
import { useContext } from 'react';
import { CartContext, PaymentType } from '../../../../context/CartContext';

export function PaymentTypeCard() {
  const { deliveryInfo, setPaymentType } = useContext(CartContext);
  return (
    <PaymentTypeCardContainer>
      <TitleCard>
        <CurrencyDollar size={22} color={defaultTheme.purple} />
        <div>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TitleCard>
      <PaymentOptions>
        <PaymentOption
          isSelected={deliveryInfo.paymentType === PaymentType.CREDIT_CARD}
          onClick={() => setPaymentType(PaymentType.CREDIT_CARD)}
        >
          <CreditCard size={16} color={defaultTheme.purple} />
          <p>CARTÃO DE CRÉDITO</p>
        </PaymentOption>
        <PaymentOption
          isSelected={deliveryInfo.paymentType === PaymentType.DEBIT_CARD}
          onClick={() => setPaymentType(PaymentType.DEBIT_CARD)}
        >
          <Bank size={16} color={defaultTheme.purple} />
          <p>CARTÃO DE DÉBITO</p>
        </PaymentOption>
        <PaymentOption
          isSelected={deliveryInfo.paymentType === PaymentType.MONEY}
          onClick={() => setPaymentType(PaymentType.MONEY)}
        >
          <Money size={16} color={defaultTheme.purple} />
          <p>DINHEIRO</p>
        </PaymentOption>
      </PaymentOptions>
    </PaymentTypeCardContainer>
  );
}
