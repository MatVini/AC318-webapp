import Phaser from 'phaser'

import MainGameScene from './scenes/MainGameScene'

/*
* Uma janela ou algo do tipo
* Pede ao usuário se:
* 1. Começa um novo jogo
* 2. Carrega um save antigo
* 3. Apaga um save existente
* Se for começar um jogo novo
* Pede o nome do jogador
* Pede uma senha
* Senha só é usada se quiser deletar o save
* Para dar load, só é preciso o nome
* Criado ou carregado um novo perfil, o jogo começa
* 
*/

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
