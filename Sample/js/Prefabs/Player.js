class Player extends Phaser.GameObjects.Sprite 
{
    constructor(_scene,_posX,_posY,_spriteTag='hero')
    { 
        super(_scene,_posX,_posY,_spriteTag);
        _scene.add.existing(this);
        _scene.physics.world.enable(this);
        this.scene = _scene;
        this.body.setSize(16,16).setOffset(8,16);
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
        this.scene.physics.add.collider
        (
            this,
            this.scene.fg
        );        
    }

    HandleMovement() {
        if(this.cursors.left.isDown)
        {
            this.body.setVelocityX(-gamePrefs.PLAYER_SPEED);
            this.setFlipX(true);
            //this.anims.play('run',true);
        } else if(this.cursors.right.isDown)
        {
            this.body.setVelocityX(gamePrefs.PLAYER_SPEED);
            this.setFlipX(false);
            //this.anims.play('run',true);
        } else
        {
            this.body.setVelocityX(0);
            //this.anims.stop().setFrame(0);
        }    
        
        if(this.cursors.up.isDown)
        {
            this.body.setVelocityY(-gamePrefs.PLAYER_SPEED);
            this.setFlipY(false);
            //this.anims.play('run',true);
        } else if(this.cursors.down.isDown)
        {
            this.body.setVelocityY(gamePrefs.PLAYER_SPEED);
            this.setFlipY(false);
            //this.anims.play('run',true);
        } else
        {
            this.body.setVelocityY(0);
            //this.anims.stop().setFrame(0);
        }    

        /*
        if(this.cursors.space.isDown
          && this.body.onFloor()
          && Phaser.Input.Keyboard.DownDuration(this.cursors.space,250))
        {
            this.body.setVelocityY(-gamePrefs.HERO_JUMP);
        }

        if(!this.body.onFloor())
        {
            this.anims.stop().setFrame(6);
        }*/
    }
}