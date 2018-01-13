
const increment = (payload) => {
	// setTimeout(1000, () => {
	  	return {	
		  	type: 'INCREMENT',
	  		payload,
		};
	// })
}


const decrement = (payload) => ({
  type: 'DECREMENT',
  payload,
});

export default {
	increment, decrement
}