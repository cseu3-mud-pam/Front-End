import React, { useState } from 'react';
import axios from 'axios';

const initialRegistrationFeild = {
  username: '',
  email: '',
  password1: '',
  password2: ''
}

function Register(props) {
  const [registrationField, setRegistrationField] = useState(initialRegistrationFeild)

  const handlechange = (e) => {
    setRegistrationField({
      ...registrationField,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('https://mudgame-pam.herokuapp.com/api/registration/', registrationField)
      .then(res => {
        localStorage.setItem('token', res.data.key)
        props.history.push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
        <div>Register</div>
        <form>
            <input placeholder='username' name='username' onChange={handlechange} />
            <input placeholder='email' name='email' onChange={handlechange} />
            <input placeholder='password' name='password1' onChange={handlechange} />
            <input placeholder='password2' name='password2' onChange={handlechange} />
            <button onClick={handleLogin}>Submit</button>
        </form>
    </div>
  );
}

export default Register;