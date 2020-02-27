import React from 'react'

const Home = () => {
    return(
        <div>
            <h1>This is the Home Page</h1>
            <h4>Games</h4>
            <ul className="homelist">
                <li>Apex Legends : 10</li>
                <li>Counter Strike : 8</li>
                <li>Dota 2 : 8</li>
            </ul>
            <h4>Songs</h4>
            <ul className='homelist'>
                <li>Another In The Fire : 9</li>
                <li>Behold : 9</li>
                <li>Sunday Morning : 8</li>
            </ul>
        </div>
    );
}

export default Home;