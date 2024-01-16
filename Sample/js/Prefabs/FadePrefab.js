class FadePrefab extends Phaser.GameObjects.Sprite {
    constructor(_scene,_posX,_posY, duration)
    {
        super(_scene,_posX,_posY,"fade");
        _scene.add.existing(this);
        
        _scene.tweens.add(
            {
                targets: this,
                alpha: { from: 1, to: 0},
                duration: duration
            }
        )
        _scene.time.addEvent(
            {
                delay: duration,
                callback: this.Deactivate,
                callbackScope: this,
                loop: false
            }
        )
    }

    Deactivate() {
        this.destroy();
    }
}