import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Header title="Sistema Solar" />
      <SolarSystem />
    </ThemeProvider>
  );
}

export default App;
