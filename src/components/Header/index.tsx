import {
  ActionsField,
  HeaderContainer,
  LocationField,
  ShoppingCartButton,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <ActionsField>
          <LocationField>
            <MapPin size={24} color={defaultTheme["purple"]} weight="fill" />
            <p>Porto Alegre, RS</p>
          </LocationField>
          <ShoppingCartButton>
            <p>3</p>
            <ShoppingCart
              size={24}
              weight="fill"
              color={defaultTheme["yellow-dark"]}
            />
          </ShoppingCartButton>
        </ActionsField>
      </nav>
    </HeaderContainer>
  );
};
