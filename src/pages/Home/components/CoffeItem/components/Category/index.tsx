import { CoffeeCategoryEnum } from '../../../CoffeList';
import { CategoryStyle } from './styles';

interface CategoryProps {
  categoryName: CoffeeCategoryEnum;
}

export const Category = (props: CategoryProps) => {
  return (
    <CategoryStyle>
      <p>{props.categoryName.toString()}</p>
    </CategoryStyle>
  );
};
