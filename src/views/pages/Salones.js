import { CCol, CContainer, CRow } from "@coreui/react";
import CardSalones from "../../components/salones/CardSalones";

const Salones= ()=>{
    return (
        <CContainer className="mt-3 mb-3">
            <CRow className="justify-content-md-center">
                <CCol sm="12" md="8" lg="6">
                    <CardSalones></CardSalones>
                </CCol>
            </CRow>        
        </CContainer>
    )
}
export default Salones;