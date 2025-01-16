import { CoffeItem } from '../CoffeItem';
import { CoffeListStyle, List } from './styles';

export interface CoffeeProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  categories: CoffeeCategoryEnum[];
  image_src: string;
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
      id: 1,
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
      id: 2,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image_src: 'AmericanCoffee.png',
      categories: [CoffeeCategoryEnum.TRADICIONAL],
    },
    {
      id: 3,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image_src: 'AmericanCoffee.png',
      categories: [CoffeeCategoryEnum.TRADICIONAL],
    },
    {
      id: 4,
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
      id: 5,
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
          <CoffeItem key={coffee.id} coffeeProduct={coffee} />
        ))}
      </List>
    </CoffeListStyle>
  );
};
