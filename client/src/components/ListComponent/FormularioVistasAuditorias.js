import react from "react";
import "./ElementModule.css";
import { List_Show_Data } from "./ElementComponent";

// muestra todos los datos de las reportes que se han guardado en el base de datos

export const Show_Audit_Table = () =>{

    let valores = [{pregunta : "hola, este es un comentario de prueva", comment : "ESte es otro comentario de prueba"},
    {pregunta : "hola, este es un comentario de prueva", comment : "ESte es otro comentario de prueba"},
    {pregunta : "hola, este es un comentario de prueva", comment : "ESte es otro comentario de prueba"},
    {pregunta : "hola, este es un comentario de prueva", comment : "ESte es otro comentario de prueba"},];


    let datos = valores.map(function(value){
        return(
            <List_Show_Data {...value}/>
        )
    })
    
    return(
        <>
        <div>
            <div className="list_style_card">

            <div style={{display : "flex", marginLeft: "3rem", marginBottom : "0px"}}>
                <p className="auditpage_title1">VIEW </p>
                <p className="auditpage_title2"> REPORT</p>
            </div>

            <p className="auditpage_p_1" style={{marginLeft: "3rem"}}>Informacion de la auditoria</p>

                <div style={{backgroundColor : "#F8F9FB", marginBottom : "80px"}}>
                    <br/>
                    <div>{datos}</div>
                    <br/>
                </div>
                
            </div>
        </div>
        </>
    )
}