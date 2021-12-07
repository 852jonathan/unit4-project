import passport from 'passport'
import LocalStrategy from 'passport-local'
import FacebookStrategy from 'passport-facebook'
import bcrypt from 'bcrypt'

import { User } from '@/db/models'

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
}, async (email, password, done) => {
  const user = await User.findOne({ where: { email, registrationType: 'email' } })

  if (!user) return done(null, false, { message: 'User Not Found' })
  if (!await bcrypt.compare(password, user.passwordHash)) return done(null, false, { message: 'Incorrect Password' })

  return done(null, user)
}))

passport.use(new FacebookStrategy.Strategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
  const [user] = await User.findOrCreate({
    where: {
      name: profile.name.givenName || null,
      socialUserId: profile.id,
      registrationType: 'facebook',
      email: profile.email || null
    },
    defaults: {
      name: profile.displayName
    }
  })
  done(null, user)
}))

export default passport
