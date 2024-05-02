class Persona {
    constructor() 
    {
      this.nombre = "";
      this.edad = 0;
    }
  
    cargarDatos() 
    {
      this.nombre = prompt("Ingrese el nombre de la persona:");
      this.edad = parseInt(prompt("Ingrese la edad de la persona:"));     //Aquí se solicitan los datos
    }
  }
  
  class Empresa {
    constructor(edadTope) 
    {
      this.edadTope = edadTope;
    }
  
    personasInhabilitadas(personas) 
    {
      return personas.filter(persona => persona.edad > this.edadTope);   
      //Se filtran las personas por la edad
    }
  }
  
  function main() 
  {
    const empresa = new Empresa(60);
    const personas = [];
  
    for (let i = 0; i < 2; i++)    //En este caso se solicitan 2 personas
    {
      const persona = new Persona();
      persona.cargarDatos();
      personas.push(persona);   //Con esto podemos hacer el bucle de pedir las personas
    }
  
    const inhabilitadas = empresa.personasInhabilitadas(personas);
    
    console.log(`La edad máxima para trabajar en la empresa es de: ${empresa.edadTope} años`);
    inhabilitadas.forEach(persona => 
    {   
      console.log(`${persona.nombre} - Edad: ${persona.edad}`);
    });

    console.log(`Total de personas que no pueden ingresar: ${inhabilitadas.length}`);   //Muestra el total de las personas que no pueden ingresar a la empresa
  }
  
  main();                                                                                                           
  
