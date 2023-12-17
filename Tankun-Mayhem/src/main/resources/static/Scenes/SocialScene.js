var ranking=[]
let lastUpdate
class Social extends Phaser.Scene {
	constructor(){
		super("Social");
	}
	preload(){
		
		this.load.image('Volver', '../assets/Pantalla seleccion/volver.png');
		this.load.image('Fondo', '../assets/Pantalla seleccion/Fondo.png');
	}
	create(){
		let users=[]
		let status_msg=""
		let login=document.getElementById ("login")
		let ranks=document.getElementById ("ranking")
		let chat=document.getElementById ("chat")
		let chatBg=document.getElementById ("chatBg")
		this.add.image(800, 350, "Fondo");	
		this.add.image(800, 640, "Volver").setInteractive().on("pointerdown", ()=>{
				login.style.visibility="hidden"
				chat.style.visibility="hidden"	
				chatBg.style.visibility="hidden"	
				ranks.style.visibility="hidden"				
				this.scene.start("Menu")	
		})
		login.style.visibility="visible"
		chat.style.visibility="visible"
		ranks.style.visibility="visible"
		chatBg.style.visibility="visible"
		loadUsers(function(items){
			for(let i=0;i<items.length;i++)
					{users.push(items[i])}
		})
		ranking=[]
		loadRanking(function(items){
			for(let i=0;i<items.length;i++)
					{ranking.push(items[i])}
			$('#rank1').html(ranking[0].pos+". "+ranking[0].name+": "+ranking[0].punt)
			$('#rank2').html(ranking[1].pos+". "+ranking[1].name+": "+ranking[1].punt)
			$('#rank3').html(ranking[2].pos+". "+ranking[2].name+": "+ranking[2].punt)
		})
		$('#init').click(function(){
			if($('#user').val()==undefined)
			{
				console.log("No hay nombre de usuario");
			}
			else
			{
				loadUsers(function(items){
					for(let i=0;i<items.length;i++)
						{users.push(items[i])}
				})
					for(let i=0;i<users.length;i++)
					{
						if(users[i].name==$('#user').val())
						{
							if(users[i].password==$('#password').val())
							{
								$('#userText').html($('#user').val())
								$('#user').val('')
								$('#password').val('')
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
							id:users.length,
							name:$('#user').val(),
							password:$('#password').val()
						}
						$('#userText').html($('#user').val())
						$('#user').val('')
						$('#password').val('')
						$('#msg').html("Usuario creado con exito")
						createUser(user,function(user){console.log(user)})
						users.push(user)
					}
			}
		})
		$('#delete').click(function(){
			if($('#user').val()==undefined)
			{
				console.log("No hay nombre de usuario");
			}
			else
			{
				let usersaux=[]
					for(let i=0;i<users.length;i++)
					{
						if(users[i].name==$('#user').val())
						{
							if(users[i].password==$('#password').val())
							{
								$('#msg').html("Usuario borrado con exito")
								$('#userText').html("Anónimo")
								$('#user').val('')
								$('#password').val('')
								deleteUser(i,function(msg){$('#msg').html(msg)})
							}
							else
							{
								$('#msg').html("La contraseña introducida es incorrecta")
							}
						}
						else{
						usersaux.push(users[i])
						}
					}
					users=usersaux
			}
		})
		$('#chatSend').click(function(){
			let chat={
				name:$('#userText').text(),
				msg:$('#chatText').val()
			}
			$('#chatText').val('')
			postChat(chat)
		
		})
	}
	update ()
	{
			loadChat(function(chat){
				let str=""
				for(let i=0;i<chat.length;i++)
						{str+=chat[i].name+": "+chat[i].msg+"<br>"}
				
				console.log(str);
				$('#chatTxt').html(str)
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
function loadChat(callback){
	$.ajax({
		method:"GET",
		url:"http://"+location.host+"/chat",
		processData:false,
		headers:{"Content-Type":"application/json"}
	}).done(function(chat){
		console.log("Se han cargado los usuarios: "+JSON.stringify(chat))
		callback(chat)
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

function postChat(chat)
{ 
	$.ajax(
	{
		method:"POST",
		url:"http://"+location.host+"/chat",
		data:JSON.stringify(chat),
		processData:false,
        headers: {
            "Content-Type": "application/json"
        }
	}).done(function (chat) {
		console.log(chat)
    })

}
function deleteUser(id,callback){
	$.ajax(
	{
		method:"DELETE",
		data:JSON.stringify(id),
		processData:false,
		url:"http://"+location.host+"/users/"+id,
		headers:{"Content-Type":"application/json"},
		dataType:"json"
	}).done(function (msg) {
        console.log(msg);
        callback(msg);
    })
}

function loadRanking(callback){
	$.ajax({
		method:"GET",
		url:"http://"+location.host+"/ranking",
		processData:false,
		headers:{"Content-Type":"application/json"}
	}).done(function(items){
		console.log("Se ha cargado el ranking: "+JSON.stringify(items))
		callback(items)
	})
}
