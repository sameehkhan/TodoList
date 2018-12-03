import {createStore} from 'redux';
import rootReducer from '../reducers/todos_reducer';

const configureStore = () => createStore(rootReducer);

export default configureStore;
