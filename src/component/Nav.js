import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Nav() {
    return (
        <div className='navbar'>
            <h3>NavBar</h3>
            <ul className='navlist'>
                <Link className='liststyle' to='/'><li>Home</li></Link>
                <Link className='liststyle' to='/about'><li>About</li></Link>
                <Link className='liststyle' to='/contact'><li>Contact</li></Link>
            </ul>
            <h3>Joshua</h3>
        </div>
    );
}

export default Nav;