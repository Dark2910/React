import React from 'react';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (isClick) =>{
    if(isClick){
      this.setState((prevState) => ({count: prevState.count + 1}))
    }else{
      this.setState({count: 0});
    }
  };

  render() {
    return (
      <div className='App'>
        <h1 className='title'>counter</h1>
        <div className='counter-container'><Counter numClicks={this.state.count}/></div>
        <div>
          <Button isClick={false} handleClick={() => this.handleClick(false)} text={'Reset'}/>
          <Button isClick={true} handleClick={() => this.handleClick(true)} text={'Click'}/>
        </div>
      </div>
    );
  }
}

export default App;
