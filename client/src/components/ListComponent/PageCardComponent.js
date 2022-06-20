import React from "react";

export const PageCard = () =>{

    let prop = ["Enero 2022", "Febrero 2022", "Marzo 2022", "Abril 2022", "Mayo 2022"];

    let Lista_audit = prop.map(function(value){
        return(
            <div className="auditpage_border">
                <div style={{display : "flex"}}>
                    <p className="auditpage_card_listaudit">{value}</p>
                    <p className="auditpage_card_report">report</p>
                    <p className="auditpage_p_1">mirar</p>
                </div>
            </div>
            
        )
    })


    return(
        <>
        <div>

            <div className="auditpage_card">
                <div style={{margin : "50px 20px 20px 20px"}}>{Lista_audit}</div>
            </div>

        </div>

        </>
    )

}

export const AuditorForm = () =>{
    
    return(
        <>
        <div>
            <div className="auditpage_card">
                
                <div style={{margin : "70px 0px 0px 60px"}}>

                    <p className="auditpage_p_1">Nombre del auditor</p>
                    <textarea className="auditpage_auditfrom_textarea"></textarea>

                    <p className="auditpage_p_1">fecha</p>
                    <textarea className="auditpage_auditfrom_textarea"></textarea>

                    <div style={{margin : "45px 0px 0px 55px"}}>
                        <button className="auditpage_auditfrom_button">Crear Auditable</button>
                    </div>
                    
                </div>
                

            </div>
        </div>
        </>
    )
}