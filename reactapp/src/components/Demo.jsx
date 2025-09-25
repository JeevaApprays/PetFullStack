import React, { useState } from 'react'
import Login from './Login'

const Demo = () => {

  const[a,seta] = useState(0)
  
  
const clickadd = () => {
seta(a+1)
}

const clickdec = () => {
  seta(a-1)
}


  return (
  <div>

    <Login message = "Hello this is Props Content" ></Login>

<button onClick={clickadd} >plus</button>
<br/>
<h1 style={{color:"#000000"}}>{a}</h1>

<br/>
<button onClick={clickdec}>minus</button>




  </div>



  )
}

export default Demo