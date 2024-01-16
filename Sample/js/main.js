var config = 
{
    type: Phaser.AUTO,
    width: 800,
    height: 560, 
    scene:[Preloader, Level], 
    render:
    {
        pixelArt : true
    },
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:
    {
        default: "arcade",
        arcade:
        {
            gravity:{y: 0}
        }
    }
};

var gamePrefs = 
{
    PI: 3.1416,
    GAME_WIDTH: config.width,
    GAME_HEIGHT: config.height
}

var game = new Phaser.Game(config);