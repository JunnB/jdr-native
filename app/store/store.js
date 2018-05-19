import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';
import characterReducer from '../reducers/characterReducer';
import modalReducer from '../reducers/modalReducer';
import gameReducer from '../reducers/gameReducer';
import inventoryReducer from '../reducers/inventoryReducer';

const store = createStore(
  combineReducers({
    reducer: reducer,
    character: characterReducer,
    modal: modalReducer,
    game: gameReducer,
    inventory: inventoryReducer
  }),
  applyMiddleware(
    thunk
  )
);

export default store;
