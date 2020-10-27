import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <nav>
          <ul>
            <li>
              <Link style={{color : 'black'}} to="/">Home</Link>
            </li>
            <li>
              <Link style={{color : 'black'}} to="/about">About</Link>
            </li>
          </ul>
        </nav>
    );
}

export default Navbar