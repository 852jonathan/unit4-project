import nextConnect from 'next-connect'

import passport from '@/api/helpers/passport'

const apiAuthFacebookLogin = (req, res, next) => {
  const { query: { returnTo } } = req
  const state = Buffer.from(JSON.stringify({ returnTo: returnTo || '/' })).toString('base64')

  return passport.authenticate('facebook', { scope: [], state })(req, res, next)
}

export default nextConnect()
  .use(passport.initialize())
  .use(apiAuthFacebookLogin)
