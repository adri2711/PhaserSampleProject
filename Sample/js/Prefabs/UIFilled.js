class UIFilled extends UIElement {
    constructor(_scene,_posX,_posY, _maxValue, _spriteTag, _animTag = null)
    {
        super(_scene,_posX,_posY, _maxValue, _spriteTag, _animTag);
        this.displayWidth = this.width;
        this.displayHeight = this.height;
    }

    VisualUpdate() {
        super.VisualUpdate();
        this.setCrop(0, 0, (this.value / this.maxValue) * this.displayWidth, this.displayHeight);
    }
}