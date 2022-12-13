import { mostrarHabitaciones } from "./App.js";

const buscarHabitacion = (habitacionNombre) => {
    fetch(`/src/habitaciones.json`)
        .then((response) => response.json())
        .then((habitaciones) => {
        const habitacionesBusqueda = habitaciones.filter( habitacion => habitacion.nombre.toLowerCase().includes(habitacionNombre.toLowerCase()) || habitacion.desc.toLowerCase().includes(habitacionNombre.toLowerCase()));
        mostrarHabitaciones(habitacionesBusqueda);})
};

const inputSearch = document.getElementById("buscarHabitacion");

inputSearch.addEventListener("input", (e) => {
    buscarHabitacion(e.target.value);
});

const mayorAMenor = () => {
    fetch(`/src/habitaciones.json`)
        .then((response) => response.json())
        .then ((habitaciones) => {
            const ordenarHabitaciones = habitaciones.sort((a,b) => {
                if (a.precio > b.precio){
                    return 1;
                }
                if (a.precio < b.precio){
                    return -1
                }
            })
            mostrarHabitaciones(ordenarHabitaciones)
        })
}

const menorAMayor = () => {
    fetch(`/src/habitaciones.json`)
        .then((response) => response.json())
        .then ((habitaciones) => {
            const ordenarHabitaciones = habitaciones.sort((a,b) => {
                if (a.precio < b.precio){
                    return 1;
                }
                if (a.precio > b.precio){
                    return -1
                }
            })
            mostrarHabitaciones(ordenarHabitaciones)
        })
}


const btnOrdenarMayor = document.getElementById("mayorAMenor")
const btnOrdenarMenor = document.getElementById("menorAMayor")

btnOrdenarMayor.addEventListener('click', () => {
    mayorAMenor();
});

btnOrdenarMenor.addEventListener('click', () => {
    menorAMayor();
});