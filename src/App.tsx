import { GlobalStyle } from "./styles/global";
import { Header } from './components/header/index';
import { Dashboard } from './components/Dashboard/index';
import { TransitionsTable } './components/TransitionsTable/index';

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <TransitionsTable></TransitionsTable>
      <GlobalStyle />
    </div>
  );
}




