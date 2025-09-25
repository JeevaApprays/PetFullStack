import React, { useState } from 'react'

const Demo = () => {

const {a,seta} = useState(1);

const clickadd = () => {
seta(a+1)
}

const clickdec = () => {
  seta(a-1)
}


  return (
  <div>

<button onClick={clickadd} >plus</button>
<br/>
<h1>{a}</h1>

<br/>
<button onClick={clickdec}>minus</button>




  </div>



  )
}

export default Demo