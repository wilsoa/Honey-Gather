// N name = [atk,def,name,ability,...]
// C comparison = [:,=,>,...]
// V value = string (quotes required if contains spaces)
// B basic query = N C V
// Q query = B's separated by whitespace
// AND
// OR
// -(...) for not

const keys = ["is", "hp", "atk", "def", "spa", "spd", "spe", "type", "t", "learns", "l", "ability", "a", "can"];
const comparisons = [">", ">=", "<=", "<", "=", ":"];

const aliases = {
	"l": "learns",
	"a": "ability",
	t: "type",
	hp: "_stat",
	atk: "_stat",
	def: "_stat",
	spa: "_stat",
	spd: "_stat",
	spe: "_stat"
}



function parse (str) {
	let index = 0;

	// Clear whitespace
	function WS () {
		while (str[index] == " ") {
			index = index + 1;
		}
	}

	// Check for a specific token from a list
	function TOKEN (list) {
		WS();
		for (let i = 0; i < list.length; i++) {
			const token = list[i];
			if (str.slice(index, index + token.length) == token) {
				index += token.length;
				return token;
			}
		}
		return false;
	}

	function KEY () : string | false {
		WS();
		let key = "";


		while (index < str.length && comparisons.indexOf(str[index]) == -1) {
			key += str[index];
			index++;
		}
		return key;
	}

	function BASIC_QUERY () {
		const key = KEY();

		if (key == false) {
			return false;
		}

		const comparison = COMPARISON();

		if (comparison == false) {
			show_error(`Expected comparison after key "${key}"`, "exclamation")
			return false;
		}

		const value = VALUE();

		if (value == false) {
			return false;
		}

		if (aliases[key] != undefined) {
			return key_hooks[aliases[key]](key, comparison, value);
		}
		else
		{
			if (key_hooks[key] == undefined) {
				console.log(key)
				show_error(`Unknown key ${key}`)
				return false
			}
			else {
				return key_hooks[key](key, comparison, value);
			}
		}
	}

	// function KEY () {
	// 	WS();
	// 	return TOKEN(keys);
	// }

	function COMPARISON () {
		WS();
		return TOKEN(comparisons);
	}

	function VALUE () : string | false {
		WS();
		let value = "";

		if (str[index] == '"') {
			index++;
			while (index < str.length && str[index] != '"') {
				value += str[index];
				index++;
			}
			index++;
			return value;
		}

		if (str[index] == "'") {
			index++;
			while (index < str.length && str[index] != "'") {
				value += str[index];
				index++;
			}
			index++;
			return value;
		}

		while (index < str.length && str[index] != " " && str[index] != ")") {
			value += str[index];
			index++;
		}
		return value;
	}

	function EXPRESSION () {
		WS();
		if (str[index] == "-") {
			index++;
			const inner = EXPRESSION();
			if (inner != false) {
				return "_not: {" + inner +"}";
			}
		}

		if (str[index] == "(") {
			index++;
			const inner = EXPRESSIONS();

			if (str[index] == ")") {
				index++;
			}
			return inner;
		}

		return BASIC_QUERY();
	}

	function combine_wheres (wheres) {
		if (wheres.length == 0) {
			return false;
		}
		let where = "";

		for (let i = 0; i < wheres.length - 1; i++) {
			where += wheres[i] + ", _and: {"
		}

		where += wheres[wheres.length - 1];

		for (let j = 0; j < wheres.length - 1; j++) {
			where += "}";
		}

		return where;
	}

	function EXPRESSIONS () {
		const wheres = [];
		while (index < str.length) {
			let where = EXPRESSION();

			if (TOKEN(["or"])) {
				const where2 = EXPRESSION();
				where = "_or: [{" + where + "}, {" + where2 + "}]"
			}

			if (where == false) {
				return combine_wheres(wheres);
			}

			wheres.push(where);
		}

		return combine_wheres(wheres);
	}

	search(EXPRESSIONS());
}