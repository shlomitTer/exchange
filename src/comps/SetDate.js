import React, { useEffect, useState } from 'react'

export default function SetDate() {

const [time, setTime] = useState([]);
useEffect(() => {
  update();
}, [])

const update=()=>{
  let dateS =new Date().toLocaleDateString();
  let timeS = new Date().toLocaleTimeString();
   setTime([dateS,timeS])
}
 setInterval(update,1000);
  

  return (
    <div className='py-3'>
      <h4>{time[0]} </h4>
      <h4>{time[1]}</h4>
  

    </div>
  )
}
