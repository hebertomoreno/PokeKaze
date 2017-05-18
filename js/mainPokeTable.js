var body = document.getElementsByTagName("body")[0];

var tbl = document.createElement("table");
tbl.setAttribute("class","table responsive filteredTable");
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
		/*var rowHidden = document.createElement("tr");
		row.setAttribute("class","hide");*/


		var numCell= document.createElement("td");
		var numCellText= document.createTextNode(pokemon[i].num);
		numCell.setAttribute("class","numCell");
		numCell.appendChild(numCellText);

		/*var imgCell = document.createElement("td");
		var pokeImg = document.createElement("img");
		pokeImg.src = pokemon[i].img;
		imgCell.appendChild(pokeImg);*/

		var nameCell= document.createElement("td");
		var nameCellText= document.createTextNode(pokemon[i].name);
		nameCell.setAttribute("class","nameCell");
		nameCell.setAttribute("id",pokemon[i].num);
		nameCell.appendChild(nameCellText);
		nameCell.addEventListener("click", function(){
			var form = document.createElement('form');
			form.setAttribute('method','post');
			form.setAttribute('action','./detail.html?num='+this.id);
			form.style.display = 'hidden';
			document.body.appendChild(form)
			form.submit();

		})
		/*Print the types!!!*/
		var typeCell= document.createElement("td");
		var types = pokemon[i].type;
		for (var f in types){
			pokeType = document.createElement("h3");
			titleType = document.createTextNode(types[f]);
			pokeType.setAttribute("id",types[f]);
			pokeType.appendChild(titleType);
			pokeType.setAttribute("class","typeBut "+types[f]);
			pokeType.addEventListener("click", function(){
				var form = document.createElement('form');
				form.setAttribute('method','post');
				form.setAttribute('action','./filter.html?type='+this.id);
				form.style.display = 'hidden';
				document.body.appendChild(form)
				form.submit();
			})
			typeCell.appendChild(pokeType);
		}
		typeCell.setAttribute("class","typeCell");
		//typeCell.appendChild(typeCellText);

		var captCell = document.createElement("td");
		var captCellButton = document.createElement("button");
		//captCellButton.setAttribute("class","button captButton");
		captCellButton.setAttribute("id",pokemon[i].id);
		if(localStorage.getItem(pokemon[i].id)){
			captCellButton.innerHTML = "Captured!!!";
			captCellButton.setAttribute("class","button captButton captured");
		} else {
			captCellButton.innerHTML = "Capture";
			captCellButton.setAttribute("class","button captButton free");
		}
		captCellButton.addEventListener("click", function(){
			var elem = document.getElementById(this.id);
			console.log(elem.value);
			localStorage.setItem(this.id,1);
			//console.log(localStorage.getItem(pokemon[i].id))
			this.innerHTML = "Captured!!!"
			this.setAttribute("class","button captButton captured");
		});
		captCell.append(captCellButton);

		/*var cell = document.createElement("td");
		var cellText = document.createTextNode(specPokemon[i])*/
		/*console.log(pokemon[i].id);
		console.log(pokemon[i].name);*/
		row.appendChild(numCell);
		//rowHidden.appendChild(imgCell);
		row.appendChild(nameCell);
		row.appendChild(typeCell);
		row.appendChild(captCell);

		tblBody.appendChild(row);
		//tblBody.appendChild(rowHidden);
	}
	//console.log(pokemon);
	//put the <thead> in the <table>
	tbl.appendChild(tblHead);
	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);
	// appends <table> into <body>
	document.getElementById("mainTable").appendChild(tbl);
	// sets the border attribute of tbl to 2;
	tbl.setAttribute("border", "2");
})