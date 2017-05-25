import {createStore} from './redux';
import React from 'react';
import ReactDOM from 'react-dom';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
let reducer = (state = {number: 0}, action) => {
    if (action === undefined) return state;
    switch (action.type) {
        case INCREASE:
            return {number: state.number + action.amount};
        case DECREASE:
            return {number: state.number - action.amount};
        default:
            return state;
    }
}

let store = createStore(reducer);
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {number: store.getState().number};
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number: store.getState().number
            });
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={() => store.dispatch({type: INCREASE, amount: 2})}>+</button>
                <button onClick={() => store.dispatch({type: DECREASE, amount: 2})}>-</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.querySelector('#root'));