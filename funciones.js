//definir funciones sin argumentos y sin retorno de argumento


//variables tivo let y tipo var
var Altura; 
var Peso;
//definir contador y acumulador
var cont = 0;
var acumestatura = 0;

var contpeso = 0;
var acumpeso  = 0;





//variables globales
function ingresardatos(){
Peso = parseFloat(prompt("Por favor ingrese su peso "));
Altura = parseFloat(prompt("Por favor ingrese su altura "));
cont++;
contpeso++;
acumpeso += Peso;
acumestatura += Altura; 
}

//funcion sin argumentos pero tiene retorno
function preguntar(){
    var respuesta = prompt('¿Desea continuar? (Si/No)').toLowerCase();
    return respuesta == 'si' || respuesta == 'SI';


}
function calcularimc()
{   
    //variable local
    let imc = Peso/(Altura*Altura);
    if(imc<18.5)
    {
        document.write('Usted pesa'+imc.toFixed(2)+' por lo cual tiene un peso bajo');
    }
    else if(imc>=18.5 && imc<=25)
    {
        document.write('Usted pesa'+imc.toFixed(2)+' por lo cual tiene un peso normal');
    }
    else if(imc>25 && imc<=30)
    {
        document.write('Usted pesa'+imc.toFixed(2)+' por lo cual tiene sobrepeso');
    }
    else if(imc>=30)
    {
        document.write('Usted pesa'+imc+' por lo cual está obeso');  
        
    }

}
function PromedioAltura()
{
    if (cont==0){
    console.log('No se ha ingresado la altura');
    }else{
        let promedio = acumestatura/cont;
        document.write('El promedio de la altura es: '+promedio.toFixed(2)+"metros");

    }

}

function PromedioPeso()
{
    if (cont==0){
    console.log('No se ha ingresado el peso');
    }else{
        let promediopeso = acumpeso/contpeso;
        document.write('El promedio del peso es: '+promediopeso.toFixed(2)+"kilogramos");

    }

}


do{
    ingresardatos();
    calcularimc();
}while(preguntar());
PromedioAltura();
PromedioPeso();
{

}



