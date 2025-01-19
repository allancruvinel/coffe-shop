import {
  DeliveryFormContainer,
  InputFormBairro,
  InputFormCep,
  InputFormCidade,
  InputFormComplemento,
  InputFormNumero,
  InputFormRua,
  InputFormUf,
  InputRow,
} from './styles';
import { MapPinLine } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes/default';
import { TitleCard } from '../../styles';
import { useFormContext } from 'react-hook-form';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';

export function DeliveryFormCard() {
  const { register } = useFormContext();
  const { deliveryInfo } = useContext(CartContext);

  return (
    <DeliveryFormContainer>
      <TitleCard>
        <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
        <div>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TitleCard>
      <form>
        <InputRow>
          <InputFormCep
            type="number"
            {...register('cep', {
              valueAsNumber: true,
              value: deliveryInfo.userDelivery?.cep,
            })}
            placeholder="CEP"
            id="cep"
          />
        </InputRow>
        <InputRow>
          <InputFormRua
            type="text"
            {...register('rua', { value: deliveryInfo.userDelivery?.rua })}
            placeholder="Rua"
            id=""
          />
        </InputRow>
        <InputRow>
          <InputFormNumero
            type="text"
            {...register('numero', {
              valueAsNumber: true,
              value: deliveryInfo.userDelivery?.numero,
            })}
            placeholder="Número"
            id=""
          />
          <InputFormComplemento
            type="text"
            {...register('complemento', {
              value: deliveryInfo.userDelivery?.complemento,
            })}
            placeholder="Complemento"
            id=""
          />
        </InputRow>
        <InputRow>
          <InputFormBairro
            type="text"
            {...register('bairro', {
              value: deliveryInfo.userDelivery?.bairro,
            })}
            placeholder="Bairro"
            id=""
          />
          <InputFormCidade
            type="text"
            {...register('cidade', {
              value: deliveryInfo.userDelivery?.cidade,
            })}
            placeholder="Cidade"
            id=""
          />
          <InputFormUf
            type="text"
            {...register('uf', { value: deliveryInfo.userDelivery?.uf })}
            placeholder="UF"
            id=""
          />
        </InputRow>
      </form>
    </DeliveryFormContainer>
  );
}
