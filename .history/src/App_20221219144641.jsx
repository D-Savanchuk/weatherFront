import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import MainModal from './components/Modal/MainModal';

import './App.css';

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div className="app">
      <Header></Header>
      <div className='app__main-container'>
      {isOpen && <MainModal /> }
      </div>
    </div>
  );
}

export default App;
