class Level extends Phaser.Scene
{
    constructor()
    {
        super({key:"Level"});
        
    }

    init(data) {
        //this.example = data.example
    }

    preload()
    {
        this.highscore = highscoreSerializerInstance.getHighestScore();
    }

    create()
    {
        this.loadAnimations();

        this.LoadSounds();
        
        this.LoadPools();        
        
        this.LoadMap();

        this.LoadUI();

        this.fadein = new FadePrefab(this, config.width / 2, config.height / 2, 1000);
    }

    LoadSounds()
    {
        //this.testSound = this.sound.add("testSound")
    }

    LoadPools()
    {
        //this.testPool = this.add.group()
    }

    loadAnimations()
    {/*
        this.anims.create(
            {
                key: 'testAnim',
                frames:this.anims.generateFrameNumbers('testSpriteSheet', {start:0, end: 7}),
                frameRate: 15,
                repeat: -1
            });
            */
    }

    LoadMap()
    {
        this.map = this.add.tilemap("map");
    }

    LoadUI()
    {
        this.cameras.main.setBackgroundColor("003");
    }
}