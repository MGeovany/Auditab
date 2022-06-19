import react from "react";
import "./ElementModule.css"
import { ElementShow } from "./ElementComponent";

// muestra todos los datos de las reportes que se han guardado en el base de datos

export const Show_Audit_Table = (prop) =>{

    let datos = prop.map(function(value){
        return(
            <ElementShow {...value}/>
        )
    })
    
    return(
        <>
        <div>
            <p>prueba</p>
            <div className="list_style_card">
                <br/>
                <div>{datos}</div>
                <br/>
            </div>
        </div>
        </>
    )
}