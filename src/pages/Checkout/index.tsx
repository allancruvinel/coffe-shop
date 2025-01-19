import { useForm, FormProvider } from 'react-hook-form';
import { BillOrderCard } from './components/BillOrderCard';
import { DeliveryFormCard } from './components/DeliveryFormCard';
import { PaymentTypeCard } from './components/PaymentTypeCard';
import { CardLabel, CheckoutContainer } from './styles';
import { z } from 'zod';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function Checkout() {
  const methods = useForm();
  const navigate = useNavigate();
  const { deliveryInfo, addUserToDeliveryInfo } = useContext(CartContext);

  const DeliveryUser = z.object({
    bairro: z.string().nonempty('Precisa ser preenchido'),
    cidade: z.string().nonempty('Precisa ser preenchido'),
    complemento: z.string().optional(),
    rua: z.string().nonempty('Precisa ser preenchido'),
    cep: z
      .number({ message: 'precisa ser numérico' })
      .refine((value) => value.toString().length === 8, {
        message: 'CEP precisa ter exatamente 8 dígitos',
      }),
    numero: z.number({ message: 'precisa ser numérico' }),
    uf: z
      .string()
      .length(2, 'UF inválida precisa ter 2 dígitos')
      .toUpperCase()
      .nonempty('Precisa ser preenchido'),
  });

  type User = z.infer<typeof DeliveryUser>;

  function handleRegisterUser(data: User) {
    console.log('data', data);
    try {
      const validUser = DeliveryUser.parse(data);
      addUserToDeliveryInfo(validUser);
      if (deliveryInfo.paymentType == null) {
        alert('Selecione uma forma de pagamento');
        return;
      }
      if (deliveryInfo.cart.orders.length == 0) {
        alert('Carrinho vazio, por favor adicione os items desejados');
        return;
      }
      navigate('/success');
    } catch (error: any) {
      console.log('error', error.errors);
      var mensagemDeErro =
        'Campos inválidos por favor corrija os campos abaixo \n\n';
      error.errors.map((er: any) => {
        console.log('er', er);
        mensagemDeErro += `campo '${er.path[0]}' : ${er.message}.\n`;
      });
      alert(mensagemDeErro);
    }
  }

  return (
    <CheckoutContainer>
      <FormProvider {...methods}>
        <div>
          <CardLabel>Complete seu pedido</CardLabel>
          <DeliveryFormCard />
          <PaymentTypeCard />
        </div>
        <div>
          <CardLabel>Cafés selecionados</CardLabel>
          <BillOrderCard submitRegister={handleRegisterUser} />
        </div>
      </FormProvider>
    </CheckoutContainer>
  );
}
