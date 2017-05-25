let combineReducers = (reducers)=>
    (state={counter:{number:0},todo:{list:[]}},action)=>{//返回一个reducer
        let newState = {};
        if(action === undefined)  return state;
        for(var key in reducers){// counter  todo
            newState[key] = reducers[key](state[key],action);
        }
        return newState;
    }

export default combineReducers;