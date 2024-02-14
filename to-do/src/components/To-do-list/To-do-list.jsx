import './To-do-list.css';
import PropTypes from 'prop-types';

const ToDoList = ({toDos}) => {    
    return(
        <div className='container d-flex flex-column flex-wrap align-items-center justify-content-center'>
            {toDos}
        </div>
    );
}

ToDoList.propTypes = {
    toDos: PropTypes.array.isRequired
};


export default ToDoList;