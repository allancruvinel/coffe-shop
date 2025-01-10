import { BaseSubtitle } from '../../components/BaseSubtitle';
import {
  ConfirmationCard,
  Illustration,
  ImageLine,
  Info,
  Local,
  Payment,
  SuccessContainer,
  TextConfirmation,
  TextInformation,
  Time,
} from './styles';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';
import IllustrationsImage from '../../assets/Illustration.svg';

export const Success = () => {
  return (
    <SuccessContainer>
      <TextConfirmation>Uhu! Pedido confirmado</TextConfirmation>
      <BaseSubtitle>
        Agora é só aguardar que logo o café chegará até você
      </BaseSubtitle>
      <Info>
        <ConfirmationCard>
          <Local>
            <ImageLine backgroundColor={defaultTheme.purple}>
              <MapPin weight="fill" color={defaultTheme.white} size={16} />
            </ImageLine>
            <TextInformation>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </TextInformation>
          </Local>
          <Time>
            <ImageLine backgroundColor={defaultTheme.yellow}>
              <Timer weight="fill" color={defaultTheme.white} size={16} />
            </ImageLine>
            <TextInformation>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </TextInformation>
          </Time>
          <Payment>
            <ImageLine backgroundColor={defaultTheme['yellow-dark']}>
              <CurrencyDollar
                weight="fill"
                color={defaultTheme.white}
                size={16}
              />
            </ImageLine>
            <TextInformation>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min </strong>
              </p>
            </TextInformation>
          </Payment>
        </ConfirmationCard>
        <Illustration src={IllustrationsImage} />
      </Info>
    </SuccessContainer>
  );
};
