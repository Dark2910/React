import './To-do.css'
import Form from '../components/Form/Form';
import ToDoList from '../components/To-do-list/To-do-list';

const ToDo = () => {
    return(
        <div className='to-do-list container rounded-5 px-auto py-3 m-5'>
            <h1 className='title text-center fw-bold fs-1 my-3'>ToDo List</h1>
            <Form/>
            <ToDoList/>
        </div>
    );
}

export default ToDo;