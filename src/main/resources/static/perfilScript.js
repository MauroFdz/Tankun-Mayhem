//Cargar perfiles, cargamos todos
var loadedPerfiles= [];
var perfil;
function loadPerfiles(callback) {
	$.ajax({
    method:"GET",
    url:"http://localhost:8090/perfiles",
    processData:false,
    headers:{"Content-Type":"application/json"}
    }).done(function(perfiles) {
        callback(perfiles)
    })
}

//Crear un perfil
function crearPerfil(perfil) {
    $.ajax({
    method:"POST",
    url:"http://localhost:8090/perfiles",
    data:JSON.stringify(perfil),
    processData:false,
    headers:{"Content-Type":"application/json"}
    }).done(function(perfil) {
		console.log(perfil)
    })
}

//Crear un mensaje
function crearMensaje(perfil) {
    $.ajax({
    method:"POST",
    url:"http://localhost:8090/mensajes",
    data:JSON.stringify(perfil),
    processData:false,
    headers:{"Content-Type":"application/json"}
    }).done(function(perfil) {
		console.log(perfil)
    })
}

//Para perfil de momento no necesitamos PUT ni DELETE, pero se pueden hacer


var firsttime=true;
//Control de inputs, relacionado con perfil
$(document).ready(function()
{
	if(firsttime){
	 loadPerfiles(function (perfiles) { 
        //When items are loaded from server
        console.log(perfiles);
        for (var i = 0; i < perfiles.length; i++) {
            loadedPerfiles.push(perfiles[i]);
        }
    });
    }
    
    firsttime=false;
    //Handler Boton Crear Usuario  
	$("#createButton").click(function () {

        var nombre = $("#nameText").val();
        var pass = $("#passText").val();
        if(nombre!=""){
		var existe=false;
		for(var i=0;i<loadedPerfiles.length;i++)
		{
			if(nombre==loadedPerfiles[i].name)
			{
				existe=true;
			}
		}
		if(existe)
		{
        	console.log("Usuario ya en uso");
		}
		else
		{
       		var perfil = {
            	name: nombre,
            	pass: pass
        	}
        	loadedPerfiles.push(perfil);
        	crearPerfil(perfil);
        	
        }
        $("#nameText").val('');
        $("#passText").val('');
        }
    });
   

    
    //Handler Boton Inicio de sesión  
	$("#initButton").click(function () {

        var nombre = $("#nameText").val();
        var pass = $("#passText").val();
        
		for(var i=0;i<loadedPerfiles.length;i++)
		{
			if(nombre==loadedPerfiles[i].name)
			{
				if(pass!=loadedPerfiles[i].pass)
				{
					console.log("contraseña incorrecta");
				}
				else
				{
					console.log("Sesión iniciada como: "+loadedPerfiles[i].name);
					perfil=loadedPerfiles[i].name;
					
        			$("#passText").disabled=true;
        			$("#initButton").disabled=true;
				}
			}
		}
		$("#nameText").val('')
        $("#passText").val('');
    });
     //Handler Boton Enviar mensaje
	$("#enviarButton").click(function () {
  		 var msg = $("#msgText").val();
  		 if(perfil==null){
			   alert("Inicia sesión hombre");
		   }else{
  		 if(msg!=""){
			   var message = {
            	user: perfil,
            	message: msg
        	}
        	crearMensaje(message);
        	console.log(message);
        	$("#msgText").val('');
		 }
		 
		 }
    });
    
})