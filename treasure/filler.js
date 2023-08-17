// For treasures that have more lore value than actual mechanical benefits
// They may spark adventure hooks

//==============

let magicTableBasedOnLevel = magicTableA;

function generateFiller(lvl) {
  determineMagicItems(lvl);
  let treasure = [];
  for (let i = 0; i < 6; i++) {
    let randomFillerGroup = rando(19);
    // BOOKS AND SCROLLS
    switch (randomFillerGroup) {
      case 0:
      case 1:
      case 2:
        let randomNumber = rando(40) + 1;
        switch (randomNumber) {
          case 1:
            treasure.push('Ledger - ' + `<span class="value">`
                + "A boring book of facts and figures." + `</span>`);
            break;
          case 2:
            treasure.push("Alchemist's notebook - " + `<span class="value">`
                + "A booklet full of sketches of alchemical formulae."
                + `</span>`);
            break;
          case 3:
            treasure.push("Almanac - " + `<span class="value">`
                + "A book recording lunar phases and notable events from a few years ago."
                + `</span>`);
            break;
          case 4:
            treasure.push("Bestiary - " + `<span class="value">`
                + "A book depicting sketches and descriptions of local monsters."
                + `</span>`);
            break;
          case 5:
            treasure.push("Biography - " + `<span class="value">`
                + "A biography of someone named " + randomName() + "."
                + `</span>`);
            break;
          case 6:
            treasure.push("Book of heraldry - " + `<span class="value">`
                + "A book depicting famous family crests and coats-of-arms."
                + `</span>`);
            break;
          case 7:
            treasure.push("Storybook - " + `<span class="value">`
                + "A book of children's cautionary tales." + `</span>`);
            break;
          case 8:
            treasure.push("Book of pressed flowers - " + `<span class="value">`
                + "A booklet with blank pages of pressed flowers." + `</span>`);
            break;
          case 9:
            treasure.push("Calendar - " + `<span class="value">`
                + "A calendar from a few years ago with some dates circled."
                + `</span>`);
            break;
          case 10:
            treasure.push("Catalog - " + `<span class="value">`
                + "A merchant's pamphlet listing available wares for order."
                + `</span>`);
            break;
          case 11:
            let randomContract = rando(3);
            switch (randomContract) {
              case 1:
                treasure.push("Contract - " + `<span class="value">`
                    + "A contract between a merchant and a shopkeeper."
                    + `</span>`);
                break;
              case 2:
                treasure.push("Contract - " + `<span class="value">`
                    + "An employment contract for a city guard." + `</span>`);
                break;
              case 3:
                treasure.push("Contract - " + `<span class="value">`
                    + "A debt contract from a moneylender." + `</span>`);
            }
            break;
          case 12:
            treasure.push("Diary - " + `<span class="value">`
                + "A smudged diary of an unnamed person written in "
                + randomLanguage() + '.' + `</span>`);
            break;
          case 13:
            treasure.push("Dictionary - " + `<span class="value">`
                + "A collection of words translated from common into "
                + randomForeignLanguage() + '.' + `</span>`);
            break;
          case 14:
            let m0 = coinFlip(1, 2);
            let doodleOrSketch;
            (m0 === 1) ? doodleOrSketch = "Sketchbook - "
                    + `<span class="value">`
                    + "A book of decently drawn animals and faces." + `</span>`
                : doodleOrSketch = "Doodles - " + `<span class="value">`
                    + "A parchment covered in doodles of random objects and people."
                    + `</span>`;
            treasure.push(doodleOrSketch);
            break;
          case 15:
            treasure.push("Forged document - " + `<span class="value">`
                + "A crumpled shoddily-forged document." + `</span>`);
            break;
          case 16:
            treasure.push("Grammar workbook - " + `<span class="value">`
                + "A noble's workbook of Common grammar." + `</span>`);
            break;
          case 17:
            treasure.push("Heretical text - " + `<span class="value">`
                + "A partially-burned book with writing against the local religion."
                + `</span>`);
            break;
          case 18:
            treasure.push("Historical text - " + `<span class="value">`
                + "A book detailing the rulership and notable events of the local area."
                + `</span>`);
            break;
          case 19:
            treasure.push("Will - " + `<span class="value">`
                + "The last will and testament of someone named "
                + randomLastName() + `</span>`);
            break;
          case 20:
            treasure.push("Legal code - " + `<span class="value">`
                + "A paper listing crimes and their associated punishments."
                + `</span>`);
            break;
          case 21:
            treasure.push("Letter - " + `<span class="value">`
                + "A letter from someone named " + randomFirstName() + " to a "
                + randomFirstName() + "." + `</span>`);
            break;
          case 22:
            treasure.push("Lunatic's ravings - " + `<span class="value">`
                + "A disturbing collection of nonsensical ravings and drawings."
                + `</span>`);
            break;
          case 23:
            treasure.push("Magic tricks - " + `<span class="value">`
                + "A booklet of so-called 'magic tricks' that use no actual magic."
                + `</span>`);
            break;
          case 24:
            treasure.push("Magic scroll - " + `<span class="value">`
                + "A used spell scroll with no more power." + `</span>`);
            break;
          case 25:
            let m = coinFlip(1, 2);
            let map;
            (m === 1) ? map = "Map - " + `<span class="value">`
                    + "A hand-drawn map of the surrounding area." + `</span>`
                : map = "Treasure Map - " + `<span class="value">`
                    + "A hand-drawn treasure map." + `</span>`;
            treasure.push(map);
            break;
          case 26:
            let m2 = coinFlip(1, 2);
            let atlas;
            (m2 === 1) ? atlas = "Atlas - " + `<span class="value">`
                    + "A hand-drawn map of the world." + `</span>`
                : atlas = "Dungeon Map - " + `<span class="value">`
                    + "A hand-drawn depiction of the inside of a dungeon of some sort."
                    + `</span>`;
            treasure.push(atlas);
            break;
          case 27:
            let m3 = coinFlip(1, 2);
            let chart;
            (m3 === 1) ? chart = "Navigational chart - "
                    + `<span class="value">`
                    + "A chart showing the navigation route by sea to a distant island."
                    + `</span>`
                : chart = "Star chart - " + `<span class="value">`
                    + "A painstakingly hand-drawn start chart." + `</span>`;
            treasure.push(chart);
            break;
          case 28:
            treasure.push(
                "Novel - " + `<span class="value">` + "An old book called "
                + `<span class="italic">` + randomBookTitle() + "."
                + `</span></span>`);
            break;
          case 29:
            treasure.push("Painting - " + `<span class="value">`
                + "A small painting of a " + randomPainting() + "."
                + `</span>`);
            break;
          case 30:
            treasure.push("Poetry - " + `<span class="value">`
                + "A page of handwritten poetry." + `</span>`);
            break;
          case 31:
            treasure.push("Prayer book - " + `<span class="value">`
                + "A booklet of prayers to " + randomGod() + "." + `</span>`);
            break;
          case 32:
            treasure.push("Property deed - " + `<span class="value">`
                + 'A property deed to a place called "' + capitalize(
                    randoArray(natural) + randoArray(grassland)) + ' Estate."'
                + `</span>`);
            break;
          case 33:
            treasure.push("Recipe book - " + `<span class="value">`
                + "A handwritten book of " + randomCulture() + " recipes."
                + `</span>`);
            break;
          case 34:
            treasure.push("Criminal trial record - " + `<span class="value">`
                + "A record of the proceedings of a criminal named "
                + randomName() + "." + `</span>`);
            break;
          case 35:
            treasure.push("Royal proclamation - " + `<span class="value">`
                + "An old royal proclamation paper." + `</span>`);
            break;
          case 36:
            treasure.push("Wanted poster - " + `<span class="value">`
                + "A wanted poster of someone named " + randomName()
                + " and a reward of 20 gp for capture." + `</span>`);
            break;
          case 37:
            treasure.push("Sheet music - " + `<span class="value">`
                + "An untitled sheet of music notation." + `</span>`);
            break;
          case 38:
            treasure.push("Spellbook - " + `<span class="value">`
                + "A tattered spellbook containing these spells: " + `</span>`
                + `<span class='italic'> ${getRandomSpell(
                    '1')}, ${getRandomSpell('1')}, ${getRandomSpell(
                    '2')} </span>`);
            break;
          case 39:
            treasure.push("Artisan's text - " + `<span class="value">`
                + "An artisan's treatise on " + randomTrade() + "."
                + `</span>`);
            break;
          case 40:
            treasure.push("Travelogue - " + `<span class="value">`
                + "A wizard's travelogue of the planes." + `</span>`);
        }
        break;
      case 3:
      case 4:
      case 5:
        treasure.push(randoArray(junk));
        break;
      case 6:
      case 7:
        treasure.push(randoArray(tools));
        break;
      case 8:
      case 9:
        treasure.push(randoArray(supplies));
        break;
      case 10:
      case 11:
        treasure.push(randoArray(mundaneGear));
        break;
      case 12:
        treasure.push(randoArray(goods));
        break;
      case 13:
      case 14:
        treasure.push(randoArray(trinkets));
        break;
      case 15:
        let modNum = rando(modifiers.length);
        let mod = modifiers[modNum];
        let gear = randoArray(mundaneGear);
        let desc = modifierDescriptions[modNum];
        treasure.push(mod + " " + gear + " - " + `<span class="value">` + desc
            + `</span>`);
        break;
      case 16:
        let modNum1 = rando(magicalModifiers.length);
        let mod1 = magicalModifiers[modNum1];
        let gear1 = randoArray(mundaneGear);
        let desc1 = magicalModifierDescriptions[modNum1];
        treasure.push(
            mod1 + " " + gear1 + " - " + `<span class="value">` + desc1
            + `</span>`);
        break;
      case 17:
        let coinflipped;
        let what = coinFlip(1, 2);
        if (what === 1) {
          coinflipped = modifiers;
        } else {
          coinflipped = magicalModifiers;
        }
        let randNumb = rando(coinflipped.length);
        let desc2 = coinflipped === modifiers ? modifierDescriptions[randNumb]
            : magicalModifierDescriptions[randNumb];
        let item = 'potion';
        while (isConsumable(item)) {
          item = processMagicItem(magicTableBasedOnLevel,
              randoArray(magicTableBasedOnLevel));
        }
        treasure.push(
            coinflipped[randNumb] + ' ' + `<span class="italic">` + item
            + `</span>` + " - " + `<span class="value">` + desc2 + `</span>`);
        break;
      case 18:
        let ranDub = rando(components.length);
        treasure.push(components[ranDub] + ' - ' + `<span class="value">`
            + componentDescriptions[ranDub] + `</span>`);
        break;
    }
  }
  if (treasure.includes('undefined')) {
    alert('Something went undefined');
  }
  return treasure;
}

function generateUnique(level) {
  determineMagicItems(level);
  let treasure = [];
  let coinflipped;
  let what = coinFlip(1, 2);
  if (what === 1) {
    coinflipped = modifiers;
  } else {
    coinflipped = magicalModifiers;
  }
  let randNumb = rando(coinflipped.length);
  let desc2 = coinflipped === modifiers ? modifierDescriptions[randNumb]
      : magicalModifierDescriptions[randNumb];
  let item = 'potion';
  while (isConsumable(item)) {
    item = processMagicItem(magicTableBasedOnLevel,
        randoArray(magicTableBasedOnLevel));
  }
  treasure.push(
      coinflipped[randNumb] + ' ' + `<span class="italic">` + item + `</span>`
      + " - " + `<span class="value">` + desc2 + `</span>`);
  return treasure;
}

function coinFlip(heads, tails) {
  // Piece of garbage stupid rickemgfrickaasdfa.kjhaweljh
  let headsOrTails = rando(2);
  if (headsOrTails === 1) {
    return heads;
  }
  if (headsOrTails === 2) {
    return tails;
  }
}

function randomName() {
  let n = coinFlip(1, 2);
  let name;
  (n === 1) ? name = capitalize(randoArray(maleHuman)) : name = capitalize(
      randoArray(femaleHuman));
  name += ' ' + capitalize(randoArray(humanSurname));
  return name;
}

function randomFirstName() {
  return coinFlip(capitalize(randoArray(maleHuman)),
      capitalize(randoArray(femaleHuman)));
}

function randomLastName() {
  let name = coinFlip('Sir', 'Madame');
  name += ' ' + capitalize(randoArray(humanSurname));
  return name;
}

function randomLanguage() {
  return randoArray(commonLanguages);
}

function randomForeignLanguage() {
  return randoArray(foreignLanguage);
}

function randomCulture() {
  return randoArray(culture);
}

function randomGod() {
  return randoArray(gods);
}

function randomPainting() {
  let paintings = ['sunset', 'nobleman', 'noblewoman', 'farm field',
    'church building', 'mountain landscape', 'castle', 'ship at sea', 'village',
    'city', 'night sky', 'cat', 'fearsome monster', 'bowl of fruit',
    'lake', 'collage of abstract shapes', 'dog', 'dragon'];
  return randoArray(paintings);
}

function randomBookTitle() {
  let title1 = ['A Day in ', 'The Secrets of ', 'A Week in ', 'The Battle of ',
    'The Journey to '];
  return randoArray(title1) + capitalize(
      randoArray(defaults) + randoArray(hills));
}

function randomTrade() {
  let trades = [
    'armor making', 'astrology', 'exotic flora', 'exotic fauna', 'herbalism',
    'mathematics', 'masonry', 'medicine', 'pottery', 'jewelcrafting',
    'carpentry', 'theology', 'brewing', 'cartography', 'leatherworking',
    'painting', 'blacksmithing', 'weapon repair', 'tailoring', 'thatching',
    'cookery', 'woodcarving', 'dragon chess', 'philosophy', 'farming',
    'shoe-making', 'butchery', 'skinning', 'beekeeping', 'weaving',
    'cookery', 
  ];
  return randoArray(trades);
}

function randomCreatureType() {
  let creatures = ['aberrations', 'beasts', 'celestials', 'constructs',
    'dragons', 'elementals', 'fey', 'fiends', 'giants', 'monstrosities',
    'oozes', 'plants', 'undead',
    'shapeshifters', 'titans', 'demons', 'devils', 'yugoloths', 'hill giants',
    'storm giants', 'cloud giants', 'fire giants', 'stone giants', 'dwarves',
    'aarakocra', 'elves', 'gnolls', 'yuan-ti', 'xvarts', 'kobolds', 'humans',
    'troglodytes', 'tortles', 'thri-kreen', 'drow', 'sahuagins', 'quaggoths',
    'orcs', 'goblins', 'hobgoblins', 'bugbears', 'nagpas', 'merfolk', 'tritons',
    'meazels', 'lizardfolk', 'kuo-toa', 'kenku', 'grung', 'grimlocks', 'gith',
    'firenewts', 'duergar', 'svirfneblin', 'gnomes', 'tieflings', 'aasimar',
    'dragonborn', 'derro', 'bullywugs', 'myconids', 'vampires', 'lycanthropes',
    'merrow'
  ];
  return randoArray(creatures);
}

function randomPlaneOfExistence() {
  let planes = ['the Feywild', 'the Shadowfell', 'the Ethereal Plane',
    'the Astral Plane', 'the Plane of Air', 'the Plane of Earth',
    'the Plane of Fire',
    'the Plane of Water', 'the Seven Heavens of Mount Celestia',
    'the Twin Paradises of Bytopia', 'the Blessed Fields of Elysium',
    'the Wilderness of the Beastlands',
    'the Olympian Glades of Arborea', 'the Heroic Domains of Ysgard',
    'the Ever-Changing Chaos of Limbo', 'the Windswept Depths of Pandemonium',
    'the Infinite Layers of the Abyss', 'the Tarterian Depths of Carceri',
    'the Gray Waste of Hades', 'the Bleak Eternity of Gehenna',
    'the Nine Hells',
    'the Infinite Battlefield of Acheron', 'the Clockwork Nirvana of Mechanus',
    'the Peaceable Kingdoms of Arcadia'
  ];
  return randoArray(planes);
}

let commonLanguages = ['Common', 'Common', 'Common', 'Common', 'Common',
  'Dwarvish', 'Elvish', 'Gnomish', 'Halfling'];

let foreignLanguage = ['Dwarvish', 'Elvish', 'Gnomish', 'Halfling', 'Infernal',
  'Abyssal', 'Aquan', 'Terran', 'Giant', 'Ignan',
  'Draconic', 'Goblin', 'Orc', 'Sylvan', 'Undercommon', 'Celestial'];

let culture = ['Calishite', 'Chondathan', 'Damaran', 'Illuskan', 'Mulan',
  'Rashemi', 'Shou', 'Tethyrian', 'Turami'];

let gods = ['Chauntea, goddess of agriculture', 'Deneir, god of writing',
  'Eldath, goddess of peace', 'Gond, god of craft',
  'Helm, god of protection', 'Ilmater, god of endurance',
  'Kelemvor, god of the dead', 'Lathander, god of birth and renewal',
  'Leira, goddess of illusion', 'Lliira, goddess of joy',
  'Mask, god of thieves', 'Mielikki, goddess of forests',
  'Milil, god of poetry and song',
  'Mystra, goddess of magic', 'Oghma, god of knowledge',
  'Savras, god of divination and fate', 'Selûne, goddess of the moon',
  'Silvanus, god of wild nature', 'Sune, goddess of love and beauty',
  'Tempus, god of war', 'Torm, god of courage', 'Tymora, goddess of luck',
  'Tyr, god of justice', 'Umberlee, goddess of the sea',
  'Waukeen, goddess of trade', 'Hearthmother, goddess of life and nature',
  'Skyfather, god of the firmament', 'Lawbringer, god of order',
  'Moondancer, goddess of secrets', 'Deepwarden, god of the underworld'
];

let junk = ['bandages', 'basket', 'empty wine bottle', 'paintbrush', 'candle',
  'walking cane', 'steel mirror', 'bottle of perfume',
  'wooden cup', 'tankard', 'empty potion vial', 'hourglass', 'small bread loaf',
  'towel', 'ball of string', 'whetstone', 'wig', 'snuffbox', 'blank parchment',
  'smoking pipe', 'quill', 'salve', 'soap', 'bell', 'stuffed animal', 'pillow',
  'lump of cheese', 'horseshoe', 'empty scroll case', 'half-empty ink bottle',
  'sealing wax', 'waterskin', 'bedroll', 'block of incense', 'censer',
  'bag of sand', 'letter opener', "riding crop", "clay jug", "iron pot",
  "abacus", "blanket", "block and tackle", 'bucket', 'chalk', 'mess kit',
  'old robes', 'ceramic idol', 'quilt', 'cushion', 'alembic', 'bellows',
  'old vestments', 'tunic', 'belt', 'boot', 'glove', 'wimple', 'cloth hat',
  'empty sack', "merchant's scale", 'whistle', 'signet ring', 'bit and bridle',
  'bag of horse feed', 'sled', 'holly berries', 'hot pepper',
  'vial of iron filings', 'candle snuffer', 'potted plant',
  "adder's stomach", 'glass rod', 'amber rod', 'crystal rod',
  'square of black silk', 'vial of blood', 'glass eye', 'glowworm', 'sunstone',
  'pouch of sulfur', 'lump of butter', 'caterpillar cocoon',
  'chrysolite powder', 'clay ball', 'clay ziggurat model', 'clay pot of dirt',
  'white strip of cloth', 'kettle',
  'lump of coal', 'pouch of colored sand', 'copper wire', 'cork',
  'pouch of powdered corn', 'dead cricket', 'crystal bead', 'glass cone',
  'scrap of cured leather', 'prism', 'pouch of glass beads',
  'bottle of distilled spirits', 'divining runes', 'pouch of dried carrot',
  'pouch of eggshells', 'eyeball', 'gum arabic', 'tiny fan', 'feather',
  'firefly in a jar', "piece o' fleece", 'forked twig', 'pouch of fur',
  'piece of gauze',
  "vial o' bile", 'golden wire', 'vial of guano', 'flask of unholy water',
  'piece of honeycomb', 'sheet of lead', 'leather loop', 'licorice root',
  'lodestone',
  'petrified eye of newt', 'phosphorescent moss', 'pickled octopus tentacle',
  'mandrake root', 'runed bones', 'vial of mercury', 'miniature clay hand',
  'sprig of mistletoe', 'vial of molasses', 'moonseeds', 'eye ointment',
  'prayer wheel', 'quill', 'vial of sweet oil', 'pouch of talcum',
  'pouch of tallow', 'vial of umber hulk blood', 'burnt twig',
  'wychwood branch', 'yew leaf', 'woad leaf', 'lion pelt', 'yarn ball',
  "red dragon scale", 'pouch of powdered rhubarb leaf', 'pouch of rose petals',
  'pouch of sesame seeds', 'shamrock', 'silver pins', 'silver whistle',
  'pouch of skunk cabbage leaves', 'snake tongue encased in a glass bead',
  'piece of sponge', 'spinning wheel', 'cask of water', 'throw pillows',
  'funerary urn', 'candlestick', 'brazier', 'skull', 'stuffed monstrosity',
  'fake coin', 'sketchbook', 'dice', 'kneeling bench', 'footstool',
    'wind chimes', 'preserved tadpole in a jar', 'gong', 'miniature orrery',
    'silver spoon', 'silver fork', 'carafe', 'clay bowl', 'clay mug', 'shaving-knife',
    "rabbit's ear", "rabbit's foot", 'talisman', 

];

let tools = [
  "alchemist's supplies", "brewer's supplies", "calligrapher's supplies",
  "carpenter's supplies", "cartographer's supplies", "cobbler's tools",
  "cook's utensils", "glassblower's tools", "jeweler's tools",
  "leatherworker's tools", "mason's tools", "painter's supplies",
  "potter's tools",
  "smith's tools", "thieves' tools", "tinker's tools", "weaver's tools",
  "woodcarver's tools", "disguise kit", "herbalism kit", "forgery kit",
  "dice set", "dragonchess set", "playing card set", "Three-Dragon Ante set",
  "set of bagpipes", "drum", "dulcimer", "flute", "lute", "lyre",
  "horn (instrument)", "pan flute", "shawm", "viol", "navigator's tools",
  "poisoner's kit", "climber's kit",
  'glass beaker', "metal alchemist's frame", 'mortar and pestle', 'glass jug',
  'siphon', 'tubing', 'saw', 'hammer', roll(1, 'd6') + 1 + ' nails', 'hatchet',
  "carpenter's square", 'hoe', 'oar',
  'ruler', 'adze', 'plane', 'chisel', "charter's compass", 'calipers', 'awl',
  'cutter', 'thread', 'fork', 'spoon', 'ladle', 'hair dye', 'wig',
  'sealing wax', 'gold leaf', 'blowpipe', 'marver', 'block', 'tweezers',
  'clippers', 'glass jar', 'file', 'pliers', 'small mallet', 'edger',
  'hole punch',
  'trowel', 'brush', 'sextant', 'compass', 'paintbrush', 'easel',
  'charcoal stick', "painter's palette", "potter's ribs", 'scraper', 'tongs',
  'rags', 'whetstone', "smith's hammer", 'lock picks', 'scissors',
  'screwdriver', 'spanner', 'needle', 'pot of glue', 'gouge'
];

let supplies = [
  "vial of acid", "flask of alchemist's fire", "vial of antitoxin", "backpack",
  "bag of 1,000 ball bearings", "bag of 20 caltrops", "crossbow bolt case",
  '10-foot chain', 'costume', 'grappling hook', 'hammer', 'sledgehammer',
  'flask of holy water', 'hunting trap', '10-foot ladder', 'lamp',
  'bullseye lantern',
  'hooded lantern', 'padlock', 'lockbox', 'cracked magnifying glass',
  'set of manacles', 'flask of oil', roll(1, 'd4') + 1 + ' sheets of parchment',
  "miner's pick", 'piton',
  '10-foot pole', 'empty quiver', roll(1, 'd6') + 1 + " days' worth of rations",
  (roll(1, 'd4') + 1) * 10 + ' feet of hempen rope', 'shovel',
  roll(1, 'd8') + 1 + ' iron spikes',
  'cracked spyglass', 'two-person tent', 'tinderbox', 'torch',
  roll(1, "d4") + 1 + ' torches', 'arcane crystal',
  'holy amulet symbol of ' + randomGod(), 'arcane orb',
  'arcane rod', 'wooden staff', 'metal staff', 'wand', 'sprig of mistletoe',
  'totem', 'yew wand', 'holy emblem of ' + randomGod(),
  'reliquary of ' + randomGod(), 'military saddle', 'riding saddle',
  'key', 'pack saddle', 'griffin saddle', 'pegasus saddle', 'dire wolf saddle',
  'gold bar', 'silver bar', 'copper bar', 'saddlebags'
];

let mundaneGear = [
  'padded armor', 'leather armor', 'studded leather armor', 'hide armor',
  'chain shirt', 'scale mail armor', 'breastplate', 'half plate suit of armor',
  'ring mail armor', 'chain mail armor', 'splint armor', 'plate armor',
  'wooden shield', 'metal shield', 'club', 'dagger', 'greatclub', 'handaxe',
  'javelin', 'light hammer', 'mace', 'quarterstaff', 'sickle', 'spear',
  'light crossbow', 'heavy crossbow', 'shortbow', 'sling', 'battleaxe', 'flail',
  'glaive', 'greataxe', 'greatsword', 'halberd', 'lance', 'longsword', 'maul',
  'morningstar', 'pike', 'rapier', 'scimitar', 'shortsword', 'trident',
  'war pick', 'warhammer', 'whip', 'blowgun', 'hand crossbow', 'longbow', 'net',
  roll(1, 'd6') + 1 + ' arrows',
  roll(1, 'd6') + 1 + ' crossbow bolts',
  roll(1, 'd6') + 1 + ' sling bullets',
  roll(1, 'd6') + 1 + ' blowgun needles',
  roll(1, 'd6') + 1 + ' darts',
  'studded leather barding', 'half plate barding', 'ring mail barding',
  'splint barding'
];

let goods = [
  'pound of wheat', 'pound of flour', 'cask of vinegar', 'gold bar',
  'silver bar', 'copper bar', 'gallon of ale', 'bottle of fine wine',
  'bottle of common wine',
  'pound of salt', 'pound of iron', 'bolt of canvas', 'bolt of wool cloth',
  'bolt of cotton cloth', 'pound of ginger', 'pound of cinnamon',
  'pound of pepper',
  'pound of cloves', 'bolt of silk', 'pound of saffron'
];

let modifiers = [
  'dwarf-sized', 'halfling-sized', 'gnome-sized', 'half-orc sized', 'elf-sized',
  'damaged', 'pristine', 'old', 'silvered', 'celestial-craft', 'draconic',
  'drow-crafted', 'dwarf-crafted', 'elemental-air', 'elemental-earth',
  'elemental-fire', 'elemental-water', 'light', 'heavy', 'fey-craft',
  'fiend-crafted',
  'giant-crafted', 'gnome-crafted', 'undead-crafted', 'ornamental', 'cursed'
];

let magicalModifiers = [
  'beacon', 'compass', 'conscientious', 'delver', 'gleaming', 'guardian',
  'harmonious', 'hidden message', 'key', 'language',
  'sentinel', 'song craft', 'temperate', 'unbreakable', 'war leader',
  'waterborne', 'wicked', 'illusion', 'blissful', 'confident', 'covetous',
  'frail', 'hungry', 'loud', 'metamorphic', 'painful', 'possessive',
  'repulsive', 'slothful'
];

let modifierDescriptions = [
  'Only suitable for dwarves to be proficient with.',
  'Only suitable for halflings to be proficient with.',
  'Only suitable for gnomes to be proficient with.',
  'Only suitable for half-orcs to be proficient with.',
  'Only suitable for elves to be proficient with.',
  "This will break on a roll of natural 1 or a critical against it.",
  'In perfect condition and can be sold for its full price.',
  'Functional, but not worth any coin.',
  'Gilded with silver. Worth 100 gp more than usual.',
  'Half the normal weight, inscribed with symbols of good.',
  'Made from scales and talons of a dragon. Grows warm in the presence of dragons.',
  'Half the normal weight, black, spider-themed. Will be ruined if put in direct sunlight.',
  'Durable with engraved runes; likely being sought by a dwarf clan.',
  'Half the normal weight and hollow-feeling.',
  'Crafted with stone and studded with polished rock.',
  'Warm to the touch, black iron with sigils of flames.',
  'Fish scales instead of cloth or leather, worked with seashells and coral.',
  'Half the normal weight.', 'Twice the normal weight.',
  'Exquisitely crafted, glows pale in moonlight.',
  'Black iron or horn, inscribed with runes, and fiend hide. Warm to the touch and scary-looking.',
  'Larger than usual, crafted for giant servants.',
  'Depicted with a gear motif.',
  'Depicted with death imagery and made with bone and parts of corpses; cold to the touch',
  'Worth full price, but very fragile if actually used.',
  'Cursed with some kind of hidden downside.'
];

let magicalModifierDescriptions = [
  'With an action, you can cause it to shed light in a 10-foot radius.',
  'With an action, you can learn which way north is.',
  'Enhances pangs of conscience of wrongdoing.',
  'While underground, you know how deep you are and where the nearest staircase is.',
  'Never gets dirty.', "+2 bonus to initiative if you aren't incapacitated.",
  'Only takes 1 minute to attune to.',
  'A secret message is hidden on the item.',
  'This is used to unlock something somewhere.',
  'You can speak and understand ' + randomForeignLanguage()
  + ' while you hold this.',
  'Glows faintly while in the presence of ' + randomCreatureType() + '.',
  'Plays fragments of a song whenever it strikes or is struck.',
  'You suffer no harm from extreme temperatures.',
  'This cannot be broken except by special means.',
  'With an action, you can magnify your voice.',
  'Floats on water and helps you swim.', 'Urges you to do evil.',
  'Can change color at will.',
  'You feel optimistic while holding it. Butterflies are attracted to it.',
  'You feel self-assured while holding it.',
  'You become obsessed with material wealth.',
  'Looks decrepit and worthless, but works fine.',
  'Only functions if a drop of fresh blood from a humanoid has been applied to it within 24 hours.',
  'Is much louder than usual when used.',
  'Sometimes changes appearance in subtle ways.',
  'Every time you use it, you get a flash of pain.',
  'Demands attunement and discourages attunement to other items.',
  'You feel distaste when in contact with it.',
  'You feel lethargic and have to sleep more while attuned.'
];

function isConsumable(item) {
  if (item.includes('robe of useful items')) {
    return false;
  }
  let consumables = ['potion', 'scroll', 'beans', 'dust', 'philter', 'bead',
    'manual', 'solvent', 'sovereign', 'tome', 'oil', 'elixir', 'arrow', 'bullet'
  ];
  for (let i = 0; i < consumables.length; i++) {
    if (item.includes(consumables[i])) {
      return true
    }
  }
  return false;
}

let components = [
  'pouch of charcoal and incense', 'arcane ink', 'pouch of gold dust',
  'ruby dust', 'jade dust', 'two platinum rings', 'powdered diamond',
  'tiny chest', 'rare incense', 'rare oils and unguents', 'rare chalk',
  'black onyx gem', 'silver rod', 'gem-encrusted bowl', 'expensive ointment',
  'ivory portal', 'silver spoon', 'polished marble', 'miniature sword',
  'forked metal rod', 'replica of a person', 'gem powder', 'vial of gem alloy',
  'reliquary', 'ornate silver bar', 'jade circlet', 'black pearl powder',
  'engraving of a symbol of the Outer Planes', 'crystal scrying ball',
  'silver scrying mirror', 'gilded acorn', 'gilded flower', 'gilded skull',
  'gold-inlaid vial', 'golden reliquary', 'hallowed incense',
  'holy symbol of ' + randomGod(), roll(1, 'd6') + 1 + 'ivory strips',
  'jewel-encrusted dagger', 'jeweled horn',
  'ornate stone and metal lockbox', 'magnifying glass',
  'miniature platinum sword', 'platinum-inlaid vial', 'sunburst pendant',
  'ruby vial', 'gem', 'gem-encased eyeball', 'dragon statuette',
    'platinum-plated dragon scale', 'dragon engraving'
];

let componentDescriptions = [
  'worth 10 gp. Useful for summoning familiars.', '20 gp worth.',
  '25 gp worth.', '50 gp worth.', '10 gp worth.', 'each worth 50 gp.',
  '200 gp worth',
  '(50 gp)', '(1000 gp)', '(1000 gp)', '(50 gp)', '(150 gp)', '(10 gp)',
  'exquisitely crafted—worth 1,000 gp.',
  '(25 gp)', '(5 gp)', '(5 gp)', '(5 gp)',
  'made of platinum, copper, and zinc. Worth 250 gp.',
  'worth 250 gp. Attuned to ' + randomPlaneOfExistence(),
  '(5 gp)',
  'worth 5,000 gp. Composed of powdered diamond, emerald, ruby, and sapphire.',
  'worth 1,000 gp. Composed of mercury, phosphorus, and powdered diamond and opal.',
  '(1,000 gp)', '(100 gp)', '(1,500 gp)', '(500 gp)', '(500 gp)', '(1,000 gp)',
  '(1,000 gp)', '(200 gp)', '(300 gp)', '(300 gp)', '(400 gp)',
  '(500 gp)', 'made of holy herbs and oils. Worth 1,000 gp.', '(5 gp)',
  'each worth 50 gp.', '(1,000 gp)', '(100 gp)', '(400 gp)', '(100 gp)',
  'the grip and pommel are made of copper and zinc. Worth 250 gp.', '(400 gp)',
  '(100 gp)', 'appears to contain blood. Worth 600 gp.',
  'appears to contain liquid. Worth 300 gp.',
  '(150 gp)', '(500 gp)', '(500 gp)', '(500 gp)'
];

let trinkets = [
  'mummified goblin hand',
  'piece of crystal that glows faintly in the moonlight',
  'gold coin minted in an unknown land', 'untarnished brass ring',
  'old chess piece made from glass', 'pair of knucklebone dice',
  'mummified elf fingers on a rope necklace',
  '1-ounce block of unknown material',
  'cloth doll skewered with needles', 'unidentified beast tooth',
  'dragon scale', 'bright green feather', 'old divination card',
  'glass orb filled with smoke',
  'glass jar containing a weird bit of pickled flesh', 'gnome-craft music box',
  'wooden statuette of smug halfling', 'multicolored stone disc',
  'rune-etched brass orb', 'pair of old socks', 'silver raven icon',
  'bag of humanoid teeth', 'shard of warm obsidian',
  "dragon's bony talon on a leather necklace",
  'blank book whose pages refuse to hold ink', 'silver star badge',
  'glass vial of nail clippings', 'vest with many tiny pockets',
  'weightless stone block',
  'tiny sketch portrait of a goblin',
  'gemstone that looks like a lump of coal to everyone else',
  'scrap of military banner', 'rank insignia from a lost legionnaire',
  'silver bell without a clapper',
  'mechanical canary inside a gnome-crafted lamp',
  'tiny chest carved to have numerous feet on the bottom',
  'dead sprite inside a glass bottle',
  'metal can with no opening that sounds like broken glass is inside',
  'glass orb with a clockwork goldfish inside',
  'silver spoon engraved with an M',
  'whistle made from gold-colored wood', 'hand-sized dead scarab beetle',
  'toy soldier with a missing head',
  'small box filled with different-sized buttons',
  "candle that can't be lit", 'tiny cage with no door', 'old key',
  'undecipherable treasure map', 'hilt from a broken sword', "rabbit's foot",
  'glass eye', 'cameo carved in the likeness of a hideous person',
  'silver skull the size of a coin', 'alabaster mask',
  'pyramid of foul-smelling sticky black incense',
  'nightcap of pleasant dreams', 'single caltrop made from bone',
  'gold lensless monocle frame',
  '1-inch cube with each side painted a different color', 'crystal doorknob',
  'small packet of pink dust', 'fragment of a beautiful song on sheet music',
  'silver teardrop earring with a real teardrop inside',
  'eggshell painted with images of disturbing human misery',
  'fan with image of a sleeping cat on it', 'set of bone pipes',
  'four-leaf clover pressed inside an etiquette manual',
  'complex mechanical contraption blueprint',
  'ornate scabbard', 'old invitation to a noble party',
  "bronze pentacle with rat's head engraving in center",
  'purple handkerchief monogrammed with name of powerful archmage',
  'half of a floorplan for a keep', 'folded-up cloth cap',
  'bank receipt from a faraway town', 'diary with all the pages ripped out',
  'empty silver snuffbox',
  'iron holy symbol of an unknown god',
  "book about a hero's rise and fall, the last chapter missing",
  'vial of dragon blood', 'ancient elven arrow', 'needle that never bends',
  'ornate brooch of dwarven design',
  'empty wine bottle with label "The Wizard of Wines Winery, Red Dragon Crush, 331422-W"',
  'mosaic tile with a multicolored, glazed surface',
  'petrified mouse',
  'black pirate flag adorned with dragon skull and crossbones',
  'tiny mechanical crab', 'metal urn containing ashes',
  'lock that opens with a drop of blood',
  'scarecrow clothes', 'spinning top with happy, sad, wrathful, and dead faces',
  'pocketwatch that runs backward for an hour at midnight', 'winter coat',
  'green flame lantern', 'heavy noose', 'bloodstained teacup',
  'black book that records your dreams',
  'birdcage from which birds enter but cannot leave or eat',
  'necklace formed of holy symbols', 'box filled with dead moths on mins',
  'jar of pickled ghoul tongues', 'wooden hand',
  "mirror with bronze engraving of medusa head",
  'pallid leather gloves with ivory fingernails', 'human knucklebone dice',
  'ring of broken keys', 'music box that plays when you dance', 'walking cane',
  "porcelain doll's head", 'silver wolf head whistle',
  'mirror that shows a much older reflection',
  "book of children's nursery rhymes", 'mummified raven claw',
  'cold broken silver dragon pendant',
  'old doll made of dark wood missing a hand and a foot', "executioner's hood",
  'pouch made of human flesh with sinew drawstring',
  'spool of black thread', "clockwork dancer that doesn't work",
  'black wooden pipe that creates skull-shaped puffs of smoke',
  'spring-loaded toy with missing crank',
  'mason jar containing an ooze', 'black wooden die with 1s on all its faces',
  'dagger-sized shark tooth', 'plant pot with a finger in its dirt',
  'pircher-sized snail shell', 'toolbox containing a broken clockwork arachnid',
  'silver pocketwatch with 13 hours on its face',
  'woodcut of wolf eating its own leg',
  'planchette etched with raven skulls', 'coral figurine of a lamprey',
  'bronze fingertrap sculpted with roaring tigers',
  'pearl necklace that turns red under the full moon',
  'fish fossil with humanoid features', "plague doctor's mask",
  'paper talisman with smudged ink', 'canopic goat jar',
  "jack-o'-lantern made from a pale gourd",
  'high-heeled iron shoe', 'candle made from a severed hand', 'clockwork heart',
  'wax-sealed envelope that resists all attempts to open it',
  'mourning veil trimmed in lace',
  'burlap mask with a crooked smile painted on it',
  'dentures with mismatched teeth',
  'copper ring engraved with "mine" on the inside',
  'eyepatch embroidered with a holy symbol',
  'ceramic figure of a cat with many eyes',
  'glove with a mouth-like design on the palm',
  'journal that has been heavily redacted',
  'severed big toe with a nail that still grows',
  'broken glass reliquary'
];

//DUPLICATE BECAUSE SCREW GOOD CODING PRACTICES

function roll(number, dice) {
  let diceType = 1;
  switch (dice) {
      case "d2":
          diceType = 2;
          break;
      case "d3":
          diceType = 3;
          break;
      case "d4":
          diceType = 4;
          break;
      case "d6":
          diceType = 6;
          break;
      case "d8":
          diceType = 8;
          break;
      case "d10":
          diceType = 10;
          break;
      case "d12":
          diceType = 12;
          break;
      case "d20":
          diceType = 20;
          break;
      case "d100":
          diceType = 100;
  }
  let totalRoll = 0;
  for (let i = 0; i < number; i++) {
      totalRoll += ((rando(diceType) + 1));
  }
  return totalRoll;
}

function rando(probability) {
  //If you want a binary one, do rando(2), which returns a 0 or a 1.
  return Math.floor(Math.random() * probability);
}

function randoArray(array) {
  return array[rando(array.length)];
}

function determineMagicItems(lvl) {
  if (lvl <= 4) {
    let randomLevel = rando(10);
    switch (randomLevel) {
      case 0:
      case 1:
        break;
      case 2:
      case 3:
      case 4:
        magicTableBasedOnLevel = magicTableB;
        break;
      case 5:
      case 6:
      case 7:
        magicTableBasedOnLevel = magicTableC;
        break;
      case 8:
        magicTableBasedOnLevel = magicTableF;
        break;
      case 9:
        magicTableBasedOnLevel = magicTableG;
    }
  } else if (lvl <= 16) {
    let randomLevel = rando(10);
    switch (randomLevel) {
      case 0:
        break;
      case 1:
        magicTableBasedOnLevel = magicTableB;
        break;
      case 2:
      case 3:
        magicTableBasedOnLevel = magicTableI;
        break;
      case 4:
        magicTableBasedOnLevel = magicTableC;
        break;
      case 5:
        magicTableBasedOnLevel = magicTableD;
        break;
      case 6:
        magicTableBasedOnLevel = magicTableE;
        break;
      case 7:
        magicTableBasedOnLevel = magicTableF;
        break;
      case 8:
        magicTableBasedOnLevel = magicTableG;
        break;
      case 9:
        magicTableBasedOnLevel = magicTableH;
    }
  } else if (lvl <= 10) {
    let randomLevel = rando(10);
    switch (randomLevel) {
      case 0:
      case 1:
        break;
      case 2:
      case 3:
        magicTableBasedOnLevel = magicTableB;
        break;
      case 4:
      case 5:
        magicTableBasedOnLevel = magicTableC;
        break;
      case 6:
        magicTableBasedOnLevel = magicTableD;
        break;
      case 7:
        magicTableBasedOnLevel = magicTableF;
        break;
      case 8:
        magicTableBasedOnLevel = magicTableG;
        break;
      case 9:
        magicTableBasedOnLevel = magicTableH;
    }
  } else if (lvl >= 17) {
    let randomLevel = rando(10);
    switch (randomLevel) {
      case 0:
      case 1:
        magicTableBasedOnLevel = magicTableC;
        break;
      case 2:
      case 3:
        magicTableBasedOnLevel = magicTableD;
        break;
      case 4:
      case 5:
        magicTableBasedOnLevel = magicTableE;
        break;
      case 6:
      case 7:
        magicTableBasedOnLevel = magicTableG;
        break;
      case 8:
        magicTableBasedOnLevel = magicTableH;
        break;
      case 9:
        magicTableBasedOnLevel = magicTableI;
    }
  }
}
