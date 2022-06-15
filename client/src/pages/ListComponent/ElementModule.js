import react from "react";
import "./ElementModule.css"


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