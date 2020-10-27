import React from 'react';
import './About.css'

function About(){
    return(
        <>
        <div className='About'>
            <h1> About Conway's Game Of Life</h1>
            <h2> The Rule:</h2>
            <div className='surround'>
                <ul> 
                For a space that is 'populated': 
                <p>Each cell with one or no neighbors dies, as if by solitude.  </p>
                <p>Each cell with four or more neighbors dies, as if by overpopulation.</p>
                <p>Each cell with two or three neighbors survives.</p>
                </ul>
                <ul>
                For a space that is 'empty' or 'unpopulated'
                <p>Each cell with three neighbors becomes populated.</p>
                </ul>
            </div>
        </div>
        </>
    );
}

export default About
