import React from 'react';

import Header from './components/Header/Header';

import './App.css';

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div className="app">
      <Header></Header>
      <div className='app__main-container'>

      </div>
    </div>
  );
}

export default App;
