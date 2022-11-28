
class GameOverScene extends Phaser.Scene {
	constructor()
	{
		super("GameOver");
	}
	
	preload()
	{
		this.load.image("fondo", "../assets/Botones/fondo.jpg");

		this.load.image('Salir', '../assets/Pantalla seleccion/Seleccionar.png');
	}
	
	create()
	{
		this.fondo = this.add.image(0, 0, "fondo");
		
		this.fondo.setOrigin(0, 0);
		
		
		this.text1 = this.add.text(50, 0, 'player 1 = ' + score1, { fontSize: '50px', fill: '#52ff00' });
		this.text2 = this.add.text(1200, 0,'player 2 = ' + score2, { fontSize: '50px', fill: '#ffff00' });
		this.Salir = this.add.image(1300, 640, "Salir");
		this.textVic = this.add.text(config.width/2, config.height/2, 'hola', { fontSize: '32px', fill: '#00ff00' });
		
		this.Salir.setInteractive();
		this.startTime = new Date().getSeconds() + new Date().getMinutes()*60 + new Date().getHours()*3600;
		
		this.timer = this.add.text(800, 610,'', { fontSize: '50px', fill: '#00ffff' });
		
		if(score1>score2)
		{
		this.textVic.setText('Ha ganado el jugador 1');
		}
		if(score1<score2)
		{
		this.textVic.setText('Ha ganado el jugador 2');
		}
		if(score1==score2)
		{
		this.textVic.setText('Empate');
		}
		
		this.Salir.on("pointerdown", ()=>{
			
				this.scene.start("Menu");
			
		})
		
	}
	update(){
		
		this.time = this.startTime + 20 - (new Date().getSeconds() + new Date().getMinutes()*60 + new Date().getHours()*3600);
		this.timer.setText(this.time);	
		if(this.time<=0)
		{
			this.scene.start("Menu");
		}
		
	}
}