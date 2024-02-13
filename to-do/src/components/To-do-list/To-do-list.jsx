import './To-do-list.css'
import ToDoItem from '../To-do-item/To-do-item';

const ToDoList = () => {

/*     const renderToDoItems = toDo.map((_,index) => (
        <ToDoItem key={index} text={'Hello'}/>
    )); */
    const renderList = [
        <ToDoItem key={1} text={'Hello'}/>,
        <ToDoItem key={2} text={'Hello'}/>,
        <ToDoItem key={3} text={'Hello'}/>,
        <ToDoItem key={4} text={'Hello'}/>,
    ];
    
    return(
        <div className='container d-flex flex-column flex-wrap align-items-center justify-content-center'>
            {renderList}
        </div>
    );
}

export default ToDoList;