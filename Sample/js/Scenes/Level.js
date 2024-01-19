class Level extends Phaser.Scene
{
    constructor()
    {
        super({key:"Level"});
        
    }

    init(data) {
        //this.example = data.example
    }

    create()
    {
        this.LoadAnimations();
        
        this.LoadPools();        
        
        this.LoadMap();

        this.LoadUI();

        //Player Setup
        this.player = new Player(this, 50, 100, "hero")
        .setScale(0.25); //<--- adjust this with actual size of sprite

        //EXAMPLE: load player position from save
        /*
        var playerPosition = highscoreSerializerInstance.GetArray("playerPos");
        if (playerPosition == []) { // save is empty
            playerPosition = [config.width / 2, config.height / 2];
        }
        this.player.setPosition(playerPosition[0], playerPosition[1]);*/

        this.cameras.main.startFollow(this.player);

        //Other Entities
        this.item = new Item(this, config.width / 2, config.height / 3, "gem", "gemAnim");

        //Trigger fadein when the scene starts
        this.fadein = new FadePrefab(this, config.width / 2, config.height / 2, 1000);

        //Autosave
        /*
        this.time.addEvent(
            {
                delay: 1000,
                callback: this.AutoSave,
                callbackScope: this,
                loop: true
            });*/
    }

    AutoSave() {
        //Save Player Pos
        highscoreSerializerInstance.SaveValue("playerPos", [this.player.x, this.player.y]);
    }

    LoadPools()
    {
        //this.testPool = this.add.group()
    }

    LoadAnimations()
    {
        //ITEM
        this.anims.create(
            {
                key: 'gemAnim',
                frames:this.anims.generateFrameNumbers('gem', {start:0, end: 4}),
                frameRate: 15,
                repeat: -1
            });
        //PLAYER
        this.anims.create(
            {
                key: 'playerIdle',
                frames:this.anims.generateFrameNumbers('hero', {start:0, end: 0}),
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: 'playerWalkDown',
                frames:this.anims.generateFrameNumbers('hero', {start:0, end: 9}),
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: 'playerWalkLeft',
                frames:this.anims.generateFrameNumbers('hero', {start:10, end: 19}),
                frameRate: 10,
                repeat: -1
            });
        this.anims.create(
            {
                key: 'playerWalkUp',
                frames:this.anims.generateFrameNumbers('hero', {start:20, end: 29}),
                frameRate: 10,
                repeat: -1
            });  
        this.anims.create(
            {
                key: 'playerWalkRight',
                frames:this.anims.generateFrameNumbers('hero', {start:30, end: 39}),
                frameRate: 10,
                repeat: -1
            });  
    }

    LoadMap()
    {
        this.map = this.add.tilemap("map");

        this.map.addTilesetImage("block1");
        this.map.addTilesetImage("block2");

        //set up 2 layers
        var tilesets = ["block1", "block2"]

        this.fg = this.map.createLayer("fg", tilesets);
        this.bg = this.map.createLayer("bg", tilesets);

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