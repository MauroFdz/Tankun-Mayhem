//import{GameScene}from"Scenes/GameScene.js";
var config = {

    type: Phaser.AUTO,
    width: 1600,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [{
            preload: preload,
            create: create,
            update: update
        }]
};

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

var game = new Phaser.Game(config);



function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
	this.load.image('brick', 'assets/brick1.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('bullet', 'assets/bomb.png');
    this.load.image('target', 'assets/reticulo.png');
    this.load.image('tank1', "assets/TankRush/base.png");
    this.load.image('cannon1', "assets/TankRush/Tank1cannon.png");
    this.load.image('tank2', "assets/TankSpace/base.png");
    this.load.image('cannon2', "assets/TankSpace/canon.png");

    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{

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
	
	
	
	//MAPA de juego
	this.add.image(400, 300, 'sky');
	this.add.image(1200, 300, 'sky');
    //  The platforms group contains the ground and the 2 ledges we can jump on
    wall = this.physics.add.staticGroup();
	ground = this.physics.add.staticGroup();
    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
	
   // ground.create(400, 675, 'ground').setScale(7);
	//ground.create(400, 0, 'ground').setScale(2);
	//ground.create(1200, 0, 'ground').setScale(2);
	
	


    //  Now let's create some ledges

	var sizebrick = 60
	for(var x = 1; x<=10*sizebrick; x+=sizebrick){
		wall.create(950+x, 150, 'brick');
	}
	for(var x = 1; x<=10*sizebrick; x+=sizebrick){
		wall.create(150+x, 400, 'brick');
	}
	
	for(var x = 1; x<=10*sizebrick; x+=3*sizebrick){
		wall.create(150+x, 150, 'brick');
	}
	for(var x = 1; x<10*sizebrick; x+=3*sizebrick){
		wall.create(950+x, 400, 'brick');
	}
	for(var x = 1; x<=27*sizebrick; x+=sizebrick){
		wall.create(30+x, 15, 'brick');
	}
	for(var x = 1; x<=27*sizebrick; x+=sizebrick){
		wall.create(30+x, 585, 'brick');
	}








    // The player and its settings
    player1 = this.physics.add.sprite(1200, 100, 'tank1');
    cannon1 =this.physics.add.sprite(100, 450, 'cannon1');
    cannon1.setOrigin(0.5,0.75);

    //  Player physics properties. Give the little guy a slight bounce.
    player1.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();
	
    player2 = this.physics.add.sprite(500, 450, 'tank2');
    cannon2 =this.physics.add.sprite(500, 450, 'cannon2');
	player2.setPosition(500,450);
	
    player2.setCollideWorldBounds(true);
	player2.lastShot=0;
	player1.lastShot=0;

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    /*stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });*/

    /*stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });*/
    bullets1 = this.physics.add.group();
    bullets2 = this.physics.add.group();

    //  The score
    score1Text = this.add.text(50, 0, 'score: 0', { fontSize: '32px', fill: '#000' });
    score2Text = this.add.text(1400, 0, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Collide the player and the stars with the wall
    this.physics.add.collider(player1, wall);
    this.physics.add.collider(player2, wall);
	this.physics.add.collider(player1, ground);
    this.physics.add.collider(player2, ground);
    this.physics.add.collider(player1, player2);
    //this.physics.add.collider(stars, wall);
    this.physics.add.collider(bullets1, wall,hitWall, null, this);
    this.physics.add.collider(bullets2, wall,hitWall, null, this);
    this.physics.add.collider(bullets2, bullets1,hitBullet, null, this);
	
    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    //this.physics.add.overlap(player, stars, collectStar, null, this);

    this.physics.add.collider(player1, bullets2, hitBullet1, null, this);
    this.physics.add.collider(player2, bullets1, hitBullet2, null, this);

}

function update ()
{
    if (gameOver)
    {
        return;
    }
	//Inputs player 1
    if (keyA.isDown)
    {
        player1.setVelocityX(-tankSpeed);

        player1.setRotation(3*Math.PI/2);
        //player1.anims.play('left', true);
    }
    else if (keyD.isDown)
    {
        player1.setVelocityX(tankSpeed);

        player1.setRotation(Math.PI/2);

        //player1.anims.play('right', true);
    } 
    else
    {
        player1.setVelocityX(0);

        //player1.anims.play('turn');
    }
    if (keyW.isDown)
    {
        player1.setVelocityY(-tankSpeed);

        player1.setRotation(0);

    } 
    else if (keyS.isDown)
    {
        player1.setVelocityY(tankSpeed);

        player1.setRotation(Math.PI);

    }
    else
    {
        player1.setVelocityY(0);    

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
        var bullet = bullets1.create(player1.x,player1.y,'bullet');
		bullet.setVelocity(Math.sin(cannon1.rotation)*50,-Math.cos(cannon1.rotation)*50);
		player1.lastShot=50;
    }
	player1.lastShot--;
    cannon1.setPosition(player1.x,player1.y);
	
	
	//Inputs player 2
    if (cursors.left.isDown)
    {
        player2.setVelocityX(-tankSpeed);

        //player2.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player2.setVelocityX(tankSpeed);

        //player2.anims.play('right', true);
    } 
    else
    {
        player2.setVelocityX(0);

       // player2.anims.play('turn');
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
        var bullet = bullets2.create(player2.x,player2.y,'bullet');
		bullet.setVelocity(Math.sin(cannon2.rotation)*150,-Math.cos(cannon2.rotation)*150);
		console.log(Math.sin(cannon2.rotation));
		player2.lastShot=50;
    }
	player2.lastShot--;
    cannon2.setPosition(player2.x,player2.y);
	
}

//function collectStar (player, star)
//{
//    star.disableBody(true, true);
//
//    //  Add and update the score
//    score += 10;
//    scoreText.setText('Score: ' + score);
//
//    if (stars.countActive(true) === 0)
//    {
//        //  A new batch of stars to collect
//        stars.children.iterate(function (child) {
//
//            child.enableBody(true, child.x, 0, true, true);
//
//        });
//
//        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
//
//        var bomb = bombs.create(x, 16, 'bomb');
//        bomb.setBounce(1);
//        bomb.setCollideWorldBounds(true);
//        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
//        bomb.allowGravity = false;
//
//    }
//}

function hitBullet1 (player1, bullet)
{
    score2+=10;
	score2Text.setText('Score: ' + score2);
	bullet.destroy();
}
function hitBullet2 (player2, bullet)
{
    score1+=10;
	score1Text.setText('Score: ' + score1);
	bullet.destroy();
}
function hitWall (bullet, wall)
{
	bullet.destroy();
}
function hitBullet (bullet1, bullet2)
{
	bullet1.destroy();
	bullet2.destroy();
}
