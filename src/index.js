import {obtenerCarritoStorage} from "./storage.js";
import {mostarCarrito} from "./accionesCarrito.js";
import {actualizarTotal} from "./accionesCarrito.js";


if (localStorage.getItem("carrito")) {
    carrito = obtenerCarritoStorage();
};
mostarCarrito(carrito);
actualizarTotal(carrito);