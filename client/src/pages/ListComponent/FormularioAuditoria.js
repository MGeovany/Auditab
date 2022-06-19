import { Elemento } from "./ElementComponent"
import "../ListComponent/ElementModule.css";

// es el formulario de preguntas que se despliga cuando se crea una nueva entrada para la auditoria

export const Lista_Auditable =()=>{

    let Lista_Preguntas = [
        {pregunta : "¿En los momentos anteriores del incidente se estaban realizando las operaciones de la manera que lo describe el reglamento?"},
        {pregunta : "¿Tiene el reglamento del area, protocolos para evitar este tipo de incidentes?"},
        {pregunta : "¿El personal actuo en funcion de lo acontecido?"},
        {pregunta : "¿El equipo se encontraba en buen funcionamiento (mantenimientos, ajustes, reparaciones)?"},
        {pregunta : "¿Todo el personal ha estado haciendo los procedimientos rutinarios en cada uno de sus repectivos lugares de trabajo?"},
        {pregunta : "¿Se han realizado los mantimientos a los servidores y terminales correspondientes?"},
        {pregunta : "¿Todos los equipos se encontraban actualizados correctamente (antivirus, malwares, etc.)?"},
        {pregunta : "¿Se ha reportado anomalias en los sistemas las anteriores semanas? (approx. 1 - 2 Semanas)"},
        {pregunta : "¿Se han estado documentando los cambios a los servidores y terminales?"},
        {pregunta : "¿Se han realizado cambios de ciertas funciones por parte del personal o los encargados directos de los servicios?"}
    ];

        let Mostrar = Lista_Preguntas.map(function(value){
                    return(
                        <Elemento {...value}/>
                    )
                });
        
    
    return(
        <>
        <div className="list_style_card">
            <h1 className="auditable_list_title">CREAR INFORME</h1>

            <div style={{backgroundColor : "#bfc5cf44"}}>
                <br/>
                <div>{Mostrar}</div>
                <br/>
            </div>

            <div className="list_button_posistions">
                    <button className="auditable_element_button2">AUDITAR</button>
                    <button className="auditable_element_button1">CANCELAR</button>
            </div>
            
        </div>
        </>
    )
}