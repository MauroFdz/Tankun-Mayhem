
var tank1;
var tank2;
var J_musica; //Si es global, se usa en GameScene
var SoyJugador1 = false;


let ready=false
class CharSelect extends Phaser.Scene {
	constructor(){
		super("CharSelect");
	}
	preload(){
		this.load.image('Char1', '../assets/Pantalla seleccion/Chac1.png');
		this.load.image('Char2', '../assets/Pantalla seleccion/Chac2.png');
		this.load.image('Char3', '../assets/Pantalla seleccion/Chac3.png');
		this.load.image('Splash1', '../assets/TankRush/tank 1 rush.png');
		this.load.image('Splash2', '../assets/TankSpace/tank space chibi.png');
		this.load.image('Selector', '../assets/Pantalla seleccion/Barra personaje.png');
		this.load.image('Selec', '../assets/Pantalla seleccion/Seleccionar.png');
		this.load.image('Manio', '../assets/Pantalla seleccion/Stas.png');
		this.load.image('Manio1', '../assets/Pantalla seleccion/StatsVac.png');
		this.load.image('Manio2', '../assets/Pantalla seleccion/Statsfut.png');
		this.load.image("fondo2", "../assets/Pantalla seleccion/Fondo.png");
		this.load.image("volver", "../assets/Pantalla seleccion/volver.png");
		this.load.audio('J_musica', '../assets/Sounds/Juego_música.mp3');
	}
	
	create() {
		const fondo2 = this.add.image(0, 0, "fondo2").setOrigin(0, 0);
		const Selector = this.add.image(530, 500, "Selector");		
		const Splash1 = this.add.image(2000, 1000, "Splash1");
		const Splash2 = this.add.image(2000, 2000, "Splash2");
		let Manio = this.add.image(1300, 350, "Manio");
		const Seleccionar = this.add.image(925, 640, "Selec");
		const Volver = this.add.image(130, 645, "volver");
		const Char1 = this.add.image(115, 500, "Char1");
		const Char2 = this.add.image(265, 500, "Char2");
		const Char3 = this.add.image(415, 500, "Char3");
		J_musica= this.sound.add('J_musica');
		let selected=-1;
		
		let userBannerJ1=document.getElementById ("userBannerJ1")
		let userBannerJ2=document.getElementById ("userBannerJ2")
		
		
		let user = $('#userText').text()
		let userBanner=document.getElementById ("userBanner")	
		userBanner.style.visibility="hidden"
		Char1.setInteractive();
		Char2.setInteractive();
		Char3.setInteractive();
		Seleccionar.setInteractive();
		Volver.setInteractive();	
		var selectJson={
			"nombre":user,
			"tank":"",
			"status":"",
			"player1":false
		}
		var selectWS = new WebSocket('ws://'+location.host+'/select');
		selectWS.onopen = function () {
			selectJson.status="connecting"
			selectWS.send(JSON.stringify(selectJson))
		}
		selectWS.onerror = function(e) {
			console.log("WS error: " + e);
		}
		selectWS.onmessage = function(msg) {
			if(msg.data=="player1"){
				SoyJugador1=true
				selectJson.player1=true
				console.log(selectJson.player1)
				}
			else{
				let json = JSON.parse(msg.data);
				console.log(json);
			
				$('#user1Text').html(json.jugador1)
				$('#user2Text').html(json.jugador2)
					if(json.tank1=="TankRush"){
						tank1=new TankRush()
					}else if(json.tank1=="TankFuture"){
						tank1=new TankFuture()
					}
					if(json.tank2=="TankRush"){
						tank2=new TankRush()
					}else if(json.tank2=="TankFuture"){
						tank2=new TankFuture()
					}
					if(json.status=="ready")ready=true
				
			}
		}
		
		Volver.on("pointerdown", ()=>{			
				userBannerJ1.style.visibility="hidden"
				userBannerJ2.style.visibility="hidden"	
						
		})
		
		userBannerJ1.style.visibility="visible"
		userBannerJ2.style.visibility="visible"
		
		Char1.on("pointerdown", ()=>{
			Splash2.setPosition(2000, 2000);
			Splash1.setPosition(700, 250);
			Manio = this.add.image(1300, 350, "Manio1");
			selected=0;
		})
		
		Char2.on("pointerdown", ()=>{
			Splash1.setPosition(2000, 2000);
			Splash2.setPosition(700, 250);
			Manio = this.add.image(1300, 350, "Manio2");
			selected=1;
		})
		
		Seleccionar.on("pointerdown", ()=>{
			switch(selected){
				case -1:
					alert("Selecciona un tanque");
				break;
				
				case 0:
					selectJson.tank="TankRush"
				break;
				case 1:
					selectJson.tank="TankFuture"
				break;
				
			}
			selectJson.status="ready"
			selectWS.send(JSON.stringify(selectJson))
			
		})
		
		Volver.on("pointerdown", ()=>{
			this.scene.start("Menu");
		})
	}
	update(){
		
			if(ready){
			console.log("están los dos preparados")
			ready=false
				this.scene.start("GameScene")
					J_musica.play()
					J_musica.volume=0.1
			}
	}
}