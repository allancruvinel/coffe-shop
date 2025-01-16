import { ThemeProvider } from 'styled-components';
import './App.css';
import { DefaultContainerLayout } from './layouts/DefaultLayout/styles';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <DefaultContainerLayout>
          {/* <Header /> */}
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </DefaultContainerLayout>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
