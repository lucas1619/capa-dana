console.log("¡Hola mundo!")

// variables

// variables var
var nombre = "Juan"

// variables let
let apellido = "Perez"

// variables const
const EDAD = 30


// funciones
//ES 5
function saludar(nombre) {
    console.log('Hola ' + nombre)
}

// ES 6

const saludar2 = (nombre) => {
    console.log('Hola ' + nombre)
}


// scope

// El espacio de codigo donde vive una variable
var nombre = "Juan"
function ejemplo() {
    function mostrarNombre() {
        console.log(nombre)
    }
    mostrarNombre()
}

// estructuras de control

const condicional = () => {
    let a = 20;
    if (a<10){
        console.log("a es menor que 10")
    }
    else if( a > 10 && a < 15){
        console.log("a es mayor que 10 y menor que 15")

    }
    else{
        console.log("a es mayor que 15")
    }
}

const switches = () => {
    let a = 20;
    switch (a) {
        case 5:
            console.log("a es 5")
            break;
        case a < 10:
            console.log("a es menor que 10")
            break;
        case a > 10 && a < 15:
            console.log("a es mayor que 10 y menor que 15")
            break;
        default:
            console.log("a es mayor que 15")
            break;
    }
}


const ternarias = () => {
    let a = 20;
    let b = a < 10 ? "a es menor que 10" : "a es mayor que 10";
    console.log(b)
}

const logicas = () => {
    let a = 20;
    a < 10 && console.log("a es menor que 10") || a < 15 && console.log("a es menor que 15") || console.log("a es mayor que 15")
}


// ciclos repetitivos
const cicloWhile = () => {
    let a = 0;
    while (true) {
        console.log(a)
        a++
        if(a < 10) break
    }
}

const cicloFor = () => {
    for (let a = 0; a < 10; a++) {
        console.log(a)
    }
}