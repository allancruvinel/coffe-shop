import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { TitleCard } from '../../styles';
import {
  PaymentOption,
  PaymentOptions,
  PaymentTypeCardContainer,
} from './styles';
import { defaultTheme } from '../../../../styles/themes/default';

export function PaymentTypeCard() {
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
        <PaymentOption>
          <CreditCard size={16} color={defaultTheme.purple} />
          <p>CARTÃO DE CRÉDITO</p>
        </PaymentOption>
        <PaymentOption>
          <Bank size={16} color={defaultTheme.purple} />
          <p>CARTÃO DE DÉBITO</p>
        </PaymentOption>
        <PaymentOption>
          <Money size={16} color={defaultTheme.purple} />
          <p>DINHEIRO</p>
        </PaymentOption>
      </PaymentOptions>
    </PaymentTypeCardContainer>
  );
}
