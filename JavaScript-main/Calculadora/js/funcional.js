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
                        po.operaciones.innerHTML += digito;
                        po.cantidecimal = false;
                        po.resultado = false;
                    }
                    
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
                    po.operaciones.innerHTML += digito;
                    po.cantidecimal = true;
                    po.resultado = false;
                }
                console.log("decimal");
            break;
            case "igual":
                po.operaciones.innerHTML = eval(po.operaciones.innerHTML)
                po.resultado = true;
                console.log("igual");
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