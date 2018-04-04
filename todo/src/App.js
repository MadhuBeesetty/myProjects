import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      message:'',
      doList:[],
    }
  }

  change = (e) => {
    this.setState({message:e.target.value})
  }

  click = () =>{
    const doList = [...this.state.doList, this.state.message];
    this.setState({doList})
    this.setState({message:''})
  }

  render() {
    return (
      <div>
        <h1>todo list</h1>
        <Todo change={this.change} click={this.click} doList={this.state.doList}/>
      </div>
    );
  }
}

const Todo = ({change, click, doList}) => {
  
  const disStyle = {
    height: '25px',
    width: '150px',
    color: 'green',
  };

  const display = doList.map((x,i)=><div style={disStyle} key={i}>{i+1}){x}</div>);


  return(
    <div>
      <div>
        <input type="text" placeholder="todo" onChange={change} />
      </div>
      <div>
        <input type='submit' value='submit' onClick={click}/>
      </div>
      <div>
        {display}
      </div>
    </div>
  )
}
export default App;
