import React, {useState} from 'react'
import "./components/styles/styles.css"
import Calculadora from "./components/homepage/calculadora.jsx"
import Calendar from "./components/homepage/Calendar.jsx"
import { PeriodData } from '../Context/DataContext'

function Home() {

  const [data, setData] = useState({
        comeco: "",
        dias: 0,
        duracao: 0
    })

  return (
    <div className='main-webpage'>
      <div className="title">
        <h1>Descomplique <br />
        a sua saúde</h1>
      </div>

      <PeriodData.Provider value={{data, setData}}>
        <Calculadora/>
        <Calendar/>
      </PeriodData.Provider>
      
    </div>
  )
}

export default Home