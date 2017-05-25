import React from 'react';
import {store} from '../store';
import {INCREASE,DECREASE} from '../actions';
let increase = (amount)=>(
    {type: INCREASE, amount}
)
let decrease = (amount)=>(
    {type: DECREASE, amount}
)
export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {number: store.getState().counter.number};
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number: store.getState().counter.number
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