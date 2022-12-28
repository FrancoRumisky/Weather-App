import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import Card from "./Card";
import earth from "../img/lg.gif"
import style from "./styles/Cards.module.css"

export default function Cards({ cities, onClose, bool }) {
  const [open, setOpen] = React.useState(false);
  console.log(open);

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

          <img className={style.earth} src={earth} alt="earth" />
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
