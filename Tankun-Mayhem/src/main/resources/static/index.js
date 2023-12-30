//import{GameScene}from"Scenes/GameScene.js";
const config = {

    type: Phaser.AUTO,
    width: 1600,
    height: 700,
    scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [MenuScene, LoadScene, CharSelect, GameSceneOnline, GameOverScene, Ayuda,Social]
};
$(document).ready(function(){
	console.log("Dom cargado");
})
const game = new Phaser.Game(config);

