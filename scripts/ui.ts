function capture_event (e) {
  clear_errors();
	if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      parse(searchbox.value);
      return false;
    }
}

const searchbox = <HTMLInputElement> document.getElementById("search");
const resultbox = document.getElementById("results");
const errorbox = document.getElementById("errors");

searchbox.onkeypress = capture_event;

const name_exceptions = {
  "pumpkaboo-average": "Pumpkaboo",
  "gourgeist-average": "Gourgeist",
  "shaymin-land": "Shaymin",
  "wormadam-plant": "Wormadam",
  "basculin-red-striped": "Basculin",
  "keldeo-ordinary": "Keldeo",
  "wishiwashi-solo": "Wishiwashi",
  "basculegion-male": "Basculegion",
  "deoxys-normal": "Deoxys",
  "giratina-altered": "Giratina",
  "darmanitan-standard": "Darmanitan",
  "tornadus-incarnate": "Tornadus",
  "thundurus-incarnate": "Thunderus",
  "landorus-incarnate": "Landorus",
  "meowstic-male": "Meowstic",
  "aegislash-shield": "Aegislash",
  "zygarde-50": "Zygarde",
  "oracario-baile": "Oracorio",
  "lycanroc-midday": "Lycanroc",
  "minior-red-meteor": "Minior",
  "mimikyu-disguised": "Mimikyu",
  "toxtricity-amped": "Toxtricity",
  "eiscue-ice": "Eiscue",
  "morpeko-full-belly": "Morpeko",
  "urshifu-single-strike": "Urshifu",
  "enamorous-incarnate": "Enamorous",
  "meloetta-aria": "Meloetta",
  "indeedee-male": "Indeedee"
}

function prettify_name (name) {

  if (name_exceptions[name]) {
    return name_exceptions[name];
  }

  const words = name.split("-");
  let out = [];

  for (let i = 0; i < words.length; i++) {
    out.push(words[i][0].toUpperCase() + words[i].slice(1));
  }

  return out.join(" ");
}

function format_result (p) {
  const entry = document.createElement("li");
  entry.id = "pokemon-" + p.pokemon_species_id;
  entry.classList.add("pokemon-entry")
  entry.innerHTML = `<span class="dex-number">${p.pokemon_species_id}:</span> <span class="pokesprite pokemon ${p.name}"></span><span class="pokemon-name">${prettify_name(p.name)}</span>`;
  
  const name = <HTMLElement> entry.querySelector(".pokemon-name");
  let type1
  let type2

  if (p.pokemon_v2_pokemontypes.length == 1) {
    type1 = p.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
    type2 = p.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
  }
  else {
    type1 = p.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
    type2 = p.pokemon_v2_pokemontypes[1].pokemon_v2_type.name;
  }

  name.style.setProperty("--type1", "#" + type_colors[type1])
  name.style.setProperty("--type2", "#" + type_colors[type2])

  return entry;
}

function format_data (p) {
  const data = document.createElement("li");
  data.id = "pokemon-data-" + p.pokemon_species_id;
  data.classList.add("pokemon-data")
  data.innerHTML = `(data)`;
  return data;
}

// Add element b after element a
function addAfter (a, b) {
  if(a.nextSibling){
    a.parentNode.insertBefore(b,a.nextSibling);
  }else{
    a.parentNode.appendChild(b);
  }
}

function print_results (data) {
  resultbox.innerHTML = "";
  var alternate_forms_to_fill_in = [];

  // Fill in defaults
  for (let i = 0; i < data.length; i++) {
    const p = data[i];

    if (p.is_default) {
      resultbox.appendChild(format_result(p));
      resultbox.appendChild(format_data(p));
    }
    else // Alternate forms
    {
      // Check if there's a default form
      let default_exists = false;
      for (let j = 0; j < data.length; j++) {
        const q = data[j];
        if (q.is_default && q.pokemon_species_id == p.pokemon_species_id) {
          default_exists = true;
        }
      }

      if (default_exists) {
        if (options.show_alt_forms) {
          alternate_forms_to_fill_in.push(p);
        }
      } else {
        resultbox.appendChild(format_result(p));
        resultbox.appendChild(format_data(p));
      }
    }
  }

  for (let i = 0; i < alternate_forms_to_fill_in.length; i++) {
    const p = alternate_forms_to_fill_in[i];
    const def = document.getElementById("pokemon-data-" + p.pokemon_species_id);
    let list;

    if (def.nextSibling && def.nextSibling.nodeName == "UL") {
      list = def.nextSibling;
    } else {
      list = document.createElement("ul");
      list.classList.add("alternate-forms");
      addAfter(def, list);
    }

    list.appendChild(format_result(p));
    list.appendChild(format_data(p));
  }
}

function clear_errors () {
  errorbox.innerHTML = "";
  errorbox.classList.remove("visible");
}

function show_error (err, typ = "question") {
  const entry = document.createElement("li");
  entry.innerHTML = `<span class='pokesprite inline pokemon unown-${typ}'></span>` + err;
  errorbox.appendChild(entry);
  errorbox.classList.add("visible");
}

document.getElementById("results").onclick = function (e) {
  var target = <HTMLElement> e.target;

  if (target.nodeName != "LI") {
    target = <HTMLInputElement> target.parentNode
  }

  target.classList.toggle("active")
}