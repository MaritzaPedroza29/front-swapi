import { CCol, CContainer, CRow } from "@coreui/react";
import { PERSONAJES_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import CardPersonajes from "../../components/Personajes/CardPersonajes";
import { useEffect, useState } from "react";
import axios from "axios";

const Personajes= ()=>{
    const [personajes, setPersonajes] = useState([]); 
    useEffect(()=>{
        axios.get(PERSONAJES_GET_ENDPOINT+"/")
        .then(respuesta => {
            setPersonajes(respuesta.data);
            console.log(respuesta.data);
         }).catch(err => {
            console.error(err);
         })
    }, []);
    console.log(personajes);
    return (
        <CContainer className="mt-3 mb-3">
            <h3 className="text-center">Personajes</h3>
            <CRow className="d-flex flex-wrap justify-content-between">
                <CCol xs={12} sm={6} md={4} lg={3}>
                    {personajes.map(personaje =><CardPersonajes key={personaje.id} personaje={personaje}/>)}
                </CCol>
            </CRow>        
        </CContainer>
    )
}
export default Personajes;