import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      number:0,
      name: 'madhu',
      length: 'madhu'.length,
      inc:0,
    }
    this.click = this.click.bind(this);
    this.clickName = this.clickName.bind(this);
    this.unclickName = this.unclickName.bind(this);
  }
  click(){
    this.setState({number:this.state.number+1})
  };
  clickName(){
    this.setState({name:this.state.name+this.state.name,inc:this.state.inc+1})
  };
  unclickName(){
    this.setState({name:this.state.name.slice(0,this.state.length*this.state.inc)})
  };
  render() {
    return(
      <div>
        <div>
          <Counter number={this.state.number} click={this.click} />
        </div>
        <div className='test-style'>
          <h1>creating a new component</h1>
        </div>
        <div>
          <Display name={this.state.name} clickName={this.clickName} unclickName={this.unclickName} />
          </div>
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

        const Display = ({name, clickName, unclickName}) => {
          return(
            <div className="App">
              <input type='submit' value="click name" onClick={clickName} />
              <input type='submit' value='click unclickName' onClick={unclickName} />
              {name}
            </div>
          );
        };

        export default App;
