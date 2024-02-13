import './Form.css'

const Form = () =>{

    return(
        <form className='input-group mb-3'>
            <input 
                type='text' 
                className='form-control'
                placeholder='New ToDo'
                aria-label='New ToDo' 
                aria-describedby='to-do-from'
            />
            <span className='input-group-text bg-success' id='to-do-from'>Add</span>
        </form>
    );
}

export default Form;