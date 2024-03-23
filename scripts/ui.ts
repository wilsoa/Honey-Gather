function capture_event (e) {
  clear_errors();
	if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      console.log(parse(searchbox.value));
      // Enter pressed
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
  entry.innerHTML = `</div><span class="dex-number">${p.pokemon_species_id}:</span> <div class="icon icon-${p.name}"></div><span class="pokemon-name">${prettify_name(p.name)}</span>`;
  return entry;
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
      }
    }
  }

  for (let i = 0; i < alternate_forms_to_fill_in.length; i++) {
    const p = alternate_forms_to_fill_in[i];
    const def = document.getElementById("pokemon-" + p.pokemon_species_id);
    let list;

    if (def.nextSibling && def.nextSibling.nodeName == "UL") {
      list = def.nextSibling;
    } else {
      list = document.createElement("ul");
      list.classList.add("alternate-forms");
      addAfter(def, list);
    }

    list.appendChild(format_result(p));
  }

  console.log(data);
}

function clear_errors () {
  errorbox.innerHTML = "";
  errorbox.classList.remove("visible");
}

function show_error (err) {
  const entry = document.createElement("li");
  entry.innerHTML = err;
  errorbox.appendChild(entry);
  errorbox.classList.add("visible");
}

document.getElementById("results").onclick = function (e) {
  var target = <HTMLElement> e.target;

  if (target.nodeName != "LI") {
    target = <HTMLInputElement> target.parentNode
  }

  target.classList.toggle("active")

  console.log(target)
}