import {obtenerCarritoStorage} from "./storage.js";
import {mostarCarrito} from "./accionesCarrito.js";
import {actualizarTotal} from "./accionesCarrito.js";


if (localStorage.getItem("carrito")) {
    window.carrito = obtenerCarritoStorage();
};
mostarCarrito(window.carrito);
actualizarTotal(window.carrito);