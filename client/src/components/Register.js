import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
        <div>Register</div>
        <form>
            <input placeholder='username' />
            <input placeholder='password' />
            <input placeholder='password2' />
            <Link to='/play'><button>Submit</button></Link>
        </form>
    </div>
  );
}

export default Register;