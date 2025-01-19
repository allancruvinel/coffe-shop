import styled from 'styled-components';
import { CardBaseContainer } from '../../styles';

export const PaymentTypeCardContainer = styled(CardBaseContainer)`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 580px) {
    flex-direction: column;
    align-items: center;
  }
`;

interface PaymentOptionProps {
  isSelected: boolean;
}
export const PaymentOption = styled.button<PaymentOptionProps>`
  display: flex;
  outline: none;
  border: none;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: 178.67px;
  height: 51px;
  padding-left: 16px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  outline: none;
  border: 1px solid transparent;
  p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'roboto';
    font-size: 12px;
    line-height: 160%;
  }
  ${(props) =>
    props.isSelected &&
    `
      outline: none;
      border: 1px solid ${props.theme.purple};
      background-color: ${props.theme['purple-light']};
    `}

  @media (max-width: 580px) {
    width: 100%;
  }
`;
