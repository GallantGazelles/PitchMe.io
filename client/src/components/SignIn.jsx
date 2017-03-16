import React from 'react';

const SignIn = () => (
  <section>
    <div>
      Sign In
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="password" placeholder="Password" />
      <p>Forgot your password?</p>
      <div>Log in button</div>
      <input type="checkbox" name="Remember me" />
      <p>New to Pitchme? Sign up here!</p>
    </div>
  </section>
)

export default SignIn;