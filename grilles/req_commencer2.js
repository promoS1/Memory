// requete commencer 2

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;

	//AFFICHAGE DE LA PAGE D'ACCUEIL

	page = fs.readFileSync('page_liste_grilles.html', 'utf-8');

	marqueurs = {};
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};


//------------
module.exports = trait;
