class LoadScene extends Phaser.Scene {
	constructor(){
		super("MCredito");
	}
	preload(){
		
		this.load.image('Volver', '../assets/Pantalla seleccion/volver.png');
		this.load.image('Creditos', '../assets/Pantalla seleccion/creditos2.png');
	}
	create(){
		
		this.Ayuda = this.add.image(800, 350, "Creditos");	
		this.Volver = this.add.image(800, 640, "Volver");	
		this.Volver.setInteractive();		
		
		this.Volver.on("pointerdown", ()=>{			
				this.scene.start("Menu");			
		})
		
	}
}