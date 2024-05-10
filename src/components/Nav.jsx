import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
        <Link to='/'>
            <div className="navTab">
                <p>Home</p>
            </div>
        </Link>
        <Link to="/collection">
            <div className="navTab">
                <p>Browse Collection</p>
            </div>
        </Link>
    </div>
  )
}

export default Nav