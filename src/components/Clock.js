import React from 'react';
// import logo from './logo.svg';
 
 class Clock extends React.Component{
     
    constructor(props){
      super(props)
      
      this.state = {
          date:new Date(),
          clockSwitch : true
        }
/* 

ES6 React.Component doesn't auto bind methods to itself. You need to bind them yourself in constructor. Like this: */
        this.handleClick = this.handleClick.bind(this);
    }
  
    componentDidMount(){
      this.timerId = setInterval(
        () => {
            if(this.state.clockSwitch)
                this.setState({date:new Date()})
        },
        1000
        );
    }
  
    componentWillUnmount(){
    }
     
    // tick(){
    //   this.setState({date:new Date()}) 
    // }
    
     handleClick() {

         if (this.state.clockSwitch) {
             clearInterval(this.timerId)
         } else {
             this.timerId = setInterval(
                 () => {
                     if (this.state.clockSwitch)
                         this.setState({ date: new Date() })
                 },
                 1000
             );
         }
         this.setState((prevState) => {
             return {clockSwitch: !prevState.clockSwitch}
         });
       
     }

    render(){
      const element = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <h2>It is {this.state.clockSwitch.toString()}.</h2>
          <button onClick={this.handleClick}> { this.state.clockSwitch? 'OFF' : 'ON'} </button>
        </div>
      );
      return element
    }
  }

  export default Clock