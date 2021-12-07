import nc from 'next-connect'
import apiAuthFacebookLogin from '@/api/controllers/auth/facebook/login'

export default nc()
  .get(apiAuthFacebookLogin)
