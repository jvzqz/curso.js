const boton_no = document.getElementById("boton_no");

boton_no.addEventListener('click', function() {

    const mensaje_boton_no = document.getElementById("mensaje_boton_no");
    mensaje_boton_no.textContent ="Para poder pedir el préstamo, es necesario ser cliente del banco. Pedí aseroramiento a través de nuestro WhatsApp de Lun a Vier de 10:00hs a 20:00hs."
  });


let lista_cliente = [];

class cliente_banco {
    constructor (nombre, cuil, mail){
        this.nombre = nombre;
        this.cuil = cuil;
        this.mail = mail;
    }
     
    get_cliente(){
        console.log ("Nombre:",this.nombre);
        console.log ("Cuil:",this.cuil);
        console.log ("Mail:",this.mail);
    }   
}

const formulariocliente =  document.getElementById ("formulariocliente");
formulariocliente.addEventListener("submit", (e) => {

	e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() === ''){
        const mensaje_nombre = document.getElementById ("mensaje_nombre");
        mensaje_nombre.textContent = "El campo nombre está vació."
    };

    const cuil = document.getElementById("cuil").value;

    if (nombre.trim() === ''){
        const mensaje_cuil = document.getElementById ("mensaje_cuil");
        mensaje_cuil.textContent = "El campo CUIL está vació."
    };

	const mail = document.getElementById("mail").value;

	if ( mail.trim().length <= 3 || !mail.includes("@")) {
        const mensaje_mail = document.getElementById ("mensaje_mail");
		mensaje_mail.textContent = "El mail debe tener más de 3 letras y contener '@'";
	}    

    let cliente1 = new cliente_banco (nombre, cuil, mail);
    cliente1.get_cliente()
    lista_cliente.push(cliente1);
    let array_json = JSON.stringify (lista_cliente);
    localStorage.setItem("lista_cliente", array_json);
});

const formularioprestamo =  document.getElementById ("formularioprestamo");
formularioprestamo.addEventListener("submit", (e) => {

	e.preventDefault();

    const monto = document.getElementById("monto").value;

    if (monto.trim() === ''){
        const mensaje_monto = document.getElementById ("mensaje_monto");
        mensaje_monto.textContent = "El campo monto está vació."
    };

    const cuotas = document.getElementById("cuotas").value;

    if (monto.trim() === ''){
        const mensaje_monto = document.getElementById ("mensaje_monto");
        mensaje_monto.textContent = "El valor no corresponde."
    };

    if (cuotas !== [3,6,8]){
        const mensaje_cuotas = document.getElementById ("cuotas");
        mensaje_cuotas.textContent = "El valor no corresponde."
    } else {
        let prestamo = simular_prestamo (monto, cuotas);
        mensaje_prestamo.textContent = "El monto total del devolución es " + prestamo;
    }

    /*if (cuotas !== 6){
        const mensaje_cuotas = document.getElementById ("cuotas");
        mensaje_cuotas.textContent = "El valor no corresponde."
    } else {
        let calcular_prestamo = Math.ceil (monto * 1.6)

    };

    if (cuotas !== 12){
        const mensaje_cuotas = document.getElementById ("cuotas");
        mensaje_cuotas.textContent = "El valor no corresponde."
    } else {
        let calcular_prestamo = Math.ceil (monto * 1.8)
    };*/
});


function simular_prestamo (monto, cuotas) {

    if( monto > 0 && cuotas == 3){
        return Math.ceil (monto * 1.1);
    }

    else if ( monto > 0 && cuotas == 6){
        return Math.ceil (monto * 1.3);
    }
    else if ( monto > 0 && cuotas == 12){
        return Math.ceil (monto * 1.7);
    }
}





