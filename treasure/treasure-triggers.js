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

function generateIndividualTreasure(lvl) { // Just generates coins.
    // todo: Simplify this like the other ones by setting variables for the dice and stuff
    let randomNumber = rollTreasure(1, 'd100');
    let treasure = [];
    switch (true) {
        case (lvl <= 4):
            switch (true) {
                case (randomNumber <= 30):
                    treasure.push(rollTreasure(5, "d6") + " copper pieces");
                    break;
                case (randomNumber <= 60):
                    treasure.push(rollTreasure(4, "d6") + " silver pieces");
                    break;
                case (randomNumber <= 95):
                    treasure.push(rollTreasure(3, "d6") + " gold pieces");
                    break;
                case (randomNumber <= 100):
                    treasure.push(rollTreasure(1, "d6") + " platinum pieces");
            }
            break;
        case (lvl <= 10):
            switch (true) {
                case (randomNumber <= 30):
                    treasure.push((rollTreasure(4, "d6", 100)) + " copper pieces");
                    treasure.push((rollTreasure(1, "d6", 5)) + " gold pieces");
                    break;
                case (randomNumber <= 60):
                    treasure.push((rollTreasure(6, "d6", 10)) + " silver pieces");
                    treasure.push((rollTreasure(2, "d6", 10)) + " gold pieces");
                    break;
                case (randomNumber <= 95):
                    treasure.push((rollTreasure(4, "d6", 10)) + " gold pieces");
                    break;
                case (randomNumber <= 100):
                    treasure.push((rollTreasure(2, "d6", 10)) + " gold pieces");
                    treasure.push(rollTreasure(3, "d6") + " platinum pieces");
            }
            break;
        case (lvl <= 16):
            switch (true) {
                case (randomNumber <= 20):
                    treasure.push((rollTreasure(4, "d6", 100)) + " silver pieces");
                    treasure.push((rollTreasure(1, "d6", 100)) + " gold pieces");
                    break;
                case (randomNumber <= 75):
                    treasure.push((rollTreasure(2, "d6", 100)) + " gold pieces");
                    treasure.push((rollTreasure(1, "d6", 10)) + " platinum pieces");
                    break;
                case (randomNumber <= 100):
                    treasure.push((rollTreasure(2, "d6", 100)) + " gold pieces");
                    treasure.push((rollTreasure(2, "d6", 10)) + " platinum pieces");
            }
            break;
        case (lvl >= 17):
            switch (true) {
                case (randomNumber <= 15):
                    treasure.push((rollTreasure(9, "d6", 100)) + " gold pieces");
                    break;
                case (randomNumber <= 55):
                    treasure.push((rollTreasure(1, "d6", 1000)) + " gold pieces");
                    treasure.push((rollTreasure(1, "d6", 100)) + " platinum pieces");
                    break;
                case (randomNumber <= 100):
                    treasure.push((rollTreasure(1, "d6", 1000)) + " gold pieces");
                    treasure.push((rollTreasure(2, "d6", 100)) + " platinum pieces");
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
    let rollTimes = roll(1, 'd4');
    let cost = 100;
    itemPool = determineMagicItems(check);
    rollTimes = roll(1, 'd6');
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

function processMagicItem(magicItem) { // Assigns a specific type of weapon, armor, ammunition, resistance, or spell
    if (magicItem.includes('armor')
        && !magicItem.includes('demon armor')
        && !magicItem.includes('armor of invulnerability')
        && !magicItem.includes('plate armor of etherealness')
    ) {
        if (magicItem.includes('mithril') || magicItem.includes('adamantine')) {
            magicItem = magicItem.replace('armor', randoArray(metalArmor));
        } else {
            if (magicItem.includes('+')) {
                magicItem = magicItem.replace('armor', randoArray(highArmors));
            }
            else {
                magicItem = magicItem.replace('armor', randoArray(armor));
            }
        }
    }
    if (magicItem.includes('resistance') && !magicItem.includes('cloak')) {
        magicItem = magicItem.replace('resistance', randoArray(resistances) + ' resistance');
    }
    if (magicItem.includes('weapon')) {
        magicItem = magicItem.replace('weapon', randoArray(weapons))
    }
    if (magicItem.includes('<color>')) {
        magicItem = magicItem.replace('<color>', randoArray(chromaticColors))
    }
    if (magicItem.includes('ammunition')) {
        magicItem = magicItem.replace('ammunition', randoArray(ammunition))
    }
    if (magicItem.includes('of slaying')) {
        magicItem = magicItem.replace('slaying', randoArray(slaying) + ' slaying')
    }
    if (magicItem.includes('spell scroll')) {
        let scrollSpellLevel = magicItem.substr(-1);
        console.log('Scroll level is ' + scrollSpellLevel)
        magicItem = "spell scroll of " + getRandomSpell(scrollSpellLevel);
    }
    if (magicItem.includes('spellwrought tattoo')) {
        let scrollSpellLevel = magicItem.substr(-1);
        magicItem = "spellwrought tattoo (" + getRandomSpell(scrollSpellLevel) + ")";
    }
    if (magicItem.includes('undefined')) {
        alert('ERROR CODE: Emerald')
    }
    return magicItem;
}

function generatePatches() { //Generates patches for a robe of useful items
    let numberOfPatches = roll(4, 'd4')
    let patches = ['2 x daggers', '2 x bullseye lanterns (filled and lit)', '2 x steel mirrors', '2 x 10-foot poles',
        '2 x 50-foot coils of hempen rope', '2 x sacks'
    ];
    for (let i = 0; i < numberOfPatches; i++) {
        let randomRoll = roll(1, 'd100');
        if (randomRoll <= 8) patches.push('bag of 100 gp')
        else if (randomRoll <= 15) patches.push('silver coffer (500 gp)')
        else if (randomRoll <= 22) patches.push('iron door (up to 10x10 feet)')
        else if (randomRoll <= 30) patches.push('bag of 10 gems worth 100 gp each')
        else if (randomRoll <= 44) patches.push('24-foot wooden ladder')
        else if (randomRoll <= 51) patches.push('riding horse with saddlebags')
        else if (randomRoll <= 59) patches.push('pit (10x10 feet)')
        else if (randomRoll <= 68) patches.push('4-pack of potions of healing')
        else if (randomRoll <= 75) patches.push('rowboat')
        else if (randomRoll <= 83) {
            let randomNumber = rando(3) + 1;
            patches.push(`spell scroll of ` + `<span class="italic">` + getRandomSpell(randomNumber) + `</span>`);
        } else if (randomRoll <= 90) patches.push('pair of mastiffs')
        else if (randomRoll <= 96) patches.push('window (2x4x2 feet)')
        else if (randomRoll <= 100) patches.push('portable ram')
    }
    // Count duplicates
    // Screw it
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

function rollTreasure(number, dice, multiplier) {
    let diceType = 1;
    if (!multiplier) multiplier = 1;
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
    return numberWithCommas(totalRoll * multiplier)
}

function determineCostByRarity(table, consumable) {
    let itemCost = 20;
    if (table === 'CommonItem') {
        // 20-70 gp
        itemCost = (roll(1, 'd6') + 1) * 10
    }
    else if (table === 'UncommonMajorItems' || table ==='UncommonMinorItem') {
        // 100-600 gp
        itemCost = roll(1, 'd6') * 100
    }
    else if (table === 'RareMajorItem' || table ==='RareMinorItem') {
        // 500-5000 gp
        itemCost = roll(1, 'd10') * 500
    }
    else if (table === 'EpicMajorItem' || table ==='EpicMinorItem') {
        // 5000-50,000 gp
        itemCost = roll(1, 'd10') * 5000
    }
    else if (table === 'LegendaryMajorItem' || table ==='LegendaryMinorItem') {
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

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele !== value;
    });
}
