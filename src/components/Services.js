import React from 'react'
import css from "./Services.module.css"

export const Services = (prop) => {


  return (
    <>
      <div className = {css.card_Services}>

        <img src= {prop.Image}/>

        <div className= {css.SerPos}>

          <h4 className={css.SerTitle}>{prop.Title}</h4>

          <p className={css.SerLongText}>{prop.LongText}</p>

          <h7>Read More</h7>
          
        </div>
        

      </div>
    </>
  )
}
