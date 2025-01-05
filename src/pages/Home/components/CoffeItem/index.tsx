import { ShoppingCart } from 'phosphor-react';
import { IconItem } from '../../styles';
import {
  Actions,
  AddToShoppingCart,
  Categories,
  CoffeItemImage,
  CoffeItemStyle,
  Description,
  Price,
  ProductCounter,
  ProductFooter,
  Title,
} from './styles';
import { defaultTheme } from '../../../../styles/themes/default';
import CoffeImage from '../../../../assets/Coffee.svg';
import { Category } from './components/Category';
import { Minus, Plus } from 'phosphor-react';

export const CoffeItem = () => {
  return (
    <CoffeItemStyle>
      <CoffeItemImage>
        <img src={CoffeImage} alt="" />
      </CoffeItemImage>
      <Categories>
        <Category />
        <Category />
      </Categories>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <ProductFooter>
        <Price>
          <p>R$</p>
          <p>9,90</p>
        </Price>
        <Actions>
          <ProductCounter>
            <Minus size={14} weight="fill" color={defaultTheme.purple} />
            <p>1</p>
            <Plus size={14} weight="fill" color={defaultTheme.purple} />
          </ProductCounter>
          <IconItem variant={'yellow-dark'}>
            <AddToShoppingCart>
              <ShoppingCart
                size={16}
                weight="fill"
                color={defaultTheme.white}
              />
            </AddToShoppingCart>
          </IconItem>
        </Actions>
      </ProductFooter>
    </CoffeItemStyle>
  );
};
