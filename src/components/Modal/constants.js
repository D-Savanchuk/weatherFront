import * as Yup from 'yup';

const body = {
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
};

export const signupSchema = Yup.object().shape({
  ...body,
  email: Yup.string().email('Invalid email').required('Required'),
});
export const loginSchema = Yup.object().shape({ ...body });

export const sxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const LOGIN_HEAD = 'login';
export const PASSWORD_HEAD = 'password';
export const EMAIL_HEAD = 'email';
export const SUBMIT_BUTTON_TEXT = 'Submit';
