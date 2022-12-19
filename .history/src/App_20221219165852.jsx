import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import MainModal from './components/Modal/MainModal';

import './App.css';

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
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
