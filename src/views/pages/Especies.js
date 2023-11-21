import { CCol, CContainer, CRow } from "@coreui/react";
import { ESPECIES_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import CardPeliculas from "../../components/Especies/CardEspecies";
import { useEffect, useState } from "react";
import axios from "axios";

const Especies= ()=>{
    const [especies, setEspecies] = useState([]); 
    useEffect(()=>{
        axios.get(ESPECIES_GET_ENDPOINT+"/")
        .then(respuesta => {
            setEspecies(respuesta.data);
            console.log(respuesta.data);
         }).catch(err => {
            console.error(err);
         })
    }, []);
    console.log(especies);
    return (
        <CContainer className="mt-3 mb-3">
            <h3 className="text-center mt-3 mb-3">Especies</h3>
            <CRow className="justify-content-between">
                {especies.map(especie =><CCol><CardPeliculas key={especie.id} especie={especie}/></CCol>)}
            </CRow>        
        </CContainer>
    )
}
export default Especies;