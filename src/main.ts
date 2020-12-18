import Phaser from 'phaser'

import firebase from 'firebase/app'
import firebaseui from 'firebaseui'
import 'firebase/firestore'
import 'firebase/auth'

import MainGameScene from './scenes/MainGameScene'
// import SaveSystem from './savefiles/SaveSystem'

/*
* Uma janela ou algo do tipo
* Pede ao usuário se:
* 1. Começa um novo jogo
* 2. Carrega um save antigo
* 3. Apaga um save existente
* Se for começar um jogo novo
* Pede o nome do jogador (será o nome do arquivo)
* Pede uma senha
* Senha só é usada se quiser deletar o save
* Para dar load, só é preciso o nome
* Criado ou carregado um novo perfil, o jogo começa
* 
*/

/*
var fs = require('browserify-fs')

var fileName = prompt('Entre com seu nome.')

fs.writeFile('meu_nome.txt', fileName, function (err) {
	if (err) { throw err }
	console.log('Arquivo criado')
})

var save = new SaveSystem()

save.createFile(fileName!)
save.showFile()
*/

var uiConfig = {
	callbacks: {
	  signInSuccessWithAuthResult: function(authResult, redirectUrl) {
		// User successfully signed in.
		// Return type determines whether we continue the redirect automatically
		// or whether we leave that to developer to handle.
		return true;
	  },
	  uiShown: function() {
		// The widget is rendered.
		// Hide the loader.
		document.getElementById('loader')!.style.display = 'none';
	  }
	},
	// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
	signInFlow: 'popup',
	signInSuccessUrl: 'https://ac318-webapp.web.app',
	signInOptions: [
		{
			provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			scopes: [
				'https://www.googleapis.com/auth/contacts.readonly'
			  ],
			  customParameters: {
				// Forces account selection even when one account is available.	
				prompt: 'select_account'
			  }
				
		}
	]
  };

// Inicializando o Widget da FirebaseUI
var ui = new firebaseui.auth.AuthUI(firebase.auth)

ui.start('#firebaseui-auth-container', uiConfig)
  
/*
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);
})

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                document.write(`Olá ${user!.displayName}`);
                console.log(user)
            })
            .catch(console.log)
}
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
