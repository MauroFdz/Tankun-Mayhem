class LoadScene extends Phaser.Scene {
	constructor(){
		super("MCredito");
	}
	preload(){
		
		this.load.image('Volver', '../assets/Pantalla seleccion/volver.png');
		this.load.image('Creditos', '../assets/Pantalla seleccion/creditos2.png');
	}
	create(){
		
		const creditos = this.add.image(800, 350, "Creditos");	
		const Volver = this.add.image(800, 640, "Volver");
		
		let userBanner=document.getElementById ("userBanner")		
		userBanner.style.visibility="hidden"
			
		Volver.setInteractive();		
		
		Volver.on("pointerdown", ()=>{			
				this.scene.start("Menu");			
		})
		
	}
}