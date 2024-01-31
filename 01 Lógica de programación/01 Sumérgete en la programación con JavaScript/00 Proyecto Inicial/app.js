// Variables
let numeroSecreto;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let maximosIntentos = 4;

let primerNumero = parseInt(prompt('Rango Inferior'));
let segundoNumero = parseInt(prompt('Rango Superior'));

while (primerNumero <= segundoNumero) {

    if (segundoNumero > primerNumero) {
        break;
    } else {
        alert('El numero superior debe ser mayor al numero inferior');
        primerNumero = parseInt(prompt('Rango Inferior'));
        segundoNumero = parseInt(prompt('Rango Superior'));
    }
}

numeroSecreto = Math.floor(Math.random() * (segundoNumero - primerNumero + 1) + primerNumero)

console.log(numeroSecreto);

while (numeroSecreto != numeroUsuario) {

    numeroUsuario = parseInt(prompt('Me indicas un numero entre '+ primerNumero + ' y ' + segundoNumero + ' por favor:'));

    // Mensajes
    console.log('El numero proporcionado por el usuario es: ' + numeroUsuario);

    // Condicion
    if (numeroSecreto == numeroUsuario) {
        // Acertamos, condicion verdadera
        alert('Acertaste, el número es: ' + numeroUsuario + '. Lo hiciste en ' + intentos + ' ' + (intentos == 1 ? 'vez' : 'veces') + '.');
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        // Incrementamos el contador cuando no acierta
        // intentos = intentos + 1;
        intentos++;
        // Cambiamos el mensaje del plurar, al singular [veces -> vez] dependendiendo el caso
        // palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert('Llegaste al número máximo de ' + maximosIntentos + ' intentos.');
            break;
        }

        // Fallamos, condicion falsa o no cumplida
        alert('Lo siento, no acertaste el número');
    }
}