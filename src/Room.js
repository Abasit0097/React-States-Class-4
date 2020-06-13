import React, { useState } from 'react';


function Room () {
  const [islit, setlit] = useState(false);
  let [age, setAge] = useState(22);

function Update () {
  setlit(!islit);
}


  return (
    <div>
      This is room {islit ? "lit" : "dark"}
      <br/>
      age={age}
      <br/>
      <button onClick={Update}> Toggle Light </button>      
      <br/>
      <button onClick={() => {setAge(++age);}}> Increase age </button>
    </div>
  )
}


export default Room;