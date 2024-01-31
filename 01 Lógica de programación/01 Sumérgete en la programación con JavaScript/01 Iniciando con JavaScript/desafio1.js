alert('¡Bienvenida y bienvenido a nuestro sitio web!');

let nombre = 'Luna';
let edad = 25;
let numeroDeVentanas = 25;
let saldoDisponible = 1000;
let error = '¡Error Completa todos los campos!';

nombre = prompt('Escriba su Nombre')
edad = prompt('Escriba su Edad');

if (edad != '') {
    if (edad >= 18) {
        alert('¡Ahora puedes obtener tu licencia de conducir!');
    } else if(edad < 18 && edad >= 0){
        alert('¡Eres menor de edad!');        
    }
} else {
    alert(error);    
}

