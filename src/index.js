import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import Counter from './components/Counter/Counter';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
// import * as rootReducer from './reducers';
import { Provider } from 'react-redux';
import rootReducer  from './reducers/counter';
const initialState = {
	counter : 
		{ 
			count : 13
		}
}




// import * as rootReducer from './store'

// const storeGlobal = () => {
//   return createStore(rootReducer);
// }

// // Create a Redux store holding the state of your app.
// // Its API is { subscribe, dispatch, getState }.
// let store = storeGlobal()


// store config
function configureStore(initialState) {
  // console.log('loadState:', loadState());
  return createStore(
  	rootReducer,
    initialState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
}

// store initialization
const store = configureStore(initialState);



render(
	<Provider store={store}>
		<Counter/>
	</Provider>, 
	document.getElementById('root')
);
