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

function print_results (data) {
  resultbox.innerHTML = "";
  // Fill in defaults
  for (let i = 0; i < data.length; i++) {
    const p = data[i];

    if (p.is_default) {
      const entry = document.createElement("li");
      entry.id = "pokemon-" + p.pokemon_species_id;
      entry.innerHTML = `</div><span class="dex-number">${p.pokemon_species_id}:</span> <div class="icon icon-${p.name}"></div><span class="pokemon-name">${prettify_name(p.name)}</span>`;
      resultbox.appendChild(entry);
    }
  }

  // Fill in alternate forms

  for (let i = 0; i < data.length; i++) {
    const p = data[i];

    if (!p.is_default) {
      const def = document.getElementById("pokemon-" + p.pokemon_species_id);
      if (def) {
        // def.innerHTML += "<div class='alt-form'>" + `<img src='_sprites/${p.name}.png' />` + p.name + "</div>";
      }
      else
      {
        console.log(p)
      }
    }
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