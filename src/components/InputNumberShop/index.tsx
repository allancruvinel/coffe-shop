import { Minus, Plus } from 'phosphor-react';
import { ProductCounter } from './styles';

export function InputNumberShop() {
  return (
    <ProductCounter>
      <Minus size={14} weight="fill" />
      <p>1</p>
      <Plus size={14} weight="fill" />
    </ProductCounter>
  );
}
