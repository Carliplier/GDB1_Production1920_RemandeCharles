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
	
	
	this.load.image('fond','assets/fond_elevage.png')
	this.load.image('cerf','assets/cerf.png');
	this.load.image('arbre','assets/arbre.png');
	//this.load.spritesheet('animal','assets/animal.png',{frameWidth: 56, frameHeight: 41});
	this.load.image('herbes','assets/herbes.png');
	
}



function create(){
	var back = this.add.image(350,400,'fond');
	
	
	//obstacle (arbres)
	
	arbre = this.physics.add.staticGroup();
	arbre.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(100, 300),'arbre');
	arbre.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(100, 300),'arbre');
	arbre.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(100, 300),'arbre');
	
	
	
	//décors
	herbes = this.physics.add.staticGroup();
	herbes.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'herbes');
	herbes.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'herbes');
	herbes.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'herbes');
	herbes.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'herbes');
	herbes.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'herbes');
	herbes.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'herbes');
	herbes.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'herbes');
	herbes.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'herbes');
	herbes.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'herbes');
	herbes.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'herbes');
	
	
	//cible
	animal = this.physics.add.group();
	animal = this.physics.add.sprite(Phaser.Math.Between(70, 500),50,'cerf');
	animal.setVelocity(Phaser.Math.Between(-50, 50),0);
	//animal.setVelocity(0,0);
	animal.setBounce(1);
	animal.setCollideWorldBounds(true);
	
	
	

	cursors = this.input.keyboard.createCursorKeys(); 
	
	

}



function update(){
	
	
	
}



