/*
import 'browserify-fs'

/// <reference path="path/to/node.d.ts" />
*/

export default class FileSystem {
	fs = require('browserify-fs')

    constructor() {}

	createFile(tex:String) {
		this.fs.writeFile('file.txt', tex, function(err) {
			if (err) { return console.log(err) }
			console.log('File created.')
		} )
	}

	showFile() {
		this.fs.readFile('file.txt', function (err, data) {
			if (err) { console.log(err) }
			console.log('Leitura assíncrona: ' + data.toString())
		})
	}
}
