import './App.css';
import Screen from './components/Screen/Screen';
import Button from './components/Button/Button';
import { useState } from 'react';
import { evaluate } from 'mathjs'


function App() {
  const layout = [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    [0, '.', '=', '+'],
    ['Clear']
  ];

  const [input, setInput] = useState('');

  const clearScreen = () => {
    setInput('');
  }
  const result = () => {
    if(input){
      setInput(String(evaluate(input)));
    }
  }
  const operation = (value) => {
    setInput(String(input + value));
  }

  const handleClick = (value) => {
    const valueOptions = {
      '=' : () => result(value),
      'Clear': () => clearScreen(value),
    }
    const valueDefault = () => operation(value);
    (valueOptions[value] || valueDefault)()
  }

  const grid = layout.map((row, rowIndex) => 
    <div key={rowIndex} className='btn-container'>
      {row.map((value) => <Button key={value} value={value} buttonClick={() => handleClick(value)}/>)}
    </div>
  );

  return (
    <div className='App'>
      <div className='calculator-container'>
        <Screen input={input}/>
        {grid}
      </div>
    </div>
  )
}

export default App;
