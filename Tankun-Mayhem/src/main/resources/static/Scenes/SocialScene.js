class Social extends Phaser.Scene {
	constructor(){
		super("Social");
	}
	preload(){
		
		this.load.image('Volver', '../assets/Pantalla seleccion/volver.png');
		this.load.image('Fondo', '../assets/Pantalla seleccion/Fondo.png');
	}
	create(){
		var users=[];
		let status_msg="";
		let login=document.getElementById ("login")
		let chat=document.getElementById ("chat")
		this.add.image(800, 350, "Fondo");	
		this.add.image(800, 640, "Volver").setInteractive().on("pointerdown", ()=>{
				login.style.visibility="hidden";	
				chat.style.visibility="hidden";				
				this.scene.start("Menu");		
		});
		login.style.visibility="visible";	
		chat.style.visibility="visible";
		loadUsers(function(items){
			for(let i=0;i<items.length;i++)
					{users.push(items[i])}
		})
		$('#init').click(function(){
			if($('#user').val()==undefined)
			{
				console.log("No hay nombre de usuario");
			}
			else
			{
					for(let i=0;i<users.length;i++)
					{
						if(users[i].name==$('#user').val())
						{
							if(users[i].password==$('#password').val())
							{
								$('#msg').html("Se ha iniciado sesion como "+ users[i].name)
								return
							}
							else
							{
								$('#msg').html("La contraseña introducida es incorrecta")
								return
							}
						}
					}
					$('#msg').html("No existe usuario con ese nombre")
			}
		})
		$('#create').click(function(){
			if($('#user').val()==undefined||$('#password').val()==undefined||$('#user').val()==''||$('#password').val()=='')
			{
				$('#msg').html("Es necesario introducir nombre y contraseña")
			}
			else
			{
				let disponible=true
					for(let i=0;i<users.length;i++)
					{
					console.log($('#user').val())
					console.log(users[i].name)
						if(users[i].name==$('#user').val())
						{
							disponible=false
							$('#msg').html("Ya existe un usuario con ese nombre")
						}
					}
					if(disponible)
					{
						let user=
						{
							name:$('#user').val(),
							password:$('#password').val()
						}
						$('#msg').html("Usuario creado con exito")
						createUser(user,function(user){console.log(user)})
						users.push(user)
					}
			}
		})
	}
	
}
function loadUsers(callback){
	$.ajax({
		method:"GET",
		url:"http://"+location.host+"/users",
		processData:false,
		headers:{"Content-Type":"application/json"}
	}).done(function(items){
		console.log("Se han cargado los usuarios: "+JSON.stringify(items))
		callback(items)
	})
}
function createUser(user, callback)
{
	$.ajax(
	{
		method:"POST",
		url:"http://"+location.host+"/users",
		data:JSON.stringify(user),
		processData:false,
        headers: {
            "Content-Type": "application/json"
        }
	}).done(function (user) {
        console.log("Usuario creado: " + JSON.stringify(user));
        callback(user);
    })

}

