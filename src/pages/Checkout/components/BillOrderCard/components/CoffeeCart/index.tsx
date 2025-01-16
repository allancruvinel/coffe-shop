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
import { InputNumberShop } from '../../../../../../components/InputNumberShop';
import { defaultTheme } from '../../../../../../styles/themes/default';
import { Order } from '../../../../../../context/CartContext';

export function CoffeeCart({ order }: { order: Order }) {
  return (
    <CoffeeCartContainer>
      <Info>
        <CoffeItemImage
          src={`/assets/CoffeeImages/${order.product.image_src}`}
          alt=""
        />
        <Details>
          <Title>{order.product.name}</Title>
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
