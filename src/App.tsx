import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Header title="Sistema Solar" />
    </ThemeProvider>
  );
}

export default App;
