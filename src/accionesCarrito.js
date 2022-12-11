import {guardarCarritoStorage} from "./storage.js"

let carrito = [];

const agregarAlCarrito = (habitacionId) => {
    if (chequearHabitacion(habitacionId)) {
        Toastify({
            text: `No se pueden comprar dos habitaciones iguales`,
            position: "center",
            duration: 1000
        }).showToast();

    } else {
        const habitacion = habitaciones.find( habitacion => habitacion.id === habitacionId );
        carrito.push(habitacion)
        Toastify({
            text: `Se agregó el ${habitacion.nombre} al carrito`,
            duration: 2000,
            position: "center"
        }).showToast();
    
        actualizarTotal(carrito)
        mostarCarrito(carrito)
        guardarCarritoStorage();
    }
}



const eliminarHabitacionCarrito = (habitacionId) => {
    const carritoStorage = obtenerCarritoStorage();
    let carritoActualizado = carritoStorage.filter( habitacion => habitacion.id != habitacionId);

    actualizarTotal(carritoActualizado)

    carrito = carritoActualizado
    mostarCarrito(carritoActualizado);
    guardarCarritoStorage();
};

const mostarCarrito = (habitaciones) => {
    const contenedor = document.getElementById("carrito-contenedor");
    contenedor.innerHTML = ""
    habitaciones.forEach(habitacion =>{
        contenedor.innerHTML += `<div class="habitacionEnCarrito">
                                    <p>${habitacion.nombre}</p>
                                    <p>Precio: ${habitacion.precio}</p>
                                    <button id="eliminar${habitacion.id}" class="btn waves-effect waves-ligth boton-eliminar" value="${habitacion.id}">X</button>
                                </div> `}
                                )
}

const actualizarTotal = (carritoActualizado) => {
    let totalCompra = 0
    carritoActualizado.forEach(habitacion => {
        totalCompra += habitacion.precio
    })

    const precioTotal = document.getElementById("precioTotal");
    precioTotal.innerHTML = totalCompra;

};



const chequearHabitacion = (habitacionId) =>{
    if (localStorage.getItem("carrito")) {
        carrito = obtenerCarritoStorage();
    };
    const habitacionRepetida = carrito.find( habitacion => habitacion.id === habitacionId);
    return habitacionRepetida
}


export {eliminarHabitacionCarrito, mostarCarrito,agregarAlCarrito,actualizarTotal};
