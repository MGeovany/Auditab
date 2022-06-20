import react from "react";
import "./ElementModule.css"
import { PageCard, AuditorForm } from "./PageCardComponent";

// Es la primera pagina del sumary donde se crean y se ven los reportes de la base de datos

export const AuditPage = () =>{

    return(
        <>
        <div>
            <p className="auditpage_p">Sumary</p>

            <div style={{display : "flex", marginRight: "3rem"}}>
                <p className="auditpage_title1">AUDIT </p>
                <p className="auditpage_title2"> YOUR COMPANY</p>
            </div>

            <div className="list_style_card">
                <p className="auditable_list_title2">REPORT SENT</p>

                <div style={{backgroundColor : "#bfc5cf44", display : "flex"}}>
                    <br/>
                        <PageCard/>
                        <AuditorForm/>
                    <br/>
                <div>

                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}