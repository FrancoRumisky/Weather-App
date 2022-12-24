import React from 'react';
import Card from "./Card"

export default function Cards({cities,onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(!cities){
    return <h1>No hay cuidades disponibles</h1>
  }
  return( 
    <div>
      {
        cities && cities.map(c => (
          <Card name={c.name} min={c.min} max={c.max} img={c.img} onClose={(e)=> onClose(c.id)}
          key={c.id} id={c.id}/>
        ))
       
      }
    </div>
  )
};

// class Cards extends React.Component{
//  render(){
//    if(!this.props.cities){
//      return <h1>No hay cuidades disponibles</h1>
//     }
//    return(
//   <div>
//    {
//     cities && cities.map(c => (
//       <Card name={c.name} min={c.main.temp_min} max={c.main.temp_max} img={c.weather[0].icon} onClose={() => alert(c.name)}
//       key={c.id}/>
//        ))
   
//    }
//     </div>
//    )
//  }
// }