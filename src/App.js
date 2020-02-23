import React from 'react';
// import logo from './logo.svg';
import ReactDOM from 'react-dom';

import './App.css';

function App(props) {

// ReactDOM.render(element,document.getElementById('root'))
}

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {date:new Date()}
  }

  componentDidMount(){
    this.timerId = setInterval(
      () => {
        this.setState({date:new Date()})
      },
      1000
      );
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }
   
  // tick(){
  //   this.setState({date:new Date()}) 
  // }
  
  render(){
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
    return element
  }
}


export default Clock   ;
