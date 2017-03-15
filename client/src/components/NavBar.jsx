import React from 'react';

const NavBar = (props) => (
  <nav>
    <div>
      <span>Home </span>
      <span>Start a Pitch </span>
      <span>How it works </span>
      <span>Companies </span>
      <span>Sign in </span>
      <span>Sign up </span>
    </div>
    <div>
      <input type="text" name="search" placeholder="Search" />
    </div>
  </nav>
)

export default NavBar;