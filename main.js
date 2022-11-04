
function reservarHabitacion(){
    let habitacion = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let cantidadTotal = 0;
    let seguirComprando = 0;


    do{
        habitacion = parseInt(prompt('Que habitación queres?\n 1:suite 2:ejecutiva 3:deluxe', 'Ej: 1'));
        cantidad = parseInt(prompt('Cuantas días?'));

        let cantidadValidada = validarCantidad(cantidad)

        switch (habitacion) {
            case 1:
                precio = 2000;
                break;
            case 2:
                precio = 1000;
                break;
            case 3:
                precio = 5000;
                break;    
            default:
                alert('Datos mal ingresados');
                precio = 0;
                cantidad = 0;
                break;
        }

        cantidadTotal += cantidadValidada
        totalCompra += cantidadTotal * precio

        alert('Lo que te sale es $' + totalCompra)

        seguirComprando = confirm('Queres seguir comprando?')

} while(seguirComprando)
return totalCompra;
}


function validarCantidad(cantidad){
    while(Number.isNaN(cantidad) || cantidad === 0) {
        if(cantidad !== 0){
            alert('Tenes que poner un numero');
        } else{ 
            alert('Tenes que poner un numero distinto de 0');
        } cantidad = parseInt(prompt('Cuantas queres?'))
    } return cantidad;
}

function descuento(totalCompra){
    let lugarDeResidencia = prompt('Sos de Buenos Aires?', 'Si o no').toLocaleLowerCase();
    if(lugarDeResidencia === 'si'){
        alert('Entonces te hacemos un descuento del 15%, por lo tanto el total es de: $' + (totalCompra * 0.85) );
    } else{
        alert('Como no sos de Buenos Aires no te hacemos descuento por residencia, por lo tanto el total es de: $' + totalCompra)
    } return totalCompra;
}

descuento(reservarHabitacion());