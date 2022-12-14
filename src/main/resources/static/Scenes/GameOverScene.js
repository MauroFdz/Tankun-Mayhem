
class GameOverScene extends Phaser.Scene {
	constructor()
	{
		super("GameOver");
	}
	
	preload()
	{
		//this.load.image("fondo", "../assets/Botones/fondo.jpg");

		//this.load.image('Salir', '../assets/Pantalla seleccion/Seleccionar.png');
		this.load.image('FondoGO', '../assets/Pantalla seleccion/Fondo.png');
		this.load.image('Volver', '../assets/Pantalla seleccion/volver.png');
		this.load.image('JugV1', '../assets/Pantalla seleccion/JugV1.png');
		this.load.image('JugV2', '../assets/Pantalla seleccion/JugV2.png');
		this.load.image('Empate', '../assets/Pantalla seleccion/Empate.png');
		this.load.image('gameoverJug1', '../assets/Pantalla seleccion/gameoverJug1.png');
		this.load.image('gameoverJug2', '../assets/Pantalla seleccion/gameoverJug2.png');			
		
	}
	
	create()
	{
		this.fondo = this.add.image(0, 0, "FondoGO");		
		
		this.fondo.setOrigin(0, 0);
		
		this.Volver = this.add.image(800, 600, "Volver");
		this.gameoverJug1 = this.add.image(300, 350, "gameoverJug1");	
		this.gameoverJug2 = this.add.image(1300, 350, "gameoverJug2");	
		
		this.text1 = this.add.text(425, 365,score1, { fontSize: '50px', fill: '#6eff99' });
		this.text2 = this.add.text(1425,365,+ score2, { fontSize: '50px', fill: '#6eff99' });
		//this.Salir = this.add.image(1300, 640, "Salir");
		
		//this.textVic = this.add.text(config.width/2, config.height/2, 'hola', { fontSize: '32px', fill: '#00ff00' });
		
		this.Volver.setInteractive();
		this.startTime = new Date().getSeconds() + new Date().getMinutes()*60 + new Date().getHours()*3600;
		
		this.timer = this.add.text(800, 610,'', { fontSize: '50px', fill: '#00ffff' });
		
		
		
		if(score1>score2)
		{
			this.JugV1 = this.add.image(800, 200, "JugV1");		
		}
		if(score1<score2)
		{
			this.JugV2 = this.add.image(800, 200, "JugV2");	
		}
		if(score1==score2)
		{
			this.Empate = this.add.image(800, 200, "Empate");
		}		
		
		
		
		this.Volver.on("pointerdown", ()=>{
			
				this.scene.start("Menu");
			
		})
		
	}
	update(){
		
		this.time = this.startTime + 20 - (new Date().getSeconds() + new Date().getMinutes()*60 + new Date().getHours()*3600);	
		if(this.time<=0)
		{
			this.scene.start("Menu");
		}
		
	}
}