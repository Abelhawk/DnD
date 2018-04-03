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
    "thick", "thin", "tower", "wax", "quill", "young"
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
    "barren", "web", "rot", "vice", "cower"
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
    "deep", "sunder", "foe", "ill"
];

let peace = [
    "white", "glimmer", "sparkle", "shimmer", "bright",
    "pearl", "heart", "angel", "grace", "fair", "sapphire",
    "diamond", "fairy", "silver", "golden", "sunny", "mirror",
    "cheer", "light", "cloud", "luck", "warm", "rose",
    "bread", "peace", "noble", "crown", "ever", "dawn", "star",
    "haven", "hearth", "honor", "hope", "still", "jewel",
    "temple", "life", "crystal", "day", "home", "calm", "glad",
    "quiet", "merry", "sweet"
];

let natural = [
    "gnarl", "bramble", "boulder", "vine", "bracken", "moss",
    "thorn", "stone", "briar", "fern", "rock", "grass",
    "hedge", "leaf", "water", "green", "cavern", "quarry",
    "feather", "ancient", "high", "hills", "jade", "emerald",
    "long", "low", "lush", "moon", "sun",
    "rain", "snow", "raven", "lion", "stag", "blue",
    "salt", "sky", "splinter", "silt", "mire", "dust", "thistle", "timber",
    "thunder", "meadow", "antler", "horn", "frost", "earth",
    "wet"
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
    "song"
];

let hills = [
    "ravine", "burrow", "cave", "den", "mountain", "hills",
    "ridge", "camp", "pass", "gulch", "post", "crag", "cliff",
    "scrub", "brush", "peak", "wind", "rock", "stone", "tooth",
    "vein", "mine", "keep", "shadow", "edge", "gate", "fall",
    "spear", "shield", "dale", "cleft", "notch", "forge",
    "tower", "guard", "garde", "burg", "grad", "sbrad", "ville",
    "sborough", "warren"
];


let coastal = [
    "break", "wave", "wash", "shore", "sand", "shell", "breeze",
    "wind", "brine", "salt", "bank", "tide", "beach", "strand",
    "cove", "holme", "sedge", "combe", "fin", "pool", "reef",
    "pebble", "front", "side", "line", "sea", "coast", "drink",
    "sink", "flow"
];

let forest = [
    "tree", "wood", "wood", "wood", "wood", "grove", "trunk", "leaf",
    "thicket", "timber", "copse", "weald", "wald", "bush", "vale",
    "brush", "briar", "thorn", "pine", "oak", "aspen", "green",
    "cone", "jade", "moss", "web", "meadow", "bark", "branch",
    "wind", "hill", "stump", "wild", "stump", "root"
];

let swamp = [
    "mud", "wallow", "slime", "bog", "mire", "moor", "marsh",
    "quag", "holme", "flood", "water", "dark", "shade", "swarm",
    "wood", "vine", "moss", "sink", "drown", "stench", "hive",
    "murk", "fog", "churn", "burble"
];

let arctic = [
    "snow", "ice", "winter", "freeze", "wind", "chill", "crystal",
    "whisper", "frost", "waste", "shatter", "howl", "melt"
];

let desert = [
    "sand", "crag", "wind", "dust", "whisper", "scorch", "blaze",
    "waste", "thirst", "parch", "mirror", "choke", "dry", "barren",
    "dune", "flat", "swelter"
];

let urban = [
    "hammer", "anvil", "quarter", "district", "slum", "corner",
    "plaza", "quill", "tower", "keep", "town"
];

//-------------------------------------------------------------------------------------------------

let compound = [
    "hold", "gulch", "hills", "reach", "fort", "forest", "grove",
    "village", "camp", "barrow", "vale", "isle", "grounds", "fen",
    "marsh", "bay", "mine", "lake", "cave", "ridge", "mountain",
    "canyon", "falls", "river", "mill", "thicket", "point", "pass",
    "quarry", "heights", "crossing", "landing", "pinnacle", "peak",
    "strand", "coast", "hill", "keep", "fields", "grotto", "cove",
    "glades", "springs", "hollow", "fort", "acres", "den", "woods",
    "wilds", "wilderness", "swamp", "wastes", "depths", "tower",
    "reef", "alley"
];