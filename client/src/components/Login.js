import React, { useState } from 'react';
import axios from 'axios';

const initialLoginFeild = {
  username: '',
  email: '',
  password: '',
}

function Login(props) {
  const [loginField, setLoginField] = useState(initialLoginFeild)

  const handlechange = (e) => {
    setLoginField({
      ...loginField,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('https://mudgame-pam.herokuapp.com/api/login/', loginField)
      .then(res => {
        localStorage.setItem('token', res.data.key)
        props.history.push('/play')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
        <div>Login</div>
        <form>
            <input placeholder='username' name='username' onChange={handlechange} />
            <input placeholder='email' name='email' onChange={handlechange} />
            <input placeholder='password' name='password' onChange={handlechange} />
            {/* <Link to='/play'> */}
            <button onClick={handleLogin}>Submit</button>
        </form>
    </div>
  );
}

export default Login;