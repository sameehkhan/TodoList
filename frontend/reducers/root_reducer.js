import {combineReducers} from 'redux';
import todosReducer from 'todos_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  todo: todosReducer,
});

export default rootReducer;
