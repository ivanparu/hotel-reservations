const buscarHabitacion = (habitacionNombre) => {
    const habitacionesBusqueda = habitaciones.filter( habitacion => habitacion.nombre.toLowerCase().includes(habitacionNombre.toLowerCase()) || habitacion.desc.toLowerCase().includes(habitacionNombre.toLowerCase()));
    mostrarHabitaciones(habitacionesBusqueda);
};


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

const modalContenedor = document.querySelector('.modalContenedor');
const abrirCarrito = document.getElementById('abrirCarrito');
const cerrarCarrito = document.getElementById('btnCerrarCarrito');
const modalCarrito = document.querySelector('.modalCarrito')

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Va a eliminar la habitacion de su carrito',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            icon: 'warning',
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarHabitacionCarrito(e.target.value);
                Swal.fire(
                    'Eliminado',
                    'La habitacion ha sido eliminado',
                    'success'
                )
            }
        })
    }
});

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

const guardarCarritoStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    return carritoStorage;
}

const chequearHabitacion = (habitacionId) =>{
    if (localStorage.getItem("carrito")) {
        carrito = obtenerCarritoStorage();
    };

    const habitacionRepetida = carrito.find( habitacion => habitacion.id === habitacionId);
    return habitacionRepetida
}

mostrarHabitaciones(habitaciones);

if (localStorage.getItem("carrito")) {
    carrito = obtenerCarritoStorage();
};
mostarCarrito(carrito);
actualizarTotal(carrito);

const inputSearch = document.getElementById("buscarHabitacion");

inputSearch.addEventListener("input", (e) => {
    buscarHabitacion(e.target.value);
});