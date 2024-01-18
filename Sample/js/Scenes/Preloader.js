class Preloader extends Phaser.Scene
{
    constructor()
    {
        super({key: "Preloader"});
    }

    preload()
    {        
        this.load.setPath("assets/sounds");
        //this.load.audio("exampleSound", "exampleSound.wav")

        this.load.setPath("assets/img");
        //this.load.image("exampleImage", "exampleImage.png");
        this.load.image("fade", "fade.png");
        this.load.image("block", "block.png");

        this.load.spritesheet("hero", "hero.png", {frameWidth: 32, frameHeight: 32});

        this.load.spritesheet('healthUI','health.png', {frameWidth:128,frameHeight:28});

        //this.load.spritesheet("exampleSpriteSheet", "exampleSpriteSheet.png", {frameWidth: 44, frameHeight: 44});

        this.load.setPath("assets/img/effect");
        this.load.spritesheet("explosion", "explosion.png", {frameWidth: 16, frameHeight: 16});

        this.load.setPath("assets/fonts");
        //this.load.bitmapFont("exampleFont", "ExampleFont.png", "ExampleFont.xml");

        this.load.setPath("assets/data/text");
        //this.load.text("exampleText", "example.txt");

        this.load.setPath("assets/map");
        this.load.tilemapTiledJSON("map", "map.json");

        this.load.on("complete", function()
        {
            this.scene.start("Level");
        }, this);
    }
}