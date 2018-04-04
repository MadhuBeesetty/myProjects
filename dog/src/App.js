import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      marginTop: 10,
      marginLeft: 10,
    }
  }
    topClick = ()=>{
    this.setState({marginTop:this.state.marginTop-10})
    };
    bottomClick = ()=>{
    this.setState({marginTop:this.state.marginTop+10})
    };
    leftClick = ()=>{
    this.setState({marginLeft:this.state.marginLeft-10})
    };
    rightClick = ()=>{
    this.setState({marginLeft:this.state.marginLeft+10})
    };
  render() {

const divStyle = {
   marginTop:this.state.marginTop+`px`,
  marginLeft:this.state.marginLeft+`px`,
};
    
    return (
      <div>
        <h1>moving dog</h1>
        <Dog topClick={this.topClick} bottomClick={this.bottomClick} leftClick={this.leftClick} rightClick={this.rightClick} divStyle={divStyle} />
      </div>
    );
  }
}

const Dog = ({topClick,bottomClick,leftClick,rightClick,divStyle}) => {
  return(
    <div>
      <span>
        <input type='submit' value='top' onClick={topClick} />
        <input type='submit' value='bottom' onClick={bottomClick} />
        <input type='submit' value='left' onClick={leftClick} />
        <input type='submit' value='right' onClick={rightClick} />
      </span>
    <div style={divStyle}>
      <img src="https://www.what-dog.net/Images/faces2/scroll000.jpg"/>
    </div>
</div>
  )
}

export default App;
