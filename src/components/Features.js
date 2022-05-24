import React from 'react';
import css from "./Features.module.css";

export const Features = (prop) =>{


  return (
    <>
      <div className={css.card_Features}>

        <div>
          <img src = {prop.Image}></img>
        </div>   

        <div className= {css.DivF}>
          <h4 className= {css.Title} >{prop.Title}</h4>
          <p className={css.longtext}>{prop.LongText}</p>
        </div>

      </div>

    </>
  )
}
