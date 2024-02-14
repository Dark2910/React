import './Form.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({onFormSubmit}) =>{
    const[inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(inputText);
        setInputText('');
    };

    return(
        <form className='input-group mb-3' onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='form-control'
                placeholder='New ToDo'
                aria-label='New ToDo' 
                aria-describedby='to-do-from'
                value={inputText}
                onChange={handleInputChange}
            />
            <button type='submit' className='input-group-text bg-primary' id='to-do-from'>Add</button>
        </form>
    );
};

Form.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};


export default Form;