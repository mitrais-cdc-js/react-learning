import { createStore, compose, applyMiddleware } from 'redux'
import bankReducer from './bankReducer';

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const logger = (store) => (next) => (action) => {
  console.log('dispatching:', action);
  return next(action);
}

const bankStore = createStore(
	  bankReducer,
	  enhancers,
	  applyMiddleware(logger) // enhance the store with the logger middleware
);

export default bankStore;
