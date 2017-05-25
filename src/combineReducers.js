let combineReducers = (reducers)=>
    (state={},action)=>{//返回一个reducer
        let newState = {};
        for(var key in reducers){// counter  todo
            newState[key] = reducers[key](state[key],action);
        }
        ////{counter:{number:0},todo:{list:[]}}
        return newState;
    }

export default combineReducers;