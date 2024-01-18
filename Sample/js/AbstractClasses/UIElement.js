class UIElement extends Phaser.GameObjects.Sprite {
    constructor(_scene,_posX,_posY, _maxValue, _spriteTag, _animTag)
    {
        super(_scene,_posX,_posY,_spriteTag);
        _scene.add.existing(this);
        this.setScrollFactor(0);
        this.scene = _scene;
        this.maxValue = _maxValue;
        this.value = _maxValue;
    }

    SetValue(amount) {
        this.value = amount;
        this.VisualUpdate();
    }

    AddToValue(amount) {
        this.value += amount;
        this.VisualUpdate();
    }

    VisualUpdate() {

    }
}