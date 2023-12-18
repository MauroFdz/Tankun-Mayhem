
class MenuScene extends Phaser.Scene {
	constructor(){
		super("Menu");
	}
	preload(){
		this.load.image("fondo", "../assets/Botones/Backgrounds/background_tm.png");
		this.load.image("jugar", "../assets/Pantalla seleccion/jugar.png");
		this.load.image("ajustes", "../assets/Botones/Ajustes.png");
		this.load.image("salir", "../assets/Botones/Salir.png");
		this.load.image("ayuda", "../assets/Pantalla seleccion/ayudaboton.png");
		this.load.image("creditos", "../assets/Pantalla seleccion/creditos.png");
		this.load.image("social", "../assets/Pantalla seleccion/Social.png");
		
		this.load.audio('M_musica', '../assets/Sounds/Menú_música.mp3');
		this.load.audio('J_musica', '../assets/Sounds/Juego_música.mp3');
	}
	create(){
		this.M_musica = this.sound.add('M_musica');
		//this.J_musica= this.sound.add('J_musica');
		this.M_musica.play();
		
		this.fondo = this.add.image(0, 0, "fondo");
		this.fondo.setOrigin(0, 0);
		const jugar = this.add.image(config.width/2, 300, "jugar").setInteractive().on("pointerdown", ()=>{
			this.scene.start("CharSelect");
			this.M_musica.stop();
			
		})
		const ayuda = this.add.image(config.width/2, 400, "ayuda").setInteractive().on("pointerdown", ()=>{
			this.scene.start("Ayuda");
			this.M_musica.stop();
		})
		const creditos = this.add.image(config.width/2, 500, "creditos").setInteractive().on("pointerdown", ()=>{
			this.scene.start("MCredito");
			this.M_musica.stop();
		})
		const social = this.add.image(config.width/2, 600, "social").setInteractive().on("pointerdown", ()=>{
			this.scene.start("Social");
			this.M_musica.stop();
		})
	}
}