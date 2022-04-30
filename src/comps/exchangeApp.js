import React, { useState } from 'react'
import SetDate from './SetDate'
import InputEx from './inputEx'
import ScoreEx from './scoreEx'

export default function ExchangeApp(props) {
  
  const [show, setShow] = useState({});

  return (
    

    <React.Fragment>
      <h1 className='py-5'> CURRENCY  <strong className='strong'>EXCHANGE</strong>  CALULATOR</h1>
      <div className='p-2 shadow main '>
      <SetDate />
      <InputEx setShow={setShow}/>
     <ScoreEx show={show}/>
    </div>
    </React.Fragment >




  )

}
