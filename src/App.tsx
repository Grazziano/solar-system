import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Header title="Sistema Solar" />
      <SolarSystem />
      <Missions />
    </ThemeProvider>
  );
}

export default App;
