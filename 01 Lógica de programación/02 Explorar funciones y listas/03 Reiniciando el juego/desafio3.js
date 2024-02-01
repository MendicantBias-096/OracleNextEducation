// Ejercicio 1
function calularIMC(altura, peso) {
    return altura / (peso * peso);
}

console.log(calularIMC(70, 1.75));

// Ejercicio 2
function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));

// Ejercicio 3
function convertirMoneda(dolar) {
    return dolar * 4.80;
}

console.log(convertirMoneda(5));

// Ejercicio 4
function areaRectangular(altura, anchura) {
    document.getElementById('area-rectangular').innerHTML = 'El area es igual a: ' + altura * anchura;
    return altura * anchura;
}

console.log(areaRectangular(5, 10));

// Ejercicio 5
function areaCirculo(radio) {
    return 3.14 * (radio * radio);
}

function perimeto(radio) {
    return (2 * 3.14 * radio) / 2;
}

function calculoCirculo(radio) {
    document.getElementById('area-circulo').innerHTML = 'El area es igual a: ' + areaCirculo(radio).toFixed(2);;
    document.getElementById('primetro-circulo').innerHTML = 'El perimeto es igual a: ' + perimeto(radio).toFixed(2);;
}

calculoCirculo(12);

// Ejercicio 6
function tablaMultiplicar(num) {

    let contenedor = document.getElementById('contenedorTabla');

    // Crear y mostrar el span 10 veces dentro del div
    for (var i = 1; i <= 10; i++) {
        var nuevoSpan = document.createElement('span');
        var nuevoBr = document.createElement('br');

        nuevoSpan.textContent = num + ' x ' + i + ' = ' + i*num;

        // Añadir el span al div contenedor
        contenedor.appendChild(nuevoSpan);
        contenedor.appendChild(nuevoBr);
    }
}

tablaMultiplicar(5);
