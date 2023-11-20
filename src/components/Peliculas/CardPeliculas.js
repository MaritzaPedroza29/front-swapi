import { CCard, CButton, CCardBody, CCardTitle, CCardHeader, CCardText, CImage } from '@coreui/react';
import "../../assets/css/index.css";

const CardPeliculas= ({pelicula})=>{
    console.log(pelicula);
    if (!pelicula) {
        return null; 
    }

    const { titulo, director, lanzamiento } = pelicula;

    return(
        <CCard className='mio-cardpeliculas'>
            <CCardHeader>
                <CCardTitle>{pelicula.titulo}</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CCardText>director:{pelicula.director}</CCardText>
                <CCardText>lanzamiento:{pelicula.lanzamiento}</CCardText>
            </CCardBody>
        </CCard>
    )
}

export default CardPeliculas