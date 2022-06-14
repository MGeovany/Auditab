import react from "react";
import "./ElementModule.css"


export const Elemento = (props) =>{

    return(
        <>
        <div className={"Element_Style"}>

            <input type={"checkbox"} className={"boxes"}></input>

            <p className={"Texto"}>{props.pregunta}</p>

            <p>{props.comentario}</p>

            <div>
                <textarea className={"lista_auditable_areatexto"}>ingrese</textarea>
            </div>
            
            
        </div>
        </>
    )

}