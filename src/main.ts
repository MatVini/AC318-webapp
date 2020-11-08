import Phaser from 'phaser'

import MainGameScene from './scenes/MainGameScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 480,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [MainGameScene]
}

export default new Phaser.Game(config)
