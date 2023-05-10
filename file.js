console.log ("Calculá tu préstamo en simples pasos")

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





