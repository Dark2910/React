import React from 'react'
import './Counter.css'

const Counter = ({numClicks}) => {
    return (
        <div className='Counter'>{numClicks}</div>
    );
}

export default Counter