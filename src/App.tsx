import { GlobalStyle } from "./styles/global";
import { Header } from './components/header/index';
import { Dashboard } from './components/Dashboard/index';
import { TransitionsTable } from './components/TransitionsTable/index';

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <TransitionsTable/>
      <GlobalStyle />
    </div>
  );
}




