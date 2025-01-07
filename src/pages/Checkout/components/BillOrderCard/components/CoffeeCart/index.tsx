import { Trash } from 'phosphor-react';
import { Actions } from '../../../../../Home/components/CoffeItem/styles';
import {
  CoffeeCartContainer,
  CoffeItemImage,
  Details,
  Info,
  Price,
  RemoveToShoppingCartButton,
  Title,
} from './styles';
import CoffeImage from '../../../../../../assets/Coffee.svg';
import { InputNumberShop } from '../../../../../../components/InputNumberShop';
import { defaultTheme } from '../../../../../../styles/themes/default';

export function CoffeeCart() {
  return (
    <CoffeeCartContainer>
      <Info>
        <CoffeItemImage src={CoffeImage} alt="" />
        <Details>
          <Title>Expresso Tradicional</Title>
          <Actions>
            <InputNumberShop />
            <RemoveToShoppingCartButton>
              <Trash size={16} color={defaultTheme.purple} />
              <p>REMOVER</p>
            </RemoveToShoppingCartButton>
          </Actions>
        </Details>
      </Info>
      <Price>R$ 9.90</Price>
    </CoffeeCartContainer>
  );
}
