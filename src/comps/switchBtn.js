import React from 'react'
import { BsArrowDownUp } from "react-icons/bs";

export default function SwitchBtn(props) {
  return (

<button onClick={() => {
          props.setSelectFrom(props.selectTo); props.setSelectTo(props.selectFrom);}} className='btn btn-outline-warning py-2 my-2 col-4'>
          
          <BsArrowDownUp />

        </button>

 
     
 

  )
}
