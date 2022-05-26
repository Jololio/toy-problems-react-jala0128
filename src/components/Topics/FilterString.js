import React, { Component } from 'react';

let stringsArr = ["Nice String", "LolE", "Gang Gang", "Gamers Rise Up"]

class FilterString extends Component {
    constructor(props){
        super(props)
        this.state = {unFilteredArray: stringsArr, userInput: "", filteredArray: []}
    }
    filterString = () => {
        const {unFilteredArray, userInput} = this.state
        let filteredArray = unFilteredArray.filter(word => word === userInput)
        return this.setState({filteredArray: filteredArray})
    }
    onInputChange = (e) => {
        return this.setState({userInput: e.target.value})
    }
    render(){
    return <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{this.state.unFilteredArray}</span>
        <input className="inputLine" onChange={this.onInputChange}></input>
        <button className="confirmationButton" onClick={this.filterString}>Confirm</button>
        <span className="resultsBox filterStringRB">{this.state.filteredArray}</span>
    </div>
   } 
}

export default FilterString