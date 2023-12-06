import { combineReducers, createStore } from 'redux';
import themeReducer from './theme';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  state: themeReducer,
});

// TODO: Find a better way to do this
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
