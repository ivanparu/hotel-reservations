const guardarCarritoStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    return carritoStorage;
}


export {obtenerCarritoStorage, guardarCarritoStorage};