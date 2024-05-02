function validarformulario(){
    
    var usuariovalido = validarUsuario();
    var emailvalido = validarEmail();
    var passwordvalido = validarccontraseña();
    var ciudadvalida = validarciudad();
    var generovalido = validargenero();
    var pasatiemposvalidos = validarpasatiempos();
    var checkbox = validarterminos();
    var observacionesvalidas = validarobservacioes();

if (usuariovalido && emailvalido && passwordvalido && ciudadvalida && generovalido && pasatiemposvalidos && checkbox  && observacionesvalidas){ 
    alert("Formulario enviado");
    return true;
}else{
    alert("Por favor llene todos los campos");
    return false;
}   



}


function validarUsuario()
{  
    var expresion =  /^[a-zA-Z0-9]{2,12}$/;
    var usuario = document.getElementById("usuario").value;
    if(usuario.trim() == "")
    {
        alert("Por favor ingrese su usuario");
        return false;
    }else if(!expresion.test(usuario)){
        alert("Por favor ingrese un usuario válido, debe tener mínimo 2 caracteres y máximo 12");	
        return false;
    }
    return true;
}

function validarEmail()
{
    
    var email = document.getElementById("email").value;
    if(email.trim() == "")
    {
        alert("Por favor ingrese su email");
        return false;

    }else if(!formatoemail(email)){
        alert("Por favor ingrese un email válido");
        return false;
    }

    return true;



}

function validarccontraseña()
{ 
    var expresion = /^(?=.*\d)[a-zA-Z0-9]{4,8}$/;
    var contrasena = document.getElementById("password").value;
    if(contrasena.trim() == "")
    {
        alert("Por favor ingrese su contraseña");
        return false;
    }else if(!expresion.test(contrasena)){
        
        alert("Por favor ingrese una contraseña válida");
        return false;
    }
    return true;
}
    // var contrasena = document.getElementById("password").value;
    // var connumero = /\d/.test(contrasena);
    // var conminuscula = /[a-z]/.test(contrasena);
    // var conmayuscula = /[A-Z]/.test(contrasena);
    
    // if(contrasena.trim() == "")
    // {
    //     alert("Por favor ingrese su contraseña");
    //     return false;
    // }else if(password.length < 9){
    //     alert("La contraseña debe tener al menos 8 caracteres");
    //     return false;
    // }else if(!connumero){
    //     alert("La contraseña debe tener al menos un número");
    //     return false;
    // }else if(!conmayuscula){
    //     alert("La contraseña debe tener al menos una mayúscula");
    //     return false;
    // }else if(!conminuscula){    
    //     alert("La contraseña debe tener al menos una minúscula"); 
    //     return false;   
    // }
    // return true;




function validarciudad()
{
    var ciudad = document.getElementById("ciudad").value;
    if(ciudad.trim() == "")
    {
        alert("Por favor seleccione su ciudad");
        return false;
    }
    return true;
}


function validargenero()
{
    var genero = document.getElementsByName("genero");
    var cant = 0;
    for(var i = 0; i < genero.length; i++)
    {
        if(genero[i].checked)
        {
            cant++;
        }
    }
    if(cant == 0)
    {
        alert("Por favor seleccione su genero");
        return false;
    }
    return true;
}

function validarpasatiempos()
{
    var pasatiempos = document.getElementsByName("pasatiempos");
    var cant = 0;
    for(var i = 0; i < pasatiempos.length; i++)
    {
        if(pasatiempos[i].checked)
        {
            cant++;
        }
    }
    if(cant == 0)
    {
        alert("Por favor seleccione sus pasatiempos");
        return false;
    }
    return true;
}


function validarterminos()
{
    var checkbox = document.getElementById("terminos");
    if(!checkbox.checked)
    {
        alert("Por favor acepte los terminos y condiciones");
        return false;
    }
    return true;
}


function validarobservacioes()
{
    var observaciones = document.getElementById("observaciones").value;
    if(observaciones.trim() == "")
    {
        return true;
    }
    return true;
}

function formatoemail(email)

{ 
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    return re.test(email);
}