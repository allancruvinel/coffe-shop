import { ActionsField, HeaderContainer, LocationField } from "./styles";
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
          <ShoppingCart />
        </ActionsField>
      </nav>
    </HeaderContainer>
  );
};
