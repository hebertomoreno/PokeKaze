function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var num = getParameterByName('num');
var detView = document.getElementById("pokemonDetails");

d3.json("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", function(error, pokedex){
	var pokemon = pokedex.pokemon;
	//console.log(parseInt(num));
	//console.log(pokemon[parseInt(num)-1]);
	var detPokemon = pokemon[parseInt(num)-1];

	var pokeImg = document.createElement("img");
	pokeImg.src = detPokemon.img;
	pokeImg.setAttribute("class","pkmnImg");
	detView.appendChild(pokeImg);

	pokeTitle = document.createElement("h1");
	titleNum = document.createTextNode(detPokemon.num);
	titleName = document.createTextNode(detPokemon.name);
	titleType = document.createTextNode(detPokemon.type);
	pokeTitle.appendChild(titleNum);
	pokeTitle.appendChild(titleName);
	pokeTitle.appendChild(titleType);
	detView.appendChild(pokeTitle);
})
