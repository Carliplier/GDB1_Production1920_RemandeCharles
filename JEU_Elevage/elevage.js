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
	this.load.image('bh','assets/barriere_h.png');
	this.load.image('bv','assets/barriere_v2.png');
	//this.load.spritesheet('animal','assets/animal.png',{frameWidth: 56, frameHeight: 41});
	this.load.image('anim','assets/animal2.png');
	this.load.image('buis','assets/buisson.png');
}



function create(){
	var back = this.add.image(350,400,'fond');
	
	
	//enclos
	
	barriere = this.physics.add.staticGroup();
	barriere.create(305,20,'bh');
	barriere.create(305,560,'bh');
	barriere.create(40,300,'bv');
	barriere.create(570,300,'bv');
	
	
	//decors
	buisson = this.physics.add.staticGroup();
	buisson.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'buis');
	buisson.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'buis');
	buisson.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'buis');
	buisson.create(Phaser.Math.Between(60, 540),Phaser.Math.Between(60, 540),'buis');
	
	
	//animal
	animal = this.physics.add.group();
	animal = this.physics.add.sprite(Phaser.Math.Between(70, 500),Phaser.Math.Between(70, 500),'anim');
	animal.setVelocity(Phaser.Math.Between(-150, 150),Phaser.Math.Between(-150, 150));
	//animal.setVelocity(0,0);
	animal.setBounce(1);
	animal.setCollideWorldBounds(true);
	this.physics.add.collider(barriere,animal);
	this.physics.add.collider(buisson,animal);
	this.anims.create({
		
		frames: this.anims.generateFrameNumbers('anim', {start: 0, end: 2}),
		frameRate: 10,
		repeat: -1
	});
	
	animal2 = this.physics.add.group();
	animal2 = this.physics.add.sprite(Phaser.Math.Between(70, 500),Phaser.Math.Between(70, 500),'anim');
	animal2.setVelocity(Phaser.Math.Between(-150, 150),Phaser.Math.Between(-150, 150));
	//animal.setVelocity(0,0);
	animal2.setBounce(1);
	animal2.setCollideWorldBounds(true);
	this.physics.add.collider(barriere,animal2);
	this.physics.add.collider(buisson,animal2);
	this.anims.create({
		
		frames: this.anims.generateFrameNumbers('anim', {start: 0, end: 2}),
		frameRate: 10,
		repeat: -1
	});
	
	animal3 = this.physics.add.group();
	animal3 = this.physics.add.sprite(Phaser.Math.Between(70, 500),Phaser.Math.Between(70, 500),'anim');
	animal3.setVelocity(Phaser.Math.Between(-150, 150),Phaser.Math.Between(-150, 150));
	//animal.setVelocity(0,0);
	animal3.setBounce(1);
	animal3.setCollideWorldBounds(true);
	this.physics.add.collider(barriere,animal3);
	this.physics.add.collider(buisson,animal3);
	this.anims.create({
		
		frames: this.anims.generateFrameNumbers('anim', {start: 0, end: 2}),
		frameRate: 10,
		repeat: -1
	});
	
	animal4 = this.physics.add.group();
	animal4 = this.physics.add.sprite(Phaser.Math.Between(70, 500),Phaser.Math.Between(70, 500),'anim');
	animal4.setVelocity(Phaser.Math.Between(-150, 150),Phaser.Math.Between(-150, 150));
	//animal.setVelocity(0,0);
	animal4.setBounce(1);
	animal4.setCollideWorldBounds(true);
	this.physics.add.collider(barriere,animal4);
	this.physics.add.collider(buisson,animal4);
	this.anims.create({
		
		frames: this.anims.generateFrameNumbers('anim', {start: 0, end: 2}),
		frameRate: 10,
		repeat: -1
	});
	
	animal5 = this.physics.add.group();
	animal5 = this.physics.add.sprite(Phaser.Math.Between(70, 500),Phaser.Math.Between(70, 500),'anim');
	animal5.setVelocity(Phaser.Math.Between(-150, 150),Phaser.Math.Between(-150, 150));
	//animal.setVelocity(0,0);
	animal5.setBounce(1);
	animal5.setCollideWorldBounds(true);
	this.physics.add.collider(barriere,animal5);
	this.physics.add.collider(buisson,animal5);
	this.anims.create({
		
		frames: this.anims.generateFrameNumbers('anim', {start: 0, end: 2}),
		frameRate: 10,
		repeat: -1
	});
	
	animal6 = this.physics.add.group();
	animal6 = this.physics.add.sprite(Phaser.Math.Between(70, 500),Phaser.Math.Between(70, 500),'anim');
	animal6.setVelocity(Phaser.Math.Between(-150, 150),Phaser.Math.Between(-150, 150));
	//animal.setVelocity(0,0);
	animal6.setBounce(1);
	animal6.setCollideWorldBounds(true);
	this.physics.add.collider(barriere,animal6);
	this.physics.add.collider(buisson,animal6);
	this.anims.create({
		
		frames: this.anims.generateFrameNumbers('anim', {start: 0, end: 2}),
		frameRate: 10,
		repeat: -1
	});

	animal7 = this.physics.add.group();
	animal7 = this.physics.add.sprite(Phaser.Math.Between(70, 500),Phaser.Math.Between(70, 500),'anim');
	animal7.setVelocity(Phaser.Math.Between(-150, 150),Phaser.Math.Between(-150, 150));
	//animal.setVelocity(0,0);
	animal7.setBounce(1);
	animal7.setCollideWorldBounds(true);
	this.physics.add.collider(barriere,animal7);
	this.physics.add.collider(buisson,animal7);
	this.anims.create({
		
		frames: this.anims.generateFrameNumbers('anim', {start: 0, end: 2}),
		frameRate: 10,
		repeat: -1
	});


	cursors = this.input.keyboard.createCursorKeys(); 
	
	

}



function update(){
	
	
	
}



