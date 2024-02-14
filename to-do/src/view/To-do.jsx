import './To-do.css';
import Form from '../components/Form/Form';
import ToDoList from '../components/To-do-list/To-do-list';
import ToDoItem from '../components/To-do-item/To-do-item';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
    const [toDos, setToDos] = useState([]);

    const addTodo = (inputValue) => {
        if(inputValue.trim()){
            const newToDo = {
                id: uuidv4(),
                isFinished: false,
                text: inputValue.trim(),
            }
            const updateToDos = [newToDo, ...toDos];
            setToDos(updateToDos);
        }
    };

    const deleteToDo = (id) => {
        const updateToDos = toDos.filter((toDo) => toDo.id !== id);
        setToDos(updateToDos);
    };

    const updateToDoStatus  = (id) => {
        const updateToDos = toDos.map((toDo) => {
            if(toDo.id === id){
                toDo.isFinished = !toDo.isFinished;
            }
            return toDo;
        })
        setToDos(updateToDos);
    };

    const renderToDos = toDos.map((toDo) => {
        return(
            <ToDoItem 
                key={toDo.id} 
                id={toDo.id}
                text={toDo.text} 
                isFinished={toDo.isFinished} 
                updateToDoStatus ={() => updateToDoStatus(toDo.id)}
                handleClick={() => deleteToDo(toDo.id)}
            />
        );
    });
    
    return(
        <div className='to-do-list container rounded-5 px-auto py-3 m-5'>
            <h1 className='title text-center fw-bold fs-1 my-3'>ToDo List</h1>
            <Form onFormSubmit={addTodo}/>
            <ToDoList toDos={renderToDos} />
        </div>
    );
};

export default ToDo;