// req retourner 1 

"use strict";

var fs = require("fs")
require('remedial');

var trait = function (req, res, query) {

	var page;
	var marqueurs;
	page = fs.readFileSync('page_gi_facile.html', 'utf-8'); 

	marqueurs = {};
	marqueurs.pseudo = "";
	page = page.supplant(marqueurs);
	
	res.writeHead(200, {'Content-Type': 'text/html' });
	res.write(page);
	res.end();
}; 


//-----------
module.exports = trait;