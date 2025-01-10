import styled from 'styled-components';
import { CardBaseContainer } from '../../styles';

export const DeliveryFormContainer = styled(CardBaseContainer)`
  form {
    margin-top: 40px;
    display: grid;
    row-gap: 16px;
  }
`;

export const InputFormBase = styled.input`
  height: 42px;
  padding: 12px;

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  font-family: 'roboto';
  font-size: 14px;
  &:focus {
    outline: 0;
    border: 1px solid ${(props) => props.theme.yellow};
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const InputFormCep = styled(InputFormBase)`
  width: calc(40% - 16px / 2);
`;

export const InputFormRua = styled(InputFormBase)`
  width: 100%;
`;

export const InputFormNumero = styled(InputFormBase)`
  width: calc(40% - 16px / 2);
`;
export const InputFormComplemento = styled(InputFormBase)`
  width: calc(60% - 16px / 2);
`;

export const InputFormBairro = styled(InputFormBase)`
  width: calc(40% - 1rem / 3);
`;
export const InputFormCidade = styled(InputFormBase)`
  width: calc(49% - 1rem / 3);
`;
export const InputFormUf = styled(InputFormBase)`
  width: calc(9% - 1rem / 3);
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
`;
