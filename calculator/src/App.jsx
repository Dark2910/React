import './App.css';
import freeCodeCampLogo from './images/freeCodeCamp-logo.png'
import Button from './components/Button/Button';

function App() {

  const layout = [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    [0, '.', '=', '+']
  ];

  const grid = layout.map((row, rowIndex) => 
    <div key={rowIndex} className="row">
      {row.map((value) => <Button key={value} value={value}/>)}
    </div>
  );

  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-container'>
        <img className='freeCodeCamp-logo' src={freeCodeCampLogo} alt="logo freeCodeCamp" />
      </div>
      <div className='calculator-container'>
        {grid}
      </div>
    </div>
  )
}

export default App;
