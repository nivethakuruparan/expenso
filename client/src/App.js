import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Header />
      <div className="top-container">
        <Balance />
        <IncomeExpenses />
      </div>
      <AddTransaction />
      <TransactionList />
    </GlobalProvider>
  );
}

export default App;
