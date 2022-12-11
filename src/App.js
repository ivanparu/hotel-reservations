import {agregarAlCarrito} from "./accionesCarrito.js";

const mostrarHabitaciones = (habitaciones) => {
    const contenedorHabitacion = document.getElementById("habitacion-contenedor");

    contenedorHabitacion.innerHTML= "";

    habitaciones.forEach(habitacion => {
    const div = document.createElement('div');
    div.style = `width : 18rem`;
    div.classList.add('card');
            div.innerHTML += `
                                    <img src="${habitacion.img}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${habitacion.nombre}</h5>
                                    <p class="card-text">${habitacion.desc}</p>
                                    <a href="#" class="btn btn-primary" id="boton${habitacion.id}">Comprar</a>
                                </div>
                    `
    contenedorHabitacion.appendChild(div);



    const boton = document.getElementById(`boton${habitacion.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(habitacion.id);
    });
    });
}; 

export {mostrarHabitaciones};