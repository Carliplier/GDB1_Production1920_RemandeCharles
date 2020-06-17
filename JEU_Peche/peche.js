var config = {
	type: Phaser.AUTO,
	width: 600,
	height: 800,
physics: {
        default: 'arcade',
        arcade: {
            gravity: 0,
            //debug: true
        }
    },
scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);	
var player;
var cursors; 



function preload(){
	
	
	this.load.image('fond','assets/fond_peche.png')
	this.load.image('filet','assets/filet.png');
	this.load.image('bateau','assets/bateau_peche.png');
	this.load.image('ligne','assets/ligne_peche.png');
	this.load.image('poisson','assets/poisson.png');
	this.load.image('lignemer','assets/ligne_mer.png');
}



function create(){
	var back = this.add.image(350,400,'fond');
	var bateau = this.add.image(400,115,'bateau');
	var ligne = this.add.image(235,520,'ligne');
	
	//limite
	lignemer = this.physics.add.staticGroup();
	lignemer.create(300,225,'lignemer');
	
	
	
	
	//cibles
	
	fish = this.physics.add.group();
	fish = this.physics.add.sprite(Phaser.Math.Between(0,600),Phaser.Math.Between(230,800),'poisson');
	fish.setVelocity(Phaser.Math.Between(-300, 300),Phaser.Math.Between(-50, 50));
	fish.setCollideWorldBounds(true);
	fish.setBounce(1);
	this.physics.add.collider(lignemer,fish);
	
	
	fish2 = this.physics.add.group();
	fish2 = this.physics.add.sprite(Phaser.Math.Between(0,600),Phaser.Math.Between(230,800),'poisson');
	fish2.setVelocity(Phaser.Math.Between(-300, 300),Phaser.Math.Between(-50, 50));
	fish2.setCollideWorldBounds(true);
	fish2.setBounce(1);
	this.physics.add.collider(lignemer,fish2);
	
	
	fish3 = this.physics.add.group();
	fish3 = this.physics.add.sprite(Phaser.Math.Between(0,600),Phaser.Math.Between(230,800),'poisson');
	fish3.setVelocity(Phaser.Math.Between(-300, 300),Phaser.Math.Between(-50, 50));
	fish3.setCollideWorldBounds(true);
	fish3.setBounce(1);
	this.physics.add.collider(lignemer,fish3);
	
	
	// filet
	player = this.physics.add.sprite(235,250,'filet');
	player.setCollideWorldBounds(true);
	this.physics.add.collider(player,lignemer);
	
	

	cursors = this.input.keyboard.createCursorKeys(); 
	
	this.physics.add.overlap(player,fish, hitfish);	
	this.physics.add.overlap(player,fish2, hitfish2);
	this.physics.add.overlap(player,fish3, hitfish3);

}



function update(){
	if(cursors.up.isDown){
		player.setVelocityY(-200);
	
	}else if(cursors.down.isDown){
		player.setVelocityY(200);
		
		
	}else{
		
		player.setVelocityY(0);
	}
	
	
}

function hitfish(player, fish){
	

	fish.disableBody(true,true);

}
function hitfish2(player, fish2){
	

	fish2.disableBody(true,true);

}
function hitfish3(player, fish3){
	

	fish3.disableBody(true,true);

}