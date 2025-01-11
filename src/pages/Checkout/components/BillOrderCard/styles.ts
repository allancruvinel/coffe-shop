import styled from 'styled-components';
import { CardBaseContainer } from '../../styles';

export const BillOrderCardContainer = styled(CardBaseContainer)`
  border-radius: 6px 44px;
  width: 448px;
  @media (max-width: 580px) {
    width: 400px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme['base-button']};
  margin: 24px 0;
`;

export const BillPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const DemonstrativeCalc = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-family: 'roboto';
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
  p:last-child {
    font-size: 16px;
  }
`;
export const DemonstrativeTotal = styled(DemonstrativeCalc)`
  p {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
  p:last-child {
    font-size: 20px;
  }
`;
export const CommitOrderButton = styled.button`
  border: 0;
  width: 100%;
  height: 46px;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  font-family: 'roboto';
  font-weight: 14px;
  font-weight: bold;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  margin-top: 24px;
  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;
