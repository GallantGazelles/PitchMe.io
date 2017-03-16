import React from 'react';

const SignUp = () => (
  <section>
    <div>
      SignUp
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="re-enter email" placeholder="Re-enter Email" />
      <input type="text" name="password" placeholder="Password" />
      <input type="text" name="re-enter password" placeholder="Re-enter Password" />
      <div>Sign Up! button</div>
      <p>Or</p>
      <div>Log in with Facebook button</div>
    </div>
  </section>
)

export default SignUp;