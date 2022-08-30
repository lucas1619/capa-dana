/*
¿Que es un algoritmo?
- Pasos ORDENADOS o SECUENCIALES para realizar una tarea
- No es una solución, sino una forma de resolver un problema
- No es una solución óptima, sino una forma de resolver un problema con una mejor solución

¿Que es la memoria?
- Donde guardas un dato

¿Que es una variable?
- Es una ubicación de memoria donde se guarda un dato
- Se usa para guardar un dato
- Se usa para guardar una dirección de memoria
- Se usa para guardar un valor

¿Que es una función?
- Es una secuencia de instrucciones que se ejecutan en un orden determinado
*/

#include <iostream>

using namespace std;

int suma(int a, int b); // -> Declaración de la función

int main() // -> punto de entrada
{ 
    int pepito; // -> creacion o declaracion de una variable
    pepito = 10; // -> asignacion
    pepito = 20;
    cout<<"Hola mundo"<<endl; // -> impresion de un mensaje
    return 0;
}

int suma(int a, int b) // -> inicializando la funcion
{
    return a + b;
}