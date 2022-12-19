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

  return (
    // <>
    //   <p className="modal-type">{modalType}</p>
    //   <Formik
    //     initialValues={{
    //       login: '',
    //       password: '',
    //       email: '',
    //     }}
    //     validationSchema={isRegister ? signupSchema : loginSchema}
    //     onSubmit={(values) => submitUser(values)}
    //   >
    //     {({ errors, touched }) => (
    //       <Form>
    //         <p className="input-name">{LOGIN_HEAD}</p>
    //         <Field name="login" />
    //         {errors.login && touched.login && (
    //           <div>{errors.login}</div>
    //         )}
    //         <p className="input-name">{PASSWORD_HEAD}</p>
    //         <Field type="password" name="password" />
    //         {errors.password && touched.password && (
    //           <div>{errors.password}</div>
    //         )}
    //         {isRegister && (
    //         <>
    //           <p className="input-name">{EMAIL_HEAD}</p>
    //           <Field name="email" type="email" />
    //           {errors.email && touched.email && <div>{errors.email}</div>}
    //         </>
    //         )}
    //         <div>
    //           <Button className="submit-btn" variant="contained" type="submit">{SUBMIT_BUTTON_TEXT}</Button>
    //         </div>
    //         {error && <Alert severity="error">{error}</Alert>}
    //       </Form>
    //     )}
    //   </Formik>
    // </>
    <>
      <p className="modal-type">{modalType}</p>
      <Formik
        initialValues={{
          login: '',
          password: '',
          email: '',
        }}
        validationSchema={isRegister ? signupSchema : loginSchema}
        onSubmit={(values) => submitUser(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <p className="input-name">{LOGIN_HEAD}</p>
            <Field name="login" />
            {errors.login && touched.login && (
              <div>{errors.login}</div>
            )}
            <p className="input-name">{PASSWORD_HEAD}</p>
            <Field type="password" name="password" />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
            {isRegister && (
            <>
              <p className="input-name">{EMAIL_HEAD}</p>
              <Field name="email" type="email" />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </>
            )}
            <div>
              <Button className="submit-btn" variant="contained" type="submit">{SUBMIT_BUTTON_TEXT}</Button>
            </div>
            {error && <Alert severity="error">{error}</Alert>}
          </Form>
        )}
      </Formik>
    </>
  );
}
AuthForm.propTypes = {
  modalType: PropTypes.string.isRequired,
};

export default memo(AuthForm);








