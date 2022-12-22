import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import { toggleModal, changeModalType } from '../../redux/actions/modal';
import { forecastRequest, getForecast } from '../../redux/actions/weather';

import LocationPin from './LocationPin';

import './Map.css';

  function Map({ location }){ 
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state) => state.modal);
    const { locating } = useSelector((state) => state.map);
    const { forecast } = useSelector((state) => state.weather);
    const googleMap = useRef(null);
    console.log('crd: ', location);
    const openModal = (type) => {
        dispatch(toggleModal(true));
        dispatch(changeModalType(type));
        console.log('OPEN');
      };
        useEffect(()=>{if(locating == '')openModal('location')}, []);
      console.log('location', location);
    return(
    <div className="map"> 
      <div className="google-map">
      {!location && locating == 'manual' &&
        (<GoogleMapReact ref={googleMap}  onClick={ev => {
            console.log("latitide = ", ev);
            console.log("longitude = ", ev);
            dispatch(forecastRequest({url: `api.openweathermap.org/data/2.5/weather?lat=${ev.lat}&lon=${ev.lng}&units=metric&appid=8ac1ba9aaa7ab31874c9b9683d9ee2dc`}));
            console.log('FORECAST', forecast);
            // dispatch(getForecast(forecast));
            openModal('weather');
          }}          
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={{ lat: 37.49993477163865, lng: 22.603096115185963 }}
          defaultZoom={1}
        >         
        </GoogleMapReact>)}
        {location && locating == 'auto' &&
        (<GoogleMapReact onClick={ev => {
            console.log("latitide = ", ev);
            console.log("longitude = ", ev);
            dispatch(forecastRequest({url: `api.openweathermap.org/data/2.5/weather?lat=${ev.lat}&lon=${ev.lng}&units=metric&appid=8ac1ba9aaa7ab31874c9b9683d9ee2dc`}));
            openModal('weather');
          }}
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={{ lat: location.lat, lng: location.lng }}
          defaultZoom={17}
        >         
        </GoogleMapReact>)}
      </div>
    </div>
  )}
  
  {/* <LocationPin
    lat={location.lat}
    lng={location.lng}
  /> */}
  export default Map;