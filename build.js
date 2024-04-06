var moves_dict = { "pound": 1, "karate-chop": 2, "double-slap": 3, "comet-punch": 4, "mega-punch": 5, "pay-day": 6, "fire-punch": 7, "ice-punch": 8, "thunder-punch": 9, "scratch": 10, "vice-grip": 11, "guillotine": 12, "razor-wind": 13, "swords-dance": 14, "cut": 15, "gust": 16, "wing-attack": 17, "whirlwind": 18, "fly": 19, "bind": 20, "slam": 21, "vine-whip": 22, "stomp": 23, "double-kick": 24, "mega-kick": 25, "jump-kick": 26, "rolling-kick": 27, "sand-attack": 28, "headbutt": 29, "horn-attack": 30, "fury-attack": 31, "horn-drill": 32, "tackle": 33, "body-slam": 34, "wrap": 35, "take-down": 36, "thrash": 37, "double-edge": 38, "tail-whip": 39, "poison-sting": 40, "twineedle": 41, "pin-missile": 42, "leer": 43, "bite": 44, "growl": 45, "roar": 46, "sing": 47, "supersonic": 48, "sonic-boom": 49, "disable": 50, "acid": 51, "ember": 52, "flamethrower": 53, "mist": 54, "water-gun": 55, "hydro-pump": 56, "surf": 57, "ice-beam": 58, "blizzard": 59, "psybeam": 60, "bubble-beam": 61, "aurora-beam": 62, "hyper-beam": 63, "peck": 64, "drill-peck": 65, "submission": 66, "low-kick": 67, "counter": 68, "seismic-toss": 69, "strength": 70, "absorb": 71, "mega-drain": 72, "leech-seed": 73, "growth": 74, "razor-leaf": 75, "solar-beam": 76, "poison-powder": 77, "stun-spore": 78, "sleep-powder": 79, "petal-dance": 80, "string-shot": 81, "dragon-rage": 82, "fire-spin": 83, "thunder-shock": 84, "thunderbolt": 85, "thunder-wave": 86, "thunder": 87, "rock-throw": 88, "earthquake": 89, "fissure": 90, "dig": 91, "toxic": 92, "confusion": 93, "psychic": 94, "hypnosis": 95, "meditate": 96, "agility": 97, "quick-attack": 98, "rage": 99, "teleport": 100, "night-shade": 101, "mimic": 102, "screech": 103, "double-team": 104, "recover": 105, "harden": 106, "minimize": 107, "smokescreen": 108, "confuse-ray": 109, "withdraw": 110, "defense-curl": 111, "barrier": 112, "light-screen": 113, "haze": 114, "reflect": 115, "focus-energy": 116, "bide": 117, "metronome": 118, "mirror-move": 119, "self-destruct": 120, "egg-bomb": 121, "lick": 122, "smog": 123, "sludge": 124, "bone-club": 125, "fire-blast": 126, "waterfall": 127, "clamp": 128, "swift": 129, "skull-bash": 130, "spike-cannon": 131, "constrict": 132, "amnesia": 133, "kinesis": 134, "soft-boiled": 135, "high-jump-kick": 136, "glare": 137, "dream-eater": 138, "poison-gas": 139, "barrage": 140, "leech-life": 141, "lovely-kiss": 142, "sky-attack": 143, "transform": 144, "bubble": 145, "dizzy-punch": 146, "spore": 147, "flash": 148, "psywave": 149, "splash": 150, "acid-armor": 151, "crabhammer": 152, "explosion": 153, "fury-swipes": 154, "bonemerang": 155, "rest": 156, "rock-slide": 157, "hyper-fang": 158, "sharpen": 159, "conversion": 160, "tri-attack": 161, "super-fang": 162, "slash": 163, "substitute": 164, "sketch": 166, "triple-kick": 167, "thief": 168, "spider-web": 169, "mind-reader": 170, "nightmare": 171, "flame-wheel": 172, "snore": 173, "curse": 174, "flail": 175, "conversion-2": 176, "aeroblast": 177, "cotton-spore": 178, "reversal": 179, "spite": 180, "powder-snow": 181, "protect": 182, "mach-punch": 183, "scary-face": 184, "feint-attack": 185, "sweet-kiss": 186, "belly-drum": 187, "sludge-bomb": 188, "mud-slap": 189, "octazooka": 190, "spikes": 191, "zap-cannon": 192, "foresight": 193, "destiny-bond": 194, "perish-song": 195, "icy-wind": 196, "detect": 197, "bone-rush": 198, "lock-on": 199, "outrage": 200, "sandstorm": 201, "giga-drain": 202, "endure": 203, "charm": 204, "rollout": 205, "false-swipe": 206, "swagger": 207, "milk-drink": 208, "spark": 209, "fury-cutter": 210, "steel-wing": 211, "mean-look": 212, "attract": 213, "sleep-talk": 214, "heal-bell": 215, "return": 216, "present": 217, "frustration": 218, "safeguard": 219, "pain-split": 220, "sacred-fire": 221, "magnitude": 222, "dynamic-punch": 223, "megahorn": 224, "dragon-breath": 225, "baton-pass": 226, "encore": 227, "pursuit": 228, "rapid-spin": 229, "sweet-scent": 230, "iron-tail": 231, "metal-claw": 232, "vital-throw": 233, "morning-sun": 234, "synthesis": 235, "moonlight": 236, "hidden-power": 237, "cross-chop": 238, "twister": 239, "rain-dance": 240, "sunny-day": 241, "crunch": 242, "mirror-coat": 243, "psych-up": 244, "extreme-speed": 245, "ancient-power": 246, "shadow-ball": 247, "future-sight": 248, "rock-smash": 249, "whirlpool": 250, "beat-up": 251, "fake-out": 252, "uproar": 253, "stockpile": 254, "spit-up": 255, "swallow": 256, "heat-wave": 257, "hail": 258, "torment": 259, "flatter": 260, "will-o-wisp": 261, "memento": 262, "facade": 263, "focus-punch": 264, "smelling-salts": 265, "follow-me": 266, "nature-power": 267, "charge": 268, "taunt": 269, "helping-hand": 270, "trick": 271, "role-play": 272, "wish": 273, "assist": 274, "ingrain": 275, "superpower": 276, "magic-coat": 277, "recycle": 278, "revenge": 279, "brick-break": 280, "yawn": 281, "knock-off": 282, "endeavor": 283, "eruption": 284, "skill-swap": 285, "imprison": 286, "refresh": 287, "grudge": 288, "snatch": 289, "secret-power": 290, "dive": 291, "arm-thrust": 292, "camouflage": 293, "tail-glow": 294, "luster-purge": 295, "mist-ball": 296, "feather-dance": 297, "teeter-dance": 298, "blaze-kick": 299, "mud-sport": 300, "ice-ball": 301, "needle-arm": 302, "slack-off": 303, "hyper-voice": 304, "poison-fang": 305, "crush-claw": 306, "blast-burn": 307, "hydro-cannon": 308, "meteor-mash": 309, "astonish": 310, "weather-ball": 311, "aromatherapy": 312, "fake-tears": 313, "air-cutter": 314, "overheat": 315, "odor-sleuth": 316, "rock-tomb": 317, "silver-wind": 318, "metal-sound": 319, "grass-whistle": 320, "tickle": 321, "cosmic-power": 322, "water-spout": 323, "signal-beam": 324, "shadow-punch": 325, "extrasensory": 326, "sky-uppercut": 327, "sand-tomb": 328, "sheer-cold": 329, "muddy-water": 330, "bullet-seed": 331, "aerial-ace": 332, "icicle-spear": 333, "iron-defense": 334, "block": 335, "howl": 336, "dragon-claw": 337, "frenzy-plant": 338, "bulk-up": 339, "bounce": 340, "mud-shot": 341, "poison-tail": 342, "covet": 343, "volt-tackle": 344, "magical-leaf": 345, "water-sport": 346, "calm-mind": 347, "leaf-blade": 348, "dragon-dance": 349, "rock-blast": 350, "shock-wave": 351, "water-pulse": 352, "doom-desire": 353, "psycho-boost": 354, "roost": 355, "gravity": 356, "miracle-eye": 357, "wake-up-slap": 358, "hammer-arm": 359, "gyro-ball": 360, "healing-wish": 361, "brine": 362, "natural-gift": 363, "feint": 364, "pluck": 365, "tailwind": 366, "acupressure": 367, "metal-burst": 368, "u-turn": 369, "close-combat": 370, "payback": 371, "assurance": 372, "embargo": 373, "fling": 374, "psycho-shift": 375, "trump-card": 376, "heal-block": 377, "wring-out": 378, "power-trick": 379, "gastro-acid": 380, "lucky-chant": 381, "me-first": 382, "copycat": 383, "power-swap": 384, "guard-swap": 385, "punishment": 386, "last-resort": 387, "worry-seed": 388, "sucker-punch": 389, "toxic-spikes": 390, "heart-swap": 391, "aqua-ring": 392, "magnet-rise": 393, "flare-blitz": 394, "force-palm": 395, "aura-sphere": 396, "rock-polish": 397, "poison-jab": 398, "dark-pulse": 399, "night-slash": 400, "aqua-tail": 401, "seed-bomb": 402, "air-slash": 403, "x-scissor": 404, "bug-buzz": 405, "dragon-pulse": 406, "dragon-rush": 407, "power-gem": 408, "drain-punch": 409, "vacuum-wave": 410, "focus-blast": 411, "energy-ball": 412, "brave-bird": 413, "earth-power": 414, "switcheroo": 415, "giga-impact": 416, "nasty-plot": 417, "bullet-punch": 418, "avalanche": 419, "ice-shard": 420, "shadow-claw": 421, "thunder-fang": 422, "ice-fang": 423, "fire-fang": 424, "shadow-sneak": 425, "mud-bomb": 426, "psycho-cut": 427, "zen-headbutt": 428, "mirror-shot": 429, "flash-cannon": 430, "rock-climb": 431, "defog": 432, "trick-room": 433, "draco-meteor": 434, "discharge": 435, "lava-plume": 436, "leaf-storm": 437, "power-whip": 438, "rock-wrecker": 439, "cross-poison": 440, "gunk-shot": 441, "iron-head": 442, "magnet-bomb": 443, "stone-edge": 444, "captivate": 445, "stealth-rock": 446, "grass-knot": 447, "chatter": 448, "judgment": 449, "bug-bite": 450, "charge-beam": 451, "wood-hammer": 452, "aqua-jet": 453, "attack-order": 454, "defend-order": 455, "heal-order": 456, "head-smash": 457, "double-hit": 458, "roar-of-time": 459, "spacial-rend": 460, "lunar-dance": 461, "crush-grip": 462, "magma-storm": 463, "dark-void": 464, "seed-flare": 465, "ominous-wind": 466, "shadow-force": 467, "hone-claws": 468, "wide-guard": 469, "guard-split": 470, "power-split": 471, "wonder-room": 472, "psyshock": 473, "venoshock": 474, "autotomize": 475, "rage-powder": 476, "telekinesis": 477, "magic-room": 478, "smack-down": 479, "storm-throw": 480, "flame-burst": 481, "sludge-wave": 482, "quiver-dance": 483, "heavy-slam": 484, "synchronoise": 485, "electro-ball": 486, "soak": 487, "flame-charge": 488, "coil": 489, "low-sweep": 490, "acid-spray": 491, "foul-play": 492, "simple-beam": 493, "entrainment": 494, "after-you": 495, "round": 496, "echoed-voice": 497, "chip-away": 498, "clear-smog": 499, "stored-power": 500, "quick-guard": 501, "ally-switch": 502, "scald": 503, "shell-smash": 504, "heal-pulse": 505, "hex": 506, "sky-drop": 507, "shift-gear": 508, "circle-throw": 509, "incinerate": 510, "quash": 511, "acrobatics": 512, "reflect-type": 513, "retaliate": 514, "final-gambit": 515, "bestow": 516, "inferno": 517, "water-pledge": 518, "fire-pledge": 519, "grass-pledge": 520, "volt-switch": 521, "struggle-bug": 522, "bulldoze": 523, "frost-breath": 524, "dragon-tail": 525, "work-up": 526, "electroweb": 527, "wild-charge": 528, "drill-run": 529, "dual-chop": 530, "heart-stamp": 531, "horn-leech": 532, "sacred-sword": 533, "razor-shell": 534, "heat-crash": 535, "leaf-tornado": 536, "steamroller": 537, "cotton-guard": 538, "night-daze": 539, "psystrike": 540, "tail-slap": 541, "hurricane": 542, "head-charge": 543, "gear-grind": 544, "searing-shot": 545, "techno-blast": 546, "relic-song": 547, "secret-sword": 548, "glaciate": 549, "bolt-strike": 550, "blue-flare": 551, "fiery-dance": 552, "freeze-shock": 553, "ice-burn": 554, "snarl": 555, "icicle-crash": 556, "v-create": 557, "fusion-flare": 558, "fusion-bolt": 559, "flying-press": 560, "mat-block": 561, "belch": 562, "rototiller": 563, "sticky-web": 564, "fell-stinger": 565, "phantom-force": 566, "trick-or-treat": 567, "noble-roar": 568, "ion-deluge": 569, "parabolic-charge": 570, "forests-curse": 571, "petal-blizzard": 572, "freeze-dry": 573, "disarming-voice": 574, "parting-shot": 575, "topsy-turvy": 576, "draining-kiss": 577, "crafty-shield": 578, "flower-shield": 579, "grassy-terrain": 580, "misty-terrain": 581, "electrify": 582, "play-rough": 583, "fairy-wind": 584, "moonblast": 585, "boomburst": 586, "fairy-lock": 587, "kings-shield": 588, "play-nice": 589, "confide": 590, "diamond-storm": 591, "steam-eruption": 592, "hyperspace-hole": 593, "water-shuriken": 594, "mystical-fire": 595, "spiky-shield": 596, "aromatic-mist": 597, "eerie-impulse": 598, "venom-drench": 599, "powder": 600, "geomancy": 601, "magnetic-flux": 602, "electric-terrain": 604, "dazzling-gleam": 605, "baby-doll-eyes": 608, "nuzzle": 609, "infestation": 611, "power-up-punch": 612, "oblivion-wing": 613, "thousand-arrows": 614, "thousand-waves": 615, "lands-wrath": 616, "light-of-ruin": 617, "origin-pulse": 618, "precipice-blades": 619, "dragon-ascent": 620, "hyperspace-fury": 621, "shore-up": 659, "first-impression": 660, "baneful-bunker": 661, "spirit-shackle": 662, "darkest-lariat": 663, "sparkling-aria": 664, "ice-hammer": 665, "floral-healing": 666, "high-horsepower": 667, "strength-sap": 668, "solar-blade": 669, "leafage": 670, "spotlight": 671, "toxic-thread": 672, "laser-focus": 673, "gear-up": 674, "throat-chop": 675, "pollen-puff": 676, "anchor-shot": 677, "psychic-terrain": 678, "lunge": 679, "fire-lash": 680, "power-trip": 681, "burn-up": 682, "speed-swap": 683, "smart-strike": 684, "purify": 685, "revelation-dance": 686, "core-enforcer": 687, "trop-kick": 688, "instruct": 689, "beak-blast": 690, "clanging-scales": 691, "dragon-hammer": 692, "brutal-swing": 693, "aurora-veil": 694, "shell-trap": 704, "fleur-cannon": 705, "psychic-fangs": 706, "stomping-tantrum": 707, "shadow-bone": 708, "accelerock": 709, "liquidation": 710, "prismatic-laser": 711, "spectral-thief": 712, "sunsteel-strike": 713, "moongeist-beam": 714, "tearful-look": 715, "zing-zap": 716, "natures-madness": 717, "multi-attack": 718, "mind-blown": 720, "plasma-fists": 721, "photon-geyser": 722, "zippy-zap": 729, "splishy-splash": 730, "floaty-fall": 731, "bouncy-bubble": 733, "buzzy-buzz": 734, "sizzly-slide": 735, "glitzy-glow": 736, "baddy-bad": 737, "sappy-seed": 738, "freezy-frost": 739, "sparkly-swirl": 740, "double-iron-bash": 742, "dynamax-cannon": 744, "snipe-shot": 745, "jaw-lock": 746, "stuff-cheeks": 747, "no-retreat": 748, "tar-shot": 749, "magic-powder": 750, "dragon-darts": 751, "teatime": 752, "octolock": 753, "bolt-beak": 754, "fishious-rend": 755, "court-change": 756, "clangorous-soul": 775, "body-press": 776, "decorate": 777, "drum-beating": 778, "snap-trap": 779, "pyro-ball": 780, "aura-wheel": 783, "breaking-swipe": 784, "branch-poke": 785, "overdrive": 786, "apple-acid": 787, "grav-apple": 788, "spirit-break": 789, "strange-steam": 790, "life-dew": 791, "obstruct": 792, "false-surrender": 793, "meteor-assault": 794, "eternabeam": 795, "steel-beam": 796, "expanding-force": 797, "steel-roller": 798, "scale-shot": 799, "meteor-beam": 800, "shell-side-arm": 801, "misty-explosion": 802, "grassy-glide": 803, "rising-voltage": 804, "terrain-pulse": 805, "skitter-smack": 806, "burning-jealousy": 807, "lash-out": 808, "poltergeist": 809, "corrosive-gas": 810, "coaching": 811, "flip-turn": 812, "triple-axel": 813, "dual-wingbeat": 814, "scorching-sands": 815, "jungle-healing": 816, "wicked-blow": 817, "surging-strikes": 818, "thunder-cage": 819, "dragon-energy": 820, "freezing-glare": 821, "fiery-wrath": 822, "thunderous-kick": 823, "glacial-lance": 824, "astral-barrage": 825, "eerie-spell": 826, "dire-claw": 827, "psyshield-bash": 828, "stone-axe": 830, "springtide-storm": 831, "mystical-power": 832, "raging-fury": 833, "wave-crash": 834, "chloroblast": 835, "mountain-gale": 836, "victory-dance": 837, "headlong-rush": 838, "barb-barrage": 839, "esper-wing": 840, "bitter-malice": 841, "shelter": 842, "triple-arrows": 843, "infernal-parade": 844, "ceaseless-edge": 845, "bleakwind-storm": 846, "wildbolt-storm": 847, "sandsear-storm": 848, "lunar-blessing": 849, "take-heart": 850, "tera-blast": 851, "silk-trap": 852, "axe-kick": 853, "last-respects": 854, "lumina-crash": 855, "order-up": 856, "jet-punch": 857, "spicy-extract": 858, "spin-out": 859, "population-bomb": 860, "ice-spinner": 861, "glaive-rush": 862, "revival-blessing": 863, "salt-cure": 864, "triple-dive": 865, "mortal-spin": 866, "doodle": 867, "fillet-away": 868, "kowtow-cleave": 869, "flower-trick": 870, "torch-song": 871, "aqua-step": 872, "raging-bull": 873, "make-it-rain": 874, "psyblade": 875, "hydro-steam": 876, "ruination": 877, "collision-course": 878, "electro-drift": 879, "shed-tail": 880, "chilly-reception": 881, "tidy-up": 882, "snowscape": 883, "pounce": 884, "trailblaze": 885, "chilling-water": 886, "hyper-drill": 887, "twin-beam": 888, "rage-fist": 889, "armor-cannon": 890, "bitter-blade": 891, "double-shock": 892, "gigaton-hammer": 893, "comeuppance": 894, "aqua-cutter": 895, "blood-moon": 901, "matcha-gotcha": 902, "syrup-bomb": 903, "ivy-cudgel": 904, "electro-shot": 905, "tera-starstorm": 906, "fickle-beam": 907, "burning-bulwark": 908, "thunderclap": 909, "mighty-cleave": 910, "tachyon-cutter": 911, "hard-press": 912, "dragon-cheer": 913, "alluring-voice": 914, "temper-flare": 915, "supercell-slam": 916, "psychic-noise": 917, "upper-hand": 918, "malignant-chain": 919 };
var abilities_dict = { "stench": 1, "drizzle": 2, "speed-boost": 3, "battle-armor": 4, "sturdy": 5, "damp": 6, "limber": 7, "sand-veil": 8, "static": 9, "volt-absorb": 10, "water-absorb": 11, "oblivious": 12, "cloud-nine": 13, "compound-eyes": 14, "insomnia": 15, "color-change": 16, "immunity": 17, "flash-fire": 18, "shield-dust": 19, "own-tempo": 20, "suction-cups": 21, "intimidate": 22, "shadow-tag": 23, "rough-skin": 24, "wonder-guard": 25, "levitate": 26, "effect-spore": 27, "synchronize": 28, "clear-body": 29, "natural-cure": 30, "lightning-rod": 31, "serene-grace": 32, "swift-swim": 33, "chlorophyll": 34, "illuminate": 35, "trace": 36, "huge-power": 37, "poison-point": 38, "inner-focus": 39, "magma-armor": 40, "water-veil": 41, "magnet-pull": 42, "soundproof": 43, "rain-dish": 44, "sand-stream": 45, "pressure": 46, "thick-fat": 47, "early-bird": 48, "flame-body": 49, "run-away": 50, "keen-eye": 51, "hyper-cutter": 52, "pickup": 53, "truant": 54, "hustle": 55, "cute-charm": 56, "plus": 57, "minus": 58, "forecast": 59, "sticky-hold": 60, "shed-skin": 61, "guts": 62, "marvel-scale": 63, "liquid-ooze": 64, "overgrow": 65, "blaze": 66, "torrent": 67, "swarm": 68, "rock-head": 69, "drought": 70, "arena-trap": 71, "vital-spirit": 72, "white-smoke": 73, "pure-power": 74, "shell-armor": 75, "air-lock": 76, "tangled-feet": 77, "motor-drive": 78, "rivalry": 79, "steadfast": 80, "snow-cloak": 81, "gluttony": 82, "anger-point": 83, "unburden": 84, "heatproof": 85, "simple": 86, "dry-skin": 87, "download": 88, "iron-fist": 89, "poison-heal": 90, "adaptability": 91, "skill-link": 92, "hydration": 93, "solar-power": 94, "quick-feet": 95, "normalize": 96, "sniper": 97, "magic-guard": 98, "no-guard": 99, "stall": 100, "technician": 101, "leaf-guard": 102, "klutz": 103, "mold-breaker": 104, "super-luck": 105, "aftermath": 106, "anticipation": 107, "forewarn": 108, "unaware": 109, "tinted-lens": 110, "filter": 111, "slow-start": 112, "scrappy": 113, "storm-drain": 114, "ice-body": 115, "solid-rock": 116, "snow-warning": 117, "honey-gather": 118, "frisk": 119, "reckless": 120, "multitype": 121, "flower-gift": 122, "bad-dreams": 123, "pickpocket": 124, "sheer-force": 125, "contrary": 126, "unnerve": 127, "defiant": 128, "defeatist": 129, "cursed-body": 130, "healer": 131, "friend-guard": 132, "weak-armor": 133, "heavy-metal": 134, "light-metal": 135, "multiscale": 136, "toxic-boost": 137, "flare-boost": 138, "harvest": 139, "telepathy": 140, "moody": 141, "overcoat": 142, "poison-touch": 143, "regenerator": 144, "big-pecks": 145, "sand-rush": 146, "wonder-skin": 147, "analytic": 148, "illusion": 149, "imposter": 150, "infiltrator": 151, "mummy": 152, "moxie": 153, "justified": 154, "rattled": 155, "magic-bounce": 156, "sap-sipper": 157, "prankster": 158, "sand-force": 159, "iron-barbs": 160, "zen-mode": 161, "victory-star": 162, "turboblaze": 163, "teravolt": 164, "aroma-veil": 165, "flower-veil": 166, "cheek-pouch": 167, "protean": 168, "fur-coat": 169, "magician": 170, "bulletproof": 171, "competitive": 172, "strong-jaw": 173, "refrigerate": 174, "sweet-veil": 175, "stance-change": 176, "gale-wings": 177, "mega-launcher": 178, "grass-pelt": 179, "symbiosis": 180, "tough-claws": 181, "pixilate": 182, "gooey": 183, "aerilate": 184, "parental-bond": 185, "dark-aura": 186, "fairy-aura": 187, "aura-break": 188, "primordial-sea": 189, "desolate-land": 190, "delta-stream": 191, "stamina": 192, "wimp-out": 193, "emergency-exit": 194, "water-compaction": 195, "merciless": 196, "shields-down": 197, "stakeout": 198, "water-bubble": 199, "steelworker": 200, "berserk": 201, "slush-rush": 202, "long-reach": 203, "liquid-voice": 204, "triage": 205, "galvanize": 206, "surge-surfer": 207, "schooling": 208, "disguise": 209, "battle-bond": 210, "power-construct": 211, "corrosion": 212, "comatose": 213, "queenly-majesty": 214, "innards-out": 215, "dancer": 216, "battery": 217, "fluffy": 218, "dazzling": 219, "soul-heart": 220, "tangling-hair": 221, "receiver": 222, "power-of-alchemy": 223, "beast-boost": 224, "rks-system": 225, "electric-surge": 226, "psychic-surge": 227, "misty-surge": 228, "grassy-surge": 229, "full-metal-body": 230, "shadow-shield": 231, "prism-armor": 232, "neuroforce": 233, "intrepid-sword": 234, "dauntless-shield": 235, "libero": 236, "ball-fetch": 237, "cotton-down": 238, "propeller-tail": 239, "mirror-armor": 240, "gulp-missile": 241, "stalwart": 242, "steam-engine": 243, "punk-rock": 244, "sand-spit": 245, "ice-scales": 246, "ripen": 247, "ice-face": 248, "power-spot": 249, "mimicry": 250, "screen-cleaner": 251, "steely-spirit": 252, "perish-body": 253, "wandering-spirit": 254, "gorilla-tactics": 255, "neutralizing-gas": 256, "pastel-veil": 257, "hunger-switch": 258, "quick-draw": 259, "unseen-fist": 260, "curious-medicine": 261, "transistor": 262, "dragons-maw": 263, "chilling-neigh": 264, "grim-neigh": 265, "as-one-glastrier": 266, "as-one-spectrier": 267, "lingering-aroma": 268, "seed-sower": 269, "thermal-exchange": 270, "anger-shell": 271, "purifying-salt": 272, "well-baked-body": 273, "wind-rider": 274, "guard-dog": 275, "rocky-payload": 276, "wind-power": 277, "zero-to-hero": 278, "commander": 279, "electromorphosis": 280, "protosynthesis": 281, "quark-drive": 282, "good-as-gold": 283, "vessel-of-ruin": 284, "sword-of-ruin": 285, "tablets-of-ruin": 286, "beads-of-ruin": 287, "orichalcum-pulse": 288, "hadron-engine": 289, "opportunist": 290, "cud-chew": 291, "sharpness": 292, "supreme-overlord": 293, "costar": 294, "toxic-debris": 295, "armor-tail": 296, "earth-eater": 297, "mycelium-might": 298, "minds-eye": 299, "supersweet-syrup": 300, "hospitality": 301, "toxic-chain": 302, "tera-shift": 304, "tera-shell": 305, "teraform-zero": 306, "poison-puppeteer": 307 };
var type_colors = {
    "bug": "94bc4a",
    "dark": "736c75",
    "dragon": "6a7baf",
    "electric": "e5c531",
    "fairy": "e397d1",
    "fighting": "cb5f48",
    "fire": "ea7a3c",
    "flying": "7da6de",
    "ghost": "846ab6",
    "grass": "71c558",
    "ground": "cc9f4f",
    "ice": "70cbd4",
    "normal": "aab09f",
    "poison": "b468b7",
    "psychic": "e5709b",
    "rock": "b2a061",
    "steel": "89a1b0",
    "water": "539ae2"
};
var options = {
    show_alt_forms: true
};
// N name = [atk,def,name,ability,...]
// C comparison = [:,=,>,...]
// V value = string (quotes required if contains spaces)
// B basic query = N C V
// Q query = B's separated by whitespace
// AND
// OR
// -(...) for not
var keys = ["is", "hp", "atk", "def", "spa", "spd", "spe", "type", "t", "learns", "l", "ability", "a", "can"];
var comparisons = [">", ">=", "<=", "<", "=", ":"];
var aliases = {
    "l": "learns",
    "a": "ability",
    t: "type",
    hp: "_stat",
    atk: "_stat",
    def: "_stat",
    spa: "_stat",
    spd: "_stat",
    spe: "_stat"
};
function parse(str) {
    var index = 0;
    // Clear whitespace
    function WS() {
        while (str[index] == " ") {
            index = index + 1;
        }
    }
    // Check for a specific token from a list
    function TOKEN(list) {
        WS();
        for (var i = 0; i < list.length; i++) {
            var token = list[i];
            if (str.slice(index, index + token.length) == token) {
                index += token.length;
                return token;
            }
        }
        return false;
    }
    function KEY() {
        WS();
        var key = "";
        while (index < str.length && str[index] != ":") {
            key += str[index];
            index++;
        }
        return key;
    }
    function BASIC_QUERY() {
        var key = KEY();
        if (key == false) {
            return false;
        }
        var comparison = COMPARISON();
        if (comparison == false) {
            show_error("Expected comparison after key \"".concat(key, "\""), "exclamation");
            return false;
        }
        var value = VALUE();
        if (value == false) {
            return false;
        }
        if (aliases[key] != undefined) {
            return key_hooks[aliases[key]](key, comparison, value);
        }
        else {
            if (key_hooks[key] == undefined) {
                console.log(key);
                show_error("Unknown key ".concat(key));
                return false;
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
    function COMPARISON() {
        WS();
        return TOKEN(comparisons);
    }
    function VALUE() {
        WS();
        var value = "";
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
    function EXPRESSION() {
        WS();
        if (str[index] == "-") {
            index++;
            var inner = EXPRESSION();
            if (inner != false) {
                return "_not: {" + inner + "}";
            }
        }
        if (str[index] == "(") {
            index++;
            var inner = EXPRESSIONS();
            if (str[index] == ")") {
                index++;
            }
            return inner;
        }
        return BASIC_QUERY();
    }
    function combine_wheres(wheres) {
        if (wheres.length == 0) {
            return false;
        }
        var where = "";
        for (var i = 0; i < wheres.length - 1; i++) {
            where += wheres[i] + ", _and: {";
        }
        where += wheres[wheres.length - 1];
        for (var j = 0; j < wheres.length - 1; j++) {
            where += "}";
        }
        return where;
    }
    function EXPRESSIONS() {
        var wheres = [];
        while (index < str.length) {
            var where = EXPRESSION();
            if (TOKEN(["or"])) {
                var where2 = EXPRESSION();
                where = "_or: [{" + where + "}, {" + where2 + "}]";
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
// Translate from our symbols to GraphQL
var comparison_dict = { "=": "_eq", ":": "_eq", ">": "_gt", ">=": "_gte", "<": "_lt", "<=": "_lte" };
var stat_dict = { hp: 1, atk: 2, def: 3, spa: 4, spd: 5, spe: 6 };
var type_dict = {
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
};
var key_hooks = {
    _stat: function (key, comparison, value) {
        var stat_id = stat_dict[key];
        var comp = comparison_dict[comparison];
        return "pokemon_v2_pokemonstats: {base_stat: {".concat(comp, ": ").concat(value, "}, stat_id: {_eq: ").concat(stat_id, "}}");
    },
    learns: function (key, comparison, value) {
        var move_id = moves_dict[value.toLowerCase().replace(" ", "-")];
        if (move_id == undefined) {
            show_error("Unknown move " + value);
        }
        else {
            if (comparison == ":") {
                return "pokemon_v2_pokemonmoves: {move_id: {_eq: ".concat(move_id, "}}");
            }
        }
    },
    type: function (key, comparison, value) {
        var type_id = type_dict[value];
        if (type_id == undefined) {
            show_error("Unknown type " + value);
        }
        if (comparison == ":") {
            return "pokemon_v2_pokemontypes: {type_id: {_eq: ".concat(type_id, "}}");
        }
    },
    ability: function (key, comparison, value) {
        var ability_id = abilities_dict[value.toLowerCase().replace(" ", "-")];
        if (ability_id == undefined) {
            show_error("Unknown ability " + value);
        }
        if (comparison == ":") {
            return "pokemon_v2_pokemonabilities: {ability_id: {_eq: ".concat(ability_id, "}}");
        }
    },
    is: function (key, comparison, value) {
        if (comparison == ":") {
            switch (value) {
                case "legendary":
                    return "pokemon_v2_pokemonspecy: {is_legendary: {_eq: true}}";
                case "mega":
                    return "pokemon_v2_pokemonforms: {is_mega: {_eq: true}}";
            }
        }
        return false;
    }
};
var cache = {};
function search(where) {
    if (where) {
        var query_1 = "query samplePokeAPIquery {\
	  pokemon_v2_pokemon(where: {" + where + "}, order_by: {pokemon_species_id: asc}) {\
	    pokemon_species_id,\
	    id,\
	    name,\
	    is_default\
    pokemon_v2_pokemontypes {\
      id\
      pokemon_v2_type {\
        name\
      }\
    }\
	  }\
	}";
        if (cache[query_1]) {
            print_results(cache[query_1]);
        }
        else {
            fetch("https://beta.pokeapi.co/graphql/v1beta", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ query: query_1 }),
            })
                .then(function (r) { return r.json(); })
                .then(function (data) { return print_results(cache[query_1] = data.data.pokemon_v2_pokemon); });
        }
    }
}
function capture_event(e) {
    clear_errors();
    if (!e)
        e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter') {
        parse(searchbox.value);
        return false;
    }
}
var searchbox = document.getElementById("search");
var resultbox = document.getElementById("results");
var errorbox = document.getElementById("errors");
searchbox.onkeypress = capture_event;
var name_exceptions = {
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
    "indeedee-male": "Indeedee",
    "wo-chien": "Wo-Chien",
    "ting-lu": "Ting-Lu",
    "chi-yu": "Chi-Yu",
    "chien-pao": "Chien-Pao"
};
function prettify_name(name) {
    if (name_exceptions[name]) {
        return name_exceptions[name];
    }
    var words = name.split("-");
    var out = [];
    for (var i = 0; i < words.length; i++) {
        out.push(words[i][0].toUpperCase() + words[i].slice(1));
    }
    return out.join(" ");
}
function format_result(p, lone_alternate) {
    if (lone_alternate === void 0) { lone_alternate = false; }
    var entry = document.createElement("li");
    entry.id = "pokemon-" + p.pokemon_species_id;
    entry.classList.add("pokemon-entry");
    entry.innerHTML = "<span class=\"dex-number\">".concat(p.pokemon_species_id, ":</span> <span class=\"pokesprite pokemon ").concat(p.name, "\"></span><span class=\"pokemon-name\">").concat(prettify_name(p.name), "</span>");
    if (p.is_default) {
        entry.innerHTML += "<a class=\"bulba\" target=\"_blank\" href=\"https://bulbapedia.bulbagarden.net/wiki/".concat(prettify_name(p.name), "_(Pok%C3%A9mon)\"></a>");
    }
    else {
        if (lone_alternate) {
            entry.innerHTML += "<a class=\"bulba\" target=\"_blank\" href=\"https://bulbapedia.bulbagarden.net/wiki/".concat(prettify_name(p.name).split(" ")[0], "_(Pok%C3%A9mon)\"></a>");
        }
    }
    var name = entry.querySelector(".pokemon-name");
    var type1;
    var type2;
    if (p.pokemon_v2_pokemontypes.length == 1) {
        type1 = p.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
        type2 = p.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
    }
    else {
        type1 = p.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
        type2 = p.pokemon_v2_pokemontypes[1].pokemon_v2_type.name;
    }
    name.style.setProperty("--type1", "#" + type_colors[type1]);
    name.style.setProperty("--type2", "#" + type_colors[type2]);
    return entry;
}
function format_data(p) {
    var data = document.createElement("li");
    data.id = "pokemon-data-" + p.pokemon_species_id;
    data.classList.add("pokemon-data");
    data.innerHTML = "(data)";
    return data;
}
// Add element b after element a
function addAfter(a, b) {
    if (a.nextSibling) {
        a.parentNode.insertBefore(b, a.nextSibling);
    }
    else {
        a.parentNode.appendChild(b);
    }
}
function print_results(data) {
    resultbox.innerHTML = "";
    var alternate_forms_to_fill_in = [];
    // Fill in defaults
    for (var i = 0; i < data.length; i++) {
        var p = data[i];
        if (p.is_default) {
            resultbox.appendChild(format_result(p));
            resultbox.appendChild(format_data(p));
        }
        else // Alternate forms
         {
            // Check if there's a default form
            var default_exists = false;
            for (var j = 0; j < data.length; j++) {
                var q = data[j];
                if (q.is_default && q.pokemon_species_id == p.pokemon_species_id) {
                    default_exists = true;
                }
            }
            if (default_exists) {
                if (options.show_alt_forms) {
                    alternate_forms_to_fill_in.push(p);
                }
            }
            else {
                resultbox.appendChild(format_result(p, true));
                resultbox.appendChild(format_data(p));
            }
        }
    }
    for (var i = 0; i < alternate_forms_to_fill_in.length; i++) {
        var p = alternate_forms_to_fill_in[i];
        var def = document.getElementById("pokemon-data-" + p.pokemon_species_id);
        var list = void 0;
        if (def.nextSibling && def.nextSibling.nodeName == "UL") {
            list = def.nextSibling;
        }
        else {
            list = document.createElement("ul");
            list.classList.add("alternate-forms");
            addAfter(def, list);
        }
        list.appendChild(format_result(p));
        list.appendChild(format_data(p));
    }
}
function clear_errors() {
    errorbox.innerHTML = "";
    errorbox.classList.remove("visible");
}
function show_error(err, typ) {
    if (typ === void 0) { typ = "question"; }
    var entry = document.createElement("li");
    entry.innerHTML = "<span class='pokesprite inline pokemon unown-".concat(typ, "'></span>") + err;
    errorbox.appendChild(entry);
    errorbox.classList.add("visible");
}
document.getElementById("results").onclick = function (e) {
    var target = e.target;
    if (target.nodeName != "LI") {
        target = target.parentNode;
    }
    target.classList.toggle("active");
};
