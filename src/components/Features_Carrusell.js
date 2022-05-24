import React from "react";
import { Features } from "./Features";


export const Features_Carrusell = () =>{

    let Lista = [
        {
            Image : "../../public/assets/icons/icons8-browse-page-48.png",
            Title : "User Friendly",
            LongText: "Easy to use for people who are either new or professional"
        },{
            Image : "../../public/assets/icons/icons8-flexibility-64.png",
            Title : "Flexibility",
            LongText : "Tasking can be opened on all existing websites"
        },{
            Image : "../../public/assets/icons/icons8-free-64.png",
            Title : "100% free",
            LongText : "This web app is completely free, without any changes"
        }
    ]

    return(
        <>
        <div style={{display : "flex"}}>
            <Features {...Lista[0]}/>
            <Features {...Lista[1]}/>
            <Features {...Lista[2]}/>
        </div>
        </>
    )




}