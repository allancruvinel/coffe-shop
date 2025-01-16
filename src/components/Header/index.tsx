import {
  ActionsField,
  HeaderContainer,
  LocationField,
  ShoppingCartButton,
} from './styles';
import Logo from '../../assets/Logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const Header = () => {
  const { deliveryInfo } = useContext(CartContext);

  const cartItemQuantity = deliveryInfo.cart.orders.length;
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <nav>
        <ActionsField>
          <Link to="/success">
            <LocationField>
              <MapPin size={24} color={defaultTheme['purple']} weight="fill" />
              <p>Porto Alegre, RS</p>
            </LocationField>
          </Link>
          <Link to="/checkout">
            <ShoppingCartButton>
              <p>{cartItemQuantity}</p>
              <ShoppingCart
                size={24}
                weight="fill"
                color={defaultTheme['yellow-dark']}
              />
            </ShoppingCartButton>
          </Link>
        </ActionsField>
      </nav>
    </HeaderContainer>
  );
};
