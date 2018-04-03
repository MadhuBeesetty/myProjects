import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      number:0,
    }
    this.click = this.click.bind(this);
  }
  click(){
    this.setState({number:this.state.number+1})
  };
  render() {
    return(
      <div>
        <Counter number={this.state.number} click={this.click} />
      </div>
    );
  }
}

const Counter = ({number,click}) =>  {
  return(
    <div className="App">
      <h1>counter</h1>
      <input type='submit' value='+' onClick={click} />
      {number}
    </div>
  );
};

export default App;
