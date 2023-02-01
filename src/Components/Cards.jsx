import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import Card from "./Card";
import Skeleton from "@mui/material/Skeleton";

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
        <div style={{
    display: "flex",
    justifyContent: "center"
}}>
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

          <Skeleton variant="rectangular" width={500} height={300} animation="wave" sx={{ bgcolor: 'rgba(34, 34, 34, 0.45)', margin:"20px" }} />
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
      
      {cities.length > 0 &&
        cities.map((c) => (
          <Card
            name={c.name}
            min={c.min}
            max={c.max}
            img={c.img}
            onClose={(e) => onClose(c.id)}
            key={c.id}
            id={c.id}
            weather={c.weather}
            temp={c.temp}
          />
        ))}
    </div>
  );
}
