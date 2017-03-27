import axios from 'axios';
import $ from 'jquery';
import { completeSignIn, signInError } from './user';

export function signInUsername(username) {
  return {
    type: 'SIGN_IN_USERNAME',
    username
  }
}

export function signInPassword(password) {
  return {
    type: 'SIGN_IN_PASSWORD',
    password
  }
}

function signingIn() {
  return {
    type: 'SIGNING_IN'
  }
}

export function signIn(username, password) {
  return function(dispatch) {
    dispatch(signingIn())
    //axios call to check information
    //pass userId or username information from request.
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/auth/signin',
      data: {"username": username, "password": password},
      success: (msg)=> {
        console.log(msg);
        if(typeof msg.redirect === 'string') {
          window.location = msg.redirect;
        }
      },
      error: (err) => {
        console.log(err);
        dispatch(signInError(err));
      }
    });
    // axios.post('http://localhost:8080/auth/signin', {username, password} )
    // .then((results) => {
    //   console.log('hehehehehehe');
    //   dispatch(completeSignIn(results.data.username, results.data.user_id));
    // })
    // .catch(error => dispatch(signInError(error)))
  }
}