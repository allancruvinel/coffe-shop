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
import { Category } from './components/Category';
import { Minus, Plus } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CoffeeProduct, Order } from '../CoffeList';
import { CartContext } from '../../../../context/CartContext';

interface CoffeItemProps {
  coffeeProduct: CoffeeProduct;
}

export const CoffeItem = ({ coffeeProduct }: CoffeItemProps) => {
  const [coffeeCounter, setCoffeeCounter] = useState(0);
  const { addItemsToCart } = useContext(CartContext);
  const increaseCounter = () => {
    setCoffeeCounter(coffeeCounter + 1);
  };
  const decreaseCounter = () => {
    coffeeCounter > 0 && setCoffeeCounter(coffeeCounter - 1);
  };

  const insertOrder = () => {
    const order: Order = {
      product: coffeeProduct,
      quantity: coffeeCounter,
    };
    addItemsToCart(order);
  };

  return (
    <CoffeItemStyle>
      <CoffeItemImage>
        <img src={`assets/CoffeeImages/${coffeeProduct.image_src}`} alt="" />
      </CoffeItemImage>
      <Categories>
        {coffeeProduct.categories.map((category) => (
          <Category categoryName={category} />
        ))}
      </Categories>
      <Title>{coffeeProduct.name}</Title>
      <Description>{coffeeProduct.description}</Description>
      <ProductFooter>
        <Price>
          <p>R$</p>
          <p>
            {coffeeProduct.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </p>
        </Price>
        <Actions>
          <ProductCounter>
            <Minus size={14} onClick={decreaseCounter} weight="fill" />
            <p>{coffeeCounter}</p>
            <Plus size={14} onClick={increaseCounter} weight="fill" />
          </ProductCounter>
          <IconItem variant={'yellow-dark'}>
            <AddToShoppingCart>
              <ShoppingCart
                size={16}
                weight="fill"
                color={defaultTheme.white}
                onClick={insertOrder}
              />
            </AddToShoppingCart>
          </IconItem>
        </Actions>
      </ProductFooter>
    </CoffeItemStyle>
  );
};
