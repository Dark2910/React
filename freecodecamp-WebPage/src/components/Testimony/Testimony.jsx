import React from 'react'
import './Testimony.css'

const Testimony = (props) => {
    return(
        <div className='container-testimony'>
            <img 
                src={require(`../../images/${props.img}-testimony.png`)}
                alt={`${props.name}-img`}
            />
            <div>
                <p className='name'><strong>{props.name}</strong> in {props.country}</p>
                <p className='job'>{props.position} at <strong>{props.company}</strong></p>
                <p className='text'>"{props.testimony}"</p>
            </div>
        </div>
    );
}

export default Testimony;