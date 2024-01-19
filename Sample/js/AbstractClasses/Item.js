class Item extends Phaser.GameObjects.Sprite 
{
    constructor(_scene,_posX,_posY,_spriteTag,_animTag)
    { 
        super(_scene,_posX,_posY,_spriteTag);
        _scene.add.existing(this);
        _scene.physics.world.enable(this);
        this.scene = _scene;
        this.setColliders();

        if (_animTag != null) {
            this.anims.play(_animTag);
        }
    }

    preUpdate(time,delta)
    {
        super.preUpdate(time, delta);
    }

    setColliders()
    {
        this.scene.physics.add.overlap
        (
            this,
            this.scene.player,
            this.ObjectAction,
            null,
            this
        ); 
    }

    ObjectAction(item, player) {
        this.Die();
        console.log(player);
    }

    Die() {
        this.destroy();
    }
}