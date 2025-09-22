// To dos: Z-moves have weird data
// sheer cold has 1 base power? as does low kick
// might want to replace the "effect chance" column with something more interesting. Too many weird corner cases

// Initialize move data
var move_names = [];

for (var x in moves) {
	move_names.push(x);
}

const prettify = {
// Types
	"NORMAL": "Normal",
	"FIGHTING": "Fighting",
	"FLYING": "Flying",
	"POISON": "Poison",
	"GROUND": "Ground",
	"ROCK": "Rock",
	"BUG": "Bug",
	"GHOST": "Ghost",
	"STEEL": "Steel",
	"FIRE": "Fire",
	"WATER": "Water",
	"GRASS": "Grass",
	"ELECTRIC": "Electric",
	"PSYCHIC": "Psychic",
	"ICE": "Ice",
	"DRAGON": "Dragon",
	"DARK": "Dark",
	"FAIRY": "Fairy",
	"SHADOW": "Shadow",
// Categories
	"special": "Special",
	"physical": "Physical",
	"status": "Status"
}

const types = [
	"NORMAL",
	"FIRE",
	"WATER",
	"ELECTRIC",
	"GRASS",
	"ICE",
	"FIGHTING",
	"POISON",
	"GROUND",
	"FLYING",
	"PSYCHIC",
	"BUG",
	"ROCK",
	"GHOST",
	"DRAGON",
	"DARK",
	"STEEL",
	"FAIRY"
]

// effectiveness [attack, defense]

const effectiveness = [
	[1,1,1,1,1,1,1,1,1,1,1,1,.5,0,1,1,.5,1], // NORMAL
	[1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5,1,2,1], // FIRE
	[1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5,1,1,1], // WATER
	[1,1,2,.5,.5,1,1,1,0,2,1,1,1,1,.5,1,1,1], // ELECTRIC
	[1,.5,2,1,.5,1,1,.5,2,.5,1,.5,2,1,.5,1,.5,1], // GRASS
	[1,.5,.5,1,2,.5,1,1,2,2,1,1,1,1,2,1,.5,1], // ICE
	[2,1,1,1,1,2,1,.5,1,.5,.5,.5,2,0,1,2,2,.5], // FIGHTING
	[1,1,1,1,2,1,1,.5,.5,1,1,1,.5,.5,1,1,0,2], // POISON
	[1,2,1,2,.5,1,1,2,1,0,1,.5,2,1,1,1,2,1], // GROUND
	[1,1,1,.5,2,1,2,1,1,1,1,2,.5,1,1,1,.5,1], // FLYING
	[1,1,1,1,1,1,2,2,1,1,.5,1,1,1,1,0,.5,1], // PSYCHIC
	[1,.5,1,1,2,1,.5,.5,1,.5,2,1,1,.5,1,2,.5,.5], // BUG
	[1,2,1,1,1,2,.5,1,.5,2,1,2,1,1,1,1,.5,1], // ROCK
	[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,.5,1,1], // GHOST
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,.5,0], // DRAGON
	[1,1,1,1,1,1,.5,1,1,1,2,1,1,2,1,.5,1,.5], // DARK
	[1,.5,.5,.5,1,2,1,1,1,1,1,1,2,1,1,1,.5,2], // STEEL
	[1,.5,1,1,1,1,2,.5,1,1,1,1,1,1,2,2,.5,1] // FAIRY
]

const move_search = document.getElementById("move_search");
const recommendations = document.getElementById("recommendations");
const guesses = document.getElementById("guesses");
const guess_header = document.getElementById("guess_header");
var guessed = [];

move_search.addEventListener('input', function() {
	recommendations.innerHTML = ""
	if (move_search.value) {
		const results = search_by_name (move_search.value)
		for (var i = 0; i < results.length; i++) {
			const move = moves[results[i]];
			const li = document.createElement("li");
			
			li.id = results[i];
			
			if (move.longname) {
				li.innerHTML = move.longname;
			} else {
				li.innerHTML = move.name;
			}
			
			// Default to the top element being focused
			if ( i == 0 ) {
				li.classList.add("focused");
			}
			
			recommendations.appendChild(li);
		}
	}
})

move_search.addEventListener('keydown', function(e) {
	const focused = recommendations.getElementsByClassName("focused")[0];
	// Move selection down
	if (e.keyCode == 40) {
		if (focused.nextElementSibling) {
			focused.classList.remove("focused");
			focused.nextElementSibling.classList.add("focused");
		}
	}
	// Move selection up
	if (e.keyCode == 38) {
		if (focused.previousElementSibling) {
			focused.classList.remove("focused");
			focused.previousElementSibling.classList.add("focused");
		}
	}
	// Select
	if (e.keyCode == 13) {
		select_move({target: focused});
	}
})

function select_move (e) {
	guess_move(e.target.id);
	move_search.value = "";
	recommendations.innerHTML = "";
	move_search.focus();
}

recommendations.addEventListener("click", select_move);
recommendations.addEventListener("touchend", select_move);

function search_by_name (input) {
	var out = [];
	const sanitized_input = input.toUpperCase().replace(/\s/,"");
	
	for (var i = 0; i < move_names.length; i++) {
		if (move_names[i].includes(sanitized_input) && guessed.indexOf(move_names[i]) == -1) {
			out.push(move_names[i]);
		}
	}
	
	return out;
}

function make_td (content) {
	const td = document.createElement("td");
	td.innerHTML = content;
	return td;
}

// Select actual move by tribonacci mod 30, divided by two

cached = {}

function tribonacci_mod810 (n) {
	if (cached[n]) {
		return cached[n];
	}
	if (n == 0) {
		return 0;
	} 
	if (n == 1) {
		return 0;
	} 
	if (n == 2) {
		return 1;
	}
	return cached[n] = (tribonacci_mod810(n - 1) + tribonacci_mod810(n - 2) + tribonacci_mod810(n - 3)) % 810;
}

const current_day = Math.floor(Date.now()/86400000) - 20330;

const actual_move = moves[move_names[tribonacci_mod810(current_day)]]

function guess_move (move_id) {
	if (!guessed.includes(move_id)) {
		guessed.push(move_id);
		save_guesses ();
	}
	const move = moves[move_id];
	
	const tr = document.createElement("tr");
	
	const name_td = make_td(move.name);
	
	if (move.longname) {
		name_td.innerHTML = move.longname;
	}
	
	if (move == actual_move) {
		name_td.classList.add("correct");
		win_game();
	}
	
	tr.appendChild(name_td);
	
	// Check type
	const type_td = make_td(prettify[move.type]);
	if (move.type == actual_move.type) {
		type_td.classList.add("correct");
	} else {
		const guessed_index = types.indexOf(move.type);
		const actual_index = types.indexOf(actual_move.type);
		const multiplier = effectiveness[guessed_index][actual_index];
		
		// guessed type not effective on correct type
		if (multiplier < 1) {
			type_td.classList.add("incorrect");
			type_td.innerHTML += "<span class='hint'>(not very effective)</span>";
		}
		if (multiplier == 1) {
			type_td.classList.add("normally_effective");
		}
		if (multiplier > 1) {
			type_td.classList.add("partial");
			type_td.innerHTML += "<span class='hint'>(very effective)</span>";
		}
	}
	tr.appendChild(type_td)
	
	// Check category
	const category_td = make_td(prettify[move.category]);
	if (move.category == actual_move.category) {
		category_td.classList.add("correct");
	} else {
		category_td.classList.add("incorrect");
	}
	tr.appendChild(category_td)
	
	// Check base power
	const power_td = make_td(move.basedamage == 0 ? "&ndash;" : move.basedamage);
	
	if (move.basedamage == actual_move.basedamage) {
		power_td.classList.add("correct");
	} else if (move.basedamage < actual_move.basedamage) {
		power_td.innerHTML = "⬆️" + power_td.innerHTML;
	} else {
		power_td.innerHTML = "⬇️" + power_td.innerHTML;
	}
	
	tr.appendChild(power_td)
	
	// Check accuracy
	const move_accuracy = move.accuracy == 0 ? Infinity : move.accuracy;
	const actual_move_accuracy = actual_move.accuracy == 0 ? Infinity : actual_move.accuracy;
	
	const accuracy_td = make_td(move_accuracy == Infinity ? "&infin;" : move_accuracy);
	
	if (move_accuracy == actual_move_accuracy) {
		accuracy_td.classList.add("correct");
	} else if (move_accuracy < actual_move_accuracy) {
		accuracy_td.innerHTML = "⬆️" + accuracy_td.innerHTML;
	} else {
		accuracy_td.innerHTML = "⬇️" + accuracy_td.innerHTML;
	}
	
	tr.appendChild(accuracy_td)
	
	// Check PP
	const pp_td = make_td(move.maxpp);
	
	if (move.maxpp == actual_move.maxpp) {
		pp_td.classList.add("correct");
	} else if (move.maxpp < actual_move.maxpp) {
		pp_td.innerHTML = "⬆️" + pp_td.innerHTML;
	} else {
		pp_td.innerHTML = "⬇️" + pp_td.innerHTML;
	}
	
	tr.appendChild(pp_td)
	
	
	const effect_td = make_td("&ndash;")
	
	// Check effect chance
	if (move.effect == undefined) {
		if (actual_move.effect == undefined) {
			effect_td.classList.add("correct");
		}
	} else {
		effect_td.innerHTML = move.effect;
		if (move.effect == actual_move.effect) {
			effect_td.classList.add("correct");
		} else if (move.effect < actual_move.effect) {
			effect_td.innerHTML = "⬆️" + effect_td.innerHTML;
		} else {
			effect_td.innerHTML = "⬇️" + effect_td.innerHTML;
		}
	}
	
	
	tr.appendChild(effect_td)
	guess_header.after(tr)
}

// load stored data
if (localStorage.getItem("saved_day")) {
	const saved_day = +localStorage.getItem("saved_day");
	if (saved_day == current_day) {
		guessed = JSON.parse(localStorage.getItem("saved_guesses"));
		for (var i = 0; i < guessed.length; i++) {
			guess_move(guessed[i]);
		}
	} else {
		localStorage.setItem("saved_day", current_day);
		localStorage.setItem("saved_guesses", "[]");
	}
} else {	
		localStorage.setItem("saved_day", current_day);
}

function save_guesses () {
	localStorage.setItem("saved_guesses", JSON.stringify(guessed));
}


function win_game () {
	document.getElementById("game").classList.add("win");
}

// Countdown to next  game
const countdown = document.getElementById("countdown_amount");
const minutes_until_next_game = Math.floor((1-(Date.now()/86400000 % 1))*24*60);
const mins = minutes_until_next_game % 60;
countdown.innerHTML = Math.floor(minutes_until_next_game / 60) + "h" + (mins < 10 ? "0" + mins: mins) + "m"
