import styled from 'styled-components';

export const SuccessContainer = styled.div``;
export const TextConfirmation = styled.div`
  margin-top: 80px;
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 800;
  font-size: 32px;
`;
export const ConfirmationCard = styled.div`
  min-width: 526px;
  padding: 40px;
  display: flex;
  flex-direction: column;

  gap: 32px;
  position: relative;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background: white;
  background-clip: padding-box;
  :after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    background: linear-gradient(
      to bottom right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    content: '';
    z-index: -1;
    border-radius: 6px 36px;
  }

  @media (max-width: 580px) {
    min-width: 390px;
  }
`;

export const Illustration = styled.img`
  width: 492px;
  height: 293px;
  @media (max-width: 580px) {
    width: 450px;
    height: 350px;
  }
`;

export const Info = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 580px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

interface ImageLineProps {
  variant: string;
}
export const ImageLine = styled.div<ImageLineProps>`
  background-color: ${(props) => props.variant};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5000000px;
`;
export const TextInformation = styled.div`
  font-family: 'roboto';
  font-size: 16px;
`;
export const Local = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Time = styled(Local)``;
export const Payment = styled(Local)``;
