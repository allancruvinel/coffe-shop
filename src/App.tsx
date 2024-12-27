import { ThemeProvider } from "styled-components";
import "./App.css";
import { DefaultContainerLayout } from "./layouts/DefaultLayout/styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultContainerLayout>
        <Header />
        <GlobalStyle />
      </DefaultContainerLayout>
    </ThemeProvider>
  );
}

export default App;
