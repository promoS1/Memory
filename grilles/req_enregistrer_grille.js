// req_enregistrer_grille

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var contenu;

contenu = fs.readFileSync("./Les_Grilles/grille_T.json", "utf-8")
fs.writeFileSync("./Les_Grilles/" +query.nom +".json", contenu, "utf-8")

page = fs.readFileSync('page_liste_grilles.html', 'utf-8');
res.writeHead(200, {'Content-Type': 'text/html' });
res.write(page);
res.end();
};

//-------------
module.exports = trait;
