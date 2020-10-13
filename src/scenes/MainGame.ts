import Phaser from 'phaser'

export default class MainGameScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image('sky', 'assets/sky.png')
    }

    create()
    {
        this.add.image(400, 300, 'sky')
    }

    update()
    {

    }
}
