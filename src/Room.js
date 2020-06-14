import React, { useState } from 'react';
import './Room.css';


function Room () {
  const [islit, setlit] = useState(false);
  let [temprature, setAge] = useState(72);

function On () {
  setlit(true);
}

function Off () {
  setlit(false);
}

  return (
    <div className={`room ${islit? "lit" : "dark"}`}>
      <p>
        There are two buttons for light with functions of keeping light on and off.<br/>
        When Light is off, background changes to Dark mode and vice versa.
      </p>
      This is room {islit ? "lit" : "dark"}
      <br/>
      <button onClick={On}> Light On </button>
      <button onClick={Off}> Light Off </button>   
      <br/>
      
      <br/>
      <br/>
      <br/>
      <p>
        Room Temprature is set on 72, as per assignment and buttons will increase or decreacse<br/>
        temparture accordingly.
      </p>
      <br/>
      Room Temparture={temprature}   
      <br/>
      <button onClick={() => {setAge(++temprature);}}> + temprature </button>
      <button onClick={() => {setAge(--temprature);}}> - temprature </button>


    </div>
  )
}


export default Room;