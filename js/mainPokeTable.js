var body = document.getElementsByTagName("body")[0];

var tbl = document.createElement("table");
tbl.setAttribute("class","table");
var tblHead = document.createElement("thead");
var tblBody = document.createElement("tbody");

d3.json("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", function(error, pokedex){
	var pokemon = pokedex.pokemon;

	var headerRow = document.createElement("tr");
	//set the class of the header row so it can be css styled. 
	headerRow.setAttribute("class", "headerRow");

	/*Headers!!!*/
	var headNum = document.createElement("th");
	var headNumText = document.createTextNode("Number");
	headNum.setAttribute("class", "headerCell");
	headNum.appendChild(headNumText);
	headerRow.appendChild(headNum);

	var headImg = document.createElement("th");
	var headImgText = document.createTextNode("IMG");
	headImg.setAttribute("class", "headerCell");
	headImg.appendChild(headImgText);
	headerRow.appendChild(headImg);

	var headName = document.createElement("th");
	var headNameText = document.createTextNode("Name");
	headName.setAttribute("class", "headerCell");
	headName.appendChild(headNameText);
	headerRow.appendChild(headName);

	var headType = document.createElement("th");
	var headTypeText = document.createTextNode("Type");
	headType.setAttribute("class", "headerCell");
	headType.appendChild(headTypeText);
	headerRow.appendChild(headType);

	var headCapt = document.createElement("th");
	var headCaptText = document.createTextNode("Captured?");
	headCapt.setAttribute("class", "headerCell");
	headCapt.appendChild(headCaptText);
	headerRow.appendChild(headCapt);
	//Append the header to the tblHeader
	tblHead.appendChild(headerRow);

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

		var typeCell= document.createElement("td");
		var typeCellText= document.createTextNode(pokemon[i].type);
		typeCell.setAttribute("class","typeCell");
		typeCell.appendChild(typeCellText);

		var captCell = document.createElement("td");
		var captCellButton = document.createElement("button");
		captCellButton.setAttribute("class","button");
		captCellButton.innerHTML = "Capture";
		captCellButton.addEventListener("click", function(){
			alert("Captured!!")
		});
		captCell.append(captCellButton);

		/*var cell = document.createElement("td");
		var cellText = document.createTextNode(specPokemon[i])*/
		/*console.log(pokemon[i].id);
		console.log(pokemon[i].name);*/
		row.appendChild(numCell);
		row.appendChild(imgCell);
		row.appendChild(nameCell);
		row.appendChild(typeCell);
		row.appendChild(captCell);

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