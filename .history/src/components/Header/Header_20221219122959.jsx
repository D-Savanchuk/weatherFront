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

// import { authLogOut, verificationRequest } from '../../redux/actions/auth';

import {
  LOGIN_BUTTON_TEXT,
  SIGNUP_BUTTON_TEXT,
  LOGOUT_BUTTON_TEXT,
  MENU_BUTTON_TEXT,
  HEADER_TEXT,
} from './constants';

import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const {
    isLoggedIn,
    user: { login, id },
  } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const navigateMenu = () => {
    navigate('/');
  };

  // const logOut = () => {
  //   dispatch(authLogOut());
  //   navigateMenu();
  // };

  useEffect(() => {
    if (!localStorage.getItem('token')) { return; }

    dispatch(verificationRequest());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={navigateMenu} variant="text" sx={{ color: 'white' }}>
            {MENU_BUTTON_TEXT}
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {HEADER_TEXT}
          </Typography>
          {!isLoggedIn && (
            <>
              <button className="login-button" type="button">{LOGIN_BUTTON_TEXT}</button>
              <button type="button">{SIGNUP_BUTTON_TEXT}</button>
            </>
          )}
          {isLoggedIn && (
            <>
              <Button className="login-button" variant="text" sx={{ color: 'white' }} onClick={logOut}>{LOGOUT_BUTTON_TEXT}</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
