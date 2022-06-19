import react from "react";
import "./ElementModule.css"

// este es para el formulario de ingreso del comentario
export const Elemento = (props) =>{

    let holder = "  COMENTARIOS ADICIONALES"

    return(
        <>
        <div className="element_style_card">

            <div style={{display : "flex"}}>

                <p className="audittable_list_YN">SI</p>
                <input type={"checkbox"} className="auditable_element_box"/>

                <p className="audittable_list_YN">NO</p>
                <input type={"checkbox"} className="auditable_element_box"/>
            </div>
        
            <p className="auditable_element_question">{props.pregunta}</p>

            <div>
                <textarea className="auditable_element_areatext" placeholder={holder}></textarea>
            </div>
            
            
        </div>
        </>
    )

}

// este para mostrar los comentario ya ingresado guardados en la BD
export const List_Show_Data = (prop) =>{
    
    return(
        <>
        <div className="element_style_card">

            <div style={{display : "flex"}}>

                <p className="audittable_list_YN">SI</p>
                <input type={"checkbox"} className="auditable_element_box"/>

                <p className="audittable_list_YN">NO</p>
                <input type={"checkbox"} className="auditable_element_box"/>
            </div>
        
            <p className="auditable_element_question">{prop.pregunta}</p>

            <div>
                <p className="auditable_element_areatext">{prop.comment}</p>
            </div>
            
            
        </div>
        </>
    )

}

// este no me acuerdo
export const AuditPage_card_list = (prop) =>{
    return(
        <>
            <div>
                <p className="auditpage_card_title1">{prop.fecha}</p>
                <p className="auditpage_card_title2">report</p>
                <p className="aditpage_card_bttn">view</p>

            </div>
        </>
    )

}