import { Minus, Plus } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';
import { ProductCounter } from './styles';

export function InputNumberShop() {
  return (
    <ProductCounter>
      <Minus size={14} weight="fill" color={defaultTheme.purple} />
      <p>1</p>
      <Plus size={14} weight="fill" color={defaultTheme.purple} />
    </ProductCounter>
  );
}
