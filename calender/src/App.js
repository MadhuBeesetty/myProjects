import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    day:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],
  }

  display (arr, firstDay, i=1, j=arr.indexOf(firstDay), result=[]) {
    if(i > 30) return result;
    if(j===6){
      result.push(<span className='Num'>{i}<br/>{arr[j]}</span>);
      result.push(<br/>);
      return this.display (arr,firstDay,i+1,j=0,result);
    }else{
      result.push(<span className='Num'>{i}<br/>{arr[j]}</span>);
      return this.display (arr,firstDay,i+1,j+1,result);
    }
  }


  render() {
    return (
      <div className="limit" >
        {this.display(this.state.day,"wednesday")}
      </div>
    );
  }
}

export default App;
