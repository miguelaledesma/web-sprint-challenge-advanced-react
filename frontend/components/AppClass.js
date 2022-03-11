import React from 'react'
import axios from 'axios'; 

const URL = 'http://localhost:9000/api/result'


export default class AppClass extends React.Component {
  state = {
    x: 2,
    y: 2,
    steps: 0,
    email: '', 
    message: ''
  }


  



 onChange = evt => {
   this.setState({
     ...this.state, 
     email: evt.target.value 
   })
 }

 
 onSubmit = event => {
  event.preventDefault()
  const postPayload = { x: this.state.x, y: this.state.y, steps: this.state.steps, "email": this.state.email}
  axios.post(URL,postPayload)
  .then (resp => {
    this.setState({
      ...this.state, 
      message: resp.data.message})
    this.setState({
      ...this.state, 
      email: ''})
  })
  .catch(err => {
    this.setState({
      ...this.setState, 
      message: err.resp.data.message})
  })
}






  clickLeft = () => {
      this.state.x <= 3 && this.state.x >=2 ?
      this.setState({
        ...this.state, 
        x: this.state.x -1, 
        steps: this.state.steps +1,
        message: ''
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
        message: ''
      })
      : this.setState({
        ...this.state, 
        x: this.state.x === 3 ? 3 : this.state.x, 
        message: `You can't go right`
      })

  }

  clickUp = () => {
    this.state.y <= 3 && this.state.y >= 2 ?
    this.setState({
      ...this.state, 
      y: this.state.y -1, 
      steps: this.state.steps +1,
      message: ''
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
      message: ''
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
          <h3 id="steps">You moved {this.state.steps} {this.state.steps === 1 ? "time" : "times"}</h3>
        </div>
        <div id="grid"> 
        
          <div className= { this.state.x ===1 && this.state.y === 1 ? 'square active' : 'square '}>{this.state.x ===1 && this.state.y === 1 ? 'B' : ''}</div>
         
          <div className={ this.state.x === 2 && this.state.y === 1 ? 'square active' : 'square '}>{this.state.x ===2 && this.state.y === 1 ? 'B' : ''}</div>
          <div className={ this.state.x === 3 && this.state.y === 1 ? 'square active' : 'square '}>{this.state.x ===3 && this.state.y === 1 ? 'B' : ''}</div>
          <div className={ this.state.x === 1 && this.state.y === 2 ? 'square active' : 'square '}>{this.state.x ===1 && this.state.y === 2 ? 'B' : ''}</div>
          <div className={ this.state.x === 2 && this.state.y === 2 ? 'square active' : 'square '}>{this.state.x ===2 && this.state.y === 2 ? 'B' : ''}</div>
          <div className={ this.state.x === 3 && this.state.y === 2 ? 'square active' : 'square '}>{this.state.x ===3 && this.state.y === 2 ? 'B' : ''}</div>
          <div className={ this.state.x === 1 && this.state.y === 3 ? 'square active' : 'square '}>{this.state.x ===1 && this.state.y === 3 ? 'B' : ''}</div>
          <div className={ this.state.x === 2 && this.state.y === 3 ? 'square active' : 'square '}>{this.state.x ===2 && this.state.y === 3 ? 'B' : ''}</div>
          <div className={ this.state.x === 3 && this.state.y === 3 ? 'square active' : 'square '}>{this.state.x ===3 && this.state.y === 3 ? 'B' : ''}</div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick = {this.clickLeft}>LEFT</button>
          <button id="up" onClick = {this.clickUp}>UP</button>
          <button id="right" onClick = {this.clickRight}>RIGHT</button>
          <button id="down"onClick = {this.clickDown}>DOWN</button>
          <button id="reset" onClick = {this.clickReset}>reset</button>
        </div>
        <form onSubmit = {this.onSubmit}>
          <input id="email" value = {this.state.email} type="email" placeholder="type email" onChange = {this.onChange}></input>
          <input id="submit" type="submit"  ></input>
        </form>
      </div>
    )
  }
}
