import { ShoppingCart } from "phosphor-react";
import { Header } from "../../components/Header";
import { ShoppingCartButton } from "../../components/Header/styles";
import {
  HomeStyle,
  IconItem,
  IconItem2,
  IconItem3,
  IconItem4,
  Intro,
  Item,
  Items,
  LogoGrande,
  Title,
} from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import LogoGigante from "../../assets/Imagem.svg";

export const Home = () => {
  return (
    <HomeStyle>
      <Header />
      <Intro>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </Title>
          <Items>
            <Item>
              <IconItem variant={"yellow-dark"}>
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={defaultTheme.white}
                />
              </IconItem>
              <p>Compra simples e segura</p>
            </Item>
            <Item>
              <IconItem2>
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={defaultTheme.white}
                />
              </IconItem2>
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item>
              <IconItem3 variant={"yellow-light"}>
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={defaultTheme.white}
                />
              </IconItem3>
              <p>Entrega rápida e rastreada</p>
            </Item>
            <Item>
              <IconItem4 variant={"yellow-light"}>
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={defaultTheme.white}
                />
              </IconItem4>
              <p>O café chega fresquinho até você</p>
            </Item>
          </Items>
        </div>
        <LogoGrande>
          <img src={LogoGigante} alt="" />
        </LogoGrande>
      </Intro>
    </HomeStyle>
  );
};
