class Ayuda extends Phaser.Scene {
	constructor(){
		super("Ayuda");
	}
	preload(){
		//this.load.image('Salir', '../assets/Pantalla seleccion/Seleccionar.png');
		this.load.image('Volver', '../assets/Pantalla seleccion/volver.png');
		this.load.image('Ayuda', '../assets/Pantalla seleccion/ayuda.png');
	}
	create(){
		
		//this.Salir = this.add.image(1300, 640, "Salir");
		//this.Salir.setInteractive();
		//this.add.text(20,20,"Work in progress :D");
		//this.scene.start("Menu");
		
		this.Ayuda = this.add.image(800, 350, "Ayuda");	
		this.Volver = this.add.image(800, 640, "Volver");	
		this.Volver.setInteractive();		
		
		this.Volver.on("pointerdown", ()=>{			
				this.scene.start("Menu");			
		})
		
	}
}