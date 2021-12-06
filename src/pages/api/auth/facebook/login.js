// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'))

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/menu',
    failureRedirect: '/' })
)

passport.use(new FacebookStrategy(strategyOptions, verifyCallback))

+  app.get(`${process.env.BASE_API_URL}/auth/facebook`, passport.authenticate('facebook'))
+
+  app.get(
+    `${process.env.BASE_API_URL}/auth/facebook/callback`,
+    passport.authenticate('facebook', { failureRedirect: '/' }),
+    (req, res) => {
+      return res
+        .status(200)
+        .cookie('jwt', signToken(req.user), {
+          httpOnly: true
+        })
+        .redirect('/menu')
+    }
+  )

  return app
}

export { strategy }
