import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import AnotherComp from './components/AnotherComp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counter from '../actions/counter';




//   props, redux
class App extends Component {

  constructor(){
    super()
    this.state = { 
      text: 'Welcome to React',
      count:90
    }
    // this
    // console.log(this)
    this.sayHello = this.sayHello.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  
  componentWillMount(){
    console.log('componentWillMount')
    console.log(this)
    // setTimeout(() => {
    //    // this.setState({ text: 'Welcome to Ninja'}) 
    //    sayHello(1,2,3)
    // },1000)
    this.setState({
      a:1,
      b:2
    })
  }


  sayHello(){
    console.log(`a is ${this.state.a}, b is ${this.state.b}`) 
    console.log(this)
    console.log(this.state.a)
    console.log(this.state.b)
  }
    
  increment(){
    this.setState({
      count: (this.state.count+1)
    }, () => {
      console.log('from increment function ', this.state.count);
    });
  }

  decrement(){
    this.setState({
      count: (this.state.count-1)
    }, () => {
      console.log('from decrement function ', this.state.count);
    });
  }

  render() {
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={this.sayHello}>{this.state.text}</h1>
        </header>
        <p style={{ marginLeft:"12px" , color: 'red'}}  className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AnotherComp store={{count: this.state.count}}  />
        <Counter store={{count: this.state.count}} increment={this.increment} decrement={this.decrement} />
      </div>
    );
  }


  // list n number of items
  // const itemsMarkup = state.items.map((item) => {
  //   return (<div> {item.name} <div>)
  // })

  // {itemsMarkup}


  //  dom way 
  // const itemsMarkup = state.items.map((item) => {
  //   return '<div>' + item.name + '<div>'
  // })
  // looku the container >> then .innerHTML(itemsMarkup)

  componentDidMount(){

  }

  componentDidUpdate(){

  }
}

export default App;
