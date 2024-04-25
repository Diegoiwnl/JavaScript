class Figura{
    constructor(ancho,altura)
    {
        this.ancho = ancho;
        this.altura = altura;
    }


    calculararea()
    {
        let Area = this.ancho * this.altura;
        console.log("El area del rectangulo es: "+Area)

    }
    calcularperimetro()
    {   
        let Perimetro = 2 * (this.ancho + this.altura);
        console.log("El perimetro del rectangulo es: "+ Perimetro);
    }
    calcularcuadrado()
    {
        if(this.ancho == this.altura){
        console.log("La figura es un cuadrado");
        }else
        {
            console.log("La figura no es un cuadrado")
        }
    }
    comparacionfigura()
    {
        const areafigura1 = this.calculararea();
        const areafigura2 = this.calculararea();

        if(areafigura1 > areafigura2)
        {
            console.log("La figura 1 es más grande");
        }else if(areafigura1 < areafigura2)
        {
            console.log("La figura 2 es más grande");
        }
        else{
            console.log("Las figuras son iguales");
        }

    }

}
     //definir los objetos
    let figura1 = new Figura(1.60,2.50);
    let figura2 = new Figura(3.50,4.50);
    figura1.calculararea();
    figura1.calcularperimetro();
    figura1.calcularcuadrado();
    figura1.comparacionfigura();
    

    figura2.calculararea();
    figura2.calcularperimetro();
    figura2.calcularcuadrado();
    figura2.comparacionfigura();
    
    