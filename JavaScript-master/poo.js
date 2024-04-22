
 //Definiar la clase
class Persona{
    //Definir atributos de la clase
    constructor(nombre, apellido, edad, genero){
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Edad = edad;
        this.Genero = genero;
    }
     //Definir los métodos 
saludar() 
{
    console.log('Buenos días, soy', this.Nombre, this.Apellido, 'tego', this.Edad, 'años y mi genero es', this.Genero);    
}
mayor()
{
    if(this.Edad >= 18)
    {
        console.log('Eres mayor de edad');
    }else{
        console.log('Eres menor de edad');
    }
}
menor()
{
    if(this.Edad < 18)
    {
        console.log('Eres menor de edad');
    }else{
        console.log('Eres mayor de edad');
    }

}
edadnumerodemeses()
{
    let meses = this.Edad * 12;
    console.log('Tu edad en meses es:', meses);
}
}
    //Crear el objeto
    console.log("Soy la primera persona = objeto");
    const Persona1 = new Persona('Diego', 'Mesa', 17, 'Masculino');
    Persona1.saludar();
    Persona1.mayor();
    Persona1.menor();
    Persona1.edadnumerodemeses();
    console.log("Soy la segunda persona = objeto");
    const Persona2 = new Persona('Carlos', 'Solano', 19, 'Femenino');
    Persona2.saludar();
    Persona2.mayor();
    Persona2.menor();   
    Persona2.edadnumerodemeses();
