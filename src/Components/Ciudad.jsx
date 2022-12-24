import React from "react";
import style from "./styles/Ciudad.module.css"


export default function Ciudad({city}) {
    if (city === null)return <div>No se encontro la cuidad</div>
    return (
        <div className={style.ciudad}>
                <h2>{city.name}</h2>
                <hr></hr>
                <div className={style.name}>
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            
        </div>
    )
}


// class City extends React.Component{
//     constructor(props)
//         super(props)
//         this.state = {}
// }

//     render(){
//         return (
//             <div className={style.ciudad}>
//                 <div className="container">
//                     <h2>{city.name}</h2>
//                     <div className="info">
//                         <div>Temperatura: {Math.round(city.temp - 273.15)} ºC</div>
//                         <div>Clima: {city.weather}</div>
//                         <div>Viento: {city.wind} km/h</div>
//                         <div>Cantidad de nubes: {city.clouds}</div>
//                         <div>Latitud: {city.latitud}º</div>
//                         <div>Longitud: {city.longitud}º</div>
//                     </div>
//             </div>
//         </div>
//         )
//     }