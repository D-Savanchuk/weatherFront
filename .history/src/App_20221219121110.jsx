import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
      {isOpen && <MainModal /> }
    </div>
  );
}

export default App;
