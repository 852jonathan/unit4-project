import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '@mui/material'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import GoogleIcon from '@mui/icons-material/Google'

import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'

import CompsModalsRegister from '@/components/modals/Register'
import theme from '@/styles/theme'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'amber'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'amber'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'amber'
    },
    '&:hover fieldset': {
      borderColor: 'amber'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'amber'
    }
  }
})

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <ThemeProvider theme={theme}>
    <Form>
      <Typography align="center" variant="h6" sx={{ mx: 2, mt: 2 }}>LOGIN</Typography>
      <Box sx={{ m: 2 }}>
        <Field
          id="email-input"
          label="Email"
          name="email"
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email ? errors.email : ''}
          as={CssTextField}
          fullWidth
        />
      </Box>

      <Box sx={{ m: 2 }}>
        <Field
          id="password"
          label="Password"
          name="password"
          type="password"
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password ? errors.password : ''}
          as={CssTextField}
          fullWidth
        />
      </Box>

      <Box textAlign="center" sx={{ m: 2 }}>
        <Button variant="contained" color="secondary" type="submit" disabled={isSubmitting}>Login</Button>
      </Box>
    </Form>
    <Divider />

    <Box sx={{ m: 2 }}>
      <Typography align="center" variant="subtitle1" sx={{ mx: 2, mt: 2 }}>Alternatively, Login with:</Typography>
    </Box>
    <Box textAlign="center" sx={{ m: 0 }}>
      <GoogleIcon fontSize="large" />
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
  password: yup.string('Enter your password').min(6, 'Minimum 6 characters').required('Password is required')
})

const FormsAuthLogin = ({ onSubmit }) => (
  <Formik
    initialValues={{
      email: '',
      password: ''
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
