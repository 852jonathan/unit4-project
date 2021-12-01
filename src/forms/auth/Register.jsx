import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '@mui/material'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'

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
      <Typography align="center" variant="h6" sx={{ mx: 2 }}>REGISTER AN ACCOUNT</Typography>
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
          id="password-input"
          label="Password"
          name="password"
          type="password"
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password ? errors.password : ''}
          as={CssTextField}
          fullWidth
        />
      </Box>

      <Box sx={{ m: 2 }}>
        <Field
          id="passwordConfirmation-input"
          label="Password Confirmation"
          name="passwordConfirmation"
          type="password"
          error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
          helperText={touched.passwordConfirmation && errors.passwordConfirmation ? errors.passwordConfirmation : ''}
          as={CssTextField}
          fullWidth
        />
      </Box>

      <Box textAlign="center" sx={{ m: 2, mt: 3 }}>
        <Button variant="contained" color="secondary" type="submit" disabled={isSubmitting}>Register</Button>
      </Box>
    </Form>
  </ThemeProvider>

)

RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const authSignupSchema = yup.object().shape({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup.string('Enter your password').min(6, 'Minimum 6 characters').required('Password is required'),
  passwordConfirmation: yup.string().when('password', {
    is: (val) => (!!(val && val.length > 0)),
    then: yup.string().oneOf(
      [yup.ref('password')],
      'Both passwords need to be the same.'
    )
  })
})

const FormsAuthSignup = ({ onSubmit }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      passwordConfirmation: ''
    }}
    validationSchema={authSignupSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)

FormsAuthSignup.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormsAuthSignup
