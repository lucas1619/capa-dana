/* 
Strings
*/
const _texto = "hola como tas"
console.log(_texto.split(" "))

/* 
Objetos:
--------
- TODO ES UN OBJETO
- TODO TIPO DE DATO ES UN OBJETO
- NO TODO OBJETO ES UN TIPO DE DATO


- Funcionan con el concepto de clave y valor
- Osea, necesitare una clave para acceder a un valor dentro de mi objeto
*/

const a = {
    fizz : 'buzz',
    2 : '2',
    3 : 'fizz',
};
a.fizz // 'buzz'
a[2] // '2'

//Metodos del OBJECT

console.log(Object.keys(a))

const b = {}
b.algo = 10
b['hola'] = 20

const llave = 'fizz'
b[llave] = 'buzz'

console.log(b)


// Me dan un texto separado por un espacio cada palabra, 
// retornar la palabrea mas repetida

const texto = "lorem ipsum at dolorem lorem lorem lorem at at at at"

const palabras = texto.split(" ")

const palabra = {}

for(let i=0; i<palabras.length; i++){
    if(palabra[palabras[i]]){
        palabra[palabras[i]] += 1
    }
    else{
        palabra[palabras[i]] = 1
    }
}

Object.values(palabra)

