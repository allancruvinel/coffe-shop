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

export function DeliveryFormCard() {
  return (
    <DeliveryFormContainer>
      <TitleCard>
        <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
        <div>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TitleCard>
      <form action="">
        <InputRow>
          <InputFormCep type="text" name="" placeholder="CEP" id="" />
        </InputRow>
        <InputRow>
          <InputFormRua type="text" name="" placeholder="Rua" id="" />
        </InputRow>
        <InputRow>
          <InputFormNumero type="text" name="" placeholder="Número" id="" />
          <InputFormComplemento
            type="text"
            name=""
            placeholder="Complemento"
            id=""
          />
        </InputRow>
        <InputRow>
          <InputFormBairro type="text" name="" placeholder="Bairro" id="" />
          <InputFormCidade type="text" name="" placeholder="Cidade" id="" />
          <InputFormUf type="text" name="" placeholder="UF" id="" />
        </InputRow>
      </form>
    </DeliveryFormContainer>
  );
}
