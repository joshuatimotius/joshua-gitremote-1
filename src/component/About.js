import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h2 className='greetings'>Welcome! This is the About Page</h2>
            <p className='greetings'>this is everything you need to know about me....
                no need to hesitate to <Link className='linkword' to='/contact'>contact</Link> me!
            </p>
        </div>
    );
}

export default About;
