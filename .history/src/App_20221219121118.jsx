import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
