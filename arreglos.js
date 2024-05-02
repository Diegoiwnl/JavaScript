//Definimos el array o arreglo
let Numeros = [1,2,3,4,5];
console.log(Numeros);

//acceder al elemento del arreglo

console.log('El primer elemento es: ', Numeros[0] );
console.log('El segundo elemento es: ', Numeros[4] );

let Ciudades = ["Bogotá","Cali","Medellín","Barranquilla","Armenia","Pereira","Ibagué"]
console.log('La tercera ciudad es: ',Ciudades[3]);

Numeros[3]=50;
console.log(Numeros)

//añadir un elemento al array o al arreglo

Numeros.push(6);
console.log(Numeros)

//Eliminar último elemento del al array
let ultimo = Numeros.pop();
console.log(ultimo);
console.log(Numeros);

//recorrer el array     //ciclos

for(let i=0;i<=Numeros.length;i++){
    console.log('elemento',i,":",Numeros[i]);
}
