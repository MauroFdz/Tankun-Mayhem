class Social extends Phaser.Scene {
	constructor(){
		super("Social");
	}
	preload(){
		
		this.load.image('Volver', '../assets/Pantalla seleccion/volver.png');
		this.load.image('Fondo', '../assets/Pantalla seleccion/Fondo.png');
	}
	create(){
		let login=document.getElementById ("login")
		let chat=document.getElementById ("chat")
		const fondo = this.add.image(800, 350, "Fondo");	
		const Volver = this.add.image(800, 640, "Volver");
		login.style.visibility="visible";	
		chat.style.visibility="visible";	
		Volver.setInteractive();
		Volver.on("pointerdown", ()=>{
				login.style.visibility="hidden";	
				chat.style.visibility="hidden";				
				this.scene.start("Menu");		
		})
		
	}
}