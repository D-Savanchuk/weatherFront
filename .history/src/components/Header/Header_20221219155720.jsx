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

import { toggleModal, changeModalType } from '../../redux/actions/modal';
// import { authLogOut, verificationRequest } from '../../redux/actions/auth';

import {
  HEADER_TEXT,
  LOGIN_BUTTON_TEXT,
  SIGNUP_BUTTON_TEXT,
} from './constants';

import './Header.css';

function Header() {
  const dispatch = useDispatch();

  const {
    isLoggedIn,
    user: { login, id },
  } = useSelector((state) => state.auth);
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
          {!isLoggedIn && (
          <>
              <Button variant="contained" sx={{ color: 'Linen', backgroundColor: 'Sienna' }} onClick={() => openModal('login')}>{LOGIN_BUTTON_TEXT}</Button>
              <Button variant="contained" sx={{ color: 'Linen', backgroundColor: 'Sienna' }} onClick={() => openModal('signUp')}>{SIGNUP_BUTTON_TEXT}</Button>
          </>
          )}
          {isLoggedIn && (
            <>
              <p className="user-login">{login}</p>
              <Typography lassName="user-login" variant="h6" component="div" sx={{ flexGrow: 1, color: 'Linen' }}>
                {login}
              </Typography>
              <Button className="login-button" variant="text" sx={{ color: 'white' }}>Log Out</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
