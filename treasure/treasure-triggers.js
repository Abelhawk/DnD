let textField = document.getElementById("generate");

function loadPage() {
    document.getElementById('loading').style.display = "none";
    document.getElementById('yesButton').style.display = "block";
    document.getElementById("right-sidebar").style.display = 'block';
}

function activate() {
    let result = generate();
    let output = ``;
    for (let i = 0; i < result.length; i++) {
        output += `<p>` + result[i] + `</p>`
    }
    textField.innerHTML = output;
}

function generate() {
    let individ = document.getElementById("individualType");
    let hoard = document.getElementById("hoardType");
    let filler = document.getElementById("fillerType");
    let level = document.getElementById("playerLevel").value;
    if (individ.checked) {
        return generateIndividualTreasure(level);
    }
    if (hoard.checked) {
        return generateHoard(level);
    }
    if (filler.checked) {
        return generateFiller(level);
    }
    if (document.getElementById("uniqueType").checked) {
        return generateUnique(level);
    }
    if (document.getElementById("auctionHouse").checked) {
        //"Up for Purchase"
        return generateWares(level);
    }
}

function checkResult() {
    if (document.getElementById("auctionHouse").checked) {
        document.getElementById("right-sidebar").style.display = 'block';
        document.getElementById("lebel").textContent = 'Player Level:';
        if (document.getElementById("playerLevel").value > 20) {
            document.getElementById("playerLevel").value = 20;
        }
    } else {
        document.getElementById("right-sidebar").style.display = 'block';
        document.getElementById("lebel").textContent = 'Challenge Level:';
    }
}

function generateIndividualTreasure(lvl) {
    const rollTreasureValues = {
        1: [5, "d6"],
        2: [4, "d6"],
        3: [3, "d6"],
        4: [1, "d6"],
        5: [4, "d6", 100],
        6: [1, "d6", 5],
        7: [6, "d6", 10],
        8: [2, "d6", 10],
        9: [4, "d6", 10],
        10: [2, "d6", 10],
        11: [4, "d6", 100],
        12: [1, "d6", 100],
        13: [2, "d6", 100],
        14: [1, "d6", 10],
        15: [2, "d6", 100],
        16: [2, "d6", 10],
        17: [9, "d6", 100],
        18: [1, "d6", 1000],
        19: [1, "d6", 100],
        20: [2, "d6", 100],
        21: [1, "d6", 1000]
    };

    const levelRanges = [
        { max: 4, probabilities: [30, 60, 95, 100] },
        { max: 10, probabilities: [30, 60, 95, 100] },
        { max: 16, probabilities: [20, 75, 100] },
        { max: 100, probabilities: [15, 55, 100] }
    ];

    const randomNumber = roll(1, 'd100');
    const range = levelRanges.find(r => lvl <= r.max);
    const { probabilities } = range;

    let treasure = [];

    if (lvl <= 4) {
        if (randomNumber <= probabilities[0]) {
            treasure.push(rollTreasure(...rollTreasureValues[1]) + " copper pieces");
        } else if (randomNumber <= probabilities[1]) {
            treasure.push(rollTreasure(...rollTreasureValues[2]) + " silver pieces");
        } else if (randomNumber <= probabilities[2]) {
            treasure.push(rollTreasure(...rollTreasureValues[3]) + " gold pieces");
        } else {
            treasure.push(rollTreasure(...rollTreasureValues[4]) + " platinum pieces");
        }
    } else if (lvl <= 10) {
        if (randomNumber <= probabilities[0]) {
            treasure.push(rollTreasure(...rollTreasureValues[5]) + " copper pieces");
            treasure.push(rollTreasure(...rollTreasureValues[6]) + " gold pieces");
        } else if (randomNumber <= probabilities[1]) {
            treasure.push(rollTreasure(...rollTreasureValues[7]) + " silver pieces");
            treasure.push(rollTreasure(...rollTreasureValues[8]) + " gold pieces");
        } else if (randomNumber <= probabilities[2]) {
            treasure.push(rollTreasure(...rollTreasureValues[9]) + " gold pieces");
        } else {
            treasure.push(rollTreasure(...rollTreasureValues[10]) + " gold pieces");
            treasure.push(rollTreasure(...rollTreasureValues[11]) + " platinum pieces");
        }
    } else if (lvl <= 16) {
        if (randomNumber <= probabilities[0]) {
            treasure.push(rollTreasure(...rollTreasureValues[12]) + " silver pieces");
            treasure.push(rollTreasure(...rollTreasureValues[13]) + " gold pieces");
        } else if (randomNumber <= probabilities[1]) {
            treasure.push(rollTreasure(...rollTreasureValues[14]) + " gold pieces");
            treasure.push(rollTreasure(...rollTreasureValues[15]) + " platinum pieces");
        } else {
            treasure.push(rollTreasure(...rollTreasureValues[16]) + " gold pieces");
            treasure.push(rollTreasure(...rollTreasureValues[17]) + " platinum pieces");
        }
    } else {
        if (randomNumber <= probabilities[0]) {
            treasure.push(rollTreasure(...rollTreasureValues[18]) + " gold pieces");
        } else if (randomNumber <= probabilities[1]) {
            treasure.push(rollTreasure(...rollTreasureValues[19]) + " gold pieces");
            treasure.push(rollTreasure(...rollTreasureValues[20]) + " platinum pieces");
        } else {
            treasure.push(rollTreasure(...rollTreasureValues[21]) + " gold pieces");
            treasure.push(rollTreasure(...rollTreasureValues[22]) + " platinum pieces");
        }
    }

    return treasure;
}


function getGems(number, value) { //Gems can be added together
    if (number === 0) return [];
    let gemTable;
    let bagOGems = [];
    switch (value) {
        case 10:
            gemTable = gems10;
            break;
        case 50:
            gemTable = gems50;
            break;
        case 100:
            gemTable = gems100;
            break;
        case 500:
            gemTable = gems500;
            break;
        case 1000:
            gemTable = gems1000;
            break;
        case 5000:
            gemTable = gems5000;
            break;
        default:
            alert('ERROR CODE: Topaz')
    }
    for (let i = 0; i < number; i++) {
        let randomNumber = rando(gemTable.length);
        bagOGems.push(gemTable[randomNumber] + `<span class="value">` + " (" + value + " gp)" + `</span>`);
    }
    let counts = {};
    bagOGems.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
}

function getTreasures(level) { // HOARD TRIGGER - works fine.
    let treasures = [];
    let numberOfTreasures = roll(2, 'd4');
    let numberOfMinorMagicItems = roll(1, 'd6') - 1;
    let numberOfMajorMagicItems = roll(1, 'd4') - 1;
    let minorRarities = [];
    let majorRarities = [];
    let r = 3; // 0 = low gem, 1 = hi gem, 2 = low art, 3 = hi art
    let numberOfLowArtObjects = 0;
    let numberOfHighArtObjects = 0;
    let numberOfLowGems = 0;
    let numberOfHighGems = 0;
    let lowGemValue = 10;
    let highGemValue = 50;
    let lowArtValue = 25;
    let highArtValue = 75;
    for (let i = 0; i < numberOfTreasures; i++) {
        r = rando(4);
        while (numberOfLowArtObjects + numberOfHighArtObjects > 7 && r > 1) {
            r--; //No more than 8 art objects are allowed in a hoard
        }
        switch (r) {
            case 0:
                numberOfLowGems++;
                break;
            case 1:
                numberOfHighGems++;
                break;
            case 2:
                numberOfLowArtObjects++;
                break;
            case 3:
                numberOfHighArtObjects++;
        }
    }
    switch (level) {
        case 1: // Level 0-4
            lowGemValue = 10;
            highGemValue = 50;
            lowArtValue = highArtValue = 25;
            minorRarities = ['UncommonMinorItem', 'RareMinorItem']
            majorRarities = ['UncommonMajorItem', 'CommonItem']
            break;
        case 2: // Level 5-10
            lowGemValue = 50;
            highGemValue = 100;
            lowArtValue = 25;
            highArtValue = 250;
            minorRarities = ['UncommonMinorItem', 'RareMinorItem', 'EpicMinorItem']
            majorRarities = ['UncommonMajorItem', 'RareMajorItem']
            break;
        case 3: // Level 11-16
            lowGemValue = 500;
            highGemValue = 1000;
            lowArtValue = 250;
            highArtValue = 750;
            minorRarities = ['RareMinorItem', 'EpicMinorItem', 'LegendaryMinorItem']
            majorRarities = ['RareMajorItem', 'EpicMajorItem']
            break;
        case 4: // Level 17+
            lowGemValue = 1000;
            highGemValue = 5000;
            lowArtValue = 2500;
            highArtValue = 7500;
            minorRarities = ['RareMinorItem', 'EpicMinorItem', 'LegendaryMinorItem']
            majorRarities = ['EpicMajorItem', 'LegendaryMajorItem']
            break;
    }
    organize(getGems(numberOfLowGems, lowGemValue), treasures);
    organize(getGems(numberOfHighGems, highGemValue), treasures);
    mergeArray(getArtObjects(numberOfLowArtObjects, lowArtValue), treasures);
    mergeArray(getArtObjects(numberOfHighArtObjects, highArtValue), treasures);
    if (numberOfMinorMagicItems + numberOfMajorMagicItems > 6) {
        numberOfMinorMagicItems--;
    }
    if (numberOfMinorMagicItems + numberOfMajorMagicItems === 0) {
        numberOfMajorMagicItems = 1;
    }
    for (let i = 0; i < numberOfMinorMagicItems; i++) {
        let randomIndex = rando(minorRarities.length);
        treasures.push(getMagicItem(minorRarities[randomIndex]))
    }
    for (let i = 0; i < numberOfMajorMagicItems; i++) {

        let randomIndex = rando(majorRarities.length);
        treasures.push(getMagicItem(majorRarities[randomIndex]))
    }
    if (level === 4) {

    }
    return treasures;
}

function getArtObjects(number, value) { //Art objects must be unique
    if (number === 0) return [];
    let artTable;
    let artCollection = [];
    switch (value) {
        case 25:
            artTable = art25;
            break;
        case 250:
            artTable = art250;
            break;
        case 750:
            artTable = art750;
            break;
        case 2500:
            artTable = art2500;
            break;
        case 7500:
            artTable = art7500;
    }
    let arrayIndexes = [];
    for (let i = 0; i < number; i++) {
        let randomNumber = rando(artTable.length);
        let index = 0;
        while (arrayIndexes.includes(randomNumber)) {
            randomNumber = rando(artTable.length);
            index++;
            if (index > 99) alert("Infinite loop detected!")
        }
        arrayIndexes.push(randomNumber);
        artCollection.push(artTable[randomNumber] + `<span class="value">` + " (" + value + " gp)" + `</span>`);
    }
    return artCollection;
}

/*

    Okay, here's the distribution for future reference and balancing:

    TABLE       RARITY
    A           Common Items
    B           Uncommon Minor Items
    C           Uncommon Minor + Rare Consumables
    D           Very Rare Consumables
    E           Very Rare Consumables + Legendary Consumables
    F           Uncommon Items
    G           Rare Items
    H           Very Rare Items
    I           Legendary Items

    LVL         DMG TABLES          Translation                         Distribution
    0-4         AAABBBCCCFFGG       20% Com, 60% Unc, 20% Rar           - 66% minor, 33% major?
    5-10        AABBCCDFFGH         15% Com, 45% Unc, 30% Rar, 10% VRa  - Consumables can come from the
    11-16       BCDEFHI             30% Unc, 30% Rar, 30% VRa, 10% Leg  rarity below it.
    17+         CDEGHI              20% Rar, 30% VRa, 30% Leg

*/

function getMagicItem(itemRarity) { //Gets a random magic item based on rarity and makes it italic
    let magicTable;
    switch (itemRarity) {
        case "CommonItem":
            magicTable = commonItems;
            break;
        case "UncommonMajorItem":
            magicTable = uncommonMajorItems;
            break;
        case "UncommonMinorItem":
            magicTable = uncommonMinorItems;
            break;
        case "RareMajorItem":
            magicTable = rareMajorItems;
            break;
        case "RareMinorItem":
            magicTable = rareMinorItems;
            break;
        case "EpicMajorItem":
            magicTable = epicMajorItems;
            break;
        case "EpicMinorItem":
            magicTable = epicMinorItems;
            break;
        case "LegendaryMajorItem":
            magicTable = legendaryMajorItems;
            break;
        case "LegendaryMinorItem":
            magicTable = legendaryMinorItems;
    }
    let magicItem = randoArray(magicTable);
    if (magicItem === 'robe of useful items') {
        let patches = generatePatches();
        let patchList = ``;
        for (let i = 0; i < patches.length; i++) {
            patchList += patches[i];
            if (i < patches.length) patchList += `<br>`
        }
        return `<span class='italic robe-of-useful-items'>robe of useful items</span><span class="robe-patches">${patchList}</span>`
    } else {
        magicItem = processMagicItem(magicItem);
        return `<span class='italic'>` + magicItem + `</span>`;
    }

}

function generateWares(check) { //AUCTION HOUSE \ SHOP - Not working
    let treasure = [];
    let duplicates = [];
    let cost = 100;
    let itemPool = determineMagicItems(check);
    let rollTimes = roll(1, 'd6');
    for (let i = 0; i < rollTimes; i++) {
        let rarity = randoArray(itemPool);
        let treasureA = getMagicItem(rarity);
        cost = numberWithCommas(determineCostByRarity(rarity, isConsumable(treasureA)));
        if (!duplicates.includes(treasureA)) {
            duplicates.push(treasureA);
            treasure.push(treasureA + ' - ' + cost + " gp");
        }
    }
    return treasure;
}

function processMagicItem(magicItem) {
    let containsASpell = false;
    const replacements = {
        'armor': {
            check: () => magicItem.includes('armor') &&
                !magicItem.includes('demon armor') &&
                !magicItem.includes('armor of invulnerability') &&
                !magicItem.includes('plate armor of etherealness'),
            value: () => magicItem.includes('mithril') || magicItem.includes('adamantine')
                ? randoArray(metalArmor)
                : (magicItem.includes('+')
                    ? randoArray(highArmors)
                    : randoArray(armor))
        },
        'resistance': {
            check: () => magicItem.includes('resistance') && !magicItem.includes('cloak'),
            value: () => randoArray(resistances) + ' resistance'
        },
        'weapon': {
            check: () => magicItem.includes('weapon'),
            value: () => randoArray(weapons)
        },
        '<color>': {
            check: () => magicItem.includes('<color>'),
            value: () => randoArray(chromaticColors)
        },
        'ammunition': {
            check: () => magicItem.includes('ammunition'),
            value: () => randoArray(ammunition)
        },
        'slaying': {
            check: () => magicItem.includes('of slaying'),
            value: () => randoArray(slaying) + ' slaying'
        },
        'spell scroll': {
            check: () => magicItem.includes('spell scroll'),
            value: () => {
                const scrollSpellLevel = magicItem.slice(-1);
                containsASpell = true;
                return "spell scroll of " + getRandomSpell(scrollSpellLevel);
            }
        },
        'spellwrought tattoo': {
            check: () => magicItem.includes('spellwrought tattoo'),
            value: () => {
                const scrollSpellLevel = magicItem.slice(-1);
                containsASpell = true;
                return "spellwrought tattoo (" + getRandomSpell(scrollSpellLevel) + ")";
            }
        }
    };

    for (const [key, {check, value}] of Object.entries(replacements)) {
        if (check()) {
            magicItem = magicItem.replace(key, value());
        }
    }
    if (containsASpell) {
        // This clips the ending off of a spell scroll or spellwrought tattoo
        magicItem = magicItem.slice(0, -2);
    }
    return magicItem;
}

function generatePatches() {
    let numberOfPatches = roll(4, 'd4');
    let patches = ['2 x daggers', '2 x bullseye lanterns (filled and lit)', '2 x steel mirrors',
        '2 x 10-foot poles', '2 x 50-foot coils of hempen rope', '2 x sacks'];
    let patchCounts = {};
    const patchOptions = [
        {maxRoll: 8, patch: 'bag of 100 gp'},
        {maxRoll: 15, patch: 'silver coffer (500 gp)'},
        {maxRoll: 22, patch: 'iron door (up to 10x10 feet)'},
        {maxRoll: 30, patch: 'bag of 10 gems worth 100 gp each'},
        {maxRoll: 44, patch: '24-foot wooden ladder'},
        {maxRoll: 51, patch: 'riding horse with saddlebags'},
        {maxRoll: 59, patch: 'pit (10x10 feet)'},
        {maxRoll: 68, patch: '4-pack of potions of healing'},
        {maxRoll: 75, patch: 'rowboat'},
        {maxRoll: 83, patch: `spell scroll of <span class="italic">${getRandomSpell(rando(3) + 1)}</span>`},
        {maxRoll: 90, patch: 'pair of mastiffs'},
        {maxRoll: 96, patch: 'window (2x4x2 feet)'},
        {maxRoll: 100, patch: 'portable ram'}
    ];
    // Generate patches and track their counts
    for (let i = 0; i < numberOfPatches; i++) {
        let randomRoll = roll(1, 'd100');
        const foundPatch = patchOptions.find(option => randomRoll <= option.maxRoll);
        if (foundPatch) {
            let patchName = foundPatch.patch;
            if (patchCounts[patchName]) {
                patchCounts[patchName]++;
            } else {
                patchCounts[patchName] = 1;
            }
        }
    }
    // Consolidate and format patches
    for (let [patchName, count] of Object.entries(patchCounts)) {
        if (count > 1) {
            patches.push(`${count} x ${plural(patchName)}`);
        } else {
            patches.push(patchName);
        }
    }
    return patches;
}



function getRandomSpell(level) {
    let spellTable = spells1st;
    switch (level) {
        case "0":
            spellTable = cantrips;
            break;
        case "1":
            spellTable = spells1st;
            break;
        case "2":
            spellTable = spells2nd;
            break;
        case "3":
            spellTable = spells3rd;
            break;
        case "4":
            spellTable = spells4th;
            break;
        case "5":
            spellTable = spells5th;
            break;
        case "6":
            spellTable = spells6th;
            break;
        case "7":
            spellTable = spells7th;
            break;
        case "8":
            spellTable = spells8th;
            break;
        case "9":
            spellTable = spells9th;
    }
    return randoArray(spellTable);
}

function organize(object, array) {
    for (let item in object) {
        if (object.hasOwnProperty(item)) {
            array.push(object[item] + " x " + item)
        }
    }
}

function mergeArray(returnedArray, array) {
    for (let i = 0; i < returnedArray.length; i++) {
        array.push(returnedArray[i])
    }
}

function rollTreasure(number, dice, multiplier = 1) {
    //Returns a rolled number multiplied and then numbered with commas
    let totalRoll = roll(number, dice);
    return numberWithCommas(totalRoll * multiplier)
}

function determineCostByRarity(table, consumable) {
    let itemCost = 20;
    if (table === 'CommonItem') {
        // 20-70 gp
        itemCost = (roll(1, 'd6') + 1) * 10
    } else if (table === 'UncommonMajorItems' || table === 'UncommonMinorItem') {
        // 100-600 gp
        itemCost = roll(1, 'd6') * 100
    } else if (table === 'RareMajorItem' || table === 'RareMinorItem') {
        // 500-5000 gp
        itemCost = roll(1, 'd10') * 500
    } else if (table === 'EpicMajorItem' || table === 'EpicMinorItem') {
        // 5000-50,000 gp
        itemCost = roll(1, 'd10') * 5000
    } else if (table === 'LegendaryMajorItem' || table === 'LegendaryMinorItem') {
        // 5000-50,000 gp
        itemCost = roll(1, 'd10') * 5000
    }
    //Mark down minor items price...
    if (table === 'UncommonMinorItem' ||
        table === 'RareMinorItem' ||
        table === 'EpicMinorItem' ||
        table === 'LegendaryMinorItem') {
        itemCost = itemCost / 2;
    }
    if (consumable) {
        itemCost = itemCost / 2;
    }
    return Math.round(itemCost);
}

// Functions

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
