import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <Typography sx={{ p: 1, align: 'center'}}>Login</Typography>
    <Box className="form-group" sx={{ margin: 2 }}>
      <label htmlFor="email">Email</label>
      <Field
        id="email"
        className={`form-control ${(errors.email && touched.email ? ' is-invalid' : '')}`}
        name="email"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="email" />
    </Box>

    <Box className="form-group" sx={{ margin: 2 }}>
      <label htmlFor="passwordHash">Password</label>
      <Field
        id="passwordHash"
        className={`form-control ${(errors.passwordHash && touched.passwordHash ? ' is-invalid' : '')}`}
        name="passwordHash"
        type="password"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="passwordHash" />
    </Box>

    <Button className="btn btn-success" type="submit" disabled={isSubmitting}>Login</Button>
  </Form>
)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const authLoginSchema = yup.object().shape({
  email: yup.string().email().required('Required'),
  passwordHash: yup.string().min(6).required('Required')
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
