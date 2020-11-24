import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    constructor() {
        super();
        this.calc = this.calc.bind(this);
        this.reset = this.reset.bind(this);
    }

    state = {
        counter: 0,
    }    
    calc(type) {
        if(type=="Decrease"){
            this.state.counter--;         
         }
        else if(type=="Increase"){
            this.state.counter++;
        }

        this.setState({
            count: this.state.counter
        })
    }
    reset(){        

        this.setState({
             count:this.state.counter = 0
        })      
              

    }

    render() {
        return (
            <div className="counter-box">
                <h2>Counter</h2>
                <button onClick={this.reset} className="reset-btn">Reset</button>
                <div className="counter-box__content">
                    <button onClick={()=>this.calc("Decrease")} className={this.state.counter== 0 ? ("decrease-btn disabled"):"decrease-btn" }>-</button>
                    <p>{this.state.counter}</p>
                    <button onClick={()=>this.calc("Increase")} className="increase-btn">+</button>
                </div>
            </div>
        )
    }
}
export default Counter;