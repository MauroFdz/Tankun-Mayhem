
class GameOverScene extends Phaser.Scene {
	constructor()
	{
		super("GameOver");
	}
	
	preload()
	{
		this.load.image("fondo", "../assets/Botones/fondo.jpg");
		this.load.image("titulo", "../assets/Botones/Titulo.png");
		this.load.image("jugar", "../assets/Botones/Jugar.png");
		this.load.image("ajustes", "../assets/Botones/Ajustes.png");
		this.load.image("salir", "../assets/Botones/Salir.png");
	}
	
	create()
	{
		this.fondo = this.add.image(0, 0, "fondo");
		
		this.fondo.setOrigin(0, 0);
		this.titulo = this.add.image(config.width/2, 100, "titulo");
		
		this.text1 = this.add.text(50, 0, score1, { fontSize: '32px', fill: '#52ff00' });
		this.text2 = this.add.text(1400, 0, score2, { fontSize: '32px', fill: '#ffff00' });
		
		this.textVic = this.add.text(config.width/2, config.height/2, 'hola', { fontSize: '32px', fill: '#00ff00' });
		
		this.startTime = new Date().getSeconds() + new Date().getMinutes()*60 + new Date().getHours()*3600;
		
		this.timer = this.add.text(800, 610,'', { fontSize: '32px', fill: '#00ffff' });
		
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