import { ThemeProvider } from "styled-components";
import "./App.css";
import { DefaultContainerLayout } from "./layouts/DefaultLayout/styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultContainerLayout>
        <Home />
        <GlobalStyle />
      </DefaultContainerLayout>
    </ThemeProvider>
  );
}

export default App;
