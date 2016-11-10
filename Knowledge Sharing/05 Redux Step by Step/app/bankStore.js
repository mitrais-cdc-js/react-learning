import { createStore, compose } from 'redux'
import bankReducer from './bankReducer';

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const bankStore = createStore(bankReducer, enhancers);

export default bankStore;
