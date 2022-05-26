import React, { Component } from 'react';

let objectsArr = [{dog: 1}, {cat: 1}, {tall: true}, {short: false}]

class FilterObject extends Component {
    constructor(props){
        super(props)
        this.state = {unFilteredArray: objectsArr, userInput: "", filteredArray: []}
    }
    filterArray = () => {
        const {userInput, unFilteredArray, filteredArray} = this.state
        for (let i = 0; i < unFilteredArray.length; i++){
            Object.keys(unFilteredArray[i]).forEach(key => {
                if (key === userInput){
                    filteredArray.push(unFilteredArray[i])
                }
            })
        }
        return this.setState({filteredArray: filteredArray})
    }
    onInputChange = (e) => {
        return this.setState({userInput: e.target.value})
    }
    render(){
    return <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine" onChange={this.onInputChange}></input>
        <button className="confirmationButton" onClick={this.filterArray}>Confirm</button>
        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
    </div>
   } 
}


export default FilterObject