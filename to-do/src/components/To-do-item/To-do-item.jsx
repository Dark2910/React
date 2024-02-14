import './To-do-item.css';
import PropTypes from 'prop-types';
import { /* AiFillEdit, */ AiOutlineDelete   } from "react-icons/ai";
import { useState } from 'react';


const ToDoItem = ({id, text, isFinished, updateToDoStatus, handleClick}) => {
    const [isChecked, setChecked] = useState(isFinished);

    const handleCheckbox = () => {
        updateToDoStatus();
        setChecked((prevIsFinished) => !prevIsFinished);
    };

    return (
        <div className={`to-do-container container d-flex align-items-center justify-content-between p-1 my-1 border border-3 border-secondary rounded-3 ${(isChecked)? 'checked': ''}`.trim()}>
            <span className='form-check-container d-flex align-items-center justify-content-center'>
                <input
                    className='form-check-input m-0 mx-2'
                    type='checkbox'
                    id={id}
                    checked={isChecked}
                    onChange={handleCheckbox}
                />
                <label className='form-check-label fs-5 m-0 me-2' htmlFor={id}>{text}</label>
            </span>
            <span className='btn-container '>
                {/* <button type='button' className='btn btn-warning fs-5 m-1 py-1'><AiFillEdit /></button> */}
                <button onClick={handleClick} type='button' className='btn btn-warning fs-5 m-1 py-1'><AiOutlineDelete /></button>
            </span>
        </div>
    );
};

ToDoItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
    updateToDoStatus: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default ToDoItem;

