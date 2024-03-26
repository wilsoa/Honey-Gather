// Translate from our symbols to GraphQL
const comparison_dict = {"=": "_eq", ":": "_eq", ">": "_gt", ">=": "_gte", "<": "_lt", "<=": "_lte"};
const stat_dict = {hp: 1, atk: 2, def: 3, spa: 4, spd: 5, spe: 6};
const type_dict = {
	normal: 1,
	fighting: 2,
	flying: 3,
	poison: 4,
	ground: 5,
	rock: 6,
	bug: 7,
	ghost: 8,
	steel: 9,
	fire: 10,
	water: 11,
	grass: 12,
	electric: 13,
	psychic: 14,
	ice: 15,
	dragon: 16,
	dark: 17,
	fairy: 18
}

const key_hooks = {
	_stat: function(key, comparison, value) {
		const stat_id = stat_dict[key];
		const comp = comparison_dict[comparison];
		return `pokemon_v2_pokemonstats: {base_stat: {${comp}: ${value}}, stat_id: {_eq: ${stat_id}}}`;
	},
	learns: function(key, comparison, value) {
		const move_id = moves_dict[value.toLowerCase().replace(" ", "-")];
		if (move_id == undefined) {
			show_error("Unknown move " + value);
		}
		else {
			if (comparison == ":") {
				return `pokemon_v2_pokemonmoves: {move_id: {_eq: ${move_id}}}`
			}
		}
	},
	type: function(key, comparison, value) {
		const type_id = type_dict[value];
		if (type_id == undefined) {
			show_error("Unknown type " + value);
		}
		if (comparison == ":") {
			return `pokemon_v2_pokemontypes: {type_id: {_eq: ${type_id}}}`;
		}
	},
	ability: function(key, comparison, value) {
		const ability_id = abilities_dict[value.toLowerCase().replace(" ", "-")];
		if (ability_id == undefined) {
			show_error("Unknown ability " + value);
		}
		if (comparison == ":") {
			return `pokemon_v2_pokemonabilities: {ability_id: {_eq: ${ability_id}}}`;
		}
	},
	is: function(key, comparison, value) {
		if (comparison == ":") {
			switch (value) {
				case "legendary":
					return "pokemon_v2_pokemonspecy: {is_legendary: {_eq: true}}";
				case "mega":
					return "pokemon_v2_pokemonforms: {is_mega: {_eq: true}}"
			}
		}
		return false;
	}
}

let cache = {};


function search (where) {

	if (where) {

		const query = "query samplePokeAPIquery {\
	  pokemon_v2_pokemon(where: {" + where + "}, order_by: {pokemon_species_id: asc}) {\
	    pokemon_species_id,\
	    id,\
	    name,\
	    is_default\
	  }\
	}";

	if (cache[query]) {
		print_results(cache[query])
	}
	else {


		fetch("https://beta.pokeapi.co/graphql/v1beta", {
		  method: "POST",
		  headers: {
		    "Content-Type": "application/json",
		    Accept: "application/json",
		  },
		  body: JSON.stringify({ query: query}),
		})
		  .then(r => r.json())
		  .then(data => print_results(cache[query] = data.data.pokemon_v2_pokemon))
		 }
		}
}

