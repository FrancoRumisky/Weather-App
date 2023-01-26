import React from "react";
import style from "./styles/Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({ name, min, max, onClose, img, id, weather,temp }) {
  let url = `http://openweathermap.org/img/wn/${img}@2x.png`;

  var today = new Date();
  var options = { weekday: "long", hour: "numeric", minute: "numeric" };
  var now = today.toLocaleString("es", options);
  console.log(now);

  return (
    <div className={style.card}>
      <button onClick={onClose}> x </button>
      <NavLink to={`/ciudad/${id}`} activeClassName={style.selected}>
        <div className={style.infoTop}>
          <div className={style.left}>
            <img className={style.img} src={url} alt={img} />
            <p>
              {temp}°C
            </p>
          </div>
          <div className={style.nameContainer}>
            <h2
              className={`${style.name} ${
                name.replace(/\s+/g, "").length >= 21 ? style.nameGreatter : ""
              }`}
            >
              {name}
            </h2>
            <span>{now}</span>
            <span>{weather}</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

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
