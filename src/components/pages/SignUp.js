import React from 'react';
import '../../App.css';
import Footer from '../Footer'
import './SignUpp.css'
export default function SignUp() {
  return (
    <>
      <form style={{ border: '1px solid #ccc', fontFamily: 'sans-serif' }}>
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

          <label>
            <input type="checkbox" name="remember" style={{ marginBottom: '15px' }} /> Remember me
    </label>

          {/* <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p> */}

          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}