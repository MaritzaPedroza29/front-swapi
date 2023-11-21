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
            <h3 className="text-center mt-3 mb-3">Personajes</h3>
            <CRow>
                {personajes.map(personaje =><CCol><CardPersonajes key={personaje.id} personaje={personaje}/></CCol>)}
            </CRow>        
        </CContainer>
    )
}
export default Personajes;