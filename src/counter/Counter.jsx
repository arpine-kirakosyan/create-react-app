import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    constructor() {
        super();
        this.handleClickDecrease = this.handleClickDecrease.bind(this);
        this.handleClickIncrease = this.handleClickIncrease.bind(this);
    }

    state = {
        counter: 0,
    }    
    //Decrease count
    handleClickDecrease() {
        this.setState({
            count: this.state.counter++
        })
    }
     //Increase count
    handleClickIncrease() {
        this.setState({
            count: this.state.counter--
        })
    }

    render() {
        return (
            <div className="counter-box">
                <h2>Counter</h2>
                <div className="counter-box__content">
                    <button onClick={this.handleClickDecrease}>Decrease</button>
                    <p>{this.state.counter}</p>
                    <button onClick={this.handleClickIncrease}>Increase</button>
                </div>
            </div>
        )
    }
}
export default Counter;