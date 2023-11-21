import { CCol, CContainer, CRow } from "@coreui/react";
import { PELICULAS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import CardPeliculas from "../../components/Peliculas/CardPeliculas";
import { useEffect, useState } from "react";
import axios from "axios";

const Peliculas= ()=>{
    const [peliculas, setPeliculas] = useState([]); 
    useEffect(()=>{
        axios.get(PELICULAS_GET_ENDPOINT+"/")
        .then(respuesta => {
            setPeliculas(respuesta.data);
            console.log(respuesta.data);
         }).catch(err => {
            console.error(err);
         })
    }, []);
    console.log(peliculas);
    return (
        <CContainer className="mt-3 mb-3">
            <h3 className="text-center mt-3 mb-3">Peliculas</h3>
            <CRow className="justify-content-between">
                {peliculas.map(pelicula =><CCol><CardPeliculas key={pelicula.id} pelicula={pelicula}/></CCol>)}
            </CRow>        
        </CContainer>
    )
}
export default Peliculas;