import nextConnect from 'next-connect'
import crypto from 'crypto'

import session from '@/api/helpers/session'
import passport from '@/api/helpers/passport'

const apiAuthFacebookCallbackAuthenticate = (req, res, next) => {
  passport.authenticate('facebook', async (err, user) => {
    if (err) return res.status(500).end(err.toString())

    const token = crypto.randomBytes(64).toString('hex')
    await user.createAuthenticityToken({ token })

    req.session.set('token', token)
    await req.session.save()

    return next()
  })(req, res, next)
}

const apiAuthFacebookCallbackRedirect = (req, res) => {
  const { state } = req.query
  const { returnTo } = JSON.parse(Buffer.from(state, 'base64').toString())

  return res.redirect(returnTo)
}

export default nextConnect()
  .use(session)
  .use(passport.initialize())
  .use(apiAuthFacebookCallbackAuthenticate)
  .use(apiAuthFacebookCallbackRedirect)
