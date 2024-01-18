class UISpriteSheet extends UIElement {
    constructor(_scene,_posX,_posY, _maxValue, _spriteTag, _animTag = null)
    {
        super(_scene,_posX,_posY, _maxValue, _spriteTag, _animTag);
    }

    VisualUpdate() {
        super.VisualUpdate();
        this.setFrame(this.value);
    }
}