import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Backdrop,
  Box,
  Modal,
  Fade,
  CssBaseline,
  Container,
  Button,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AuthForm from './AuthForm/AuthForm';
import AddNewsForm from './AddNewsForm/AddNewsForm';
import { sxStyle } from './constants';

import { toggleModal } from '../../redux/actions/modal';

import './MainModal.css';

const theme = createTheme();
function MainModal() {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleModal(false));
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box className="modal-box" sx={sxStyle}>
          <Button className="exit-button" onClick={handleClose} variant="outlined" color="error">X</Button>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
                : <AuthForm modalType={modalType} />}
            </Container>
          </ThemeProvider>
        </Box>
      </Fade>
    </Modal>
  );
}
export default memo(MainModal);
