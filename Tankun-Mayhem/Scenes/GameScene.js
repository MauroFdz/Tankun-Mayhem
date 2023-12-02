
	var player1;
	var player2;
	var stars;
	var bullets;
	var cursors;
	var keyA
	var keyD
	var keyS
	var keyW
	
	var keyC
	var keyV
	var keyB
	
	var keyI
	var keyO
	var keyP
	
	var zeppelin;
	var avion;
	
	
	
	var platforms;
	var score1 = 0;
	var score2 = 0;
	var gameOver = false;
	var cannonSpeed=3;
	var tankSpeed=160;
	var cannon1;
	var cannon2;
	var bullets1;
	var bullets2;
	var sizebrick = 60
	var dirty = false;
	
	
	
	function hitBullet1 (player1, bullet)
	{
		this.Hit_tank2.play();
		score2+=10;
		this.score2Text.setText('Score: ' + score2);
		bullet.destroy();
	}
	
	function hitBullet2 (player2, bullet)
	{
		
		this.Hit_tank.play();
		score1+=10;
		this.score1Text.setText('Score: ' + score1);
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
		this.load.image('Shade1Zep', '../assets/Maps/Map_1/Map_1_zep.png');
		this.load.image('Plane', '../assets/Maps/Map_1/Avion.png');
	
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
		this.hit_muro = this.sound.add('Hit_wall');
		this.Hit_tank = this.sound.add('Hit_tank');
		this.Hit_tank2 = this.sound.add('Hit_tank2');
		//  A simple background for our game
  
		// Controles personalizados player 1.
		keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		
		keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);//player1 rotate izq
		keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);//player1 fire
		keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);//player1 rotate der
		
		keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);//player2 rotate izq
		keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);//player2 fire
		keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);//player2 rotate der
		
		
		
		// MAPA
		this.add.image(800, 300, 'Map');	

		//Barra Inferior
		this.add.image(800, 650, 'barraScore');

		var wall = this.physics.add.staticGroup();
		var wallB = this.physics.add.staticGroup();
		//WALLS LATERALES
		for(var x = 1; x<=9*sizebrick; x+=sizebrick/2){

		wall.create(1585, 44+x, 'brick3');
		
		}for(var x = 1; x<=9*sizebrick; x+=sizebrick/2){

		wall.create(15, 44+x, 'brick3');
		
		}
		for(var x = 1; x<=27*sizebrick; x+=sizebrick){

			wall.create(30+x, 15, 'brick');
			
		}
		for(var x = 1; x<=27*sizebrick; x+=sizebrick){

			wall.create(30+x, 585, 'brick');
			
		}
		//BARRERAS
			//ABAJO
			for(var x = 1; x<10*sizebrick; x+=2.5*sizebrick){

				wallB.create(945+x, 420, 'brick5');
				
				
			}
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wallB.create(202+x, 420, 'brick5');
				
			}
	
			//CENTRAL
			for(var x = 1; x<=20*sizebrick; x+=sizebrick*4){

				if(x!=481)wallB.create(322+x, 300, 'brick2');
				
			}
			//ARRIBA
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wallB.create(202+x, 180, 'brick5');
				
			}
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wallB.create(945+x, 180, 'brick5');
				
			}
			
			//ARRIBA Irrompible
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wall.create(202+x, 140, 'brick3');
				
			}
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wall.create(945+x, 140, 'brick3');
				
			}
			
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wall.create(202+x, 220, 'brick3');
				
			}
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wall.create(945+x, 220, 'brick3');
				
			}
		//ABAJO Irrompible
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wall.create(202+x, 380, 'brick3');
				
			}
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wall.create(945+x, 380, 'brick3');
				
			}
			
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wall.create(202+x, 460, 'brick3');
				
			}
			for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){

				wall.create(945+x, 460, 'brick3');
				
			}
		
	
		// The player and its settings
			player1 = this.physics.add.sprite(100, 300, 'tank1');
		cannon1 =this.physics.add.sprite(100, 450, 'cannon1');
		cannon1.setOrigin(0.5,0.75);
		
		//  Player physics properties. Give the little guy a slight bounce.
		player1.setCollideWorldBounds(true);
		
		//  Input Events
		cursors = this.input.keyboard.createCursorKeys();
			
		player2 = this.physics.add.sprite(500, 450, 'tank2');
		cannon2 =this.physics.add.sprite(500, 450, 'cannon2');
			player2.setPosition(1500,300);
			
		player2.setCollideWorldBounds(true);
		player2.lastShot=0;
		player1.lastShot=0;
		
		
		tank1.bullets = this.physics.add.group();
		tank2.bullets = this.physics.add.group();
			
		
		
		//  The score
			
			
		//  Collide the player and the stars with the platforms
		this.physics.add.collider(player1, wall);
		this.physics.add.collider(player2, wall);
		this.physics.add.collider(player1, wallB);
		this.physics.add.collider(player2, wallB);
		this.physics.add.collider(player1, player2);
		//this.physics.add.collider(stars, platforms);
		this.physics.add.collider(tank1.bullets, wall,hitWall, null, this);
		this.physics.add.collider(tank2.bullets, wall,hitWall, null, this);
		this.physics.add.collider(tank1.bullets, wallB,hitWallB, null, this);
		this.physics.add.collider(tank2.bullets, wallB,hitWallB, null, this);
		this.physics.add.collider(tank2.bullets, tank1.bullets,hitBullet, null, this);
			
		//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
		//this.physics.add.overlap(player, stars, collectStar, null, this);
		
		this.physics.add.collider(player1, tank2.bullets, hitBullet1, null, this);
		this.physics.add.collider(player2, tank1.bullets, hitBullet2, null, this);
		
		this.add.image(800, 300, 'Shade1');	
		
		
		zeppelin = this.physics.add.sprite(500, 650, 'Shade1Zep');
		zeppelin.setVelocity(6,-5);
	
		avion = this.physics.add.sprite(800, 650, 'Plane');
		avion.setVelocity(0,-250);
		
		
		this.score1Text = this.add.text(85, 635, 'score: 0', { fontSize: '32px', fill: '#03d92d' });
		this.score2Text = this.add.text(1370,635, 'score: 0', { fontSize: '32px', fill: '#03d92d' });
		this.startTime = new Date().getSeconds() + new Date().getMinutes()*60 + new Date().getHours()*3600;
		this.timerText = this.add.text(780, 635,'', { fontSize: '32px', fill: '#03d92d' });
			
		
	}
	update ()
	{

		if (gameOver)
		{
			
			return;
		}
		
		if (keyA.isDown)
		{				
			player1.angle-=tank1.tankRot;
			
		}
		if (keyD.isDown)
		{		
			player1.angle+=tank1.tankRot;
		}
		
		if (keyW.isDown)
		{
			player1.setVelocity(Math.sin(player1.rotation)*tank1.tankSpeed,-Math.cos(player1.rotation)*tank1.tankSpeed);	
		} 
		 else if (keyS.isDown)
		{			
			player1.setVelocity(-Math.sin(player1.rotation)*tank1.tankSpeed,Math.cos(player1.rotation)*tank1.tankSpeed);	
		}
		else
		{
			player1.setVelocity(0,0);	
		}
		//Rotacion cannon 1
		if (keyC.isDown)
		{
			cannon1.angle-=cannonSpeed;
	
		} 
		if (keyB.isDown)
		{
			cannon1.angle+=cannonSpeed;
		}
		
		//Disparo player 1
		if (keyV.isDown&&player1.lastShot<=0)
		{	
			this.disparo_P.play();
			var bullet = tank1.bullets.create(player1.x,player1.y,'Bala_sher');
			
			bullet.contador = tank1.bulletReb;
			
			bullet.setCollideWorldBounds(true);
			bullet.setBounce(tank1.bounce);
			
			bullet.id=tank1.bulletPower;
			
			bullet.setVelocity(Math.sin(cannon1.rotation)*250,-Math.cos(cannon1.rotation)*250);
			player1.lastShot=tank1.cooldown;
		}
		player1.lastShot--;
		cannon1.setPosition(player1.x,player1.y);
		
		
		//Inputs player 2
		if (cursors.left.isDown)
		{				
			player2.angle-=tank2.tankRot;
			
		}
		if (cursors.right.isDown)
		{		
			player2.angle+=tank2.tankRot;
		}
		
		
		if (cursors.up.isDown)
		{
			player2.setVelocity(Math.sin(player2.rotation)*tank2.tankSpeed,-Math.cos(player2.rotation)*tank2.tankSpeed);	
		} 
		else if (cursors.down.isDown)
		{			
			player2.setVelocity(-Math.sin(player2.rotation)*tank2.tankSpeed,Math.cos(player2.rotation)*tank2.tankSpeed);		
		}
		else
		{
			player2.setVelocity(0,0);
		}
		//Rotacion cannon 2
		if (keyI.isDown)
		{
			cannon2.angle-=tank2.cannonRot;	
		} 
		if (keyP.isDown)
		{
			cannon2.angle+=tank2.cannonRot;
		}	
		
		//Disparo player 2
		if (keyO.isDown&&player2.lastShot<=0)
		{
			this.disparo_R.play();
			
			var bullet = tank2.bullets.create(player2.x,player2.y,'Bala_futuro');
			
			bullet.contador = tank2.bulletReb;
			
			player2.lastShot=tank2.cooldown;
			
			bullet.setBounce(tank2.bounce);
			bullet.id=tank2.bulletPower;
			
			bullet.setVelocity(Math.sin(cannon2.rotation)*500,-Math.cos(cannon2.rotation)*500);
			
		}
		player2.lastShot--;
		cannon2.setPosition(player2.x,player2.y);
		
		this.time = this.startTime + 60 -(new Date().getSeconds() + new Date().getMinutes()*60 + new Date().getHours()*3600);
		this.timerText.setText(this.time);
		if(this.time<=0)
		{
			
			this.scene.start("GameOver");
			J_musica.stop();

		}

		
	}
}