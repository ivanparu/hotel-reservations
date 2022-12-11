import {mostrarHabitaciones} from "./App.js";

fetch(`/src/habitaciones.json`)
    .then((response) => response.json())
    .then((habitaciones) => {
        mostrarHabitaciones(habitaciones);
    })
