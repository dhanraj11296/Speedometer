// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }
  onClickApplyBreakButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }
  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }
  render() {
    const {speed} = this.state
    return (
      <div className="speedometerAppContainer">
        <div className="speedometerContainer">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedImage"
          />
          <h1 className="speedText">Speed is {speed}mph</h1>
          <p className="speedLimits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttonContainer">
            <button
              type="button"
              className="accelerateButton button"
              onClick={this.onClickAccelerateButton}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="applyBrakeButton button"
              onClick={this.onClickApplyBreakButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
