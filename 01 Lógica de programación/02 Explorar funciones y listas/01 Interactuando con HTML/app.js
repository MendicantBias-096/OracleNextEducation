
// Ejercicio 2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío'

// Ejercicio 3
function consoleMessage() {
    console.log('El botón fue clicado');
}

// Ejercicio 4
let ciudad;
function promptAlert() {
    ciudad = prompt('Nombra una ciudad de Brasil');
    if (ciudad != '') {
        alert('Estuve en ' + ciudad + ' y me acordé de ti');
    } else {
        alert('No se escribio ninguna ciudad');
    }
}

// Ejercicio 5
function showAlert() {
    alert('Yo amo JS');
}

// Ejercicio 6
let numeroA;
let numeroB;

function suma() {
    numeroA = parseFloat(prompt('Escribe el valor del primer número'));
    numeroB = parseFloat(prompt('Escribe el valor del segundo número'));
    
    if (!isNaN(numeroA) && !isNaN(numeroB)) {
        alert('La suma de ' + numeroA + ' más ' + numeroB + ' es igual a ' + (numeroA + numeroB));
    } else {
        alert('Intente nuevamente llenando todos los campos');
    }
}

