import nc from 'next-connect'
import apiAuthFacebookCallback from '@/api/controllers/auth/facebook/callback'

export default nc()
  .get(apiAuthFacebookCallback)
