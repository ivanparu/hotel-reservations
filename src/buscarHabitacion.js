import { mostrarHabitaciones } from "./App.js";

const buscarHabitacion = (habitacionNombre) => {
    const habitacionesBusqueda = habitaciones.filter( habitacion => habitacion.nombre.toLowerCase().includes(habitacionNombre.toLowerCase()) || habitacion.desc.toLowerCase().includes(habitacionNombre.toLowerCase()));
    mostrarHabitaciones(habitacionesBusqueda);
};

const inputSearch = document.getElementById("buscarHabitacion");

inputSearch.addEventListener("input", (e) => {
    buscarHabitacion(e.target.value);
});