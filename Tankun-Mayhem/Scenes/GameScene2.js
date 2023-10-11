
	var player1;
	var player2;
	var stars;
	var bullets;
	var platforms;
	var cursors;
	var score1 = 0;
	var score2 = 0;
	var gameOver = false;
	var score1Text;
	var score2Text;
	var cannonSpeed=3;
	var tankSpeed=160;
	var cannon1;
	var cannon2;
	var bullets1;
	var bullets2;
	var sizebrick = 60
	
	var bounce1= 3
	var bounce2= 9
	
	var bounceSpeed1= 1
	var bpunceSpeed2= 1.25
	
	var keyA;
	var keyD;
	var keyS;
	var keyW;
	var keyC;
	var keyV;
	var keyB;
	var keyI;
	var keyO;
	var keyP;
	
	
	function hitBullet1 (player1, bullet)
	{
		this.Hit_tank.play();
		score2+=10;
		score2Text.setText('Score: ' + score2);
		bullet.destroy();
	}
	
	function hitBullet2 (player2, bullet)
	{
		
		this.Hit_tank.play();
		score1+=10;
		score1Text.setText('Score: ' + score1);
		bullet.destroy();
	}
	
	function hitWall(bullet, wall)
	{
		
		bullet.contador = bullet.contador - 1;
		
		if(bullet.bounce >= 1.25){
			bullet.setBounce(bullet.bounce*2.5);
		}
		
		if(bullet.contador <= 0){
			bullet.destroy();
		}
		
	}
	
	function hitBullet (bullet1, bullet2)
	{
		bullet1.destroy();
			
		bullet2.contador--;
		if(bullet2.contador==0){
			bullet2.destroy();	
		}
	}
	

class GameScene2 extends Phaser.Scene
{
	constructor()
	{
		super({key: "GameScene2"});
	}
	
	
	preload ()
	{
		this.load.image('Map', '../assets/Maps/Map_1/Map.png');
		this.load.image('ground', '../assets/platform.png');
		this.load.image('brick', "assets/Tiles/brick1.png");
		this.load.image('brick2', "assets/Tiles/brick2.png");
		this.load.image('brick5', "assets/Tiles/brick5.png");
		this.load.image('star', '../assets/star.png');
		this.load.image('bomb', '../assets/bomb.png');
		this.load.image('bullet', '../assets/bomb.png');
		this.load.image('target', '../assets/reticulo.png');
		this.load.image('tank1', "../assets/TankRush/base.png");
		this.load.image('cannon1', "../assets/TankRush/Tank1cannon.png");
		this.load.image('tank2', "../assets/TankSpace/base.png");
		this.load.image('cannon2', "../assets/TankSpace/canon.png");
		
		
		
		//
		this.load.image('Bala_futuro', "../assets/TankSpace/Bala_futuro.png");
		this.load.image('Bala_sher', "../assets/TankRush/Bala_sher.png");		
		this.load.image('Shade1', '../assets/Maps/Map_1/Map_1_shade.png');
		this.load.image('Shade1Zep', '../assets/Maps/Map_1/Map_1_zep.png');
	
		//carga de assests audios
		this.load.audio('P_shot', '../assets/Sounds/P_shot.mp3');
		this.load.audio('R_shot', '../assets/Sounds/R_shot.mp3');
		this.load.audio('Hit_wall', '../assets/Sounds/Hit_wall.mp3');
		this.load.audio('Hit_tank', '../assets/Sounds/Choque.mp3');
	}

	create()
	{
		//Añadir audios
		this.disparo_P = this.sound.add('P_shot');
		this.disparo_R = this.sound.add('R_shot');
		this.hit_muro = this.sound.add('Hit_wall');
		this.Hit_tank = this.sound.add('Hit_tank');
		
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
	var wall = this.physics.add.staticGroup();
	//WALLS LATERALES
	for(var x = 1; x<=9*sizebrick; x+=sizebrick/2){
	wall.create(1585, 44+x, 'brick2');
	}for(var x = 1; x<=9*sizebrick; x+=sizebrick/2){
	wall.create(15, 44+x, 'brick2');
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
			wall.create(945+x, 420, 'brick5');
		}
		for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){
			wall.create(202+x, 420, 'brick5');
		}

		//CENTRAL
		for(var x = 1; x<=20*sizebrick; x+=sizebrick*4){
			if(x!=481)wall.create(322+x, 300, 'brick2');
		}
		//ARRIBA
		for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){
			wall.create(202+x, 180, 'brick5');
		}
		for(var x = 1; x<=10*sizebrick; x+=2.5*sizebrick){
			wall.create(945+x, 180, 'brick5');
		}
	
	

    // The player and its settings
   player1 = this.physics.add.sprite(100, 300, 'tank1');
    cannon1 =this.physics.add.sprite(100, 450, 'cannon1');
    cannon1.setOrigin(0.5,0.75);

    //  Player physics properties. Give the little guy a slight bounce.
    player1.setCollideWorldBounds(true);

    //  De momento no usamos animaciones
    //this.anims.create({
    //    key: 'left',
    //    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    //    frameRate: 10,
    //    repeat: -1
    //});
	//
    //this.anims.create({
    //    key: 'turn',
    //    frames: [ { key: 'dude', frame: 4 } ],
    //    frameRate: 20
    //});
	//
    //this.anims.create({
    //    key: 'right',
    //    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    //    frameRate: 10,
    //    repeat: -1
    //});

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();
	
    player2 = this.physics.add.sprite(500, 450, 'tank2');
    cannon2 =this.physics.add.sprite(500, 450, 'cannon2');
	player2.setPosition(1500,300);
	
    player2.setCollideWorldBounds(true);
	player2.lastShot=0;
	player1.lastShot=0;


    bullets1 = this.physics.add.group();
    bullets2 = this.physics.add.group();
	


    //  The score
	
	
    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player1, wall);
    this.physics.add.collider(player2, wall);
    this.physics.add.collider(player1, player2);
    //this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bullets1, wall,hitWall, null, this);
    this.physics.add.collider(bullets2, wall,hitWall, null, this);
    this.physics.add.collider(bullets2, bullets1,hitBullet, null, this);
	
    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    //this.physics.add.overlap(player, stars, collectStar, null, this);

    this.physics.add.collider(player1, bullets2, hitBullet1, null, this);
    this.physics.add.collider(player2, bullets1, hitBullet2, null, this);
	
	this.add.image(800, 300, 'Shade1');	
	this.add.image(800, 300, 'Shade1Zep');	
	
	score1Text = this.add.text(50, 0, 'score: 0', { fontSize: '32px', fill: '#ffff00' });
    score2Text = this.add.text(1400, 0, 'score: 0', { fontSize: '32px', fill: '#ffff00' });

	}
	update ()
	{
		if (gameOver)
		{
			return;
		}
		
		if (keyA.isDown)
		{
			player1.setVelocityX(-tankSpeed);
	
		}
		else if (keyD.isDown)
		{
			player1.setVelocityX(tankSpeed);
	
		} 
		else
		{
			player1.setVelocityX(0);
	
		}
		if (keyW.isDown)
		{
			player1.setVelocityY(-tankSpeed);

		} 
		else if (keyS.isDown)
		{
			player1.setVelocityY(tankSpeed);
	
		}
		else
		{
			player1.setVelocityY(0);    
	
		}
		
		//////////Rot
		if (keyA.isDown)
		{				
			player1.setRotation(3*Math.PI/2);
			
		}
		if (keyD.isDown)
		{		
			player1.setRotation(Math.PI/2);
		}
		
		if (keyS.isDown)
		{			
			player1.setRotation(Math.PI);	
		}
		if (keyW.isDown)
		{
			player1.setRotation(0);	
		} 
		
		//Diagonales
		
		if (keyW.isDown && keyD.isDown)
		{			
			player1.setRotation((Math.PI)/4);
			player1.setVelocityY(-tankSpeed*0.70710678118654752440084436210485);
			player1.setVelocityX(tankSpeed*0.70710678118654752440084436210485);	
		}
		if (keyW.isDown && keyA.isDown)
		{		
			player1.setRotation(3*(Math.PI)/4+Math.PI);	
			player1.setVelocityY(-tankSpeed*0.70710678118654752440084436210485);
			player1.setVelocityX(-tankSpeed*0.70710678118654752440084436210485);
		}
		
		if (keyS.isDown && keyD.isDown)
		{			
			player1.setRotation(3*(Math.PI)/4);
			player1.setVelocityY(tankSpeed*0.70710678118654752440084436210485);
			player1.setVelocityX(tankSpeed*0.70710678118654752440084436210485);	
		}
		if (keyS.isDown && keyA.isDown)
		{			
			player1.setRotation(-3*(Math.PI)/4);
			player1.setVelocityY(tankSpeed*0.70710678118654752440084436210485);
			player1.setVelocityX(-tankSpeed*0.70710678118654752440084436210485);	
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
			var bullet = bullets1.create(player1.x,player1.y,'Bala_sher');
			
			bullet.contador = 3;
			
			bullet.setVelocity(Math.sin(cannon1.rotation)*250,-Math.cos(cannon1.rotation)*250);
			player1.lastShot=100;
			
			bullet.setCollideWorldBounds(true);
			bullet.setBounce(1);
		}
		player1.lastShot--;
		cannon1.setPosition(player1.x,player1.y);
		
		
		//Inputs player 2

		if (cursors.left.isDown)
		{
			player2.setVelocityX(-tankSpeed);	
		}
		else if (cursors.right.isDown)
		{
			player2.setVelocityX(tankSpeed);
		} 
		else
		{
			player2.setVelocityX(0);
		}
		if (cursors.up.isDown)
		{
			player2.setVelocityY(-tankSpeed);	
		} 
		else if (cursors.down.isDown)
		{
			player2.setVelocityY(tankSpeed);	
		}
		else
		{
			player2.setVelocityY(0);    	
		}
		
		//////////Rot
		if (cursors.left.isDown)
		{				
			player2.setRotation(3*Math.PI/2);
			
		}
		if (cursors.right.isDown)
		{		
			player2.setRotation(Math.PI/2);
		}
		
		if (cursors.down.isDown)
		{			
			player2.setRotation(Math.PI);	
		}
		if (cursors.up.isDown)
		{
			player2.setRotation(0);	
		} 
		
		//Diagonales
		
		if (cursors.up.isDown && cursors.right.isDown)
		{			
			player2.setRotation((Math.PI)/4);
			player2.setVelocityY(-tankSpeed*0.70710678118654752440084436210485);
			player2.setVelocityX(tankSpeed*0.70710678118654752440084436210485);
			
		}
		if (cursors.up.isDown && cursors.left.isDown)
		{		
			player2.setRotation(3*(Math.PI)/4+Math.PI);	
			player2.setVelocityY(-tankSpeed*0.70710678118654752440084436210485);
			player2.setVelocityX(-tankSpeed*0.70710678118654752440084436210485);
		}
		
		if (cursors.down.isDown && cursors.right.isDown)
		{			
			player2.setRotation(3*(Math.PI)/4);
			player2.setVelocityY(tankSpeed*0.70710678118654752440084436210485);
			player2.setVelocityX(tankSpeed*0.70710678118654752440084436210485);			
		}
		if (cursors.down.isDown && cursors.left.isDown)
		{			
			player2.setRotation(-3*(Math.PI)/4);
			player2.setVelocityY(tankSpeed*0.70710678118654752440084436210485);
			player2.setVelocityX(-tankSpeed*0.70710678118654752440084436210485);
		}
		
		//Rotacion cannon 2
		if (keyI.isDown)
		{
			cannon2.angle-=cannonSpeed;	
		} 
		if (keyP.isDown)
		{
			cannon2.angle+=cannonSpeed;
		}	
		
		//Disparo player 2
		if (keyO.isDown&&player2.lastShot<=0)
		{
			this.disparo_R.play();
			
			var bullet = bullets2.create(player2.x,player2.y,'Bala_futuro');
			bullet.setVelocity(Math.sin(cannon2.rotation)*500,-Math.cos(cannon2.rotation)*500);
			
			bullet.contador = 9;
			bullet.ident=2;
			
			console.log(Math.sin(cannon2.rotation));
			player2.lastShot=200;
			
			bullet.setCollideWorldBounds(true);
			bullet.setBounce(1.25);
		}
		player2.lastShot--;
		cannon2.setPosition(player2.x,player2.y);
		
	}
}