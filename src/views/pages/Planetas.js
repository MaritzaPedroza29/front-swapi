import { CCol, CContainer, CRow } from "@coreui/react";
import { PLANETAS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import CardPlanetas from "../../components/Planetas/CardPlanetas";
import { useEffect, useState } from "react";
import axios from "axios";

const Planetas= ()=>{
    const [planetas, setPlanetas] = useState([]); 
    useEffect(()=>{
        axios.get(PLANETAS_GET_ENDPOINT+"/")
        .then(respuesta => {
            setPlanetas(respuesta.data);
            console.log(respuesta.data);
         }).catch(err => {
            console.error(err);
         })
    }, []);
    console.log(planetas);
    return (
        <CContainer className="mt-3 mb-3">
            <h3 className="text-center mt-3 mb-3">Planetas</h3>
            <CRow className="justify-content-between">
                {planetas.map(planeta =><CCol><CardPlanetas key={planeta.id} planeta={planeta}/></CCol>)}
            </CRow>        
        </CContainer>
    )
}
export default Planetas;