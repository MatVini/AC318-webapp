import Phaser from 'phaser'

export default class MainGameScene extends Phaser.Scene
{
    scoreText?: Phaser.GameObjects.Text
    bigPotato?: Phaser.GameObjects.Image
    upgrade1?: Phaser.GameObjects.Image
    upgrade1Text?: Phaser.GameObjects.Text
    private score = 0
    private point = 1
    private up1Cost = 10

	constructor()
	{
        super('Welcome!')
    }

	preload()
    {
        this.load.image('bg', 'assets/backdrop.png')
        this.load.image('potato', 'assets/potato.png')
        this.load.image('upgrade', 'assets/bar_up1.png')
    }

    create()
    {
        this.add.image(400, 240, 'bg')
        this.bigPotato = this.add.image(580, 240, 'potato')
        this.upgrade1 = this.add.image(120,75,'upgrade')

        this.bigPotato.setInteractive({ useHandCursor:true })
        .on('pointerdown', () => this.raiseScore(this.point))
        .on('pointerdown', () => this.dropParticle() )
        .on('pointerover', () => this.bigPotatoHover() )
        .on('pointerout', () => this.bigPotatoRest() )

        this.upgrade1.setInteractive({ useHandCursor:true })
        .on('pointerdown', () => this.raisePoint(1))
        .on('pointerover', () => this.upgradeHover() )
        .on('pointerout', () => this.upgradeRest() )

        var configTextScore = {
            fontSize: '18px',
            color: '#ffc72b',
            fontFamily: 'Verdana',
            strokeThickness: 1,
            stroke: '#1a0d00',
        }

        var configTextUpgrade = {
            fontSize: '16px',
            color: '#241303',
            fontFamily: 'Verdana',
            strokeThickness: 1,
            stroke: '#1a0d00',
        }

        this.add.text(540, 120, 'Click the\n  Potato', configTextScore)
        this.scoreText = this.add.text(20,450,`Score: ${this.score}`, configTextScore)
        this.upgrade1Text = this.add.text(75, 65, `Cost: ${this.up1Cost}`, configTextUpgrade)
    }

    raiseScore(s)
    {
        this.score += s
        this.scoreText?.setText(`Score: ${this.score}`)
    }

    raisePoint(m)
    {
        if (this.score >= this.up1Cost){
            this.point += m
            this.score -= this.up1Cost
            this.scoreText?.setText(`Score: ${this.score}`)
            this.raiseUpgrade()
        }
    }

    raiseUpgrade()
    {
        this.up1Cost = Math.ceil(this.up1Cost * 1.15)
        this.upgrade1Text?.setText(`Cost: ${this.up1Cost}`)
    }

    dropParticle()
    {
        var pPart = this.add.particles('potato').createEmitter({
            x: this.game.input.mousePointer.x,
            y: this.game.input.mousePointer.y,
            lifespan: 1250,
            speed: { min: 200, max: 300 },
            angle: Phaser.Math.Between(-210, 30),
            gravityY: 1000,
            quantity: 1,
            scale: { start: 0.3, end: 0 },  
        })
        pPart.explode(1, this.game.input.mousePointer.x, this.game.input.mousePointer.y)
    }

    bigPotatoHover()
    {
        this.bigPotato?.setTint(0xf7d36d)
    }

    bigPotatoRest()
    {
        this.bigPotato?.clearTint()
    }

    upgradeHover()
    {
        this.upgrade1?.setTint(0xf7d36d)
    }

    upgradeRest()
    {
        this.upgrade1?.clearTint()
    }

}
