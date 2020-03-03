import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <div>
            Wellcome to the MUD game
        </div>
        <div>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    </div>
    
  );
}

export default Home;