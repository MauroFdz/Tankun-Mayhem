var Char1;
var Char2;
var Char3;
var Seleccionar;
var tank1;
var tank2;
var J_musica;


class CharSelect extends Phaser.Scene {
	constructor(){
		super("CharSelect");
	}
	preload(){
		this.load.image('Char1', '../assets/TankRush/base.png');
		this.load.image('Char2', '../assets/TankSpace/base.png');
		this.load.image('Splash1', '../assets/TankRush/tank 1 rush.png');
		this.load.image('Splash2', '../assets/TankSpace/tank space chibi.png');
		this.load.image('Desc', '../assets/CharSelect/Descripcion.png');
		this.load.image('Selec', '../assets/CharSelect/Seleccionar.png');
		this.load.image('Manio', '../assets/CharSelect/Manio.png');
		this.load.image('nRebotes', '../assets/CharSelect/NumRebotes.png');
		this.load.image('Proyec', '../assets/CharSelect/Proyectil.png');
		this.load.image('Vel', '../assets/CharSelect/Velocidad.png');
		
		this.load.audio('J_musica', '../assets/Sounds/Juego_música.mp3');
	}
	
	create() {
		this.fondo = this.add.image(0, 0, "fondo");
		this.fondo.setOrigin(0, 0);
		Char1 = this.add.image(100, 100, "Char1");
		Char2 = this.add.image(200, 100, "Char2");
		Char3 = this.add.image(300, 100, "Char3");
		this.Splash1 = this.add.image(2000, 2000, "Splash1");
		this.Splash2 = this.add.image(2000, 2000, "Splash2");
		this.Manio = this.add.image(1300, 100, "Manio");
		this.Vel = this.add.image(1300, 200, "Vel");
		this.nRebotes = this.add.image(1300, 300, "nRebotes");
		this.Proyec = this.add.image(1300, 400, "Proyec");
		this.Desc = this.add.image(1300, 500, "Desc");
		Seleccionar = this.add.image(1400, 625, "Selec");
		this.J_musica= this.sound.add('J_musica');
		this.selected=-1;
		Char1.setInteractive();
		Char2.setInteractive();
		Char3.setInteractive();
		Seleccionar.setInteractive();
		
		Char1.on("pointerdown", ()=>{
			this.Splash2.setPosition(2000, 2000);
			this.Splash1.setPosition(config.width/2, config.height/2);
			this.selected=0;
		})
		
		Char2.on("pointerdown", ()=>{
			this.Splash1.setPosition(2000, 2000);
			this.Splash2.setPosition(config.width/2, config.height/2);
			this.selected=1;
		})
		
		Seleccionar.on("pointerdown", ()=>{
			switch(this.selected){
				case -1:
					alert("Selecciona un tanque");
				break;
				
				case 0:
					tank1 = new TankRush();
					tank2 = new TankFuture();
					this.scene.start("GameScene");
					this.J_musica.play();
					this.J_musica.volume=0.5;
				break;
				
				case 1:
					tank2 = new TankRush();
					tank1 = new TankFuture();
					this.scene.start("GameScene");
					this.J_musica.play();
					this.J_musica.volume=0.5;
				break;
				
			}
		})
	}
}