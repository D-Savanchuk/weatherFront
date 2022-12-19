import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

import { toggleModal, changeModalType } from '../';
// import { authLogOut, verificationRequest } from '../../redux/actions/auth';

import {
  HEADER_TEXT,
  LOGIN_BUTTON_TEXT,
  SIGNUP_BUTTON_TEXT,
} from './constants';

import './Header.css';

function Header() {
  const dispatch = useDispatch();

  // const logOut = () => {
  //   dispatch(authLogOut());
  //   navigateMenu();
  // };
  const openModal = (type) => {
    dispatch(toggleModal(true));
    dispatch(changeModalType(type));
  };
  // useEffect(() => {
  //   if (!localStorage.getItem('token')) { return; }

  //   dispatch(verificationRequest());
  // }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'SandyBrown' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'Linen' }}>
            {HEADER_TEXT}
          </Typography>
          <>
              <Button variant="contained" sx={{ color: 'Linen', backgroundColor: 'Sienna' }} onClick={() => openModal('login')}>{LOGIN_BUTTON_TEXT}</Button>
              <Button variant="contained" sx={{ color: 'Linen', backgroundColor: 'Sienna' }} onClick={() => openModal('signUp')}>{SIGNUP_BUTTON_TEXT}</Button>
            </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
