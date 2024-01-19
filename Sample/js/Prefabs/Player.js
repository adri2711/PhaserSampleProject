class Player extends Phaser.GameObjects.Sprite 
{
    constructor(_scene,_posX,_posY,_spriteTag='hero')
    { 
        super(_scene,_posX,_posY,_spriteTag);
        _scene.add.existing(this);
        _scene.physics.world.enable(this);
        this.scene = _scene;
        this.health = gamePrefs.PLAYER_HP;
        this.setColliders();
        this.cursors = this.scene.input.keyboard.createCursorKeys();
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

    TakeDamage() {
        this.health--;
        
        if (this.health <= 0) {
            this.Die();
        }
    }

    Die() {

    }

    HandleMovement() {
        this.movementX = 0;
        this.movementY = 0; 
        this.Input();
        this.Movement();   
    }

    Input(){
        if(this.cursors.right.isDown)
        {
            this.movementX += gamePrefs.PLAYER_SPEED;            
        }
        if(this.cursors.left.isDown)
        {
            this.movementX -= gamePrefs.PLAYER_SPEED;            
        }

        if(this.cursors.up.isDown)
        {
            this.movementY -= gamePrefs.PLAYER_SPEED;            
        }
        if(this.cursors.down.isDown)
        {
            this.movementY += gamePrefs.PLAYER_SPEED;            
        }  
    }

    Movement() {
        var diagonalMultiplier = this.movementX != 0 && this.movementY != 0 ? 0.707 : 1.0 //slow when walking diagonally
        
        this.body.velocity.x = this.movementX * diagonalMultiplier;
        this.body.velocity.y = this.movementY * diagonalMultiplier;

        this.PlayAnimations(this.movementX, this.movementY);
    }

    PlayAnimations(movementX, movementY){

        if(movementX != 0)
        {
            if(movementX > 0)
            {
                this.anims.play("playerWalkRight", true);
            }
            else
            {
                this.anims.play("playerWalkLeft", true);
            }
        }
        else if(movementY != 0)
        {
            if(movementY > 0)
            {
                this.anims.play("playerWalkDown", true);
            }
            else
            {
                this.anims.play("playerWalkUp", true);
            }
        }
        else if(movementX == 0 && movementY == 0)
        {
            this.anims.play("playerIdle", true);
        }  
    }
}