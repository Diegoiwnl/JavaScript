//definir variables

let Num1 = 10;  //numerica
let Nombre = "Diego"; //texto
let Estado = true; //booleano
let lista = [1,2,3,4,5]; //arreglo
let Persona = {Nombre:"Jose",Apellido:"Mesa", Email:"diegomesaglwh@gmail.com"} //objeto


console.log(Num1);
console.log(Nombre);
console.log(Estado);
document.write(lista);
console.log(Persona)
document.write(Persona.Nombre);

//definir constante

const Ambiente = 109;

console.log(Ambiente);

//condicionales
//ingreso de datos por teclado

let NomEstudiante;
let Nota;

NotaEstudiante = prompt("Ingrese el nombre del estudiante");
Nota = parseFloat(prompt('Por favor ingrese la nota del estudiante'));
if (Nota >= 3.5)
{
    document.write(NotaEstudiante+''+'Aprobado con '+Nota);
}
else{
    document.write(NomEstudiante+''+'Reprobado con '+Nota);
    }

