import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {FirstName: true, lastName: true}

  onFirstWord = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onSecondWord = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {FirstName, lastName} = this.state
    const firstContainer = FirstName ? 'dharsan' : null
    const secondContainer = lastName ? 'ramakrishnan' : null

    return (
      <div className="background">
        <h1>show/hide first name</h1>
        <button type="button" className="bu" onClick={this.onFirstWord}>
          show/hide first name
        </button>
        <div className="firstNameContainer">
          <h1>{firstContainer}</h1>
        </div>
        <h1>show/hide second name</h1>
        <button type="button" className="bu" onClick={this.onSecondWord}>
          show/hide second name
        </button>
        <div className="secondNameContainer">
          <h1>{secondContainer}</h1>
        </div>
      </div>
    )
  }
}

export default ShowHide
