import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from './components/Logo/Logo';
import ToDo from './view/To-do';

function App() {
  return (
    <div className='app'>
      <Logo/>
      <ToDo/>
    </div>
  )
}

export default App;
