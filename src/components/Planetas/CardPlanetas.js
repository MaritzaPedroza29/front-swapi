import { CCard, CButton, CCardBody, CCardTitle, CCardHeader, CCardText, CImage } from '@coreui/react';
import "../../assets/css/index.css";

const CardPlanetas= ({planeta})=>{
    console.log(planeta);
    if (!planeta) {
        return null; 
    }

    const { nombre, clima, terreno} = planeta;

    return(
        <CCard className='mio-card'>
            <CCardHeader>
                <CCardTitle className='text-center'>{planeta.nombre}</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CCardText>Clima:{planeta.clima}</CCardText>
                <CCardText>Terreno:{planeta.terreno}</CCardText>
            </CCardBody>
        </CCard>
    )
}

export default CardPlanetas