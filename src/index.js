import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import Counter from './components/Counter/Counter';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
// import * as rootReducer from './reducers';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import rootReducer  from './reducers/counter';

const initialState = {
	counter : 
		{ 
			count : 13
		}
}

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

render(<Counter store={store}/>,
	document.getElementById('root')
);

