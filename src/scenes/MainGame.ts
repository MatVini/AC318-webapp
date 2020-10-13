import Phaser from 'phaser'

export default class MainGameScene extends Phaser.Scene
{
    private greeting?: Phaser.GameObjects.Text

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

        this.greeting = this.add.text(250, 150, 'Hello World!', {
            fontFamily: 'Arial',
            fontSize: '64px',
            fill: '#000'
        })
    }

    update()
    {

    }
}
