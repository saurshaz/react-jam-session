const initialState = { count: 0 };

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    	state.counter.count += 1;
      	return state;
    case 'DECREMENT':
    	state.counter.count += 1;
      	return state;
    default:
      return state;
  }
};

export default counter