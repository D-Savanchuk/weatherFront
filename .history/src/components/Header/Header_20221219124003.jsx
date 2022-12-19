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

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) { return; }

  //   dispatch(verificationRequest());
  // }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {HEADER_TEXT}
          </Typography>
          <>
              <Button className="login-button" type="button">{LOGIN_BUTTON_TEXT}</button>
              <Button type="button">{SIGNUP_BUTTON_TEXT}</button>
            </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
