import React from 'react'
import axios from 'axios'; 

export default class AppClass extends React.Component {
  state = {
    x: 2,
    y: 2,
    steps: 0,
    email: '', 
    message: ''
  }

  clickLeft = () => {
      this.state.x <= 3 && this.state.x >=2 ?
      this.setState({
        ...this.state, 
        x: this.state.x -1, 
        steps: this.state.steps +1,
      })
      : this.setState({
        ...this.state, 
        x: this.state.x === 3 ? 2 : this.state.x, 
        message: `You can't go left`
      })
  }

  clickRight = () => { 
    this.state.x <= 2 && this.state.x >=1 ?
      this.setState({
        ...this.state, 
        x: this.state.x +1, 
        steps: this.state.steps +1,
      })
      : this.setState({
        ...this.state, 
        x: this.state.x === 3 ? 3 : this.state.x, 
        message: `You can't go right`
      })

  }

  clickUp = () => {
    this.state.y <= 2 && this.state.y >= 1 ?
    this.setState({
      ...this.state, 
      y: this.state.y -1, 
      steps: this.state.steps +1,
    })
    : this.setState({
      ...this.state, 
      y: this.state.y === 3 ? 2 : this.state.y, 
      message: `You can't go up`
    })

  }

  clickDown = () => {
    this.state.y <= 2 && this.state.y >= 1 ?
    this.setState({
      ...this.state, 
      y: this.state.y +1, 
      steps: this.state.steps +1,
    })
    : this.setState({
      ...this.state, 
      y: this.state.y === 3 ? 3 : this.state.y, 
      message: `You can't go down`
    })

  }

  clickReset = () => {
    
    this.setState({
      ...this.state, 
      x: 2,
    y: 2,
    steps: 0,
    email: '', 
    message: ''
    })
     
    

  }

  
  

  render() {
    console.log(this.state)
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates  ({this.state.x}, {this.state.y} ) </h3>
          <h3 id="steps">You moved 0 times</h3>
        </div>
        <div id="grid">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left" onClick = {this.clickLeft}>LEFT</button>
          <button id="up" onClick = {this.clickUp}>UP</button>
          <button id="right" onClick = {this.clickRight}>RIGHT</button>
          <button id="down"onClick = {this.clickDown}>DOWN</button>
          <button id="reset" onClick = {this.clickReset}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
