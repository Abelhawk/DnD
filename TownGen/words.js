let defaults = [
    "bold", "blue", "red", "yellow", "brown", "wake",
    "dry", "might", "long", "short", "great", "small",
    "tall", "stout", "straight", "narrow", "cool", "warm",
    "crooked", "rare", "broad", "shallow", "dull", "free",
    "hard", "mild", "hinder", "humble", "wise", "east",
    "west", "north", "south", "winter", "spring", "autumn",
    "fall", "little", "edge", "corner", "loud", "silent",
    "candle", "coin", "far", "near", "new", "old", "odd",
    "open", "over", "plenty", "sober", "sour", "tame",
    "thick", "thin", "tower", "wax", "quill", "young",
    "barrow", "stale", "flash", "scale", "bronze", "brass",
    "hammer", "anvil", "lime", "spur", "tea", "nether",
    "strong", "bridge", "flag", "copper", "cross", "whistle"
];

let scary = [
    "dusk", "shadow", "night", "gloom", "murk", "black",
    "mist", "somber", "misty", "brack", "ink", "shriek",
    "choke", "shade", "moon", "umbra", "ebon", "soot",
    "smoke", "crypt", "bleak", "mourn", "vile", "ghoul",
    "ghost", "rot", "grim", "hush", "silent", "whisper",
    "chill", "dead", "death", "grave", "gray", "sorrow",
    "under", "hollow", "husk", "cold", "ice", "plague",
    "pale", "terror", "curse", "lone", "night", "wither",
    "barren", "web", "rot", "vice", "cower", "frigid",
    "strangle", "cowl", "cloak", "hood", "grease", "spider",
    "shroud"
];

let danger = [
    "hate", "dagger", "pike", "blood", "saw", "blade",
    "knife", "spike", "jagged", "broken", "rough", "harsh",
    "bitter", "clash", "rust", "hard", "bent", "razor",
    "blast", "sharp", "red", "fire", "scorch", "dire",
    "rash", "ruin", "bane", "cruel", "wild", "rage",
    "pain", "devil", "storm", "gore", "bone", "dry", "fester",
    "parch", "ember", "dread", "fang", "rune",
    "scourge", "shatter", "skull", "spear", "steel", "iron",
    "scar", "fury", "chain", "tusk", "talon", "broken",
    "flame", "dragon", "ash", "cinder", "war", "slaughter",
    "deep", "sunder", "foe", "ill", "fire", "danger", "claw",
    "molten", "starve", "polar", "lash"
];

let peace = [
    "white", "glimmer", "sparkle", "shimmer", "bright",
    "pearl", "heart", "angel", "grace", "fair", "sapphire",
    "diamond", "fairy", "silver", "golden", "sunny", "mirror",
    "cheer", "light", "cloud", "luck", "warm", "rose",
    "bread", "peace", "noble", "crown", "ever", "dawn", "star",
    "haven", "hearth", "honor", "hope", "still", "jewel",
    "temple", "life", "crystal", "day", "home", "calm", "glad",
    "quiet", "merry", "sweet", "dream", "dew", "honey", "butter",
    "glint", "water", "star", "swan"
];

let natural = [
    "gnarl", "bramble", "boulder", "vine", "bracken", "moss",
    "thorn", "stone", "briar", "fern", "rock", "grass",
    "hedge", "leaf", "water", "green", "cavern", "quarry",
    "feather", "ancient", "high", "hills", "jade", "emerald",
    "long", "low", "lush", "moon", "sun", "fossil", "star",
    "rain", "snow", "raven", "lion", "stag", "blue",
    "salt", "sky", "splinter", "silt", "mire", "dust", "thistle", "timber",
    "thunder", "meadow", "antler", "horn", "frost", "earth",
    "wet", "falcon", "lion", "tangle", "dank", "wild", "brush",
    "flower", "puddle", "ram", "mist", "heath", "heather", "rowen",
    "elder", "oaken", "maple", "berry", "wolf", "chalk", "bark"
];

//-----------------------------------------------------------------------------------------------

let grassland = [
    "bloom", "blossom", "meadow", "brook", "river",
    "shire", "grass", "plain", "weed", "graze", "park",
    "pasture", "shrub", "bush", "land", "camp", "stead",
    "post", "roads", "mill", "garden", "lodge", "field",
    "grounds", "watch", "march", "lake", "water", "wind",
    "spring", "bridge", "crest", "song", "feather", "heart",
    "valley", "glen", "well", "wing", "dale", "light",
    "song", "smar", "haven", "set", "wall", "ton", "brink",
    "bird", "rill", "caster", "staff", "flower", "swan", "bow",
    "cross", "berry", "scarf"
];

let hills = [
    "burrow", "cave", "den", "mountain", "hills", "foot", "hill",
    "ridge", "camp", "pass", "gulch", "post", "crag", "cliff",
    "scrub", "brush", "peak", "wind", "rock", "stone", "tooth",
    "vein", "mine", "keep", "shadow", "edge", "gate", "fall",
    "spear", "shield", "dale", "cleft", "notch", "forge",
    "tower", "guard", "garde", "burg", "grad", "sbrad", "ville",
    "sborough", "warren", "canyon", "summit", "smar", "shire", "set",
    "wall", "ton", "bluff", "horn", "rill", "creek", "caster",
    "ditch", "lichen", "valley", "ram", "banner", "bow", "hold",
    "cross", "mount", "scalp"
];


let coastal = [
    "break", "wave", "wash", "shore", "sand", "shell", "breeze",
    "wind", "brine", "salt", "bank", "tide", "beach", "strand",
    "cove", "holme", "sedge", "combe", "fin", "pool", "reef",
    "pebble", "front", "side", "line", "sea", "coast", "drink",
    "sink", "flow", "smar", "wake", "rift", "whale", "gulf",
    "anchor", "breach", "fog", "mist", "scalp"
];

let forest = [
    "tree", "wood", "wood", "wood", "wood", "grove", "trunk", "leaf",
    "thicket", "timber", "copse", "weald", "wald", "bush", "vale",
    "brush", "briar", "thorn", "pine", "oak", "aspen", "green",
    "cone", "jade", "moss", "web", "meadow", "bark", "branch",
    "wind", "hill", "stump", "wild", "stump", "root", "haven",
    "wall", "ton", "willow", "brink", "taiga", "nettle", "frond",
    "creeper", "log", "bow", "mantle"
];

let swamp = [
    "mud", "wallow", "slime", "bog", "mire", "moor", "marsh",
    "quag", "holme", "flood", "water", "dark", "shade", "swarm",
    "wood", "vine", "moss", "sink", "drown", "stench", "hive",
    "murk", "fog", "churn", "burble", "damp", "shadow", "moss",
    "ooze", "creek", "sludge", "muck", "pond", "slough", "sweat",
    "crane", "log", "snake", "puddle", "seep", "sump", "sluice",
    "pore", "lake", "pit"
];

let arctic = [
    "snow", "ice", "winter", "freeze", "wind", "chill", "crystal",
    "whisper", "frost", "waste", "shatter", "howl", "melt", "spike",
    "glacier", "sleet", "snap", "cut", "shiver", "thaw", "flake",
    "tundra", "grasp", "glass", "cap", "bear", "cold", "frore",
    "hoof", "way", "drift", "bone", "shroud", "mist", "fathom",
    "fork", "rime"
];

let desert = [
    "sand", "crag", "wind", "dust", "whisper", "scorch", "blaze",
    "waste", "thirst", "parch", "mirror", "choke", "dry", "barren",
    "dune", "flat", "swelter", "glass", "blister", "fire", "flame",
    "burn", "grit", "chalk", "salt", "cavern", "quartz", "gravel",
    "powder", "ditch", "rock", "wither", "cactus", "melt", "claw",
    "drought", "spit", "sweat", "burn", "lurch", "locust", "fossil",
    "cloud", "swarm", "lichen", "lizard"
];

//-------------------------------------------------------------------------------------------------

let compound = [
    "hold", "reach", "fort", "shelf",
    "village", "camp", "barrow", "grounds",
    "marsh", "mine", "cave", "ridge", "channel",
    "river", "mill", "thicket", "point", "pass",
    "quarry", "crossing", "landing",
    "hill", "keep", "fields", "grotto", "cove",
    "hollow", "fort", "acres", "den", "woods",
    "wastes", "depths", "tower", "tunnels",
    "alley", "bog", "crossroads", "pits", "arch",
    "estate", "dam", "canal", "crater", "steppes",
    "road", "warren", "tillage"
];

let landmarks = [
    "hills", "gulch", "forest", "grove", "woods", "vale",
    "fen", "valley", "dale", "ridge", "lake", "mountain", "peak",
    "pinnacle", "canyon", "falls", "highlands", "lowlands", "hill",
    "wood", "glades", "springs", "acres", "farmstead", "wilderness",
    "wilds", "glen", "summit", "pond", "slopes", "spire", "fields",
    "jungle", "prairie", "caldera", "hinterlands", "plains", "vineyards",
    "basin", "plateau", "gully", "gorge", "bluff", "ravine", "knoll",
    "trench", "geyser", "foothills", "creek"
];

let coastalMarks = [
    "island", "shore", "beach", "strand", "bay", "lagoon", "coast",
    "reef", "docks", "port", "cay", "cliffs", "front", "bank",
    "archipelago", "peninsula", "sandbar", "cove", "gulf", "isle",
    "isthmus", "shoal", "strait", "cape"
];

let swampMarks = [
    "bog", "marsh", "swamp", "fen", "pools", "bayou", "wetlands",
    "morass", "mire", "lowlands", "moors", "glade", "swale",
    "river", "mangrove", "causeway", "muskeg", "jungle", "sinks"
];

let desertMarks = [
    "wastes", "dunes", "mesa", "ridge", "oasis", "flats", "wasteland",
    "badlands", "barrens", "sands", "butte", "dike", "wilds", "savannah",
    "buttes"
];

let arcticMarks = [
    "wastes", "mountains", "peak", "summit", "canyon", "ridge", "crag",
    "cliffs", "forest", "glacier", "fjord", "shores", "summit", "gulf",

];

let townMarks = [
    "district", "square", "crossroads", "courtyard", "keep", "estate",
    "arena", "docks", "mansion", "manor", "plaza", "ward", "slums",
    "street", "alley", "way", "quarter", "corner", "palace", "market",
    "tower", "gardens", "park", "harbor", "stables", "cemetary",
    "sanctuary", "cathedral", "chapel", "hall", "sanctum", "inn",
    "library", "gates", "bridge", "promenade", "vineyards", "retreat",
    "concourse", "menagerie", "commons", "triangle", "court", "outskirts",
    "overlook", "tavern", "gate", "bank", "guildhall", "road", "shrine",
    "church", "temple", "chapel", "embassy", "sewers", "canal", "tier",
    "exchange", "spire"
];
