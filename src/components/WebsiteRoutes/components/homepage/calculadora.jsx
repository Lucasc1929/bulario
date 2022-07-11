import React, { useState, createContext, useContext } from 'react'
import "../styles/calculadora.css"
import Calendar from "./Calendar"
import { PeriodData } from '../../../Context/DataContext' 


function Calculadora() { 

    const [localData, setLocalData] = useState({})

    function checkValue(){
        setData(localData)
    }

    const {data, setData} = useContext(PeriodData)

  return (
    <React.Fragment>
        <div className='calculadora'>
            <div>
                <label>Quando começou sua última menstruação?</label><br />
                <input type="date" name="" id="" onChange={(e)=>localData.comeco=e.target.value} />
            </div>
            <br />
            <div>
                <label>Quantos dias durou sua menstruação?</label><br />
                <input type="number" min={0} onChange={(e)=>localData.dias = e.target.value}/>
            </div>
            <br />
            <div>
                <label>Qual a duração do seu ciclo menstrual? </label><br />
                <input type="number" min={0} onChange={(e)=>localData.duracao=e.target.value} />
            </div>
            <a href=""></a>
            <button className='checkvalue-btn' onClick={()=>checkValue()}>Gerar calendário</button>
            <br />
        </div>
    </React.Fragment>
  )
}

export default Calculadora