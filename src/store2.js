import counter from './reducers/counter';
import {createStore} from 'redux';
let store = createStore(counter);
export default store;