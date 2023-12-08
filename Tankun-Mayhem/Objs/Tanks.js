class TankRush
{
	constructor()
	{
		this.src="../assets/TankRush/base.png";
		this.cannon="../assets/TankRush/Tank1cannon.png";
		this.bullet="../assets/TankRush/Bala_sher.png";
		this.tankSpeed=100;
		this.tankRot=3;
		this.cannonRot=3;
		this.bulletSpeed=200;
		this.bulletReb=4;
		this.cooldown=2.5;
		this.sound= '../assets/Sounds/P_shot.mp3';
		this.bounce=1;
		this.bulletPower=0;
	}
}

class TankFuture
{
	constructor()
	{
		this.src="../assets/TankSpace/base.png";
		this.cannon="../assets/TankSpace/canon.png";
		this.bullet="../assets/TankSpace/Bala_futuro.png";
		this.tankSpeed=80;
		this.tankRot=2;
		this.cannonRot=2;
		this.bulletSpeed=150;
		this.bulletReb=9;
		this.cooldown=4;
		this.sound= '../assets/Sounds/R_shot.mp3';
		this.bounce=1.25;
		this.bulletPower=1;
	}
}