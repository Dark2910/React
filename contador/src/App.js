import './App.css';
import { useState } from 'react';
import logoImg from './images/freecodecamp-logo.png';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';


const App = function() {
  const [count, setCount] = useState(0);

  const handleClick = (isClick) =>{
    if(isClick){
      setCount(count + 1);
    }else{
      setCount(0);
    }
  }

  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-container'>
        <img className='freeCodeCamp-logo' src={logoImg} alt='freeCodeCamp-logo'/>
      </div>
      <div>
        <div className='counter-container'><Counter numClicks={count}/></div>
        <Button isClick={false} handleClick={() => handleClick(false)} text={'Reset'}/>
        <Button isClick={true} handleClick={() => handleClick(true)} text={'Click'}/>
      </div>
    </div>
  );
}

export default App;
