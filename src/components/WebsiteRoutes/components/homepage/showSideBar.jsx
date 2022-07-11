import React from 'react'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function showSideBar(props) {
  return (
    <div className="hamburguer-button" onClick={()=>props.setShowSideBar(!props.showSideBar)} style={{backgroundColor:"none"}}>
      <FontAwesomeIcon icon={props.showSideBar?faClose:faBars}  />   
    </div>
  )
}

export default showSideBar