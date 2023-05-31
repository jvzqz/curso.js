console.log ("Calculá tu préstamo en simples pasos")

confirm("¿Es usted cliente del banco?") 

let nombre = prompt("Indicá tu nombre:");
let cuil = prompt ("Indicá tu CUIL:");
let mail= prompt ("Indicá tu mail:");
let lista_cliente = [];

class cliente_banco {
    constructor (nombre, cuil, mail){
        this.nombre = nombre;
        this.cuil = cuil;
        this.mail = mail;
    }

    saludar(){
        console.log ("Bienvenido al simulador de préstamos del banco Ciudad",this.nombre);
    }
      
    get_cliente(){
        console.log ("Nombre:",this.nombre);
        console.log ("Cuil:",this.cuil);
        console.log ("Mail:",this.mail);
    }   
}

let cliente1 = new cliente_banco (nombre, cuil, mail);
cliente1.saludar()
cliente1.get_cliente()
lista_cliente.push(cliente1);

while (confirm("¿Desea hacer un cálculo de préstamo?")) {

let monto = parseFloat (prompt ("Ingrese el monto del préstamo:"))
let cuotas = parseInt (prompt("Ingrese la cantidad de cuotas 3,6 o 12"));
let prestamo = simular_prestamo (monto,cuotas);

console.log("Monto Inicial: ", monto);
console.log("Cuotas: ", cuotas);
console.log("Monto final: ", prestamo);
}

function simular_prestamo (monto, cuotas) {

    if( monto > 0 && cuotas == 3){
        return monto * 1.1;
    }

    else if ( monto > 0 && cuotas == 6){
        return monto * 1.3;
    }
    else if ( monto > 0 && cuotas == 12){
        return monto * 1.7;
    }
}





