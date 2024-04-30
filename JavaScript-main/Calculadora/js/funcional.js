<<<<<<< HEAD
var po = {
    teclas: document.querySelectorAll("#contenedores ul li"),
    action: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantisig: 0,
    cantidecimal: false,
    resultado: false
}

// OBJETO CON FUNCIONES
var fun = {
    inicio: function () {
        for (var i = 0; i < po.teclas.length; i++) {
            po.teclas[i].addEventListener("click", fun.oprimirteclas);
        }
    },

    oprimirteclas: function (tecla) {
        po.action = tecla.target.getAttribute("class");
        po.digito = tecla.target.innerHTML;
        fun.calculadora(po.action, po.digito);
    },

    calculadora: function (action, digito) {
        switch (action) {
            case "numeros":
                po.cantisig = 0;
                if (po.operaciones.innerHTML == 0) {
                    po.operaciones.innerHTML = digito;
                } else {
                    if (po.resultado) {
                        po.resultado = false;
                        po.operaciones.innerHTML = digito;
                    } else {
=======
//DEFINIR EL OBJETO CON LAS PROPIEDADES

var po = {
    
    teclas: document.querySelectorAll("#contenedores ul li"),
    action:null,
    digito:null,
    operaciones: document.querySelector("#operaciones"),
    cantisig:0,
    cantidecimal:false,
    resultado:false
}



//OBJETO CON FUNCIONES

var fun = {

    inicio: function(){
        
        for(var i =0; i < po.teclas.length; i++)
        {
            po.teclas[i].addEventListener("click",fun.oprimirteclas);
        }
    },

    oprimirteclas: function(tecla)
    {
        po.action = tecla.target.getAttribute("class");
        po.digito = tecla.target.innerHTML;
        fun.calculadora(po.action,po.digito);

    },

    calculadora:function(action,digito)
    {
        switch(action)
        {
            case "numeros":
                po.cantisig = 0;
                if(po.operaciones.innerHTML==0) //el == es para comparar
                {
                    po.operaciones.innerHTML = digito;
             
                }else
                {   if(po.resultado)
                    {
                        po.resultado = false;
                        po.operaciones.innerHTML = digito;
                    }
                    else
                    {
>>>>>>> 5f966a6691adabe63f7f2896f9cb197bd12f8037
                        po.operaciones.innerHTML += digito;
                        po.cantidecimal = false;
                        po.resultado = false;
                    }
<<<<<<< HEAD
                }
                console.log("numeros");
                break;
            case "simbolos":
                po.cantisig++;
                if (po.cantisig == 1) {
                    if (po.operaciones.innerHTML == 0) {
                        po.operaciones.innerHTML = 0;
                    } else {
                        po.operaciones.innerHTML += digito;
                    }
                }
                console.log("simbolos");
                break;
            case "decimal":
                if (!po.cantidecimal && po.cantisig != 1) {
=======
                    
                }
                console.log("numeros");
            break;
            case "simbolos":
                po.cantisig++;
                if(po.cantisig == 1)
                {
                   if (po.operaciones.innerHTML == 0)
                   {
                       po.operaciones.innerHTML = 0;
                       
                }else{
                    po.operaciones.innerHTML += digito;
                }
            }
                console.log("simbolos");
            break;
            case "decimal":
                if(!po.cantidecimal && po.cantisig!=1)
                {
>>>>>>> 5f966a6691adabe63f7f2896f9cb197bd12f8037
                    po.operaciones.innerHTML += digito;
                    po.cantidecimal = true;
                    po.resultado = false;
                }
                console.log("decimal");
<<<<<<< HEAD
                break;
=======
            break;
>>>>>>> 5f966a6691adabe63f7f2896f9cb197bd12f8037
            case "igual":
                po.operaciones.innerHTML = eval(po.operaciones.innerHTML)
                po.resultado = true;
                console.log("igual");
<<<<<<< HEAD
                break;
            case "raiz":
                // Calculamos la raíz cuadrada del número actual en el display
                var numero = parseFloat(po.operaciones.innerHTML);
                var raizCuadrada = Math.sqrt(numero);
                // Mostramos el resultado en el display
                po.operaciones.innerHTML = raizCuadrada;
                // Marcamos que se ha mostrado un resultado
                po.resultado = true;
                console.log("raiz");
                break;
            case "pi":
                // Insertamos el valor de pi en el display
                po.operaciones.innerHTML += Math.PI;
                console.log("pi");
                break;
            case "cubo":
                // Calculamos el cubo del número actual en el display
                // Calculamos el cubo del número actual en el display
                var numero = parseFloat(po.operaciones.innerHTML);
                var cubo = Math.pow(numero, 3);
                // Mostramos el resultado en el display
                po.operaciones.innerHTML = cubo;
        }
    },

    borrarcalculadora: function () {
        po.resultado = false;
        po.operaciones.innerHTML = 0;
    },

    borrardigito: function () {
        po.resultado = false;
        let contenidoActual = po.operaciones.innerHTML;
        if (contenidoActual.length > 0) {
            let nuevoContenido = contenidoActual.slice(0, -1); // esta función borra el último dígito
            po.operaciones.innerHTML = nuevoContenido;
        }
        if (po.operaciones.innerHTML === '') { // si el contenido está vacío se restablece a 0
            po.operaciones.innerHTML = '0';
        }
    }
}

fun.inicio();
=======
            break;
        }

    },
    borrarcalculadora:function()
    {
        po.resultado = false;
    
        po.operaciones.innerHTML = 0
    },
    

    borrardigito:function() {
        po.resultado = false;
        let contenidoActual = po.operaciones.innerHTML;
    
      
        if (contenidoActual.length > 0) {
            let nuevoContenido = contenidoActual.slice(0, -1);  //esta función borra el último dígito
            po.operaciones.innerHTML = nuevoContenido;
        }
    
        if (po.operaciones.innerHTML === '') { //si el contenido está vacío se restablece a 0
            po.operaciones.innerHTML = '0';
        }
    }
    
}

fun.inicio();
>>>>>>> 5f966a6691adabe63f7f2896f9cb197bd12f8037
