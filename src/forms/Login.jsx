import React from 'react'

import { ThemeProvider } from '@mui/material'
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';

import theme from '@/assets/theme'
import CompsModalsRegister from '@/components/modals/Register'

import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useFormik } from 'formik';
import * as yup from 'yup'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'amber',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'amber',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'amber',
    },
    '&:hover fieldset': {
      borderColor: 'amber',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'amber',
    },
  },
});


const RenderForm = ({ errors, touched, isSubmitting }) => (

  <ThemeProvider theme={theme}>
  <Form>
    <Typography align="center" variant="h6"  sx={{ mx: 2, mt: 2 }}>LOGIN</Typography>
    <Box sx={{ m: 2 }}>
    <CssTextField id="email-input" label="Email" name="email" error={touched.email && Boolean(errors.email)}/>
      {/* <Typography htmlFor="email">Email</Typography> */}
      {/* <Field
        id="email"
        className={`form-control ${(errors.email && touched.email ? ' is-invalid' : '')}`}
        name="email"
        type="text"
      /> */}
      <ErrorMessage component="div" name="email"/>
    </Box>

    <Box sx={{ m: 2 }}>
    <CssTextField id="password-input" label="Password" name="passwordHash" error={touched.email && Boolean(errors.email)}/>

      {/* <Typography htmlFor="passwordHash">Password</Typography> */}
      {/* <Field
        id="passwordHash"
        className={`form-control ${(errors.passwordHash && touched.passwordHash ? ' is-invalid' : '')}`}
        name="passwordHash"
        type="password"
      /> */}
      <ErrorMessage component="div" name="passwordHash" />
    </Box>
    <Box sx={{ m: 2 }}>
    <Button variant="contained" color="secondary" type="submit" disabled={isSubmitting}>Login</Button>
    </Box>

  </Form>
  <Box sx={{ m: 2 }}>
  <Typography align="center" variant="subtitle1" sx={{ mx: 2, mt: 2 }}>Alternatively, Login with:</Typography>
  </Box>
  <Box width='10vw' sx={{ m: 2 }}>
  <GoogleIcon fontSize="large" sx={{ mx: 'auto' }}/>
  </Box>
  <CompsModalsRegister />
</ThemeProvider>

)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const authLoginSchema = yup.object().shape({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  passwordHash: yup.string('Enter your password').min(6, 'Password should be of minimum 8 characters length').required('Password is required')
})

const FormsAuthLogin = ({ onSubmit }) => (
  <Formik
    initialValues={{
      email: '',
      passwordHash: ''
    }}
    validationSchema={authLoginSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsAuthLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormsAuthLogin
