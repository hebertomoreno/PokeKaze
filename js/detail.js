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
//var detView = document.getElementById("pokemonDetails");

d3.json("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", function(error, pokedex){
	var pokemon = pokedex.pokemon;
	//console.log(parseInt(num));
	//console.log(pokemon[parseInt(num)-1]);
	var detPokemon = pokemon[parseInt(num)-1];

	var pokeImg = document.createElement("img");
	pokeImg.src = detPokemon.img;
	pokeImg.setAttribute("class","pkmnImg container-fluid");
	var detView = document.getElementById("detImg");
	detView.appendChild(pokeImg);

	pokeNum = document.createElement("h2");
	titleNum = document.createTextNode(detPokemon.num);
	pokeNum.appendChild(titleNum);
	detView = document.getElementById("detNum");
	detView.appendChild(pokeNum);

	pokeName = document.createElement("h1");
	titleName = document.createTextNode(detPokemon.name);
	pokeName.appendChild(titleName);
	detView = document.getElementById("detName");
	detView.appendChild(pokeName);

	detView = document.getElementById("detType");
	var types = detPokemon.type;
	for (var i in types){
		pokeType = document.createElement("h3");
		titleType = document.createTextNode(types[i]);
		pokeType.appendChild(titleType);
		pokeType.setAttribute("class","typeBut "+types[i]);
		detView.appendChild(pokeType);
	}

	detView = document.getElementById("detList1");
	var detList1 = document.createElement("ul");
	var detHeight = document.createElement("li");
	var detHeightText = document.createTextNode("Height: "+detPokemon.height);
	detHeight.appendChild(detHeightText);
	detList1.appendChild(detHeight);
	var detCandy = document.createElement("li");
	var detCandyText = document.createTextNode("Candy: "+detPokemon.candy);
	detCandy.appendChild(detCandyText);
	detList1.appendChild(detCandy);
	var detSpawn = document.createElement("li");
	var detSpawnText = document.createTextNode("Spawn Chance: "+detPokemon.spawn_chance);
	detSpawn.appendChild(detSpawnText);
	detList1.appendChild(detSpawn);
	detView.appendChild(detList1);

	detView = document.getElementById("detList2");
	var detList2 = document.createElement("ul");
	var detWeight = document.createElement("li");
	var detWeightText = document.createTextNode("Weight: "+detPokemon.weight);
	detWeight.appendChild(detWeightText);
	detList2.appendChild(detWeight);
	var detEgg = document.createElement("li");
	var detEggText = document.createTextNode("Egg: "+detPokemon.egg);
	detEgg.appendChild(detEggText);
	detList2.appendChild(detEgg);
	var detAvgSpawn = document.createElement("li");
	var detAvgSpawnText = document.createTextNode("Avg Spawns: "+detPokemon.avg_spawns);
	detAvgSpawn.appendChild(detAvgSpawnText);
	detList2.appendChild(detAvgSpawn);
	detView.appendChild(detList2);

	detView = document.getElementById("detWeak");
	var types = detPokemon.weaknesses;
	for (var i in types){
		pokeType = document.createElement("h3");
		titleType = document.createTextNode(types[i]);
		pokeType.appendChild(titleType);
		pokeType.setAttribute("class","typeBut "+types[i]);
		detView.appendChild(pokeType);
	}

	detView = document.getElementById("detPrev");
	var evolutions = detPokemon.prev_evolution;
	for (var i in evolutions){
		pokeEvo = document.createElement("h3");
		titleEvo = document.createTextNode(evolutions[i].name);
		pokeEvo.appendChild(titleEvo);
		pokeEvo.setAttribute("class","prevEvo");
		pokeEvo.setAttribute("id",evolutions[i].num);
		pokeEvo.addEventListener("click", function(){
			//console.log('./detail.html?'+this.id)
			var form = document.createElement('form');
			form.setAttribute('method','post');
			form.setAttribute('action','./detail.html?num='+this.id);
			form.style.display = 'hidden';
			document.body.appendChild(form)
			form.submit();
		})
		detView.appendChild(pokeEvo);
	}

	detView = document.getElementById("detNext");
	var evolutions = detPokemon.next_evolution;
	for (var i in evolutions){
		pokeEvo = document.createElement("h3");
		titleEvo = document.createTextNode(evolutions[i].name);
		pokeEvo.appendChild(titleEvo);
		pokeEvo.setAttribute("class","prevEvo");
		pokeEvo.setAttribute("id",evolutions[i].num);
		pokeEvo.addEventListener("click", function(){
			//console.log('./detail.html?'+this.id)
			var form = document.createElement('form');
			form.setAttribute('method','post');
			form.setAttribute('action','./detail.html?num='+this.id);
			form.style.display = 'hidden';
			document.body.appendChild(form)
			form.submit();
		})
		detView.appendChild(pokeEvo);
	}
	//detView.appendChild(pokeTitle);
})
