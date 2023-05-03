import { ThemeProvider } from "styled-components";
import Main from "./pages/Main";
import { GlobalStyle } from "./styles/globalStyles";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
