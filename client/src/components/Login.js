import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
        <div>Login</div>
        <form>
            <input placeholder='username' />
            <input placeholder='password' />
            <Link to='/play'><button>Submit</button></Link>
        </form>
    </div>
  );
}

export default Login;