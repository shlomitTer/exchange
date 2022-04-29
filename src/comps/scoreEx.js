import React from 'react'

export default function ScoreEx(props) {
 
  return (

    <div className='m-5 '>
      <h1>{props.show.input}{props.show.selectFrom}  =  {props.show.res}{props.show.selectTo}</h1>

    </div>
  )
}
