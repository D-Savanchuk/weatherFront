import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

import { Button, Alert } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { authRequest } from '../../../redux/actions/auth';
import {
  signupSchema,
  loginSchema,
  LOGIN_HEAD,
  PASSWORD_HEAD,
  EMAIL_HEAD,
  SUBMIT_BUTTON_TEXT,
} from '../constants';

import './AuthForm.css';

function AuthForm({ modalType }) {
  const isRegister = modalType === 'signUp';
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const submitUser = (data) => {
    dispatch(authRequest(data));
  };
  const theme = createTheme();

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      submitUser({
        email: data.get('email'),
        login: data.get('login'),
        password: data.get('password'),
      })
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="login"
                    required
                    fullWidth
                    id="login"
                    label="Login"
                    autoFocus
                  />
                </Grid>
                {isRegister && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>)}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              {error && <Alert severity="error">{error}</Alert>}
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
AuthForm.propTypes = {
  modalType: PropTypes.string.isRequired,
};

export default memo(AuthForm);








