//let NumeroRandom1,NumeroRandom2,Suma,Dife,Prod,Div;

//NumeroRandom1 = parseFloat(prompt("Por favor ingrese el primer número"));
//NumeroRandom2 = parseFloat(prompt("Por favor ingrese el segundo número"));

//if(NumeroRandom1>Numero2)
//{
//    Suma = NumeroRandom1 + NumeroRandom2;
//    Dife = NumeroRandom1 - NumeroRandom2;
//    console.log('La suma de los números es: '+Suma);
//    console.log('La diferencia de los números es: '+Dife);
//}else{
//    Prod=NumeroRandom1*NumeroRandom2;
//    Div=NumeroRandom1/NumeroRandom2;
 //   console.log('El producto de los números es: '+Prod);
//    console.log('La división de los números es: '+Div);
//}//



Peso = parseFloat(prompt("Por favor ingrese su peso en kilogramos"));
Altura = parseFloat(prompt("Por favor ingrese su altura en metros"));

IMC = Peso/(Altura*Altura);

if(IMC<18.5)
{
    console.log('Usted tiene bajo peso');
}
else if(IMC>=18.5 & IMC<=25)
{
    console.log('Usted tiene un peso normal');
}
else if(IMC>25 & IMC<=30)
{
    console.log('Usted tiene sobrepeso');
}
else if(IMC>=30)
{
    console.log('Usted tiene obesidad');     
}
