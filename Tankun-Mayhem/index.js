//import{GameScene}from"Scenes/GameScene.js";
var config = {

    type: Phaser.AUTO,
    width: 1600,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [MenuScene, LoadScene, CharSelect, GameScene, GameOverScene, Ayuda]
};

var game = new Phaser.Game(config);

