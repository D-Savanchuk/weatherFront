import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button} from '@mui/material';

import { autoLocate } from '../../../redux/actions/map';
import { toggleModal } from '../../../redux/actions/modal';


function WeatherForm() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather.forecastData);
  console.log('data', data);
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        marginTop: '56px',
    }}>
        
        {data.weather[0].main && (<p>Weather: {data.weather[0].main} </p>)}
        {data.main.temp && (<p>Temperature: {data.main.temp} </p>)}
        {data.main.feels_like && (<p>Feels like: {data.main.feels_like} </p>)}
        {data.name && (<p>Name: {data.name} </p>)}
      </div>
    );
  }

export default memo(WeatherForm);








