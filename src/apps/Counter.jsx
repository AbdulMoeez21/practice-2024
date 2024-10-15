import React, { useState } from 'react'

const Counter = () => {


const [counter, setCounter] = useState(5)


const addValue=()=>{

    console.log(counter+1)


    if(counter<20){

      setCounter(counter+1)
    }
}

const removeValue=()=>{
  if(counter>0){
    setCounter(counter-1)
  }

}


  return (
    <>
    <h1>Counter:  {counter} </h1>

<button className='' onClick={addValue}>Add Value</button>
<button onClick={removeValue}>Remove Value </button>
</>
  )
}

export default Counter