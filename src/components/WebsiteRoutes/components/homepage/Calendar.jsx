import React, {useContext, useState} from 'react'
import "../styles/Calendar.css"
import { PeriodData } from '../../../Context/DataContext' 

function CalendarFile() {

  const {data, setData} = useContext(PeriodData)
  const [FormatedData, setFormatedData] = useState({
    dia: 0,
    mes: 0,
    ano: 0
  })

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    result = String(result).substring(4,15)

    switch (result.substring(0,3)){
      case "Jan": return result.replace("Jan","Janeiro" + ",") 
      case "Feb": return result.replace("Feb","Fevereiro" + ",")
      case "Mar": return result.replace("Mar","Março" + ",")
      case "Apr": return result.replace("Apr","Abril" + ",")
      case "May": return result.replace("May","Maio" + ",")
      case "Jun": return result.replace("Jun","Junho" + ",")
      case "Jul": return result.replace("Jul","Julho" + ",")
      case "Aug": return result.replace("Aug","Agosto" + ",")
      case "Sep": return result.replace("Sep","Setembro" + ",")
      case "Oct": return result.replace("Oct","Outubro" + ",")
      case "Nov": return result.replace("Nov","Novembro" + ",")
      case "Dec": return result.replace("Dez","Dezembro" + ",")
    }

    return result
  }

  return(
    <React.Fragment>
      <div className="menstrualData">
        {console.log(data)}
        {data.comeco == "" && data.dias == ""&&data.duracao == "" ?null:
          <div className="show-result">
            Sua próxima menstruação deve vir nos dias:
             <div>
               <b>{addDays(data.comeco, Number(data.duracao)+1)}</b> 
                <span className="and">a</span>
               <b>{addDays(data.comeco, ((Number(data.duracao) + Number(data.dias))))}</b>
             </div>
          </div>}
      </div>
    </React.Fragment>
  )
}

export default CalendarFile