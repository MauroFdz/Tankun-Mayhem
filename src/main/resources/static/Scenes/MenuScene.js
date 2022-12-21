var jugar;
var ayuda;
var creditos;
function loadMensajes(callback) {
	$.ajax({
    method:"GET",
    url:"http://localhost:8090/mensajes",
    processData:false,
    headers:{"Content-Type":"application/json"}
    }).done(function(mensajes) {
        callback(mensajes)
    })
}
var cadena="";
class MenuScene extends Phaser.Scene {
	constructor(){
		super("Menu");
	}
	preload(){
		this.load.image("fondo", "../assets/Botones/Backgrounds/background_tm.png");
		this.load.image("jugar", "../assets/Pantalla seleccion/jugar.png");
		this.load.image("ajustes", "../assets/Botones/Ajustes.png");
		this.load.image("salir", "../assets/Botones/Salir.png");
		this.load.image("ayuda", "../assets/Pantalla seleccion/ayudaboton.png");
		this.load.image("creditos", "../assets/Pantalla seleccion/creditos.png");
		//this.load.image("chatBar", "../assets/Botones/Backgrounds/chatBar.PNG");
		this.load.audio('M_musica', '../assets/Sounds/Menú_música.mp3');
		this.load.audio('J_musica', '../assets/Sounds/Juego_música.mp3');
	}
	create(){
		this.M_musica = this.sound.add('M_musica');
		//this.J_musica= this.sound.add('J_musica');
		//this.M_musica.play();
		
		this.fondo = this.add.image(0, 0, "fondo");
		this.fondo.setOrigin(0, 0);
		jugar = this.add.image(config.width/2, 300, "jugar");
		ayuda = this.add.image(config.width/2, 400, "ayuda");
		creditos = this.add.image(config.width/2, 500, "creditos");
		//this.chatBar = this.add.image(1700, 400, "chatBar");
		this.msg=this.add.text(1600,110,"Chat+\n");
		jugar.setInteractive();
		ayuda.setInteractive();
		creditos.setInteractive();
		
		jugar.on("pointerdown", ()=>{
			this.scene.start("CharSelect");
			this.M_musica.stop();
			
		})
		
		ayuda.on("pointerdown", ()=>{
			this.scene.start("Ayuda");
			this.M_musica.stop();
		})
		
		creditos.on("pointerdown", ()=>{
			this.scene.start("Loading");
			this.M_musica.stop();
		})
	}
	update()
	{
		loadMensajes(function (mensajes) { 
        //When items are loaded from server
        console.log(mensajes);
		cadena="";
        for (var i = 0; i < mensajes.length; i++) {
            cadena+=mensajes[i].user+": "+mensajes[i].message+"\n";
        }
    });
    this.msg.setText(cadena);
	}
}
