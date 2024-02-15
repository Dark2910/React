import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Counter'>{this.props.numClicks}</div>
        );
    }
}

Counter.propTypes = {
    numClicks: PropTypes.number.isRequired,
};

export default Counter;