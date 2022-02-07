import { GlobalStyle } from "./styles/global";
import { Header } from './components/header/index';
import { Dashboard } from './components/Dashboard/index';
import { TransitionsTable } from './components/TransitionsTable/index';
import { NewTransactionModal } from './components/NewTransactionModal/index';

import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransitionModalOpen, setIsNewTransitionModalOpen] = useState(false);

  function handleOpenNewTransitionModal() {
    setIsNewTransitionModalOpen(true);
  }

  function handleCloseNewTransitionModal() {
    setIsNewTransitionModalOpen(false);
  }

  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransitionModal} />
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransitionModalOpen}
      onRequestClose={handleCloseNewTransitionModal}
      />
      <TransitionsTable />
      <GlobalStyle />
    </div>
  );
}




