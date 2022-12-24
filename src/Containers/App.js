import React, { useState } from "react";
import "./App.css";
import Nav from "../Components/Nav.jsx";
import Cards from "../Components/Cards.jsx";
import { Route } from "react-router-dom";
import About from "../Components/About";
import Ciudad from "../Components/Ciudad";

function App() {
  const [cities, setCities] = useState([]);
  const { REACT_APP_API_KEY } = process.env

  function onSearch(cities) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${REACT_APP_API_KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(id) {
    let ciudad = cities.filter((c) => c.id === parseInt(id));
    if (ciudad.length > 0) return ciudad[0];
    else {
      return null;
    }
  }

  return (
    <div className="App">
      
      <Route path="/">
        <Nav onSearch={onSearch} />
      </Route>
      <Route path="/about" component={About} />
      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      ></Route>
      
        <Route exact path="/">
          <Cards cities={cities} onClose={onClose} />
        </Route>
      
     
    </div>
  );
}

export default App;
