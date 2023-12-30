
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
		json={
		"posx1":100,
		"posy1":300,
		"rot1":0,
		"tur1":0,
		"shot1":0,
		"posx2":1500,
		"posy2":300,
		"rot2":0,
		"tur2":0,
		"shot2":0
	}
		const fondo = this.add.image(0, 0, "FondoGO").setOrigin(0, 0);
		
		const Volver = this.add.image(800, 600, "Volver");
		const gameoverJug1 = this.add.image(300, 350, "gameoverJug1");	
		const gameoverJug2 = this.add.image(1300, 350, "gameoverJug2");	
		
		const text1 = this.add.text(425, 365,score1, { fontSize: '50px', fill: '#6eff99' });
		const text2 = this.add.text(1425,365,score2, { fontSize: '50px', fill: '#6eff99' });
		//this.Salir = this.add.image(1300, 640, "Salir");
		
		//this.textVic = this.add.text(config.width/2, config.height/2, 'hola', { fontSize: '32px', fill: '#00ff00' });
		
		Volver.setInteractive();
		this.startTime = new Date().getTime()/1000 + 10;
		
		if(score1>score2)
		{
			const img = this.add.image(800, 200, "JugV1");	
			checkScore(score1,$('#userText').text())	
		}
		if(score1<score2)
		{
			const img = this.add.image(800, 200, "JugV2");
		}
		if(score1==score2)
		{
			const img = this.add.image(800, 200, "Empate");
		}	
		Volver.on("pointerdown", ()=>{
			
				this.scene.start("CharSelect");
			
		})
		
		
	}
	update(){
		
		let time = this.startTime - new Date().getTime()/1000;	
		if(time<=0)
		{
			this.scene.start("CharSelect");
		}
		
	}
}
function checkScore(score,username){
	let ranks=[]
		loadRanking(function(items){
			
			for(let i=0;i<items.length;i++)
					{ranks.push(items[i])}
					
	if(score>ranks[0].punt){
		console.log("+50")
		putRanking(0,username,score);
		putRanking(1,ranks[0].name,ranks[0].punt);
		putRanking(2,ranks[1].name,ranks[1].punt);
		
	}else if(score>ranks[1].punt){
		putRanking(1,username,score);
		putRanking(2,ranks[1].name,ranks[1].punt);
		
	}else if(score>ranks[2].punt){
		putRanking(2,username,score);
	}
		})
		console.log(ranks)
}
function putRanking(id,name,score){
	let data={
		pos:id+1,
		name:name,
		punt:score
	}
	$.ajax({
		method:"PUT",
		url:"http://"+location.host+"/ranking/"+id,
		data:JSON.stringify(data),
		processData:false,
        headers: {
            "Content-Type": "application/json"
        }
	}).done(function (ranking) {
        console.log("Ranking updated: " + JSON.stringify(ranking));
    })
}