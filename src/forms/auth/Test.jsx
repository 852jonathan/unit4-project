import React from 'react'

import { useFormik } from 'formik'
import * as yup from 'yup'

import { ThemeProvider, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import GoogleIcon from '@mui/icons-material/Google'

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

const validationSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required')
})

const FormsAuthLogin = ({ onSubmit }) => {
  const {
    values, errors, touched,
    isSubmitting,
    handleSubmit, handleChange, handleBlur
  } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit
  })

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Typography align="center" variant="h6" sx={{ mx: 2, mt: 2 }}>LOGIN</Typography>
        <Box sx={{ m: 2 }}>
          <CssTextField
            id="email-input"
            label="Email"
            name="email"
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email ? errors.email : ''}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </Box>

        <Box sx={{ m: 2 }}>
          <CssTextField
            id="password-input"
            label="Password"
            name="password"
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password ? errors.password : ''}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </Box>

        <Box sx={{ m: 2 }}>
          <Button variant="contained" color="secondary" type="submit" disabled={isSubmitting}>Login</Button>
        </Box>
      </form>

      <Box sx={{ m: 2 }}>
        <Typography align="center" variant="subtitle1" sx={{ mx: 2, mt: 2 }}>Alternatively, Login with:</Typography>
      </Box>
      <Box width="10vw" sx={{ m: 2 }}>
        <GoogleIcon fontSize="large" sx={{ mx: 'auto' }} />
      </Box>

      <CompsModalsRegister />
    </ThemeProvider>
  )
}

export default FormsAuthLogin
