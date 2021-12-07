import nc from 'next-connect'

import session from '@/api/helpers/session'
import passportFacebook from '@/api/helpers/passport-facebook'

const authEmailLogin = async (req, res, next) => {

passportFacebook.get('/auth/facebook', passportFacebook.authenticate('facebook'))

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
passportFacebook.get(
  '/auth/facebook/callback',
  passportFacebook.authenticate('facebook', {
    successRedirect: '/menu',
    failureRedirect: '/' })
)
req.session.set('token', token)
await req.session.save()

return res.status(200).json({ user })
}(req, res, next)
}

export default nc()
  .use(session)
  .use(passportFacebook.initialize())
  .use(passportFacebook.session())
  .use(authEmailLogin)
