import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>About Page</h4>
            <p>this is everything you need to know about me....
                no need to hesitate to <Link to='/contact'>contact</Link> me!
            </p>
        </div>
    );
}

export default About;
