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
    scene: [GameScene2]
};

var game = new Phaser.Game(config);

