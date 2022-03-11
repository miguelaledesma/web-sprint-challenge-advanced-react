import React, { useState } from 'react'
import axios from 'axios'; 



const initialState = {
  x: 2,
  y: 2,
  steps: 0,
  email: ''
}






export default function AppFunctional(props) {

const [value, setValue] = useState(initialState); 

const handleChange = evt => {
  setValue({
    ...value, 
    email: evt.target.value
  })
}

const onSubmit = event => {
  event.preventDefault()
  const postPayload = { x: value.x, y: value.y, steps: value.steps, "email": value.email}
  axios.post(URL,postPayload)
  .then (resp => {
    setValue({
      ...value, 
      message: resp.data.message})
    setValue({
      ...value, 
      email: ''})
  })
  .catch(err => {
    setValue({
      ...value, 
      message: err.resp.data.message})
  })
}







const clickLeft = () => {
  value.x <= 3 && value.x >=2 ?
  setValue({
    ...value, 
    x: value.x -1, 
    steps: value.steps +1,
    message: ''
  })
  : setValue({
    ...value, 
    x: value.x === 3 ? 2 : value.x, 
    message: `You can't go left`
  })
}


console.log(value)
  return (
    
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
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
        <button id="left" onClick = {clickLeft}>LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form onSubmit = {onSubmit}>
        <input id="email" type="email" placeholder="type email"  onChange = {handleChange} ></input>
        <input id="submit" type="submit" onSubmit = {onSubmit}></input>
      </form>
    </div>
  )
}
