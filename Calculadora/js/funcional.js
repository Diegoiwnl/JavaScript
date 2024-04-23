//DEFINIR EL OBJETO CON LAS PROPIEDADES

var po = {
    
    teclas: document.querySelectorAll("#contenedores ul li"),
    action:null

}



//OBJETO CON FUNCIONES

var fun = {

    inicio: function(){
        
        for(var i =0; i < po.teclas.length; i++)
        {
            po.teclas[i].addEventListener("click",fun.oprimirteclas);
        }
    },

    oprimirteclas: function(tecla){
        po.action = tecla.target.getAttribute("class");
        fun.calculadora(po.action);

    },

    calculadora: function(action)
    {
        switch(action)
        {
            case "numeros":
                console.log("numeros");
            break
            case "simbolos":
                console.log("simbolos");
            break
            case "decimal":
                console.log("decimal");
            break
        }

    }
    
}

fun.inicio();