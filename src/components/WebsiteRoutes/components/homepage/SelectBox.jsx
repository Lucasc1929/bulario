import React, {useState} from 'react'
import "../styles/SelectBox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilePdf, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from "axios"

function SelectBox() {

    // Gerar QR Code, resolver bug que não redireciona ao link correto de download

    const [wroteMedicine, setWroteMedicine] = useState("")
    const [medicineData, setMedicineData] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    const [totalElements, setTotalElements] = useState(0)
    const [QRCodeURL, setQRCodeURL] = useState("")
    const [downloadArea, setDownloadArea] = useState(false)

    async function fetchData(){
        setWroteMedicine("")
        setMedicineData([])
        setIsFetched(false)
        setTotalElements(0)
        const response = await axios.get(`https://bula.vercel.app/pesquisar?nome=${wroteMedicine}&pagina=1`)
        setTotalElements(response.totalElements)
        return await response.data.content
    }

    const UserMedicine = async() => {
        const a = await fetchData()
        setMedicineData(a)
        setIsFetched(true)
        setDownloadArea(false)
    }

   

  return (
    <React.Fragment>
        <h1 className="bulario-title">Bulário</h1>
        <div className="search-area">
            <input type="text" name="" className="input-search" id="" list='medicines' onChange={(e)=>setWroteMedicine(e.target.value)} />

            <datalist id='medicines'>
                <option>MICROVLAR</option>
                <option>SELENE</option>
                <option>YASMIN</option>
                <option>DIANE</option>
                <option>LUMI</option>
                <option>SIBLIMA</option>
                <option>YAZ</option>
                <option>MIRELLE</option>
                <option>MINIMA</option>
                <option>ADOLESS</option>
                <option>GESTINOL</option>
                <option>ELANI</option>
                <option>UTROGESTAN</option>
            </datalist>

            <button onClick={()=>UserMedicine()}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
        <div className="listed-medicines-labs" style={isFetched?{"borderRadius":"10px", padding:"0px 10px"}:null}>
            <br />
            {isFetched?medicineData.map((medicine)=>{
                const {cnpj, data, expediente, idBulaPacienteProtegido, idBulaProfissionalProtegido, idProduto, nomeProduto, numProcesso, numeroRegistro, numeroTransacao, razaoSocial} = medicine

                return(
                    <div key={numeroRegistro} className='RenderingMedicine'>
                        <span>
                            <span className='productName' style={{fontWeight:"700"}}>{nomeProduto}</span> <span className="productData">- {razaoSocial}</span>
                            
                            <a href={`https://bula.vercel.app/pdf?id=${idBulaPacienteProtegido}`} target="_blank">
                                <FontAwesomeIcon className='icon download' icon={faDownload}/>
                            </a>

                            <a href={`https://consultas.anvisa.gov.br/#/bulario/q/?nomeProduto=${nomeProduto}&expediente=${expediente}&cnpj=${cnpj}`} target="_blank" onClick={()=>setDownloadArea(true)}>
                                <FontAwesomeIcon className='icon paciente' icon={faFilePdf}/>
                            </a>
                            <br />
                            <br />
                        </span>
                        <hr/>
                    </div>
                )

            }):null}
        </div>
    </React.Fragment>
  )
}

export default SelectBox