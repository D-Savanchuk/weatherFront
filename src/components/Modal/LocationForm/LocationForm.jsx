import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { Button} from '@mui/material';

import { autoLocate } from '../../../redux/actions/map';
import { toggleModal, changeModalType } from '../../../redux/actions/modal';


function LocationForm() {
  const dispatch = useDispatch();
  const openModal = (type) => {
    dispatch(toggleModal(true));
    dispatch(changeModalType(type));
    console.log('OPEN');
  };
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        marginTop: '56px',
    }}>
        <Button variant="contained" onClick={()=>{console.log('click 1'); dispatch(autoLocate('auto')); dispatch(toggleModal(false)); openModal('weather')}}>Определить местоположение</Button>
        <Button variant="contained" onClick={()=>{console.log('click 2'); dispatch(autoLocate('manual')); dispatch(toggleModal(false))}}>Задать местоположение</Button>
      </div>
    );
  }

export default memo(LocationForm);








