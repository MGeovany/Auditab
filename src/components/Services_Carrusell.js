import React from "react";
import { Services } from "./Services";

export const Services_Carrisell = () => {

    let Lista = [
        {
            Image : "public/assets/people/Advertise.png",
            Title : "Support",
            LongText : "Free room chat for online support, with no registration you can start"
        },{
            Image : "public/assets/people/Headhunter.png",
            Title : "Analisis",
            LongText : "Easy to use for people who are either new or professional"  
        },{
            Image : "public/assets/people/Allura - in The Park.png",
            Title : "Organization",
            LongText : "Easy to use for people who are either new or professional"  
        }
    ]

    return(
        <div style={{display : "flex"}}>
            <Services {...Lista[0]}/>
            <Services {...Lista[1]}/>
            <Services {...Lista[2]}/>
        </div>
    )
}