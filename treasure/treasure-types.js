//----------GEMSTONES

let gems10 = [
    "azurite", "banded agate", "blue quartz", "eye agate",
    "hematite", "lapiz lazuli", "malachite", "moss agate",
    "obsidian", "rhodochrosite", "tiger eye", "turquoise"
];

let gems50 = [
    "bloodstone", "carnelian", "chalcedony", "chrysoprase",
    "citrine", "jasper", "moonstone", "onyx", "quartz",
    "sardonyx", "star rose quartz", "zircon"
];

let gems100 = [
    "amber", "amethyst", "chrysoberyl", "coral", "garnet",
    "jade", "jet", "pearl", "spinel", "tourmaline"
];

let gems500 = [
    "alexandrite", "aquamarine", "black pearl", "blue spinel",
    "peridot", "topaz"
];

let gems1000 = [
    "black opal", "blue sapphire", "emerald", "fire opal",
    "opal", "star ruby", "star sapphire", "yellow sapphire"
];

let gems5000 = [
    "black sapphire", "diamond", "jacinth", "ruby"
];

//-----------ART OBJECTS

let art25 = [
    "silver ewer", "carved bone statuette", "small gold bracelet",
    "cloth-of-gold vestments", "black velvet mask stitched with silver thread",
    "copper chalice with silver filigree", "pair of engraved bone dice",
    "small mirror set in a painted wooden frame", "embroidered silk handkerchief",
    "gold locket with a painted portrait inside"
];

let art250 = [
    "gold ring set with bloodstones", "carved ivory statuette", "large gold bracelet",
    "silver necklace with a gemstone pendant", "bronze crown", "silk robe with gold embroidery",
    "large well-made tapestry", "brass mug with jade inlay", "box of turquoise animal figurines",
    "gold bird cage with electrum filigree"
];

let art750 = [
    "silver chalice set with moonstones", "silver-played steel longsword with jet set in hilt",
    "carved harp of exotic wood with ivory inlay and zircon gems", "small gold idol",
    "gold dragon comb set with red garnets as eyes",
    "bottle stopper cork embossed with gold leaf and set with amethysts",
    "ceremonial electrum dagger with a black pearl in the pommel",
    "silver and gold brooch",
    "obsidian statuette with gold fittings and inlay",
    "painted gold war mask"
];

let art2500 = [
    "fine gold chain set with a fire opal", "old masterpiece painting",
    "embroidered silk and velvet mantle set with numerous moonstones",
    "platinum bracelet set with a sapphire", "embroidered glove set with jewel chips",
    "jeweled anklet", "gold music box", "gold circlet set with four aquamarines",
    "eye patch with a mock eye set in blue sapphire and moonstone",
    "necklace string of small pink pearls"
];

let art7500 = [
    "jeweled gold crown", "jeweled platinum ring", "small gold statuette set with rubies",
    "gold cup set with emeralds", "gold jewelry box with platinum filigree",
    "painted gold child's sarcophagus", "jade game board with solid gold playing pieces",
    "bejeweled ivory drinking horn with gold filigree"
];

//------------MAGIC ITEMS

let commonItems = [
    "clockwork amulet", "armor of gleaming", "bead of nourishment", "bead of refreshment",
    "bookmark of memory", "boots of false tracks", "candle of the deep",
    "cast-off armor", "charlatan's die", "cloak of billowing", "cloak of many fashions",
    "clothes of mending", "dark shard amulet", "dread helm", "ear horn of hearing", "enduring spellbook",
    "ersatz eye", "fold-up friend", "giant's gloves",
    "hat of vermin", "hat of wizardry", "Heward's handy spice pouch", "horn of silent alarm",
    "instrument of illusions", "instrument of scribing", "lock of trickery", "moon-touched sword",
    "mystery key", "orb of direction", "orb of time", "perfume of bewitching", "pipe of smoke monsters",
    "pole of angling", "pole of collapsing", "pot of awakening", "rope of mending", "ruby of the war mage",
    "shield of expression", "smoldering armor", "staff of adornment", "staff of birdcalls", "staff of flowers",
    "talking doll", "tankard of sobriety", "unbreakable arrow", "veteran's cane", (roll(2, 'd10')) + " x walloping ammunition",
    "wand of conducting", "wand of pyrotechnics", "wand of scowls", "wand of smiles", "spellwrought tattoo 0",
    "spellwrought tattoo 1", "illuminator's tattoo", "masquerade tattoo", "potion of healing", "spell scroll 0",
    "potion of climbing", "spell scroll 1", "spell scroll 2",
];

let uncommonMajorItems = [
    "bag of holding", "bag of holding (devouring)", "periapt of health", "sending stones", "driftglobe",
    "alchemy jug", "cap of water breathing", "cloak of the manta ray", "driftglobe", "goggles of night",
    "helm of comprehending languages", "immovable rod", "lantern of revealing",
    "mariner's armor", "mithril armor", "ring of swimming", "robe of useful items",
    "rope of climbing", "saddle of the cavalier", "wand of magic detection", "wand of secrets",
    "weapon +1", "shield +1", "sentinel shield", "amulet of proof against detection and location",
    "boots of elvenkind", "boots of striding and springing", "bracers of archery", "brooch of shielding",
    "broom of flying", "cloak of elvenkind", "cloak of protection", "gauntlets of ogre power",
    "hat of disguise", "javelin of lightning", "pearl of power", "rod of the pact keeper +1",
    "slippers of spider climbing", "staff of the adder", "staff of the python", "sword of vengeance",
    "trident of fish command", "wand of magic missiles", "wand of the war mage +1", "wand of webs",
    "weapon of warning", "adamantine armor", "gray bag of tricks", "rust bag of tricks", "tan bag of tricks",
    "boots of the winterlands", "circlet of blasting", "deck of illusions", "eversmoking bottle",
    "eyes of charming", "eyes of the eagle", "silver raven of wondrous power", "gem of brightness",
    "gloves of missile snaring", "gloves of swimming and climbing", "gloves of thievery", "headband of intellect",
    "helm of telepathy", "Doss lute", "Fochlucan bandore", "Mac-Fuimidh cittern", "medallion of thoughts",
    "necklace of adaptation", "periapt of wound closure", "pipes of haunting", "pipes of the sewers",
    "ring of jumping", "ring of mind shielding", "ring of warmth", "ring of water walking", "quiver of Ehlonna",
    "stone of good luck", "wind fan", "winged boots", "arcane grimoire +1", "living gloves", "amulet of the devout +1",
    "brooch of living essence", "barrier tattoo (light)", "eldritch claw tattoo", "spellwrought tattoo 2",
    "spellwrought tattoo 3", "moon sickle +1", "all-purpose tool +1", "bloodwell vial +1", "feywild shard",
    "goggles of object reading", "guardian emblem", "dragonhide belt +1", "emerald pen"
];
let uncommonMinorItems = [
    "potion of greater healing", "potion of fire breath", "potion of resistance", "potion of healing (poison)",
    (roll(2, 'd10')) + " x ammunition +1", "potion of animal friendship", "potion of hill giant strength",
    "potion of growth", "potion of water breathing", "spell scroll 2", "spell scroll 3",
    "Keoghtom's ointment", "oil of slipperiness", "dust of disappearance",
    "dust of dryness", "dust of sneezing and choking", "water elemental emerald", "fire elemental corundum",
    "air elemental sapphire", "earth elemental diamond", "philter of love",
];
let rareMajorItems = [
    "bag of beans", (roll(1,'d4')+1) + " x beads of force", "chime of opening", "decanter of endless water",
    "eyes of minute seeing", "folding boat", "Heward's handy haversack", "horseshoes of speed",
    "necklace of fireballs", "weapon +2", "bronze griffin of wondrous power", "ebony fly of wondrous power",
    "golden lions of wondrous power", "ivory goats of wondrous power", "marble elephant of wondrous power",
    "serpentine owl of wondrous power", "adamantine armor", "amulet of health", "armor of vulnerability",
    "arrow-catching shield", "belt of dwarvenkind", "belt of hill giant strength", "berserker axe",
    "boots of levitation", "boots of speed", "bowl of commanding water elementals", "bracers of defense",
    "brazier of commanding fire elementals", "cape of the mountebank", "censer of controlling air elementals",
    "armor +1", "armor of resistance", "cloak of displacement", "cloak of the bat", "cube of force",
    "Daern's instant fortress", "dagger of venom", "dimensional shackles", "dragon slayer", "elven chain",
    "flame tongue", "gem of seeing", "giant slayer", "glamoured studded leather", "helm of teleportation",
    "horn of blasting", "silver horn of Valhalla", "brass horn of Valhalla", "Canaith mandolin", "Cli lyre",
    "Ioun stone of awareness", "ioun stone of protection", "ioun stone of reserve", "ioun stone of sustenance",
    "iron bands of Bilarro", "armor +1", "mace of disruption", "mace of smiting", "onyx dog of wondrous power",
    "mace of terror", "mantle of spell resistance", "necklace of prayer beads", "periapt of proof against poison",
    "ring of animal influence", "ring of evasion", "ring of feather falling", "ring of free action",
    "ring of protection", "ring of resistance", "ring of spell storing", "ring of the ram", "ring of X-ray vision",
    "robe of eyes", "rod of rulership", "rod of the pact keeper +2", "rope of entanglement", "armor +1",
    "shield +2", "shield of missile attraction", "staff of charming", "staff of healing",
    "staff of swarming insects", "staff of the woodlands", "staff of withering", "stone of controlling earth elementals",
    "sun blade", "sword of life stealing", "sword of wounding", "tentacle rod", "vicious weapon",
    "wand of binding", "wand of enemy detection", "wand of fear", "wand of fireballs", "wand of lightning bolts",
    "wand of paralysis", "wand of the war mage +2", "wand of wonder", "wings of flying", "alchemical compendium",
    "arcane grimoire +2", "astromancy archive", "duplicitous manuscript", "libram of souls and flesh",
    "planecaller's codex", "protective verses", "lyre of building", "reveler's concertina",
    "rhythm-maker's drum", "siren song lyre", "amulet of the devout +2", "charm of plant command", "ring of temporal salvation",
    "staff of the ivory claw", "barrier tattoo (medium)", "shadowfell brand tattoo", "spellwrought tattoo 4",
    "spellwrought tattoo 5", "all-purpose tool +2", "astral shard", "atlas of endless horizons", "bell branch",
    "devotee's censer", "elemental essence shard", "far realm shard", "needle of mending", "outer essence shard",
    "shadowfell shard", "helm of the gods", "molten bronze skin", "two-birds sling", "crystal blade",
    "dragonhide belt +2", "dragonwing bow", "weapon of certain death", "woodcutter's axe", "ventilating lungs",
    "shield of far sight", "bonecounter", "corpse slayer", "dagger of blindsight", "crown of the wrath bringer",
    "delver's claws", "lash of immolation", "zephyr armor", "wayfarer's boots", "war horn of valor",
    "staff of the rooted hills", "kyanite pteranodon figurine of wondrous power"
];
let rareMinorItems = [
    "potion of superior healing", "spell scroll 4", (roll(2, 'd10')) + " x ammunition +2", "potion of clairvoyance",
    "potion of diminution", "potion of gaseous form", "potion of frost giant strength",
    "potion of stone giant strength", "potion of heroism", "potion of invulnerability",
    "potion of mind reading", "spell scroll 5", "elixir of health", "oil of etherealness",
    "potion of fire giant strength", "Quaal's feather token", "scroll of protection",
    "potion of aqueous form", (roll(1, "d4") + 2) + " x glowrune pigments",
];
let epicMajorItems = [
    "horseshoes of a zephyr", "Nolzur's marvelous pigments", "portable hole", 
    "weapon +3", "amulet of the planes", "carpet of flying", "crystal ball", "ring of regeneration",
    "ring of shooting stars", "ring of telekinesis", "robe of scintillating colors", "robe of stars",
    "rod of absorption", "rod of alertness", "rod of security", "rod of the pact keeper +3", "scimitar of speed",
    "shield +3", "staff of fire", "staff of frost", "staff of power", "staff of striking", "staff of thunder and lightning",
    "sword of sharpness", "wand of polymorph", "wand of the war mage +3", "adamantine armor", "animated shield",
    "belt of fire giant strength", "belt of frost giant strength", "armor +1", "armor of resistance",
    "candle of invocation", "armor +2", "cloak of arachnida", "dancing sword", "demon armor", "dragon scale mail",
    "dwarven plate", "dwarven thrower", "efreeti bottle", "obsidian steed of wondrous power", "frost brand",
    "helm of brilliance", "bronze horn of Valhalla", "Anstruth harp", "ioun stone of absorption",
    "ioun stone of agility", "ioun stone of fortitude", "ioun stone of insight", "ioun stone of intellect",
    "ioun stone of leadership", "ioun stone of strength", "armor +2", "manual of bodily health",
    "manual of gainful exercise", "manual of golems", "manual of quickness of action", "mirror of life trapping",
    "nine lives stealer", "oathbow", "armor +2", "spellguard shield", "tome of clear thought",
    "tome of leadership and influence", "tome of understanding", "last stand armor", "living armor",
    "arcane grimoire +3", "crystalline chronicle", "dispelling stone", "arcane cannon",
    "rhythm-maker's drum +3", "amulet of the devout +3", "absorbing tattoo of resistance", "barrier tattoo (heavy)",
    "ghost step tattoo", "lifewell tattoo", "arcane cannon", "moon sickle +3", "all-purpose tool +3",
    "bloodwell vial +3", "cauldron of rebirth", "orb of the veil", "amethyst lodestone",
    "dragonhide belt +3", 'sapphire buckler', "voodoo doll", "staff of dunamancy", "abracadabrus",
    "bobbing lily pad", "duskcrusher", "Dyrrn's tentacle whip", "hunter's coat", "Kyrzin's ooze",
    "ornithopter of flying", "armor of safeguarding", "lucent destroyer", "mistral mantle", "nimbus coronet",
    "carnelian triceratops figurine of wondrous power", "ring of amity", "sanctum amulet", "thunderbuss",
    "wyrmreaver gauntlets", "bloodshed blade"
];
let epicMinorItems = [
    "potion of supreme healing", "potion of invisibility", "potion of speed", "spell scroll 6",
    "spell scroll 7", (roll(2, 'd10')) + " x ammunition +3", "oil of sharpness", "potion of flying", "potion of cloud giant strength",
    "potion of longevity", "potion of vitality", "spell scroll 8", "reincarnation dust", "potion of possibility",
    (roll(1, 'd4') + 4) + " x sling bullets of Althemone", "<color> chromatic rose"
];
let legendaryMajorItems = [
    "defender", "hammer of thunderbolts", "luck blade", "sword of answering", "holy avenger", "ring of djinni summoning",
    "ring of invisibility", "ring of spell turning", "rod of lordly might", "staff of the magi", "vorpal sword",
    "belt of cloud giant strength", "armor +2", "armor +3", "armor +3", "cloak of invisibility", 
    "crystal ball of telepathy", "crystal ball of truesight", "crystal ball of mind reading",
    "armor +3", "robe of archmagi", "rod of resurrection", "scarab of protection", "armor +2", "armor +2", "well of many worlds",
    "armor +3", "apparatus of Kwalish", "armor of invulnerability", "belt of storm giant strength", "cubic gate",
    "deck of many things", "efreeti chain", "armor of resistance", "iron horn of valhalla", "Ollamh harp",
    "ioun stone of greater absorption", "ioun stone of mastery", "ioun stone of regeneration", "armor of etherealness",
    "armor of resistance", "ring of air elemental command", "ring of water elemental command", "ring of earth elemental command", 
    "ring of fire elemental command", "ring of three wishes", "sphere of annihilation", "talisman of pure good",
    "talisman of the sphere", "talisman of ultimate evil", "tome of the stilled tongue", "Belashyrra's beholder crown",
    "iron flask", "gith silver sword", "moonblade", "ring of spell turning", "blood fury tattoo", "dragonlance",
    "flail of Tiamat", "gold canary figurine of wondrous power", "nightfall pearl", "obsidian flint dragon plate",
    "platinum scarf", "pyxis of pandemonium", "ruby weave gem", "spell bottle", "topaz annihilator", "harp of gilded plenty",
    "longbow of the healing hearth", "orb of Skoraeus", "jasper tyrannosaurus rex figurine of wondrous power", 
    "shield of the blazing dreadnought", "stonebreaker's breastplate", "reaper's scream",
];
let legendaryMinorItems = [
    "spell scroll 8", "potion of storm giant strength", "potion of supreme healing", "spell scroll 9",
    "universal solvent", (roll(1, 'd4') + 1) + " x ammunition of slaying", "sovereign glue", "potion of dragon's majesty",
    "potion of giant size"
];

//-------------PROPERTIES

let ammunition = [
    "arrows", "arrows", "arrows", "arrows", "arrows", "crossbow bolts",
    "crossbow bolts", "crossbow bolts", "crossbow bolts",
    "sling bullets", "blowgun needles", "darts"
];

let armor = [
    "padded armor", "leather armor", "studded leather armor", "hide armor", "chain shirt", "scale mail",
    "breastplate", "half plate armor", "ring mail", "chain mail", "splint armor", "plate armor"
];

let metalArmor = [
    "chain shirt", "scale mail", "breastplate", "half plate armor",
    "ring mail", "chain mail", "splint armor", "plate armor"
];

let highArmors = [
    "studded leather armor", "half plate armor", "plate armor"
]

let weapons = [
    "club", "dagger", "greatclub", "handaxe", "javelin", "light hammer", "mace",
    "quarterstaff", "sickle", "spear", "light crossbow", "shortbow", "sling",
    "battleaxe", "flail", "glaive", "greataxe", "greatsword", "halberd", "lance",
    "longsword", "maul", "morningstar", "pike", "rapier", "scimitar", "shortsword",
    "trident", "war pick", "warhammer", "whip", "blowgun", "hand crossbow",
    "heavy crossbow", "longbow"
];

let resistances = [
    "acid", "cold", "fire", "force", "lightning", "necrotic", "poison", "psychic",
    "radiant", "thunder"
];

let slaying = [
    "dragon", "dragon", "dragon", "giant", "giant", "aberration", "elemental", "fey", "fiend",
    "beast", "construct", "undead"
];

let chromaticColors = [
    "black", "blue", "green", "red", "white"
]

//-------------SPELLS

let cantrips = [
    "acid splash", "blade ward", "chill touch", "dancing lights", "druidcraft",
    "eldritch blast", "fire bolt", "guidance", "light", "mage hand", "mending",
    "message", "minor illusion", "poison spray", "prestidigitation", "ray of frost",
    "resistance", "sacred flame", "shillelagh", "shocking grasp", "spare the dying",
    "thaumaturgy", "true strike", "vicious mockery", "booming blade", "control flames",
    "create bonfire", "friends", "frostbite", "gust", "infestation", "lightning lure",
    "magic stone", "mold earth", "primal savagery", "produce flame", "sword burst",
    "thorn whip", "thunderclap", "toll the dead", "word of radiance"
];

let spells1st = [
    "absorb elements", "alarm", "animal friendship", "armor of Agathys", "arms of Hadar",
    "bane", "beast bond", "bless", "burning hands", "catapult", "cause fear", "ceremony",
    "chaos bolt", "charm person", "chromatic orb", "color spray", "command", "compelled duel",
    "comprehend languages", "create or destroy water", "cure wounds", "detect evil and good",
    "detect magic", "detect poison and disease", "disguise self", "dissonant whispers", "divine favor",
    "earth tremor", "ensnaring strike", "entangle", "expeditious retreat", "faerie fire", "false life",
    "feather fall", "find familiar", "fog cloud", "goodberry", "grease", "guiding bolt", "hail of thorns",
    "healing word", "hellish rebuke", "heroism", "hex", "hunter's mark", "ice knife", "identify",
    "illusory script", "inflict wounds", "jump", "longstrider", "mage armor", "magic missile",
    "protection from evil and good", "purify food and drink", "ray of sickness", "sanctuary", "shield",
    "searing smite", "shield of faith", "silent image", "sleep", "snare", "speak with animals",
    "Tasha's hideous laughter", "Tenser's floating disc", "thunderous smite", "thunderwave",
    "unseen servant", "witch bolt", "wrathful smite", "zephyr strike", "gift of alacrity", "magnify gravity",
    "Tasha's caustic brew",
];
let spells2nd = [
    "Aganazzar's scorcher", "aid", "alter self", "animal messenger", "arcane lock", "augury", "barkskin",
    "beast sense", "blindness/deafness", "blur", "branding smite", "calm emotions", "cloud of daggers",
    "continual flame", "cordon of arrows", "crown of madness", "darkness", "darkvision", "detect thoughts",
    "dragon's breath", "dust devil", "earthbind", "bear's endurance", "bull's strength", "cat's grace",
    "eagle's splendor", "fox's cunning", "owl's wisdom", "enlarge/reduce", "enthrall", "find steed",
    "find traps", "flame blade", "flaming sphere", "gentle repose", "gust of wind", "healing spirit",
    "heat metal", "hold person", "invisibility", "knock", "lesser restoration", "levitate", "locate animals or plants",
    "locate object", "magic mouth", "magic weapon", "Maximillan's earthen grasp", "Melf's acid arrow",
    "mind spike", "mirror image", "misty step", "moonbeam", "Nystul's magic aura", "pass without trace",
    "phantasmal force", "prayer of healing", "protection from poison", "pyrotechnics", "ray of enfeeblement",
    "rope trick", "scorching ray", "see invisibility", "shadow blade", "shatter", "silence", "skywrite",
    "Snilloc's snowball swarm", "spider climb", "spike growth", "spiritual weapon", "suggestion", "warding bond",
    "warding wind", "web", "zone of truth", "fortune's favor", "immovable object", "wristpocket", "summon beast",
    "Tasha's mind whip"
];
let spells3rd = [
    "animate dead", "aura of vitality", "beacon of hope", "bestow curse", "blinding smite", "blink",
    "call lightning", "catnap", "clairvoyance", "conjure animals", "conjure barrage", "counterspell",
    "create food and water", "crusader's mantle", "daylight", "dispel magic", "elemental weapon",
    "enemies abound", "erupting earth", "fear", "feign death", "fireball", "flame arrows", "fly",
    "gaseous form", "glyph of warding", "haste", "hunger of Hadar", "hypnotic pattern", "Leomund's tiny hut",
    "life transference", "lightning arrow", "lightning bolt", "magic circle", "major image", "mass healing word",
    "meld into stone", "Melf's minute meteors", "nondetection", "phantom steed", "plant growth", "protection from energy",
    "remove curse", "revivify", "sending", "sleet storm", "slow", "speak with dead", "speak with plants",
    "spirit guardians", "stinking cloud", "summon lesser demons", "thunder step", "tidal wave", "tiny servant",
    "tongues", "vampiric touch", "wall of sand", "wall of water", "water breathing", "water walk", "wind wall",
    "pulse wave", "intellect fortress", "spirit shroud", "summon fey", "summon shadowspawn", "summon undead"
];
let spells4th = [
    "arcane eye", "aura of life", "aura of purity", "banishment", "blight", "charm monster", "compulsion",
    "confusion", "conjure minor elementals", "conjure woodland beings", "control water", "death ward",
    "dimension door", "divination", "dominate beast", "elemental bane", "Evard's black tentacles", "fabricate",
    "find greater steed", "fire shield", "freedom of movement", "giant insect", "grasping vine", "greater invisibility",
    "guardian of faith", "guardian of nature", "hallucinatory terrain", "ice storm", "Leomund's secret chest",
    "locate creature", "Mordenkainen's faithful hound", "Mordenkainen's private sanctum", "Otiluke's resilient sphere",
    "phantasmal killer", "polymorph", "shadow of Moil", "sickening radiance", "staggering smite", "stone shape",
    "stoneskin", "storm sphere", "summon greater demon", "vitriolic sphere", "wall of fire", "watery sphere",
    "gravity sinkhole", "summon aberration", "summon construct", "summon elemental"
];
let spells5th = [
    "animate objects", "antilife shell", "awaken", "banishing smite", "Bigby's hand", "circle of power", "cloudkill",
    "commune", "commune with nature", "cone of cold", "conjure elemental", "conjure volley", "contact other plane",
    "contagion", "control winds", "creation", "danse macabre", "dawn", "destructive wave", "dispel evil and good",
    "dominate person", "dream", "enervation", "far step", "flame strike", "geas", "greater restoration",
    "hallow", "hold monster", "holy weapon", "immolation", "infernal calling", "insect plague", "legend lore",
    "maelstrom", "mass cure wounds", "mislead", "modify memory", "negative energy flood", "passwall",
    "planar binding", "raise dead", "rary's telepathic bond", "reincarnate", "scrying", "seeming", "skill empowerment",
    "steel wind strike", "swift quiver", "synaptic static", "telekinesis", "teleportation circle",
    "transmute rock", "tree stride", "wall of force", "wall of light", "wall of stone", "wrath of nature",
    "temporal shunt", "summon celestial"
];
let spells6th = [
    "arcane gate", "blade barrier", "bones of the earth", "chain lightning", "circle of death", "conjure fey",
    "contingency", "create homunculus", "create undead", "disintegrate", "Drawmij's instant summons", "druid grove",
    "eyebite", "find the path", "flesh to stone", "forbiddance", "globe of invulnerability", "guards and wards",
    "harm", "heal", "heroes' feast", "investiture of flame", "investiture of ice", "investiture of stone",
    "investiture of wind", "magic jar", "mass suggestion", "mental prison", "move earth", "Otiluke's freezing sphere",
    "Otto's irresistable dance", "planar ally", "primordial ward", "programmed illusion", "scatter", "soul cage",
    "sunbeam", "Tenser's transformation", "transport via plants", "true seeing", "wall of ice", "wall of thorns",
    "wind walk", "word of recall", "gravity fissure", "summon fiend", "Tasha's otherworldly guise"
];
let spells7th = [
    "conjure celestial", "crown of stars", "delayed blast fireball", "divine word", "etherealness", "finger of death",
    "fire storm", "forcecage", "mirage arcane", "Mordenkainen's magnificent mansion", "Mordenkainen's sword", "plane shift",
    "power word pain", "prismatic spray", "project image", "regenerate", "resurrection", "reverse gravity",
    "sequester", "simulacrum", "symbol", "teleport", "temple of the gods", "whirlwind", "tether essence",
    "dream of the blue veil"
];
let spells8th = [
    "Abi-Dalzim's horrid wilting", "animal shapes", "antimagic field", "antipathy/sympathy", "clone", "control weather",
    "demiplane", "dominate monster", "earthquake", "feeblemind", "glibness", "holy aura", "illusory dragon",
    "incendiary cloud", "maddening darkness", "maze", "mighty fortress", "mind blank", "power word stun",
    "sunburst", "telepathy", "tsunami", "dark star", "reality break"
];
let spells9th = [
    "astral projection", "foresight", "gate", "imprisonment", "invulnerability", "mass heal", "mass polymorph",
    "meteor swarm", "power word heal", "power word kill", "prismatic wall", "psychic scream", "shapechange",
    "storm of vengeance", "time stop", "true polymorph", "true resurrection", "weird", "wish", "ravenous void",
    "time ravage", "blade of disaster"
];