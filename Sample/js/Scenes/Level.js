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
        
        //this.LoadMap();

        this.bg_back = this.add.tileSprite
        (0,0,config.width,config.height,'block').setOrigin(0).setScale(2);

        this.LoadUI();

        this.player = new Player(this, config.width / 2, config.height / 2, "hero")
        this.cameras.main.startFollow(this.player);

        this.fadein = new FadePrefab(this, config.width / 2, config.height / 2, 1000);
    }

    update() {

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

        /*this.UITest1 = new UISpriteSheet(this, 100, 40, 5,"healthUI");
        this.UITest2 = new UIFilled(this, config.width - 100, 40, 5,"healthUI");
        this.UITest1.SetValue(5);
        this.UITest2.SetValue(5);*/
    }
}