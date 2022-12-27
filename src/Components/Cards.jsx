import { Snackbar, Alert } from "@mui/material";
import React from "react";
import Card from "./Card";

export default function Cards({ cities, onClose, bool }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    const handleClick = () => {
      setOpen(bool);
    };

    if (bool) {
      handleClick();
    }
  }, [bool]);

  if (!cities.length) {
    return (
      <>
        <div>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              variant="filled"
              severity="error"
              sx={{ width: "100%" }}
            >
              Ciudad no encontrada
            </Alert>
          </Snackbar>

          <h4>Ingrese Una Ciudad</h4>
        </div>
      </>
    );
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          variant="filled"
          severity="error"
          sx={{ width: "100%" }}
        >
          Ciudad no encontrada
        </Alert>
      </Snackbar>
      {cities &&
        cities.map((c) => (
          <Card
            name={c.name}
            min={c.min}
            max={c.max}
            img={c.img}
            onClose={(e) => onClose(c.id)}
            key={c.id}
            id={c.id}
          />
        ))}
    </div>
  );
}

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
