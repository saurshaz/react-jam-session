import React, {Component, PropType} from 'react';
import './style.css';
// import AnotherComp from '../AnotherComp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import counter from '../../actions/counter';

class Counter extends Component {

  componentDidMount(){
    this.props.store.subscribe(this.render);
  }

  render() {
  	const {increment, decrement} = this.props.counter;
    // console.log(...count)
    return (
    	<div>
    		<button onClick={increment}> ++ </button>
    		<button onClick={decrement}> -- </button>
	    	<div> Counter <div>{this.props.counterState && this.props.counterState.count}</div> </div>
	    	{/*<div> Total Clicks Counter {this.state.totalClicks} </div>*/}


	    	{/*<section> <AnotherComp totalClicks={this.state.totalClicks} /> </section>*/}
    	</div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      counterState: state.counter,
  }
};




const mapDispatchToProps = (dispatch) => ({
  counter: bindActionCreators(counter, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Counter
);



// // pure component
// const Counter = (props) => {
// 	// Counter.setState({a:'A'})
//     return (<div> Counter {props.decrement()} </div>)
// }
// export default Counter;

// Counter.PropType = {
// 	count: PropType.String
// }