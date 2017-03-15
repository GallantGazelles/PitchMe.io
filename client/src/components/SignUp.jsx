import React from 'react';

const SignUp = () => (
  <section>
    <div>
      Sign Up
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="password" placeholder="Password" />
      <p>Forgot your password?</p>
      <div>Log in button</div>
      <input type="checkbox" name="Remember me" />
      <p>New to Pitchme? Sign up here!</p>
    </div>
  </section>
)

export default SignUp;