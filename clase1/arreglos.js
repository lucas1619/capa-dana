/* 
COLECCIONES DE DATOS:
---------------------
-  Donde guardas datos 
- Estructura de la memoria que agrupa varios espacios y los asocia a una sola variable
- ESTRUCTURAS DE DATOS
---------------------
*/

// Convenciones con los arrays
// 1.- Siempre un arreglo lo almacenaras en una constante
// 2.- Siempre el arreglo lo escribiras en plural
// 3.- Si tienes mas de 2 palabras en el nombre del arreglo, lo escribimos en camelCase
// 4.- Solo almacenaras un tipo de dato en el arreglo

const _numeros = [1, "alksmdlkasd", true, [1, 2, 3]]; // incorrecto
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // correcto

//Metodos de los arreglos
// 1.- .length: devuelve el numero de elementos del arreglo

numeros.length; // 10

// 2.- .push(elemento): agrega un elemento al FINAL del arreglo

numeros.push(11); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// 3.- .pop(): elimina el ULTIMO elemento del arreglo
numeros.pop(); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 4.- .shift(): elimina el PRIMER elemento del arreglo
numeros.shift(); // [2, 3, 4, 5, 6, 7, 8, 9, 10]

// 5.- .unshift(elemento): agrega un elemento al PRIMER lugar del arreglo
numeros.unshift(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 6.- .insert(indice, elemento): agrega un elemento en una posicion especifica del arreglo
numeros.insert(1, 11); // [1, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 7.- .splice(indice, numeroDeElementos): elimina un numero de elementos del arreglo
numeros.splice(1, 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros.splice(1, 2); // [1, 4, 5, 6, 7, 8, 9, 10]

// Recorrer un arreglo

// 1.- For loop
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// 2.- ForEach loop
// Solo sirve para recorrer arreglos y no para modificar sus datos
// No retorna nada
numeros.forEach((numero, index) => {
  console.log(numero, index);
});

// 3.- Map loop
// Sirve para recorrer y modificar los datos de un arreglo
// Retorna un nuevo arreglo con los datos modificados

const numerosDuplicados = numeros.map((numero, indice) => {
  return numero * 2;
});

// Escribir una funcion que me reciba un arreglo de numeros y me devuelva
// un nuevo arreglo solo con los numeros pares

// const _numerosPares = (numeros) => {
//     const numPares = []
//     for(let i=0; i<numeros.length; i++){
//         if(numeros[i] % 2 === 0){
//             numPares.push(numeros[i])
//         }
//     }
//     return numPares
// }

// 4.- Filter loop
// Sirve para filtrar los datos de un arreglo
// Retorna un nuevo arreglo con los datos filtrados

const _numerosPares = numeros.filter((numero) => numero % 2 === 0);

// Escribir una funcion que me reciba un arreglo y me retorne la suma
// de todos los numeros pares del arreglo

const sumaNumerosPares = (numeros) => {
  const numPares = numeros.filter((numero) => numero % 2 === 0);

  let suma = 0;

  for (let i = 0; i < numPares.length; i++) {
    suma += numerosPares[i]
  }

  return suma
};

// 5.- Reduce loop
// Sirve para reducir los datos de un arreglo
// Retorna un valor unico (el resultado de la operacion)
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
const suma = numerosPares.reduce((acumulado, numeroPar) => {
    return acumulado + numeroPar
}, 0)
