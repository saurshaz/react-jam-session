import React, {Component, PropType} from 'react';
import './style.css';
import AnotherComp from '../AnotherComp';

export default class Counter extends Component {
  constructor(){
  	super()
  	this.state = {
  		totalClicks:101
  	}
  }


  render() {
  	const {increment, decrement, store} = this.props;
  	const {count} = store;



    return (
    	<div>
    		<button onClick={increment}> ++ </button>
    		<button onClick={decrement}> -- </button>
	    	<div> Counter {count} </div>
	    	<div> Total Clicks Counter {this.state.totalClicks} </div>


	    	<section> <AnotherComp store={store} totalClicks={this.state.totalClicks} /> </section>
    	</div>
    )
  }

}


// // pure component
// const Counter = (props) => {
// 	// Counter.setState({a:'A'})
//     return (<div> Counter {props.decrement()} </div>)
// }
// export default Counter;

// Counter.PropType = {
// 	count: PropType.String
// }