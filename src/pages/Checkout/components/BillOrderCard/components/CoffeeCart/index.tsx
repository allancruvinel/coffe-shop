import { Minus, Plus, Trash } from 'phosphor-react';
import { Actions } from '../../../../../Home/components/CoffeItem/styles';
import {
  CoffeeCartContainer,
  CoffeItemImage,
  Details,
  Info,
  Price,
  ProductCounter,
  RemoveToShoppingCartButton,
  Title,
} from './styles';
import { defaultTheme } from '../../../../../../styles/themes/default';
import { CartContext, Order } from '../../../../../../context/CartContext';
import { useContext } from 'react';

export function CoffeeCart({ order }: { order: Order }) {
  const {
    removeItemsToCart,
    increaseCounterFromCartOrder,
    decreaseCounterFromCartOrder,
  } = useContext(CartContext);

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
            <ProductCounter>
              <Minus
                size={14}
                weight="fill"
                onClick={() => decreaseCounterFromCartOrder(order)}
              />
              <p>{order.quantity}</p>
              <Plus
                size={14}
                weight="fill"
                onClick={() => increaseCounterFromCartOrder(order)}
              />
            </ProductCounter>
            <RemoveToShoppingCartButton
              onClick={() => removeItemsToCart(order)}
            >
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
