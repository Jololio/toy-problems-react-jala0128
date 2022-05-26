import React, { Component } from 'react';

class Sum extends Component {
    constructor(props){
        super(props)
        this.state = {number1: 0, number2: 0, sum: null}
    }
    number1Change = (e) => {
        return this.setState({number1: Number(e.target.value)})
    }
    number2Change = (e) => {
        return this.setState({number2: Number(e.target.value)})
    }
    getSum = () => {
        const {number1, number2} = this.state
        return this.setState({sum: number1 + number2})
    }
    render(){
    return <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={this.number1Change}></input>
        <input className="inputLine" onChange={this.number2Change}></input>
        <button className="confirmationButton" onClick={this.getSum}>Confirm</button>
        <span className="resultsBox">{this.state.sum}</span>
    </div>
   } 
}


export default Sum