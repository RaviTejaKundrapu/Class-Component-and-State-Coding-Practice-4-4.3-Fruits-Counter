// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoCounting = () => {
    this.setState(prevCount => ({mangoCount: prevCount.mangoCount + 1}))
  }

  bananaCounting = () => {
    this.setState(prevCount => ({bananaCount: prevCount.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="operations-container">
          <h1 className="line">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count"> {bananaCount}</span> bananas
          </h1>
          <div className="only-work-at-md-lg-xl-row-at_belowsize_centeringContainer">
            <div className="item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes-pic"
                className="pic"
              />
              <button
                className="button"
                type="button"
                onClick={this.mangoCounting}
              >
                Eat Mango
              </button>
            </div>
            <div className="item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananas-pic"
                className="pic"
              />
              <button
                className="button"
                type="button"
                onClick={this.bananaCounting}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
