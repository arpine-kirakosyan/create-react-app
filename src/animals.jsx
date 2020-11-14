import React, {Component} from "react";

class Animals extends Component{
    constructor(props){
        super(props);
    }

     render(){
const animalName = this.props.name;
const animalColor = this.props.color;
        return (
        <div>My animal is {animalName}, and its color is {animalColor}</div>
        )
     }
}
export default Animals;