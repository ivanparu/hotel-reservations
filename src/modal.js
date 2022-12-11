import { eliminarHabitacionCarrito } from "./accionesCarrito.js";

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