import React from 'react'
import '../page/colorpicker.css'
import { useState } from 'react'
function Colorpicker() {
  const [data, setData] = useState("")
  // const style={backgroundColor:data}
  function colorChange(event){
    setData(event.target.value)

  }
  return (
    <div>
      <div className='main'>
        <div>
      <div className='box' style={{backgroundColor:data}}></div>
   <p>enter the color</p>
   <input type="text" onChange={colorChange}/>
   </div>
      </div>
   
    </div>
  )
}

export default Colorpicker