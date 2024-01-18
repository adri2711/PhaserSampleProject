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
    }

    create()
    {
        this.loadAnimations();

        this.LoadSounds();
        
        this.LoadPools();        
        
        this.LoadMap();

        this.LoadUI();

        this.player = new Player(this, config.width / 2, config.height / 2, "hero")

        var playerPosition = highscoreSerializerInstance.GetArray("playerPos");
        if (playerPosition == []) {
            playerPosition = [config.width / 2, config.height / 2];
        }
        this.player.setPosition(playerPosition[0], playerPosition[1]);

        this.cameras.main.startFollow(this.player);

        this.fadein = new FadePrefab(this, config.width / 2, config.height / 2, 1000);

        this.time.addEvent(
            {
                delay: 1000,
                callback: this.AutoSave,
                callbackScope: this,
                loop: true
            });
    }

    update() {

    }

    AutoSave() {
        highscoreSerializerInstance.SaveValue("playerPos", [this.player.x, this.player.y]);
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

        this.map.addTilesetImage("block1");
        this.map.addTilesetImage("block2");

        var tilesets = ["block1", "block2"]

        this.fg = this.map.createLayer("fg", tilesets);
        this.map.createLayer("bg", tilesets);

        var indexToCollide = [1]

        this.map.setCollision(indexToCollide, true, true, "fg");
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