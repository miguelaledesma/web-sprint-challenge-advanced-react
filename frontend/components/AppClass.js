import React from 'react'
import axios from 'axios'; 



const initialState = {
  coordinate: {'x':2, 'y':2},
  steps: 0,
  email: '', 
  message: ''
}


export default class AppClass extends React.Component {
  state = initialState



  onChange = evt => {
    const { value } = evt.target
    this.setState({...this.state, email: value}) 
  }

onSubmit = evt => {
  evt.preventDefault()
  const postPayload = { "x": this.state.coordinate.x, "y": this.state.coordinate.y, "steps": this.state.steps, "email": this.state.email}
  axios.post('http://localhost:9000/api/result', postPayload)
  .then(resp => {
    this.setState({...this.state, message: resp.data.message})
    this.setState({...this.state, email: ''})
  })
  .catch(err => {
    this.setState({...this.setState, message: err.resp.data.message})
  })
}
 

clickLeft = () => {
  if(this.state.coordinate.x > 1) {
    this.setState({ ...this.state,
      steps: this.state.steps + 1,
      coordinate: {...this.state.coordinate,
       "x": this.state.coordinate.x - 1},
       message: '' })
  } else {
    this.setState({ ...this.state, 
      message: "You can't go left" })
  }
}

clickRight = () => {
  if(this.state.coordinate.x < 3 ) {
    this.setState({ ...this.state,
      steps: this.state.steps +1,
      coordinate: {...this.state.coordinate,
       "x": this.state.coordinate.x + 1},
       message: '' })
  } else {
    this.setState({ ...this.state, 
      message: "You can't go right" })
  }
}

clickUp = () => {
  if(this.state.coordinate.y > 1) {
    this.setState({ ...this.state,
      steps: this.state.steps + 1,
      coordinate: {...this.state.coordinate,
       "y": this.state.coordinate.y - 1},
       message: '' })
  } else {
    this.setState({ ...this.state, 
      message: "You can't go up" })
  }
}

clickDown = () => {
  if(this.state.coordinate.y < 3) {
    this.setState({ ...this.state,
      steps: this.state.steps + 1,
      coordinate: {...this.state.coordinate,
       "y": this.state.coordinate.y + 1},
       message: '' })
  } else {
    this.setState({ ...this.state, 
      message: "You can't go down" })
  }
}

clickReset = () => {
  this.setState({
    ...this.state, 
    coordinate: {'x':2, 'y':2},
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
          <h3 id="coordinates">{`Coordinates (${this.state.coordinate.x}, ${this.state.coordinate.y})`}</h3>
          <h3 id="steps">You moved {this.state.steps} {this.state.steps === 1 ? "time" : "times"}</h3>
        </div>
        <div id="grid"> 
        
          <div className= { `${this.state.coordinate.x === 1 && this.state.coordinate.y === 1 ? 'square active' : 'square'}`}>{this.state.coordinate.x === 1 && this.state.coordinate.y === 1 ? 'B' : ""}</div>
         
          <div className={`${this.state.coordinate.x === 2 && this.state.coordinate.y === 1 ? 'square active' : 'square'}`}>{this.state.coordinate.x === 2 && this.state.coordinate.y === 1 ? "B" : ""}</div>
          <div className= {`${this.state.coordinate.x === 3 && this.state.coordinate.y === 1 ? 'square active' : 'square'}` }>{this.state.coordinate.x === 3 && this.state.coordinate.y === 1 ? "B" : ""}</div>
          <div className={ `${this.state.coordinate.x === 1 && this.state.coordinate.y === 2 ? 'square active' : 'square'}`}>{this.state.coordinate.x === 1 && this.state.coordinate.y === 2 ? "B" : ""}</div>
          <div className={ `${this.state.coordinate.x === 2 && this.state.coordinate.y === 2 ? 'square active' : 'square'}`}>{this.state.coordinate.x === 2 && this.state.coordinate.y === 2 ? "B" : ""}</div>
          <div className={ `${this.state.coordinate.x === 3 && this.state.coordinate.y === 2 ? 'square active' : 'square'}`}>{this.state.coordinate.x === 3 && this.state.coordinate.y === 2 ? "B" : ""}</div>
          <div className={ `${this.state.coordinate.x === 1 && this.state.coordinate.y === 3 ? 'square active' : 'square'}`}>{this.state.coordinate.x === 1 && this.state.coordinate.y === 3 ? "B" : ""}</div>
          <div className={`${this.state.coordinate.x === 2 && this.state.coordinate.y === 3 ? 'square active' : 'square'}`}>{this.state.coordinate.x === 2 && this.state.coordinate.y === 3 ? "B" : ""}</div>
          <div className={ `${this.state.coordinate.x === 3 && this.state.coordinate.y === 3 ? 'square active' : 'square'}`}>{this.state.coordinate.x === 3 && this.state.coordinate.y === 3 ? "B" : ""}</div>
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
        <form onSubmit = {this.onSubmit} >
          <input id="email" onChange = {this.onChange} value = {this.state.email} type="email" placeholder="type email" ></input>
          <input id="submit" type="submit"  ></input>
        </form>
      </div>
    )
  }
}
