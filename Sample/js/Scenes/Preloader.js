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

        //this.load.spritesheet("exampleSpriteSheet", "exampleSpriteSheet.png", {frameWidth: 44, frameHeight: 44});

        this.load.setPath("assets/img/effect");
        this.load.spritesheet("explosion", "explosion.png", {frameWidth: 16, frameHeight: 16});

        this.load.setPath("assets/fonts");
        //this.load.bitmapFont("exampleFont", "ExampleFont.png", "ExampleFont.xml");


        this.load.on("complete", function()
        {
            this.scene.start("Level");
        }, this);
    }
}