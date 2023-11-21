import { CCard, CCardBody, CCardTitle, CRow, CCol, CCardText, CCardHeader} from '@coreui/react';
import '../../assets/css/index.css';

const CardPersonajes= ({personaje})=>{
    if (!personaje) {
        return null; 
    }

    const { nombre, especie, altura, peso } = personaje;

    return(
            <CCard className='mio-card'>
                <CCardHeader>
                    <CCardTitle className='text-center'>{personaje.nombre}</CCardTitle>
                </CCardHeader>
                <CCardBody>
                    <CCardText>especie:{personaje.especie}</CCardText>
                    <CCardText>altura:{personaje.altura}</CCardText>
                    <CCardText>peso:{personaje.peso}</CCardText>
                </CCardBody>
            </CCard>
    )
}

export default CardPersonajes