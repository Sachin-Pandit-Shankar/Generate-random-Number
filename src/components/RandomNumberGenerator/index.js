// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  randomNumber = () => {
    const findRandomNumber = this.getRandomNumber()
    this.setState(prevState => ({
      count: prevState.count + findRandomNumber,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="main-heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.randomNumber}>
            Generate
          </button>
          <div>
            <p className="random-num">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
