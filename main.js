
const arrayHabitaciones = [];

const habitacion1 = new Habitacion (1, 'suite', 2000);
const habitacion2 = new Habitacion (2, 'ejecutiva', 1000);
const habitacion3 = new Habitacion (3, 'deluxe', 5000);

arrayHabitaciones.push(habitacion1, habitacion2, habitacion3);

const mostarOrdenado = () => {
    let array = [];
    arrayHabitaciones.forEach(habitacion => array.push(habitacion.nombre+ ' $' +habitacion.precio));
    alert('Lista de precios:'+ '\n'+array.join('\n'));
}

const menorAMayor = () => {
    arrayHabitaciones.sort((a,b) => a.precio - b.precio);
    mostarOrdenado();
};

function reservarHabitacion(){
    let habitacion = '';
    let cantidad = 0;
    let precio = 0;
    let total = 0;
    let seguirComprando = true;


    do{
        habitacion = parseInt(prompt('Que habitación queres?\n 1:suite 2:ejecutiva 3:deluxe', 'Ej: 1'));

        const habitacionSeleccionada = arrayHabitaciones.find(buscarHabitacion => buscarHabitacion.id === habitacion)
        
        if(!habitacionSeleccionada){
            alert('La habitacion no se encuentra disponible.');
            continue;
        }
        cantidad = parseInt(prompt('Cuantas días?'));
        
        let cantidadValidada = validarCantidad(cantidad);
        
        total += habitacionSeleccionada.precio * cantidadValidada;
        alert('Lo que te sale es $' + total);
        
        seguirComprando = confirm('Queres seguir comprando?')

} while(seguirComprando)
return total;
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

function descuento (total){
    let lugarDeResidencia = prompt('Sos de Buenos Aires?', 'Si o no').toLocaleLowerCase();
    if(lugarDeResidencia === 'si'){
        alert('Entonces te hacemos un descuento del 15%, por lo tanto el total es de: $' +  total * 0.85) ;
    } else if (lugarDeResidencia === 'no'){
        alert('Como no sos de Buenos Aires no te hacemos descuento por residencia, por lo tanto el total es de: $' + total)
    } else{
        alert('Tenes que poner si o no');
        descuento(total);
    }
}

menorAMayor()
descuento(reservarHabitacion());