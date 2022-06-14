import { Elemento } from "./ElementModule"
import "../ListComponent/ElementModule.css";


export const Lista_module =()=>{

    const texto_largo = "Lea atentamente las preguntas y responda en funcion de los reglamentes correspondientes. Es importante que una vez terminada la encuesta los usuarios sin acceso de administrador no podran agragar o cambiar los datos que se hara en esta encuesta."
    
    let Lista_Preguntas = [
        {pregunta : "¿Era seguro el método o procedimiento utilizado?",
         comentario : ""},
        {pregunta : "¿Fueron utilizados los equipos y las herramientas, en caso de que los empleados si contasen con ellas?",
         comentario : ""},
        {pregunta : "¿La máquina o el aparato utilizados están diseñados de forma adecuada?",
         comentario : ""},
        {pregunta : "¿Ha seguido el trabajador procedimientos operativos debidos?",
         comentario : ""},
        {pregunta : "¿Se realizó el trabajo bajo la supervisión adecuada?",
         comentario : ""},
        {pregunta : "¿Se ha realizado el mantenimiento del equipo regularmente?",
         comentario : ""},
         {pregunta : "¿Las condiciones o preocupaciones han sido reportadas de forma oportuna?",
         comentario : ""},
        {pregunta : "¿Fueron utilizados los equipos y las herramientas, en caso de que los empleados si contasen con ellas?",
         comentario : ""},
        {pregunta : "¿Estaban claramente identificados los productos empleados?",
         comentario : ""},
        {pregunta : "¿El problema se puede atribuir a falta de higiene o negligencia en la limpieza?",
         comentario : ""}
    ];

        let Mostrar = Lista_Preguntas.map(function(value){
                    return(
                        <Elemento {...value}/>
                    )
                });
        
    
    return(
        <>
        <div className={"List_Style"}>
            <h1 className={"Texto2"}>AUDITABLE</h1>

            <h4 style={{margin: "10px 4% 10px 4%", color : "black"}}>{texto_largo}</h4>

            <p className="PosF">Si/no</p>

            <div>{Mostrar}</div>

            <div style={{display : "flex"}}>
                <button className="buttonX">Cargar Formulario</button>
                <button className="buttonX">Cancelar</button>
            </div>
        </div>
        </>
    )
}