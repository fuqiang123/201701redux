import React from 'react';
import {createStore} from '../redux';
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
let increase = (amount)=>(
    {type: INCREASE, amount}
)
let decrease = (amount)=>(
    {type: DECREASE, amount}
)
export default class Counter extends React.Component {
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
                <button onClick={() => store.dispatch(increase(2))}>+</button>
                <button onClick={() => store.dispatch(decrease(2))}>-</button>
            </div>
        )
    }
}