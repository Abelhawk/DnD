// For treasures that have more lore value than actual mechanical benefits
// They may spark adventure hooks

function generateFiller() {
    let randomNumber = rando(100);
    let treasure = [];
    switch (randomNumber) {
        // BOOKS AND SCROLLS
        case 1:
            treasure.push('Ledger - ' + `<span class="value">` + "A boring book of facts and figures." + `</span>`);
            break;
        case 2:
            treasure.push("Alchemist's notebook - " + `<span class="value">` + "A booklet full of sketches of alchemical formulae." + `</span>`);
            break;
        case 3:
            treasure.push("Almanac - " + `<span class="value">` + "A book recording lunar phases and notable events from a few years ago." + `</span>`);
            break;
        case 4:
            treasure.push("Bestiary - " + `<span class="value">` + "A book depicting sketches and descriptions of local monsters." + `</span>`);
            break;
        case 5:
            treasure.push("Biography - " + `<span class="value">` + "A biography of someone named " + randomName() + "." + `</span>`);
            break;
        case 6:
            treasure.push("Book of heraldry - " + `<span class="value">` + "A book depicting famous family crests and coats-of-arms." + `</span>`);
            break;
        case 7:
            treasure.push("Storybook - " + `<span class="value">` + "A book of children's cautionary tales." + `</span>`);
            break;
        case 8:
            treasure.push("Book of pressed flowers - " + `<span class="value">` + "A booklet with blank pages of pressed flowers." + `</span>`);
            break;
        case 9:
            treasure.push("Calendar - " + `<span class="value">` + "A calendar from a few years ago with some dates circled." + `</span>`);
            break;
        case 10:
            treasure.push("Catalog - " + `<span class="value">` + "A merchant's pamphlet listing available wares for order." + `</span>`);
            break;
        case 11:
            let randomContract = rando(3);
            switch (randomContract) {
                case 1:
                    treasure.push("Contract - " + `<span class="value">` + "A contract between a merchant and a shopkeeper." + `</span>`);
                    break;
                case 2:
                    treasure.push("Contract - " + `<span class="value">` + "An employment contract for a city guard." + `</span>`);
                    break;
                case 3:
                    treasure.push("Contract - " + `<span class="value">` + "A debt contract from a moneylender." + `</span>`);
            }
            break;
        case 12:
            treasure.push("Diary - " + `<span class="value">` + "A smudged diary of an unnamed person written in " + randomLanguage() + '.'`</span>`);
            break;
        case 13:
            treasure.push("Dictionary - " + `<span class="value">` + "A collection of words translated from common into " + randomForeignLanguage() + '.' + `</span>`);
            break;
        case 14:
            let doodleOrSketch = coinFlip(
                "Sketchbook - " + `<span class="value">` + "A book of decently drawn animals and faces." + `</span>`,
                "Doodles - " + `<span class="value">` + "A parchment covered in doodles of random objects and people." + `</span>`);
            treasure.push(doodleOrSketch);
            break;
        case 15:
            treasure.push("Forged document - " + `<span class="value">` + "A crumpled shoddily-forged document." + `</span>`);
            break;
        case 16:
            treasure.push("Grammar workbook - " + `<span class="value">` + "A noble's workbook of Common grammar." + `</span>`);
            break;
        case 17:
            treasure.push("Heretical text - " + `<span class="value">` + "A partially-burned book with writing against the local religion." + `</span>`);
            break;
        case 18:
            treasure.push("Historical text - " + `<span class="value">` + "A book detailing the rulership and notable events of the local area." + `</span>`);
            break;
        case 19:
            treasure.push("Will - " + `<span class="value">` + "The last will and testament of someone named " + randomLastName() + `</span>`);
            break;
        case 20:
            treasure.push("Legal code - " + `<span class="value">` + "A paper listing crimes and their associated punishments." + `</span>`);
            break;
        case 21:
            treasure.push("Letter - " + `<span class="value">` + "A letter from someone named " + randomFirstName() + " to a " + randomFirstName() + "."`</span>`);
            break;
        case 22:
            treasure.push("Lunatic's ravings - " + `<span class="value">` + "A disturbing collection of nonsensical ravings and drawings." + `</span>`);
            break;
        case 23:
            treasure.push("Magic tricks - " + `<span class="value">` + "A booklet of so-called 'magic tricks' that use no actual magic." + `</span>`);
            break;
        case 24:
            treasure.push("Magic scroll - " + `<span class="value">` + "A used spell scroll with no more power." + `</span>`);
            break;
        case 25:
            let map = coinFlip(
                "Map - " + `<span class="value">` + "A hand-drawn map of the surrounding area." + `</span>`,
                "Treasure Map - " + `<span class="value">` + "A hand-drawn treasure map." + `</span>`)
            treasure.push(map);
            break;
        case 26:
            let atlas = coinFlip(
                "Atlas - " + `<span class="value">` + "A hand-drawn map of the world." + `</span>`,
                "Dungeon Map - " + `<span class="value">` + "A hand-drawn depiction of the inside of a dungeon of some sort." + `</span>`)
            treasure.push(atlas);
            break;
        case 27:
            let chart = coinFlip(
                "Navigational chart - " + `<span class="value">` + "A chart showing the navigation route by sea to a distant island." + `</span>`,
                "Star chart - " + `<span class="value">` + "A painstakingly hand-drawn start chart." + `</span>`)
            treasure.push(chart);
            break;
        case 28:
            treasure.push("Novel - " + `<span class="value">` + "An old book called " + randomBookTitle() + "." + `</span>`);
            break;
        case 29:
            treasure.push("Painting - " + `<span class="value">` + "A small painting of a " + randomPainting() + "." + `</span>`);
            break;
        case 30:
            treasure.push("Poetry - " + `<span class="value">` + "A page of handwritten poetry." + `</span>`);
            break;
        case 31:
            treasure.push("Prayer book - " + `<span class="value">` + "A booklet of prayers to ." + randomGod() + "." + `</span>`);
            break;
        case 32:
            treasure.push("Property deed - " + `<span class="value">` + "A property deed to someplace you've never heard of." + randomGod() + "." + `</span>`);
            break;
        case 33:
            treasure.push("Recipe book - " + `<span class="value">` + "A handwritten book of " + randomCulture() + " recipes." + `</span>`);
            break;
        case 34:
            treasure.push("Criminal trial record - " + `<span class="value">` + "A record of the proceedings of a criminal named " + randomName() + "." + `</span>`);
            break;
        case 35:
            treasure.push("Royal proclamation - " + `<span class="value">` + "An old royal proclamation paper." + `</span>`);
            break;
        case 36:
            treasure.push("Wanted poster - " + `<span class="value">` + "A wanted poster of someone named " + randomName() + " and a reward of 50 gp for capture." + `</span>`);
            break;
        case 37:
            treasure.push("Sheet music - " + `<span class="value">` + "An untitled sheet of music notation." + `</span>`);
            break;
        case 38:
            treasure.push("Spellbook - " + `<span class="value">` + "A tattered spellbook containing these spells: " + `</span>` + `<span class='italic'> ${getRandomSpell(1)}, ${getRandomSpell(1)}, ${getRandomSpell(2)} </span>`);
            break;
        case 39:
            treasure.push("Artisan's text - " + `<span class="value">` + "An artisan's treatise on " + randomTrade() + "." + `</span>`);
            break;
        case 40:
            treasure.push("Travelogue - " + `<span class="value">` + "A wizard's travelogue of the planes." + `</span>`);
            break;
        //JUNK
        case 41:
            treasure.push("A coil of bandages");
            break;

    }
    return treasure;
}

function randomName() {
    let name = coinFlip(capitalize(maleHuman[rando(maleHuman.length)]), capitalize(femaleHuman[rando(femaleHuman.length)]));
    name += ' ' + capitalize(humanSurname[rando(humanSurname.length)]);
    return name;
}

function randomFirstName() {
    return coinFlip(capitalize(maleHuman[rando(maleHuman.length)]), capitalize(femaleHuman[rando(femaleHuman.length)]));
}

function randomLastName() {
    let name = coinFlip('Sir', 'Madame');
    name += ' ' + capitalize(humanSurname[rando(humanSurname.length)]);
    return name;
}

function randomLanguage() {
    return commonLanguages[rando(commonLanguages.length)];
}

function randomForeignLanguage() {
    return foreignLanguage[rando(foreignLanguage.length)];
}

function randomCulture() {
    return culture[rando(culture.length)];
}

function randomGod() {
    return rando(gods[gods.length]);
}

function randomPainting() {
    let paintings = ['sunset', 'nobleman', 'noblewoman', 'farm fields', 'church building', 'mountain landscape', 'castle',
        'lake', 'collage of abstract shapes', 'dog', 'dragon']
    return paintings[rando(paintings.length)];
}

function randomBookTitle() {
    let title1 = ['A Day in ', 'The Secrets of ', 'A Week in ', 'The Battle of ', 'The Journey to '];
    return title1[rando(title1.length)] + generate();
}

function randomTrade() {
    let number = rando(20);
    let trade = '';
    switch (trade) {
        case 1:
            trade = 'armor making';
            break;
        case 2:
            trade = 'astrology';
            break;
        case 3:
            trade = 'exotic flora';
            break;
        case 4:
            trade = 'exotic fauna';
            break;
        case 5:
            trade = 'herbalism';
            break;
        case 6:
            trade = 'mathematics';
            break;
        case 7:
            trade = 'masonry';
            break;
        case 8:
            trade = 'medicine';
            break;
        case 9:
            trade = 'carpentry';
            break;
        case 10:
            trade = 'theology';
            break;
        case 11:
            trade = 'brewing';
            break;
        case 12:
            trade = 'cartography';
            break;
        case 13:
            trade = 'leatherworking';
            break;
        case 14:
            trade = 'painting';
            break;
        case 15:
            trade = 'blacksmithing';
            break;
        case 16:
            trade = 'weapon repair';
            break;
        case 17:
            trade = 'pottery';
            break;
        case 18:
            trade = 'woodcarving';
            break;
        case 19:
            trade = 'dragon chess';
            break;
        case 20:
            trade = 'philosophy';
    }
    return trade;
}

let commonLanguages = ['Common', 'Common', 'Common', 'Common', 'Common', 'Dwarvish', 'Elvish', 'Gnomish', 'Halfling'];

let foreignLanguage = ['Dwarvish', 'Elvish', 'Gnomish', 'Halfling', 'Infernal', 'Abyssal', 'Aquan', 'Terran', 'Giant', 'Ignan',
    'Draconic', 'Goblin', 'Orc', 'Sylvan', 'Undercommon', 'Celestial'];

let culture = ['Calishite', 'Chondathan', 'Damaran', 'Illuskan', 'Mulan', 'Rashemi', 'Shou', 'Tethyrian', 'Turami'];

let gods = ['Chauntea, goddess of agriculture', 'Deneir, god of writing', 'Eldath, goddess of peace', 'Gond, god of craft',
    'Helm, god of protection', 'Ilmater, god of endurance', 'Kelemvor, god of the dead', 'Lathander, god of birth and renewal',
    'Leira, goddess of illusion', 'Lliira, goddess of joy', 'Mask, god of thieves', 'Mielikki, goddess of forests', 'Milil, god of poetry and song',
    'Mystra, goddess of magic', 'Oghma, god of knowledge', 'Savras, god of divination and fate', 'Selûne, goddess of the moon',
    'Silvanus, god of wild nature', 'Sune, goddess of love and beauty', 'Tempus, god of war', 'Torm, god of courage', 'Tymora, goddess of luck',
    'Tyr, god of justice', 'Umberlee, goddess of the sea', 'Waukeen, goddess of trade'];

let junk = ['bandages', 'basket', 'empty wine bottle', 'paintbrush', 'candle', 'walking cane', 'small mirror', 'needle and thread', 'bottle of perfume',
    'wooden cup', 'tankard', 'empty potion vial', 'hourglass', 'small bread loaf', 'towel', 'ball of string', 'whetstone', 'wig', 'snuffbox', 'blank parchment',
    'smoking pipe', 'quill', 'salve', 'soap', 'bell', 'stuffed animal', 'pillow', 'lump of cheese'];

function coinFlip(heads, tails) {
    let headsOrTails = rando(2);
    if (headsOrTails === 1) {
        return heads;
    }
    if (headsOrTails === 2) {
        return tails;
    }
}
