import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h2 className='greetings'>Welcome! This is the About Page</h2>
            <h4 className='hometitle'>Games</h4>
            <ul className="homelist">
                <li>Apex Legends : 10</li>
                <li>Counter Strike : 8</li>
                <li>Dota 2 : 8</li>
            </ul>
            <h4 className='hometitle'>Songs</h4>
            <ul className='homelist'>
                <li>Another In The Fire : 9</li>
                <li>Behold : 9</li>
                <li>Sunday Morning : 8</li>
            </ul>
            <p className='greetings'>this is everything you need to know about me....
                no need to hesitate to <Link className='linkword' to='/contact'>contact</Link> me!
            </p>
            <h1>Hello World!</h1>
        </div>
    );
}

export default About;
