import React, { useState } from 'react'
import axios from 'axios'; 


export default function AppFunctional(props) {

  const [coordinate, setCoordinate] = useState({"x":2, "y":2})
  const [steps, setSteps] = useState(0)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')


  const inputChange = evt => {
    const { value } = evt.target
    setEmail(value); 
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const postPayload = { "x": coordinate.x, "y": coordinate.y, "steps": steps, "email": email}
    axios.post('http://localhost:9000/api/result', postPayload)
    .then (resp => {
      setMessage(resp.data.message)
    })
    .catch(err => {
      setMessage(err.response.data.message)
    })
  }

  const clickRight = () => {
    if (coordinate.x < 3) {
      setSteps(steps + 1 )
      setCoordinate({ ...coordinate, "x": coordinate.x + 1})
      setMessage('');
    }
    else {
      setMessage("You can't go right")
    }
  }

  const clickLeft = () => {
    if (coordinate.x > 1) {
      setSteps(steps + 1 )
      setCoordinate({ ...coordinate, "x": coordinate.x - 1})
      setMessage('');
    }
    else {
      setMessage("You can't go left")
    }
  }

  const clickUp = () => {
    if (coordinate.y > 1) {
      setSteps(steps + 1 )
      setCoordinate({ ...coordinate, "y": coordinate.y - 1})
      setMessage('');
    }
    else {
      setMessage("You can't go up")
    }
  }

  const clickDown = () => {
    if (coordinate.y < 3) {
      setSteps(steps + 1 )
      setCoordinate({ ...coordinate, "y": coordinate.y + 1})
      setMessage('');
    }
    else {
      setMessage("You can't go down")
    }
  }
  const resetClick = () => {
    setCoordinate({'x':2, 'y':2}) 
    setSteps(0);
    setMessage('')
    setEmail('')
  }
  




console.log(setCoordinate)
  return (
    
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates (${coordinate.x}, ${coordinate.y})`}</h3>
        <h3 id="steps">You moved {steps} {steps === 1 ? "time" : "times"}</h3>
      </div>
      <div id="grid">
        <div className={coordinate.x === 1 && coordinate.y === 1 ? 'square active' : 'square'}>{ coordinate.x === 1 && coordinate.y === 1 ? 'B' : ''}</div>
        <div className={coordinate.x === 2 && coordinate.y === 1 ? 'square active' : 'square'}>{ coordinate.x === 2 && coordinate.y === 1 ? 'B' : ''}</div>
        <div className={coordinate.x === 3 && coordinate.y === 1 ? 'square active' : 'square'}>{ coordinate.x === 3 && coordinate.y === 1 ? 'B' : ''}</div>
        <div className={coordinate.x === 1 && coordinate.y === 2 ? 'square active' : 'square'}>{ coordinate.x === 1 && coordinate.y === 2 ? 'B' : ''}</div>
        <div className={coordinate.x === 2 && coordinate.y === 2 ? 'square active' : 'square'}>{ coordinate.x === 2 && coordinate.y === 2 ? 'B' : ''}</div>
        <div className={coordinate.x === 3 && coordinate.y === 2 ? 'square active' : 'square'}>{ coordinate.x === 3 && coordinate.y === 2 ? 'B' : ''}</div>
        <div className={coordinate.x === 1 && coordinate.y === 3 ? 'square active' : 'square'}>{ coordinate.x === 1 && coordinate.y === 3 ? 'B' : ''}</div>
        <div className={coordinate.x === 2 && coordinate.y === 3 ? 'square active' : 'square'}>{ coordinate.x === 2 && coordinate.y === 3 ? 'B' : ''}</div>
        <div className={coordinate.x === 3 && coordinate.y === 3 ? 'square active' : 'square'}>{ coordinate.x === 3 && coordinate.y === 3 ? 'B' : ''}</div>
      </div>
      <div className="info">
        <h3 id="message">{message} </h3>
      </div>
      <div id="keypad">
        <button id="left" onClick = {clickLeft} >LEFT</button>
        <button id="up" onClick = {clickUp} >UP</button>
        <button id="right"onClick = {clickRight} >RIGHT</button>
        <button id="down" onClick = {clickDown} >DOWN</button>
        <button id="reset" onClick = {resetClick}>reset</button>
      </div>
      <form onSubmit = {onSubmit} >
        <input id="email" onChange = {inputChange}  value = {email} type="email" placeholder="type email" ></input>
        <input id="submit" type="submit" ></input>
      </form>
    </div>
  )
}
