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

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <nav>
        <ActionsField>
          <LocationField>
            <MapPin size={24} color={defaultTheme['purple']} weight="fill" />
            <p>Porto Alegre, RS</p>
          </LocationField>
          <Link to="/checkout">
            <ShoppingCartButton>
              <p>3</p>
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
