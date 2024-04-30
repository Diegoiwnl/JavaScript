function calcularEdadYMeses(fechaNacimiento) {
   
    const fechaActual = new Date();

   
    const diffMilisegundos = fechaActual - fechaNacimiento;

    
    const edadMilisegundos = new Date(diffMilisegundos);
    const edadAnios = edadMilisegundos.getUTCFullYear() - 1970;
    const edadMeses = edadMilisegundos.getUTCMonth();

    return { anios: edadAnios, meses: edadMeses };
}


const fechaNacimiento = new Date('2006-06-15'); 
const edad = calcularEdadYMeses(fechaNacimiento);
console.log(`Edad: ${edad.anios} años y ${edad.meses} meses`);