var Char1;
var Char2;
var Char3;
var Seleccionar;
var Volver;
var tank1;
var tank2;
var J_musica;
var hanJugado = false;

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
		this.load.image('nRebotes', '../assets/CharSelect/NumRebotes.png');
		this.load.image('Proyec', '../assets/CharSelect/Proyectil.png');
		this.load.image('Vel', '../assets/CharSelect/Velocidad.png');
		this.load.image("fondo2", "../assets/Pantalla seleccion/Fondo.png");
		this.load.image("volver", "../assets/Pantalla seleccion/volver.png");
		this.load.audio('J_musica', '../assets/Sounds/Juego_música.mp3');
	}
	
	create() {
		this.fondo2 = this.add.image(0, 0, "fondo2");
		this.fondo2.setOrigin(0, 0);
		
		this.Selector = this.add.image(530, 500, "Selector");		
		this.Splash1 = this.add.image(2000, 1000, "Splash1");
		this.Splash2 = this.add.image(2000, 2000, "Splash2");
		this.Manio = this.add.image(1300, 350, "Manio");
		Seleccionar = this.add.image(925, 640, "Selec");
		Volver = this.add.image(130, 645, "volver");
		Char1 = this.add.image(115, 500, "Char1");
		Char2 = this.add.image(265, 500, "Char2");
		Char3 = this.add.image(415, 500, "Char3");
		J_musica= this.sound.add('J_musica');
		this.selected=-1;
		Char1.setInteractive();
		Char2.setInteractive();
		Char3.setInteractive();
		Seleccionar.setInteractive();
		Volver.setInteractive();
		
		Char1.on("pointerdown", ()=>{
			this.Splash2.setPosition(2000, 2000);
			this.Splash1.setPosition(700, 250);
			this.Manio = this.add.image(1300, 350, "Manio1");
			this.selected=0;
		})
		
		Char2.on("pointerdown", ()=>{
			this.Splash1.setPosition(2000, 2000);
			this.Splash2.setPosition(700, 250);
			this.Manio = this.add.image(1300, 350, "Manio2");
			this.selected=1;
		})
		
		Seleccionar.on("pointerdown", ()=>{
			/*if(hanJugado){
				this.scene.scene.remove("GameScene");
				this.scene.add("GameScene",GameScene,true);
			}*/
			switch(this.selected){
				case -1:
					alert("Selecciona un tanque");
				break;
				
				case 0:
					tank1 = new TankRush();
					tank2 = new TankFuture();
					this.scene.start("GameScene");
					J_musica.play();
					J_musica.volume=0.1;
					hanJugado = true;
				break;
				
				case 1:
					tank2 = new TankRush();
					tank1 = new TankFuture();
					this.scene.start("GameScene");
					J_musica.play();
					J_musica.volume=0.1;
					hanJugado = true;
				break;
				
			}
		})
		
		Volver.on("pointerdown", ()=>{
			this.scene.start("Menu");
		})
	}
}