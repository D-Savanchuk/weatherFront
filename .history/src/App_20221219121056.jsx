import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import Header from './components/Header/Header';
import MainModal from './components/MainModal/MainModal';

import './App.css';

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users/:id" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
      {isOpen && <MainModal /> }
    </div>
  );
}

export default App;
