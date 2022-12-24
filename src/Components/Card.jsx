import React from 'react';
import style from "./styles/Card.module.css"
import { NavLink } from "react-router-dom"




export default function Card({name,min,max,onClose,img,id}) {
  let url =`http://openweathermap.org/img/wn/${img}@2x.png`;
  // acá va tu código
  return ( 
    
      <div className={style.card}>
        <button onClick={onClose}> x </button>
        <div className={style.nameContainer}>
        <NavLink to={`/ciudad/${id}`} activeClassName={style.selected} >
        <h2 className={`${style.name} ${name.replace(/\s+/g, '').length >= 21 ? style.nameGreatter : ""}`}> {name} </h2>
        </NavLink>
        <img className={style.img} src={url} alt={img} />
        <p> {min}°C  {max}°C </p>
         </div>
      </div>  
  )
};

// class Card extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1> {name} <button onClick={onClose}>x</button>
//          <p>Min {min} Max {max}</p>
//          </h1>
//          <img src={url} alt={img} />
//       </div>
//   )
//   }
// }