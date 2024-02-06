// Ejercicio 1
let listaGenerica = [];

// Ejercicio 2
let lenguajesDeProgramacion = [
    'JavaScript',
    'C',
    'C++',
    'Kotlin',
    'Python'
];

// Ejercicio 3
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

// Ejercicio 4
function mostrarLista() {
    console.log(lenguajesDeProgramacion);
}

mostrarLista();

// Ejercicio 5
function mostrarListaReverse() {
    console.log(lenguajesDeProgramacion.reverse());
}

mostrarListaReverse();

// Ejercicio 6
function calcularPromedio(lista) {

    let suma = 0

    lista.forEach(element => {
        if (typeof element === 'number') {
            suma += element;
        }
    });

    return suma / lista.length;
}

let calificaciones = [1, 2, 3];
console.log(calcularPromedio(calificaciones));

// Ejercicio 7
function mostrarMayorMenor(lista) {

    let maxElement = 0;
    let minElement = lista[0];

    // Msotrar Maximo
    lista.forEach(element => {
        if (typeof element === 'number') {

            if (element > maxElement) {
                maxElement = element;
            }
        }
    });

    // Mostrar Minimo
    lista.forEach(element => {
        if (typeof element === 'number') {

            if (element < minElement) {
                minElement = element;
            }
        }
    });

    return [minElement, maxElement];

}

let listaNumeros = [1, 2, 100, 0, 5, -8, 8];
console.log('Menor : [' + mostrarMayorMenor(listaNumeros)[0] + '] Mayor: [' + mostrarMayorMenor(listaNumeros)[1] + ']');

// Ejercicio 8
function sumaArray(lista) {

    let suma = 0

    lista.forEach(element => {
        if (typeof element === 'number') {
            suma += element;
        }
    });

    return suma;
}

let valores = [1, 2, 3];
console.log(sumaArray(valores));

// Ejercicio 9
function mostrarValorArray(lista, indice) {
    
    return lista[indice] ? lista[indice] : -1;

}

let valoresParametro = [1, 4, 3, 7, 8, 2, 9];
console.log(mostrarValorArray(valoresParametro, 3));

// Ejercicio 10
function sumarArrayParalelo(listaPrimaria, listaSecundaria) {
    
    let suma = 0;
    let listaSuma = [];

    if (listaPrimaria.length == listaSecundaria.length) {
        for (let index = 0; index < listaPrimaria.length; index++) {
            if (typeof listaPrimaria[index] === 'number' && typeof listaSecundaria[index] === 'number' ) {
                suma = listaPrimaria[index] + listaSecundaria[index];    
                listaSuma.push(suma);
            } else {
                return 'Uno de los valores no es numerico';
            }            
        }    
        return listaSuma;
    }
    return 'Las listas no son del mismo tamaño';
}

let listaA = [5, 6, 7];
let listaB = [8, 9, 5];

console.log(sumarArrayParalelo(listaA, listaB));

// Ejercicio 11
function cudradoArray(lista) {

    let listaCuadrado = [];
    let cuadrado = 0;

    lista.forEach(element => {
        if (typeof element === 'number') {
            cuadrado = element * element;
            listaCuadrado.push(cuadrado);
        }
    });

    return listaCuadrado;
}
let elementosCuadrado = [5, 2, 8];
console.log(cudradoArray(elementosCuadrado));
