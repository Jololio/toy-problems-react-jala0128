import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(props){
        super(props)
        this.state = {evenArray: [], oddArray: [], userInput: ""}
    }
    onInputChange = (e) => {
        return this.setState({userInput: e.target.value})
    }
    solveToyProb = () => {
        const {userInput, evenArray, oddArray} = this.state
        let splitInput = userInput.split(",")
        for(let i = 0; i < splitInput.length; i++){
            if (splitInput[i] % 2 === 0){
                evenArray.push(splitInput[i])
            } else {
                oddArray.push(splitInput[i])
            }
        }
        return this.setState({evenArray: evenArray, oddArray: oddArray}) 
    }
    render(){
    return <div className="puzzleBox evenAndOddPB">
        <h4>Evens And Odds</h4>
        <input className="inputLine" onChange={this.onInputChange}></input>
        <button className="confirmationButton" onClick={this.solveToyProb}>Confirm</button>
        <span className="resultsBox">{this.state.evenArray}</span>
        <span className="resultsBox">{this.state.oddArray}</span>
    </div>
   } 
}


export default EvenAndOdd