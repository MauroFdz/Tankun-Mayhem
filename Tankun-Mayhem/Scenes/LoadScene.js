class LoadScene extends Phaser.Scene {
	constructor(){
		super("Loading");
	}
	create(){
		this.add.text(20,20,"Work in progress :D");
		//this.scene.start("Menu");
	}
}