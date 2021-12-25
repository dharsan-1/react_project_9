import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {FirstName: true, lastName: true}

  onFirstWord = () => {
    this.setState(prevState => ({FirstName: !prevState.FirstName}))
  }

  onSecondWord = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {FirstName, lastName} = this.state
    const firstContainer = FirstName ? 'firstNameContainer' : null
    const secondContainer = lastName ? 'secondNameContainer' : null
    const NameshowHide1 = FirstName ? 'dharsan' : null
    const nameShowHide2 = lastName ? 'ramakrishnan' : null

    return (
      <div className="background">
        <h1>show/hide first name</h1>
        <button type="button" className="bu" onClick={this.onFirstWord}>
          show/hide first name
        </button>
        <div className={firstContainer}>
          <h1>{NameshowHide1}</h1>
        </div>
        <h1>show/hide second name</h1>
        <button type="button" className="bu" onClick={this.onSecondWord}>
          show/hide second name
        </button>
        <div className={secondContainer}>
          <h1>{nameShowHide2}</h1>
        </div>
      </div>
    )
  }
}

export default ShowHide
