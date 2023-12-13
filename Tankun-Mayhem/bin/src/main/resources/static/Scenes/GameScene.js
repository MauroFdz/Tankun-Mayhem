	let score1 = 0;
	let score2 = 0;
	
	
	
	function hitBullet1 (player1, bullet)
	{
		this.Hit_tank2.play();
		score2+=10;
		this.score2Text.setText('Puntuación:' + score2);
		bullet.destroy();
	}
	
	function hitBullet2 (player2, bullet)
	{
		
		this.Hit_tank.play();
		score1+=10;
		this.score1Text.setText('Puntuación:' + score1);
		bullet.destroy();
	}
	
	function hitWall(bullet, wall)
	{
		if(bullet.id == 1){
			bullet.setScale(1-(1/bullet.contador));
			//bullet.setBounce(bullet.bounce*2.5);
		}
		bullet.contador--;
		if(bullet.contador <= 0){
			bullet.destroy();
		}

		
	}
	function hitWallB(bullet, wallB)
	{
		if(bullet.id == 1){
			bullet.setScale(1-(1/bullet.contador));
			//bullet.setBounce(bullet.bounce*2.5);
		}
		bullet.contador--;
		if(bullet.contador <= 0){
			bullet.destroy();
		}

			wallB.disableBody(true, true);

		
	}
	function hitBullet (bullet1, bullet2)
	{
		
		bullet1.destroy();
			
		bullet2.contador--;
		
		bullet2.setScale(bullet2.contador/9);
		if(bullet2.contador==0){
			bullet2.destroy();	
		}
	}
	

class GameScene extends Phaser.Scene
{
	constructor()
	{
		super({key: "GameScene"});
	}
	
	preload ()
	{
		this.load.image('Map', '../assets/Maps/Map_1/Map.png');
		this.load.image('brick', "assets/Tiles/brick4.png");
		this.load.image('brick2', "assets/Tiles/brick2.png");
		this.load.image('brick3', "assets/Tiles/brick3.png");
		this.load.image('brick5', "assets/Tiles/brick5.png");
		
		this.load.image('tank1', tank1.src);
		this.load.image('cannon1', tank1.cannon);
		this.load.image('Bala_sher', tank1.bullet);	
		
		this.load.image('tank2', tank2.src);
		this.load.image('cannon2', tank2.cannon);
		this.load.image('Bala_futuro', tank2.bullet);

		this.load.image('barraScore', "assets/Maps/lowbar.png");
		
		
		
		//carga de balas y sombras
		this.load.image('Shade1', '../assets/Maps/Map_1/Map_1_shade.png');
		//this.load.image('Shade1Zep', '../assets/Maps/Map_1/Map_1_zep.png');
		//this.load.image('Plane', '../assets/Maps/Map_1/Avion.png');
	
		//carga de assests audios
		this.load.audio('P_shot',tank1.sound);
		this.load.audio('R_shot', tank2.sound);
		this.load.audio('Hit_wall', '../assets/Sounds/Hit_wall.mp3');
		this.load.audio('Hit_tank', '../assets/Sounds/Choque.mp3');
		this.load.audio('Hit_tank2', '../assets/Sounds/Golpe.mp3');
	}

	create()
	{
		
		//Añadir audios
		this.disparo_P = this.sound.add('P_shot');
		this.disparo_R = this.sound.add('R_shot');
		const hit_muro = this.sound.add('Hit_wall');
		this.Hit_tank = this.sound.add('Hit_tank');
		this.Hit_tank2 = this.sound.add('Hit_tank2');
		//  A simple background for our game
  
		// Controles personalizados player 1.
		this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		
		this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);//player1 rotate izq
		this.keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);//player1 fire
		this.keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);//player1 rotate der
		
		this.keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);//player2 rotate izq
		this.keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);//player2 fire
		this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);//player2 rotate der
		
		
		// MAPA
		this.add.image(800, 300, 'Map');	

		//Barra Inferior
		this.add.image(800, 650, 'barraScore');

		let wall = this.physics.add.staticGroup();
		let wallB = this.physics.add.staticGroup();
		let x=1;
		//WALLS LATERALES
		for(x = 1; x<=9*60; x+=60/2){

		wall.create(1585, 44+x, 'brick3');
		
		}for(x = 1; x<=9*60; x+=60/2){

		wall.create(15, 44+x, 'brick3');
		
		}
		for(x = 1; x<=27*60; x+=60){

			wall.create(30+x, 15, 'brick');
			
		}
		for(x = 1; x<=27*60; x+=60){

			wall.create(30+x, 585, 'brick');
			
		}
		//BARRERAS
			//ABAJO
			for( x = 1; x<10*60; x+=2.5*60){

				wallB.create(945+x, 420, 'brick5');
				
				
			}
			for( x = 1; x<=10*60; x+=2.5*60){

				wallB.create(202+x, 420, 'brick5');
				
			}
	
			//CENTRAL
			for( x = 1; x<=20*60; x+=60*4){

				if(x!=481)wallB.create(322+x, 300, 'brick2');
				
			}
			//ARRIBA
			for(x = 1; x<=10*60; x+=2.5*60){

				wallB.create(202+x, 180, 'brick5');
				
			}
			for(x = 1; x<=10*60; x+=2.5*60){

				wallB.create(945+x, 180, 'brick5');
				
			}
			
			//ARRIBA Irrompible
			for(x = 1; x<=10*60; x+=2.5*60){

				wall.create(202+x, 140, 'brick3');
				
			}
			for(x = 1; x<=10*60; x+=2.5*60){

				wall.create(945+x, 140, 'brick3');
				
			}
			
			for(x = 1; x<=10*60; x+=2.5*60){

				wall.create(202+x, 220, 'brick3');
				
			}
			for(x = 1; x<=10*60; x+=2.5*60){

				wall.create(945+x, 220, 'brick3');
				
			}
		//ABAJO Irrompible
			for(x = 1; x<=10*60; x+=2.5*60){

				wall.create(202+x, 380, 'brick3');
				
			}
			for(x = 1; x<=10*60; x+=2.5*60){

				wall.create(945+x, 380, 'brick3');
				
			}
			
			for(x = 1; x<=10*60; x+=2.5*60){

				wall.create(202+x, 460, 'brick3');
				
			}
			for(x = 1; x<=10*60; x+=2.5*60){

				wall.create(945+x, 460, 'brick3');
				
			}
		
	
		// The player and its settings
		this.player1 = this.physics.add.sprite(100, 300, 'tank1');
		this.cannon1 =this.physics.add.sprite(100, 450, 'cannon1');
		this.cannon1.setOrigin(0.5,0.75);
		
		//  Player physics properties. Give the little guy a slight bounce.
		this.player1.setCollideWorldBounds(true);
		
		//  Input Events
		this.cursors = this.input.keyboard.createCursorKeys();
			
		this.player2 = this.physics.add.sprite(500, 450, 'tank2');
		this.cannon2 =this.physics.add.sprite(500, 450, 'cannon2');
		this.player2.setPosition(1500,300);
			
		this.player2.setCollideWorldBounds(true);
		this.player2.lastShot=(new Date()).getTime() / 1000;
		this.player1.lastShot=(new Date()).getTime() / 1000;
		
		
		tank1.bullets = this.physics.add.group();
		tank2.bullets = this.physics.add.group();
			
		
		
		//  The score
			
		this.physics.add.collider(this.player1, wall);
		this.physics.add.collider(this.player2, wall);
		this.physics.add.collider(this.player1, wallB);
		this.physics.add.collider(this.player2, wallB);
		this.physics.add.collider(this.player1, this.player2);
		this.physics.add.collider(tank1.bullets, wall,hitWall, null, this);
		this.physics.add.collider(tank2.bullets, wall,hitWall, null, this);
		this.physics.add.collider(tank1.bullets, wallB,hitWallB, null, this);
		this.physics.add.collider(tank2.bullets, wallB,hitWallB, null, this);
		this.physics.add.collider(tank2.bullets, tank1.bullets,hitBullet, null, this);
			
		
		this.physics.add.collider(this.player1, tank2.bullets, hitBullet1, null, this);
		this.physics.add.collider(this.player2, tank1.bullets, hitBullet2, null, this);
		
		this.add.image(800, 300, 'Shade1');	
		
		
		//this.zeppelin = this.physics.add.sprite(500, 650, 'Shade1Zep');
		//this.zeppelin.setVelocity(6,-5);
	
		//this.avion = this.physics.add.sprite(800, 650, 'Plane');
		//this.avion.setVelocity(0,-250);
		
		
		this.score1Text = this.add.text(25, 635, 'Puntuación:0', { fontSize: '32px', fill: '#ff8c00' });
		this.score2Text = this.add.text(1300,635, 'Puntuación:0', { fontSize: '32px', fill: '#ff8c00' });
		this.startTime = (new Date()).getTime() / 1000;
		this.timerText = this.add.text(780, 635,'', { fontSize: '32px', fill: '#ff8c00' });
			
		
	}
	update ()
	{

		if (this.keyA.isDown)
		{				
			this.player1.angle-=tank1.tankRot;
		}
		if (this.keyD.isDown)
		{		
			this.player1.angle+=tank1.tankRot;
		}
		
		if (this.keyW.isDown)
		{
			this.player1.setVelocity(Math.sin(this.player1.rotation)*tank1.tankSpeed,-Math.cos(this.player1.rotation)*tank1.tankSpeed);
			this.cannon1.setPosition(this.player1.x,this.player1.y);
		} 
		 else if (this.keyS.isDown)
		{			
			this.player1.setVelocity(-Math.sin(this.player1.rotation)*tank1.tankSpeed,Math.cos(this.player1.rotation)*tank1.tankSpeed);
			this.cannon1.setPosition(this.player1.x,this.player1.y);	
		}
		else
		{
			this.player1.setVelocity(0,0);
			this.cannon1.setPosition(this.player1.x,this.player1.y);		
		}
		//Rotacion cannon 1
		if (this.keyC.isDown)
		{
			this.cannon1.angle-=tank1.cannonRot;
	
		} 
		if (this.keyB.isDown)
		{
			this.cannon1.angle+=tank1.cannonRot;
		}
		
		//Disparo player 1
		if (this.keyV.isDown&&this.player1.lastShot<(new Date()).getTime() / 1000)
		{	
			this.disparo_P.play();
			var bullet = tank1.bullets.create(this.player1.x,this.player1.y,'Bala_sher');
			
			bullet.contador = tank1.bulletReb;
			
			bullet.setCollideWorldBounds(true);
			bullet.setBounce(tank1.bounce);
			
			bullet.id=tank1.bulletPower;
			
			this.player1.lastShot=((new Date()).getTime() / 1000)+tank1.cooldown;
			bullet.setVelocity(Math.sin(this.cannon1.rotation)*250,-Math.cos(this.cannon1.rotation)*250);
		}
		
		
		//Inputs player 2
		if (this.cursors.left.isDown)
		{				
			this.player2.angle-=tank2.tankRot;
			
		}
		if (this.cursors.right.isDown)
		{		
			this.player2.angle+=tank2.tankRot;
		}
		
		
		if (this.cursors.up.isDown)
		{
			this.player2.setVelocity(Math.sin(this.player2.rotation)*tank2.tankSpeed,-Math.cos(this.player2.rotation)*tank2.tankSpeed);	
		} 
		else if (this.cursors.down.isDown)
		{			
			this.player2.setVelocity(-Math.sin(this.player2.rotation)*tank2.tankSpeed,Math.cos(this.player2.rotation)*tank2.tankSpeed);		
		}
		else
		{
			this.player2.setVelocity(0,0);
		}
		//Rotacion cannon 2
		if (this.keyI.isDown)
		{
			this.cannon2.angle-=tank2.cannonRot;	
		} 
		if (this.keyP.isDown)
		{
			this.cannon2.angle+=tank2.cannonRot;
		}	
		
		//Disparo player 2
		if (this.keyO.isDown&&this.player2.lastShot<(new Date()).getTime() / 1000)
		{
			this.disparo_R.play();
			
			var bullet = tank2.bullets.create(this.player2.x,this.player2.y,'Bala_futuro');
			
			bullet.contador = tank2.bulletReb;
			
			this.player2.lastShot=((new Date()).getTime() / 1000)+tank2.cooldown;
			
			bullet.setBounce(tank2.bounce);
			bullet.id=tank2.bulletPower;
			
			bullet.setVelocity(Math.sin(this.cannon2.rotation)*500,-Math.cos(this.cannon2.rotation)*500);
			
		}
		this.cannon2.setPosition(this.player2.x,this.player2.y);
		
		this.time = parseInt(this.startTime + 10 -(new Date()).getTime() / 1000);
		this.timerText.setText(this.time);
		if(this.time<=0)
		{
			this.scene.start("GameOver");
			J_musica.stop();

		}

		
	}
}