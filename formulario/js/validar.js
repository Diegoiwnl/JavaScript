function validarformulario(){
    var nombrevalido = validarNombre();
    var apellidovalido = validarApellido();
    var usuariovalido = validarUsuario();
    var emailvalido = validarEmail();
    var passwordvalido = validarccontraseña();
    

if (nombrevalido && apellidovalido && usuariovalido && emailvalido && passwordvalido){
    alert("Registro exitoso");
    return true;
}else{
    alert("Por favor llene todos los campos");
    return false;
}   



}
function validarNombre()
{

    var nombre = document.getElementById("nombre").value;
    if(nombre.trim() == "")
    {
        alert("Por favor ingrese su nombre");
        return false;
    }
    return true;
}
function validarApellido()
{


    var apellido = document.getElementById("apellido").value;
    if(apellido.trim() == "")
    {
        alert("Por favor ingrese su apellido");
        return false;
    }
    return true;

}

function validarUsuario()
{  
    
    var usuario = document.getElementById("usuario").value;
    if(usuario.trim() == "")
    {
        alert("Por favor ingrese su usuario");
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
    var expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
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


function formatoemail(email)

{ 
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

