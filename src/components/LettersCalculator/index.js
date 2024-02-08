// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  countLetters = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="text-section">
            <h1 className="title">Calculate the Letters you enter</h1>
            <label className="enter-text" htmlFor="inputBox">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              className="text-input-box"
              id="inputBox"
              placeholder="Enter the phrase"
              onChange={this.countLetters}
              value={inputPhrase}
            />
            <p className="result-box">No.of letters: {inputPhrase.length}</p>
          </div>
          <div className="img-section">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
