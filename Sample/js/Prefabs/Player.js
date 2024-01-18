class Player extends Phaser.GameObjects.Sprite 
{
    constructor(_scene,_posX,_posY,_spriteTag='hero')
    { 
        super(_scene,_posX,_posY,_spriteTag);
        _scene.add.existing(this);
        _scene.physics.world.enable(this);
        this.scene = _scene;
        this.hero = this;
        this.hero.body.setSize(16,16).setOffset(8,16);
        //this.health = gamePrefs.MAX_LIVES;
        this.setColliders();
        this.cursors = this.scene.input.keyboard.createCursorKeys();

        //GRAVITY OFF
        this.body.setAllowGravity(false);
    }

    preUpdate(time,delta)
    {
        this.HandleMovement();

        super.preUpdate(time, delta);
    }

    setColliders()
    {
        /*this.scene.physics.add.collider
        (
            this.hero,
            this.scene.walls
        ); */       
    }

    HandleMovement() {
        if(this.cursors.left.isDown)
        {
            this.hero.body.setVelocityX(-gamePrefs.PLAYER_SPEED);
            this.hero.setFlipX(true);
            //this.hero.anims.play('run',true);
        }else
        if(this.cursors.right.isDown)
        {
            this.hero.body.setVelocityX(gamePrefs.PLAYER_SPEED);
            this.hero.setFlipX(false);
            //this.hero.anims.play('run',true);
        }else
        {
            this.hero.body.setVelocityX(0);
            //this.hero.anims.stop().setFrame(0);
        }    
        
        /*
        if(this.cursors.space.isDown
          && this.hero.body.onFloor()
          && Phaser.Input.Keyboard.DownDuration(this.cursors.space,250))
        {
            this.hero.body.setVelocityY(-gamePrefs.HERO_JUMP);
        }

        if(!this.hero.body.onFloor())
        {
            this.hero.anims.stop().setFrame(6);
        }*/
    }
}