var body = document.getElementsByTagName("body")[0];

var tbl = document.createElement("table");
tbl.setAttribute("class","pokeTable");
var tblHead = document.createElement("thead");
var tblBody = document.createElement("tbody");

d3.json("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", function(error, pokedex){
	var pokemon = pokedex.pokemon;
	for (var i in pokemon){
		var row = document.createElement("tr");
		row.setAttribute("class", "dataRow");

		var numCell= document.createElement("td");
		var numCellText= document.createTextNode(pokemon[i].num);
		numCell.setAttribute("class","numCell");
		numCell.appendChild(numCellText);

		var imgCell = document.createElement("td");
		var pokeImg = document.createElement("img");
		pokeImg.src = pokemon[i].img;
		imgCell.appendChild(pokeImg);

		var nameCell= document.createElement("td");
		var nameCellText= document.createTextNode(pokemon[i].name);
		nameCell.setAttribute("class","nameCell");
		nameCell.appendChild(nameCellText);

		/*var cell = document.createElement("td");
		var cellText = document.createTextNode(specPokemon[i])*/
		/*console.log(pokemon[i].id);
		console.log(pokemon[i].name);*/
		row.appendChild(numCell);
		row.appendChild(imgCell);
		row.appendChild(nameCell);

		tblBody.appendChild(row);
	}
	//console.log(pokemon);
	//put the <thead> in the <table>
	tbl.appendChild(tblHead);
	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);
	// appends <table> into <body>
	body.appendChild(tbl);
	// sets the border attribute of tbl to 2;
	tbl.setAttribute("border", "2");
})