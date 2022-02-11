import { GlobalStyle } from "./styles/global";
import { Header } from './components/header/index';
import { Dashboard } from './components/Dashboard/index';
import { TransactionsTable } from './components/TransitionsTable/index';
import { NewTransactionModal } from './components/NewTransactionModal/index';
import {TransactionsProvider} from './hooks/useTransactions';

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
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransitionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransitionModalOpen}
          onRequestClose={handleCloseNewTransitionModal}
        />
        <TransactionsTable />
        <GlobalStyle />
      </TransactionsProvider>
    </div>
  );
}




