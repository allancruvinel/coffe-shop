import styled from 'styled-components';
import { IconItemProps } from '../../@types/styled';
import { ShoppingCartBase } from '../../styles/global';
export const HomeStyle = styled.div``;

export const Intro = styled.div`
  display: flex;
  padding: 6.063rem 0;
  justify-content: space-between;
  background-size: auto;
  background-position: center;

  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  }
  @media (max-width: 580px) {
    padding: 2.063rem 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.75rem;
  gap: 16px;
  h1 {
    font-size: 48px;
    font-weight: 800px;
    line-height: 130%;
    letter-spacing: 0%;
  }
  p {
    font-family: 'roboto', sans-serif;
    font-size: 20px;
  }
  @media (max-width: 580px) {
    width: 22.75rem;
    gap: 16px;
    h1 {
      font-size: 25px;
    }
  }
`;

export const Items = styled.div`
  margin-top: 66px;
  display: grid;

  grid-template-columns: 231px 294px;
  row-gap: 20px;
  column-gap: 20px;
  @media (max-width: 580px) {
    grid-template-columns: 150px 190px;
    justify-content: center;
  }
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  p {
    font-family: 'roboto';
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const IconItem = styled(ShoppingCartBase)<IconItemProps>`
  background-color: ${(props) =>
    props.theme[props.variant ? props.variant : 'white']};
  height: 32px;
  width: 32px;
  border-radius: 5000px;
`;

export const IconItem2 = styled(IconItem)`
  background-color: ${(props) => props.theme['base-text']};
`;
export const IconItem3 = styled(IconItem)`
  background-color: ${(props) => props.theme.yellow};
`;
export const IconItem4 = styled(IconItem)`
  background-color: ${(props) => props.theme.purple};
`;

export const LogoGrande = styled.div`
  width: 29.75rem;
  height: 22.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 580px) {
    width: 100%;
    height: 100%;
  }
`;
