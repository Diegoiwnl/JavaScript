class Traductor {
    constructor() {
        this.traducciones = {
            "casa": "house",
            "mesa": "table",
            "perro": "dog",
            "gato": "cat"
        };
    }

    traducir(palabra) {
        if (this.traducciones[palabra]) {
            return this.traducciones[palabra];
        } else {
            return "Palabra no encontrada en el diccionario.";
        }
    }
}

let elTraductor = new Traductor();


let palabraUsuario = prompt("Ingrese una palabra en español para ver su traducción al idioma inglés: ");


let traduccion = elTraductor.traducir(palabraUsuario.toLowerCase()); 


alert(traduccion);
