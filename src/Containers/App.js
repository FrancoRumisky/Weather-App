import React, { useState } from "react";
import "./App.css";
import Nav from "../Components/Nav.jsx";
import Cards from "../Components/Cards.jsx";
import { Route } from "react-router-dom";
import About from "../Components/About";
import Ciudad from "../Components/Ciudad";
import { getUserLocation } from "../Helpers/getUserLocation.ts";

function App() {
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);
  const { REACT_APP_API_KEY } = process.env;

  function onSearch(citie) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${citie}&appid=${REACT_APP_API_KEY}&units=metric`
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
          const ids = cities.map((c) => c.id);
          if (!ids.includes(ciudad.id)) {
            setCities((oldCities) => [...oldCities, ciudad]);
          }
          return null;
        } else {
          setOpen(true);
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

  React.useEffect(() => {
    getUserLocation().then((latlng) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${REACT_APP_API_KEY}&units=metric`
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
            const ids = cities.map((c) => c.id);
            if (!ids.includes(ciudad.id)) {
              setCities((oldCities) => [...oldCities, ciudad]);
            }
            return null;
          } else {
            return;
          }
        })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }
  }, [open]);

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
        <Cards cities={cities} onClose={onClose} bool={open} />
      </Route>
    </div>
  );
}

export default App;
