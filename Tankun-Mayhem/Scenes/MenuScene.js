var jugar;
var ajustes;
var salir;

class MenuScene extends Phaser.Scene {
	constructor(){
		super("Menu");
	}
	create(){
		this.M_musica = this.sound.add('M_musica');
		this.M_musica.play();
		
		
		this.fondo = this.add.image(0, 0, "fondo");
		this.fondo.setOrigin(0, 0);
		this.titulo = this.add.image(config.width/2, 100, "titulo");
		jugar = this.add.image(config.width/2, 300, "jugar");
		ajustes = this.add.image(config.width/2, 400, "ajustes");
		salir = this.add.image(config.width/2, 500, "salir");
		
		jugar.setInteractive();
		ajustes.setInteractive();
		salir.setInteractive();
		
		jugar.on("pointerdown", ()=>{
			this.scene.start("GameScene2");
		})
		
		ajustes.on("pointerdown", ()=>{
			this.scene.start("Loading");
		})
		
		salir.on("pointerdown", ()=>{
			this.scene.start("Loading");
		})
	}
	
	preload(){
		this.load.image("fondo", "../assets/Botones/fondo.jpg");
		this.load.image("titulo", "../assets/Botones/Titulo.png");
		this.load.image("jugar", "../assets/Botones/Jugar.png");
		this.load.image("ajustes", "../assets/Botones/Ajustes.png");
		this.load.image("salir", "../assets/Botones/Salir.png");
		
		this.load.audio('M_musica', '../assets/Sounds/Menú_música.mp3');
	}
}