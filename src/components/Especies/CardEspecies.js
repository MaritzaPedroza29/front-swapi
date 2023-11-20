import { CCard, CButton, CCardBody, CCardTitle, CCardHeader, CCardText, CImage } from '@coreui/react';
import "../../assets/css/index.css";

const CardEspecies= ({especie})=>{
    console.log(especie);
    if (!especie) {
        return null; 
    }

    const { nombre, idioma, esperanza_vida, designacion, clasificacion, altura_promedio } = especie;

    return(
        <CCard className='mio-cardpeliculas'>
            <CCardHeader>
                <CCardTitle>{especie.nombre}</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CCardText>Idioma: {especie.idioma}</CCardText>
                <CCardText>Esperanza_vida: {especie.esperanza_vida}</CCardText>
                <CCardText>Desiganción: {especie.designacion}</CCardText>
                <CCardText>Clasificacion: {especie.clasificacion}</CCardText>
                <CCardText>Altura_promedio: {especie.altura_promedio}</CCardText>
            </CCardBody>
        </CCard>
    )
}

export default CardEspecies