import { ThemeProvider } from 'styled-components';
import './App.css';
import { DefaultContainerLayout } from './layouts/DefaultLayout/styles';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Home } from './pages/Home';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultContainerLayout>
        {/* <Header /> */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </DefaultContainerLayout>
    </ThemeProvider>
  );
}

export default App;
