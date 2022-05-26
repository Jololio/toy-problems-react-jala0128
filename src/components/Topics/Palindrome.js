import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(props){
        super(props)
        this.state = {userInput: "", palindrome: ""}
    }
    isPalindrome = () => {
        const {userInput} = this.state
        let splitStr = userInput.split('')
        if (splitStr.reverse().join('') === userInput){
            return this.setState({palindrome: splitStr.reverse().join('')})
        } else {
            return this.setState({palindrome: "Not a palindrome"})
        }
    }
    onInputChange = (e) => {
        return this.setState({userInput: e.target.value})
    }
    render(){
    return <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={this.onInputChange}></input>
        <button className="confirmationButton" onClick={this.isPalindrome}>Confirm</button>
        <span className="resultsBox">{this.state.palindrome}</span>
    </div>
   } 
}


export default Palindrome