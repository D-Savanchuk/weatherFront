import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import { forecastRequest } from './redux/actions/weather';
import { toggleModal, changeModalType } from './redux/actions/modal';

import { toggleMap } from './redux/actions/map';

import Header from './components/Header/Header';
import MainModal from './components/Modal/MainModal';
import Map from './components/Map/Map';

import './App.css';

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { isShowing, locating } = useSelector((state) => state.map);
  console.log('is', isShowing);
  const [coord, setCoords] = useState(null);
  const dispatch = useDispatch();
  let cords;
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
    cords =  {
        lat: crd.latitude,
        lng: crd.longitude,
    }

    console.log('nav ', cords);
  };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    useEffect(()=> navigator.geolocation.getCurrentPosition((position)=>{
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,

      })
      dispatch(forecastRequest({url: `api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=8ac1ba9aaa7ab31874c9b9683d9ee2dc`}));
    }), []);
    console.log('coord', coord);
    console.log('isShowing', isShowing, 'locating', locating, 'isopen', isOpen);

  return (
    <div className="app">
      <Header></Header>
      <div className='app__main-container'>
      {!isShowing &&
        <div style={{height:'100%'}}>
          <img style={{height:'100vh', width:'100vw', position:'absolute'}} src="https://wallpaperaccess.com/full/2548049.jpg" alt="" />
          <Button className='main-button' variant="contained" onClick={()=>{ dispatch(toggleMap(true));}}>Узнать погоду</Button>
        </div>}
      {isShowing && locating=='auto' && <Map location={coord}></Map>}
      {isShowing && locating=='manual' && <Map></Map>}
      {isShowing && !isOpen && locating=='' && <Map></Map>}
      {isOpen && <MainModal /> }
      </div>
    </div>
  );
}

export default App;
