// For treasures that have more lore value than actual mechanical benefits
// AKA "pickings"
// They may spark adventure hooks

//==============

function generateFiller() {
    const treasure = [];
    function addItem(type, desc = '') {
        if (desc) {
            treasure.push(`${type} - <span class="value">${desc}</span>`);
        } else {
            treasure.push(`${type}`);
        }
    }
    for (let i = 0; i < 6; i++) {
        const randomFillerGroup = rando(19);

        switch (randomFillerGroup) {
            case 0:
            case 1:
            case 2:
                randomBooksAndScrolls();
                break;
            case 3:
            case 4:
            case 5:
                addItem(randoArray(junk));
                break;
            case 6:
            case 7:
                addItem(randoArray(tools));
                break;
            case 8:
            case 9:
                addItem(randoArray(supplies));
                break;
            case 10:
            case 11:
                addItem(randoArray(mundaneGear));
                break;
            case 12:
                addItem(randoArray(goods));
                break;
            case 13:
            case 14:
                addItem(randoArray(trinkets));
                break;
            case 15:
                randomModifier(false);
                break;
            case 16:
                randomModifier(true);
                break;
            case 17:
                randomComponents();
                break;
        }
    }

    function randomBooksAndScrolls() {
        const books = [
            {type: "ledger", desc: "a boring book of facts and figures."},
            {type: "alchemist's notebook", desc: "a booklet full of sketches of alchemical formulae."},
            {type: "almanac", desc: "a book recording lunar phases and notable events from a few years ago."},
            {type: "bestiary", desc: "a book depicting sketches and descs of local monsters."},
            {type: "biography", desc: `a biography of someone named ${randomName()}.`},
            {type: "book of heraldry", desc: "a book depicting famous family crests and coats-of-arms."},
            {type: "storybook", desc: "a book of children's cautionary tales."},
            {type: "book of pressed flowers", desc: "a booklet with blank pages of pressed flowers."},
            {type: "calendar", desc: "a calendar from a few years ago with some dates circled."},
            {type: "catalog", desc: "a merchant's pamphlet listing available wares for order."},
            {type: "contract", desc: randomContract()},
            {type: "diary", desc: `a smudged diary of an unnamed person written in ${randomLanguage()}.`},
            {
                type: "dictionary",
                desc: `a collection of words translated from common into ${randomForeignLanguage()}.`
            },
            {type: "doodle", desc: "parchment covered in doodles of random objects and people"},
            {type: "forged document", desc: "a crumpled shoddily-forged document."},
            {type: "grammar workbook", desc: "a noble's workbook of common grammar."},
            {type: "heretical text", desc: "a partially-burned book with writing against the local religion."},
            {
                type: "historical text",
                desc: "a book detailing the rulership and notable events of the local area."
            },
            {type: "will", desc: `the last will and testament of someone named ${randomLastName(true)}.`},
            {type: "legal code", desc: "a paper listing crimes and their associated punishments."},
            {
                type: "letter",
                desc: `a letter from someone named ${randomFirstName()} to a ${randomFirstName()}.`
            },
            {type: "lunatic's ravings", desc: "a disturbing collection of nonsensical ravings and drawings."},
            {type: "magic tricks", desc: "a booklet of so-called 'magic tricks' that use no actual magic."},
            {type: "magic scroll", desc: "a used spell scroll with no more power."},
            {type: "map", desc: randomMapType()},
            {type: "atlas", desc: "A hand-drawn map of the world."},
            {type: "chart", desc: randomChart()},
            {type: "novel", desc: `an old book called <span class="italic">${randomBookTitle()}.</span>`},
            {type: "painting", desc: `a small painting of a ${randomPainting()}.`},
            {type: "poetry", desc: "a page of handwritten poetry."},
            {type: "prayer book", desc: `a booklet of prayers to ${randomGod()}.`},
            {
                type: "property deed",
                desc: `a property deed to a place called "${capitalize(randoArray(natural) + randoArray(grassland))} Estate."`
            },
            {type: "recipe book", desc: `a handwritten book of ${randomCulture()} recipes.`},
            {
                type: "criminal trial record",
                desc: `a record of the proceedings of a criminal named ${randomName()}.`
            },
            {type: "royal proclamation", desc: "an old royal proclamation paper."},
            {
                type: "wanted poster",
                desc: `a wanted poster of someone named ${randomName()} and a reward of 20 gp for capture.`
            },
            {type: "sheet music", desc: "an untitled sheet of music notation."},
            {
                type: "spellbook",
                desc: `a tattered spellbook containing these spells: <span class='italic'>${getRandomSpell('1')}, ${getRandomSpell('1')}, ${getRandomSpell('2')}</span>`
            },
            {type: "artisan's text", desc: `an artisan's treatise on ${randomTrade()}.`},
            {type: "travelogue", desc: "a wizard's travelogue of the planes."}
        ];
        const randomIndex = rando(books.length);
        const {type, desc} = books[randomIndex];
        addItem(type, desc);
    }
    function randomModifier(isMagical) {
        const { name: mod, desc } = randoArray(isMagical ? magicalModifiers : modifiers);
        addItem(`${mod} ${randoArray(mundaneGear)}`, desc);
    }
    function randomComponents() {
        const randomIndex = rando(components.length);
        const {name, desc} = components[randomIndex];
        addItem(name, desc);
    }
    function randomContract() {
        const contractTypes = [
            "a contract between a merchant and a shopkeeper.",
            "an employment contract for a city guard.",
            "a debt contract from a moneylender."
        ];
        return randoArray(contractTypes);
    }
    function randomMapType() {
        const mapTypes = [
            "a hand-drawn map of the surrounding area.",
            "a hand-drawn treasure map.",
            "a hand-drawn map of an unknown country.",
            "a hand-drawn map of in the inside of a dungeon.",
            "a hand-drawn map of a town."
        ];
        return randoArray(mapTypes);
    }
    function randomChart() {
        const chartTypes = [
            "a nautical navigational chart.",
            "a star chart.",
            "a medical chart describing various symptoms.",
            `a genealogical chart showing the lineage of the ${randomLastName(false)} family.`,
            "an alchemical chart of chemical symbols."
        ];
        return randoArray(chartTypes);
    }
    return treasure;
}

function generateUnique(level) {
    let magicItemsPool = determineMagicItems(level)
    const { name: mod, desc } = randoArray(coinFlip(1, 2) === 1 ? magicalModifiers : modifiers);
    let item = 'potion';
    while (isConsumable(item)) {
        // Make sure it's not consumable
        item = getMagicItem(randoArray(magicItemsPool));
    }
    item = processMagicItem(item);
    item = (mod + ' ' + item);
    return [
        `<span class="italic">${item}</span> - <span class="value">${desc}</span>`
    ];
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

function randomLastName(prefix) {
    let name;
    if (prefix === true) {
        name = coinFlip('Sir', 'Madame');
        name += ' ' + capitalize(randoArray(humanSurname));
    } else {
        name = capitalize(randoArray(humanSurname));
    }
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

const modifiers = [
    {name: 'dwarf-sized', desc: 'Only suitable for dwarves to be proficient with.'},
    {name: 'halfling-sized', desc: 'Only suitable for halflings to be proficient with.'},
    {name: 'gnome-sized', desc: 'Only suitable for gnomes to be proficient with.'},
    {name: 'half-orc sized', desc: 'Only suitable for half-orcs to be proficient with.'},
    {name: 'elf-sized', desc: 'Only suitable for elves to be proficient with.'},
    {name: 'damaged', desc: "This will break on a roll of natural 1 or a critical against it."},
    {name: 'pristine', desc: 'In perfect condition and can be sold for its full price.'},
    {name: 'old', desc: 'Functional, but not worth any coin.'},
    {name: 'silvered', desc: 'Gilded with silver. Worth 100 gp more than usual.'},
    {name: 'celestial-craft', desc: 'Half the normal weight, inscribed with symbols of good.'},
    {name: 'draconic', desc: 'Made from scales and talons of a dragon. Grows warm in the presence of dragons.'},
    {
        name: 'drow-crafted',
        desc: 'Half the normal weight, black, spider-themed. Will be ruined if put in direct sunlight.'
    },
    {name: 'dwarf-crafted', desc: 'Durable with engraved runes; likely being sought by a dwarf clan.'},
    {name: 'elemental-air', desc: 'Half the normal weight and hollow-feeling.'},
    {name: 'elemental-earth', desc: 'Crafted with stone and studded with polished rock.'},
    {name: 'elemental-fire', desc: 'Warm to the touch, black iron with sigils of flames.'},
    {name: 'elemental-water', desc: 'Fish scales instead of cloth or leather, worked with seashells and coral.'},
    {name: 'light', desc: 'Half the normal weight.'},
    {name: 'heavy', desc: 'Twice the normal weight.'},
    {name: 'fey-craft', desc: 'Exquisitely crafted, glows pale in moonlight.'},
    {
        name: 'fiend-crafted',
        desc: 'Black iron or horn, inscribed with runes, and fiend hide. Warm to the touch and scary-looking.'
    },
    {name: 'giant-crafted', desc: 'Larger than usual, crafted for giant servants.'},
    {name: 'gnome-crafted', desc: 'Depicted with a gear motif.'},
    {
        name: 'undead-crafted',
        desc: 'Depicted with death imagery and made with bone and parts of corpses; cold to the touch'
    },
    {name: 'ornamental', desc: 'Worth full price, but very fragile if actually used.'},
    {name: 'cursed', desc: 'Cursed with some kind of hidden downside.'}
];

const magicalModifiers = [
    {name: 'beacon', desc: 'With an action, you can cause it to shed light in a 10-foot radius.'},
    {name: 'compass', desc: 'With an action, you can learn which way north is.'},
    {name: 'conscientious', desc: 'Enhances pangs of conscience of wrongdoing.'},
    {name: 'delver', desc: 'While underground, you know how deep you are and where the nearest staircase is.'},
    {name: 'gleaming', desc: 'Never gets dirty.'},
    {name: 'guardian', desc: "+2 bonus to initiative if you aren't incapacitated."},
    {name: 'harmonious', desc: 'Only takes 1 minute to attune to.'},
    {name: 'hidden message', desc: 'A secret message is hidden on the item.'},
    {name: 'key', desc: 'This is used to unlock something somewhere.'},
    {
        name: 'language',
        desc: 'You can speak and understand ' + randomForeignLanguage() + ' while you hold this.'
    },
    {name: 'sentinel', desc: 'Glows faintly while in the presence of ' + randomCreatureType() + '.'},
    {name: 'song craft', desc: 'Plays fragments of a song whenever it strikes or is struck.'},
    {name: 'temperate', desc: 'You suffer no harm from extreme temperatures.'},
    {name: 'unbreakable', desc: 'This cannot be broken except by special means.'},
    {name: 'war leader', desc: 'With an action, you can magnify your voice.'},
    {name: 'waterborne', desc: 'Floats on water and helps you swim.'},
    {name: 'wicked', desc: 'Urges you to do evil.'},
    {name: 'illusion', desc: 'Can change color at will.'},
    {name: 'blissful', desc: 'You feel optimistic while holding it. Butterflies are attracted to it.'},
    {name: 'confident', desc: 'You feel self-assured while holding it.'},
    {name: 'covetous', desc: 'You become obsessed with material wealth.'},
    {name: 'frail', desc: 'Looks decrepit and worthless, but works fine.'},
    {
        name: 'hungry',
        desc: 'Only functions if a drop of fresh blood from a humanoid has been applied to it within 24 hours.'
    },
    {name: 'loud', desc: 'Is much louder than usual when used.'},
    {name: 'metamorphic', desc: 'Sometimes changes appearance in subtle ways.'},
    {name: 'painful', desc: 'Every time you use it, you get a flash of pain.'},
    {name: 'possessive', desc: 'Demands attunement and discourages attunement to other items.'},
    {name: 'repulsive', desc: 'You feel distaste when in contact with it.'},
    {name: 'slothful', desc: 'You feel lethargic and have to sleep more while attuned.'}
];


function isConsumable(item) {
    if (item.includes('robe of useful items')) {
        return false;
    }
    let consumables = ['potion', 'scroll', 'beans', 'dust', 'philter', 'bead of nourishment',
        'manual', 'solvent', 'sovereign', 'tome', 'oil', 'elixir', 'arrow', 'bullet',
        'crossbow bolts', 'glowrune', 'bead of refreshment',
    ];
    for (let i = 0; i < consumables.length; i++) {
        if (item.includes(consumables[i])) {
            return true
        }
    }
    return false;
}

const components = [
    { name: 'black onyx gem', desc: '(5 gp)' },
    { name: 'crystal scrying ball', desc: '(1,000 gp)' },
    { name: 'dragon engraving', desc: '(150 gp)' },
    { name: 'dragon statuette', desc: '(500 gp)' },
    { name: 'expensive ointment', desc: '(1,500 gp)' },
    { name: 'forked metal rod', desc: '(500 gp)' },
    { name: 'gem', desc: '(5 gp)' },
    { name: 'gem-encased eyeball', desc: '(400 gp)' },
    { name: 'gem powder', desc: '(5 gp)' },
    { name: 'gilded acorn', desc: '(100 gp)' },
    { name: 'gilded flower', desc: '(300 gp)' },
    { name: 'gilded skull', desc: '(400 gp)' },
    { name: 'gold-inlaid vial', desc: '(500 gp)' },
    { name: 'golden reliquary', desc: '(1,000 gp)' },
    { name: 'holy symbol of ' + randomGod(), desc: '(5 gp)' },
    { name: 'ivory portal', desc: '(500 gp)' },
    { name: 'jade circlet', desc: '(300 gp)' },
    { name: 'jade dust', desc: '10 gp worth.' },
    { name: 'jewel-encrusted dagger', desc: '(1,000 gp)' },
    { name: 'jeweled horn', desc: '(100 gp)' },
    { name: 'miniature platinum sword', desc: '(400 gp)' },
    { name: 'miniature sword', desc: '(500 gp)' },
    { name: 'ornate silver bar', desc: '(1,000 gp)' },
    { name: 'ornate stone and metal lockbox', desc: '(100 gp)' },
    { name: 'platinum-inlaid vial', desc: '(500 gp)' },
    { name: 'platinum-plated dragon scale', desc: '(500 gp)' },
    { name: 'powdered diamond', desc: '200 gp worth' },
    { name: 'pouch of charcoal and incense', desc: 'worth 10 gp. Useful for summoning familiars.' },
    { name: 'pouch of gold dust', desc: '25 gp worth.' },
    { name: 'rare chalk', desc: '(50 gp)' },
    { name: 'rare incense', desc: '(50 gp)' },
    { name: 'rare oils and unguents', desc: '(1,000 gp)' },
    { name: 'reliquary', desc: '(1,000 gp)' },
    { name: 'replica of a person', desc: '(200 gp)' },
    { name: 'ruby dust', desc: '50 gp worth.' },
    { name: 'ruby vial', desc: '(150 gp)' },
    { name: 'silver rod', desc: '(100 gp)' },
    { name: 'silver scrying mirror', desc: '(500 gp)' },
    { name: 'silver spoon', desc: '(100 gp)' },
    { name: 'sunburst pendant', desc: '(400 gp)' },
    { name: 'vial of gem alloy', desc: '(1,000 gp)' },
    { name: 'white pearl powder', desc: '(100 gp)' }
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

function determineMagicItems(lvl) { //returns an array of item tables
    let pool = ['CommonItem'];
    if (lvl >= 5) {
        pool = pool.filter(item => item !== 'CommonItem');
        pool.push('RareMajorItem', 'EpicMinorItem')
    }
    if (lvl >= 11) {
        pool.push('EpicMajorItem', 'LegendaryMinorItem')
    }
    if (lvl >= 17) {
        pool.push('LegendaryMajorItem')
    }
    return pool;
}
