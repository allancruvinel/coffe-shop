import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
}

body,input,textarea,button{
     font-family: 'Baloo 2', 'Roboto Mono', sans-serif;
}
:focus{
    outline: 0;
}

body {
  overflow-y: scroll; 
}
`;

export const ShoppingCartBase = styled.div`
  background-color: ${(props) => props.theme['yellow-light']};
  height: 38px;
  width: 38px;
  min-width: 38px;
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: relative;
`;
