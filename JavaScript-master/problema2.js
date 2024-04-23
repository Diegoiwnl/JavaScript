class Cuatrimestre {
    constructor() {
      this.mesesporcuatrimestre = 3;
    }
  
    Obtenercuatrimestre() {
      const mesactual = new Date().getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
      return Math.ceil(mesactual / this.mesesporcuatrimestre);
    }
  }
  
  function Mostrarcuatrimestre() {
    const cuatrimestre = new Cuatrimestre();
    const numerocuatrimestre = cuatrimestre.Obtenercuatrimestre();
    console.log(`Nos encontramos en el cuatrimestre número ${numerocuatrimestre}.`);
    // Aquí podrías mostrar el cuatrimestre en la página en lugar de en la consola
  }
  Mostrarcuatrimestre();
  