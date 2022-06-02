import React from 'react'
import Partners from './Partners'
import ReferMaid from './ReferMaid'
import WantJob from './WantJob'

function Extras(props) {
  return (
    <>
    {
      props.others==1 && 
        <WantJob setZero={props.setZero}/>
    }
  {
    props.others===2 && 
    <ReferMaid setZero={props.setZero} />
  }
  {
    props.others===3 && 
    <Partners setZero={props.setZero}/>
  }


    </>
  )
}

export default Extras