import React from 'react';
import {createStore} from '../redux';
import counter from '../reducers/counter';
let store = createStore(counter);

export default class Counter2 extends React.Component{
    constructor(){
        super();
        //其实就是建立了从store中state对象到当前组件状态对象的映射
        this.state = {value:store.getState().number};
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                value:store.getState().number
            });
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return (
            <div>
                <p>{this.state.value}</p>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}