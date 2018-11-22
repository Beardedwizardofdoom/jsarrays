window.addEventListener("DOMContentLoaded", init);

function init(){

	const pokemonList = [
		{
			name: "bulbasaur",
			id: 1,
			type: "grass"
		}, {
			name: "squirtle",
			id: 4,
			type: "water"
		}, {
			name: "charmander",
			id: 7,
			type: "fire"
		}
	];

	const fighter1  = document.getElementById("fighter-1");
	const fighter2  = document.getElementById("fighter-2");
	const output    = document.getElementById("output");
	const dropdowns = [ fighter1, fighter2 ];

	for(let dropdown of dropdowns){

		dropdown.addEventListener("change", fight);

		for(let pokemon of pokemonList){
			const pokeOption       = document.createElement("option");
			pokeOption.value       = pokemon.type;
			pokeOption.textContent = pokemon.name; 
			dropdown.appendChild(pokeOption);
		}
	}

	function fight(){

		const pokemon1 = {
			type: fighter1.value,
			name: fighter1.options[fighter1.options.selectedIndex].textContent
		};

		const pokemon2 = {
			type: fighter2.value,
			name: fighter2.options[fighter2.options.selectedIndex].textContent
		}

		const result       = lookupWeakness(pokemon1, pokemon2);
		output.textContent = result;
	}//fight

	function lookupWeakness(pokeA, pokeB){

		let message;
		if(pokeA.type == "grass"){
			if(pokeB.type == "fire"){
				message = `${pokeA.type} is weaker than ${pokeB.type} - ${pokeB.name} wins!`;
			} else if (pokeB.type == "water"){
				message = `${pokeB.type} is weaker than ${pokeA.type} - ${pokeA.name} wins!`;
			} else {
				message = `${pokeA.type} is as strong as ${pokeB.type} - it's a draw!`;
			}
		}

		if(pokeA.type == "fire"){
			if(pokeB.type == "water"){
				message = `${pokeA.type} is weaker than ${pokeB.type} - ${pokeB.name} wins!`;
			} else if (pokeB.type == "grass"){
				message = `${pokeB.type} is weaker than ${pokeA.type} - ${pokeA.name} wins!`;
			} else {
				message = `${pokeA.type} is as strong as ${pokeB.type} - it's a draw!`;
			}
		}

		if(pokeA.type == "water"){
			if(pokeB.type == "grass"){
				message = `${pokeA.type} is weaker than ${pokeB.type} - ${pokeB.name} wins!`;
			} else if (pokeB.type == "fire"){
				message = `${pokeB.type} is weaker than ${pokeA.type} - ${pokeA.name} wins!`;
			} else {
				message = `${pokeA.type} is as strong as ${pokeB.type} - it's a draw!`;
			}
		}

		return message;
	}//lookupWeakness

}