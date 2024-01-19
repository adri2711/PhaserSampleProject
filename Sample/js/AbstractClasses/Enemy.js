class Enemy extends Phaser.GameObjects.Sprite 
{
    constructor(_scene,_posX,_posY,_spriteTag,_animTag,_health = 3)
    { 
        super(_scene,_posX,_posY,_spriteTag);
        _scene.add.existing(this);
        _scene.physics.world.enable(this);
        this.scene = _scene;
        this.health = _health;
        this.setColliders();
        this.body.setImmovable(true);
    }

    preUpdate(time,delta)
    {
        super.preUpdate(time, delta);
    }

    setColliders()
    {
        this.scene.physics.add.collider
        (
            this,
            this.scene.fg
        );
        this.scene.physics.add.collider
        (
            this,
            this.scene.player
        );     
    }

    TakeDamage() {
        this.health--;
        
        if (this.health <= 0) {
            this.Die();
        }
    }

    Die() {
        this.destroy();
    }
}