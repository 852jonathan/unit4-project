import passport from 'passport'
import FacebookStrategy from 'passport-facebook'

import { User } from '@/db/models'

passportFacebook.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "https://mahaburger-fswdi.herokuapp.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

export default passportFacebook
