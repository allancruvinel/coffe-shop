import { useState } from 'react';
import { CoffeItem } from '../CoffeItem';
import { CoffeListStyle, List } from './styles';

export interface CoffeeProduct {
  name: string;
  description: string;
  price: number;
  categories: CoffeeCategoryEnum[];
  image_src: string;
}

export interface Order {
  product: CoffeeProduct;
  quantity: number;
}

export interface Cart {
  orders: Order[];
}

export interface DeliveryInfo {
  cart: Cart;
  userDelivery: any;
}

export enum CoffeeCategoryEnum {
  TRADICIONAL = 'TRADICIONAL',
  COM_LEITE = 'COM LEITE',
  ESPECIAL = 'ESPECIAL',
  ALCOOLICO = 'ALCOÓLICO',
  GELADO = 'GELADO',
}

export const CoffeList = () => {
  const coffeeList: CoffeeProduct[] = [
    {
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image_src: 'Coffee.svg',
      categories: [
        CoffeeCategoryEnum.TRADICIONAL,
        CoffeeCategoryEnum.COM_LEITE,
      ],
    },
    {
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image_src: 'AmericanCoffee.png',
      categories: [CoffeeCategoryEnum.TRADICIONAL],
    },
    {
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image_src: 'AmericanCoffee.png',
      categories: [CoffeeCategoryEnum.TRADICIONAL],
    },
    {
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image_src: 'WithMilkCoffee.png',
      categories: [
        CoffeeCategoryEnum.TRADICIONAL,
        CoffeeCategoryEnum.COM_LEITE,
      ],
    },
    {
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image_src: 'LatteCoffee.png',
      categories: [
        CoffeeCategoryEnum.TRADICIONAL,
        CoffeeCategoryEnum.COM_LEITE,
      ],
    },
  ];
  return (
    <CoffeListStyle>
      <h1>Nossos Cafés</h1>
      <List>
        {coffeeList.map((coffee) => (
          <CoffeItem coffeeProduct={coffee} />
        ))}
      </List>
    </CoffeListStyle>
  );
};
