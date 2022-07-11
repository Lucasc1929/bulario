import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "../styles/sidebarstyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faCalendar, faPills, faBars, faClose, faHome } from '@fortawesome/free-solid-svg-icons'
import ShowSideBar from './showSideBar'

function SideBar() {

    const [showSideBar, setShowSideBar] = useState(false)

  return (
    <React.Fragment>
        <ShowSideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
            <div className={showSideBar?"categories":"display-none"}>
                <br />
                <div>
                    <FontAwesomeIcon icon={faHome}/>
                    <Link to={"/"}>
                        Início
                    </Link>
                </div>
                <br />
                <div>
                    <FontAwesomeIcon icon={faPills}/>
                    <Link to={"historia"}>
                        Informações
                    </Link>
                </div>
                <br />
                <div>
                    <FontAwesomeIcon icon={faFileLines} />
                    <Link to={"bulario"}>
                        Bulário
                    </Link>
                </div>
                <br />
                <br />
                <p className='info-data'>* O anti concepcional deve ser tomado no mesmo horário.</p>
            </div>
    </React.Fragment>
  )
}

export default SideBar