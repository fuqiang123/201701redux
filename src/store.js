import {createStore} from './redux';
/**
 * 旧状态 {number:0} {list:[]}
 * 新状态 {counter:{number:0},todo:{list:[]}}
 */
import counter from './reducers/counter';
import todo from './reducers/todo';
import combineReducers from './combineReducers';
let reducer = combineReducers({
    counter,
    todo
});
let store = createStore(reducer);
//{counter:{number:0},todo:{list:[]}}
export {store};
