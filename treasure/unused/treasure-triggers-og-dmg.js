





// These are wired to the original Magic Tables from the DMG, in case anything breaks.



/*
let textField = document.getElementById("generate");

function loadPage() {
    document.getElementById("disclaimer").style.display = 'none';
    document.getElementById('loading').style.display = "none";
    document.getElementById('yesButton').style.display = "block";
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
        return generateWares(level);
    }
}

function checkResult() {
    if (document.getElementById("auctionHouse").checked) {
        document.getElementById("lebel").textContent = 'Persuasion Check Result:';
        document.getElementById("disclaimer").style.display = 'block';
    } else {
        document.getElementById("lebel").textContent = 'Challenge Level:';
        document.getElementById("disclaimer").style.display = 'none';
    }
}

function generateIndividualTreasure(lvl) {
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
                    console.log("Jackpot!");
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
                    console.log("Jackpot!");
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
                    console.log("Jackpot!");
                    treasure.push((rollTreasure(1, "d6", 1000)) + " gold pieces");
                    treasure.push((rollTreasure(2, "d6", 100)) + " platinum pieces");
            }
    }
    return treasure;
}

function getGems(number, value) { //Gems can be added together
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

function getArtObjects(number, value) {//Art objects must be unique
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

function getMagicItem(table) {
    let magicTable;
    switch (table) {
        case "table A":
            magicTable = magicTableA;
            break;
        case "table B":
            magicTable = magicTableB;
            break;
        case "table C":
            magicTable = magicTableC;
            break;
        case "table D":
            magicTable = magicTableD;
            break;
        case "table E":
            magicTable = magicTableE;
            break;
        case "table F":
            magicTable = magicTableF;
            break;
        case "table G":
            magicTable = magicTableG;
            break;
        case "table H":
            magicTable = magicTableH;
            break;
        case "table I":
            magicTable = magicTableI;
    }
    let randomNumber = rando(magicTable.length);
    let magicItem = magicTable[randomNumber];
    if (magicItem === 'robe of useful items') {
        let patches = generatePatches();
        let patchList = ``;
        for (let i = 0; i < patches.length; i++) {
            patchList += patches[i];
            if (i < patches.length) patchList += `<br>`
        }
        return `<span class='italic robe-of-useful-items'>robe of useful items</span><span class="robe-patches">${patchList}</span>`
    } else {
        magicItem = processMagicItem(magicTable, magicItem);
        return `<span class='italic'>` + magicItem + `</span>`;
    }

}

function generateWares(check) {
    let treasure = [];
    let duplicates = [];
    let rollTimes = roll(1, 'd4');
    let cost = 100;
    if (check <= 5) {
        rollTimes = roll(1, 'd6');
        for (let i = 0; i < rollTimes; i++) {
            cost = (roll(1, 'd6') + 1) * 10;
            let treasureA = getMagicItem("table A"); // Common items
            if (isConsumable(treasureA)) {
                cost = cost / 2;
            }
            cost = numberWithCommas(cost);
            if (!duplicates.includes(treasureA)) {
                duplicates.push(treasureA);
                treasure.push(treasureA + ' - ' + cost + " gp");
            }
        }
    }
    else
        if (check <= 10) {
            for (let i = 0; i < rollTimes; i++) {
                cost = roll(1, 'd6') * 100;
                let treasureB = getMagicItem('table B'); //Uncommon consumables
                if (isConsumable(treasureB)) {
                    cost = cost / 2;
                }
                cost = numberWithCommas(cost);
                treasure.push(treasureB + ' - ' + cost + " gp");
            }
        } else if (check <= 15) {
            for (let i = 0; i < rollTimes; i++) {
                cost = roll(1, 'd6') * 100;
                let treasureC = getMagicItem('table C'); //Rare potions and Uncommon Items
                if (isConsumable(treasureC)) {
                    cost = cost / 2;
                }
                cost = numberWithCommas(cost);
                treasure.push(treasureC + ' - ' + cost + " gp");
            }
        } else if (check <= 20) {
            for (let i = 0; i < rollTimes; i++) {
                cost = roll(1, 'd10') * 500;
                let treasureD = getMagicItem('table D'); //Very Rare consumables
                if (isConsumable(treasureD)) {
                    cost = cost / 2;
                }
                cost = numberWithCommas(cost);
                treasure.push(treasureD + ' - ' + cost + " gp");
            }
        } else if (check <= 25) {
            for (let i = 0; i < rollTimes; i++) {
                cost = roll(1, 'd6') * 25000;
                let treasureE = getMagicItem('table E'); //Very Rare and Legendary consumables
                if (isConsumable(treasureE)) {
                    cost = cost / 4;
                }
                cost = numberWithCommas(cost);
                treasure.push(treasureE + ' - ' + cost + " gp");
            }
        } else if (check <= 30) {
            for (let i = 0; i < rollTimes; i++) {
                cost = roll(1, 'd6') * 100;
                let treasureF = getMagicItem('table F');
                if (isConsumable(treasureF)) {
                    cost = cost / 2;
                }
                cost = numberWithCommas(cost);
                treasure.push(treasureF + ' - ' + cost + " gp");
            }
        } else if (check <= 35) {
            for (let i = 0; i < rollTimes; i++) {
                let cost = roll(1, 'd10') * 500;
                let treasureG = getMagicItem('table G');
                if (isConsumable(treasureG)) {
                    cost = cost / 2;
                }
                cost = numberWithCommas(cost);
                treasure.push(treasureG + ' - ' + cost + " gp");
            }
        } else if (check <= 40) {
            for (let i = 0; i < rollTimes; i++) {
                let cost = roll(1, 'd10') * 5000;
                let treasureH = getMagicItem('table H');
                if (isConsumable(treasureH)) {
                    cost = cost / 2;
                }
                cost = numberWithCommas(cost);
                treasure.push(treasureH + ' - ' + cost + " gp");
            }
        } else if (check >= 41) {
            for (let i = 0; i < rollTimes; i++) {
                let cost = roll(1, 'd10') * 25000;
                let treasureI = getMagicItem('table I');
                if (isConsumable(treasureI)) {
                    cost = cost / 2;
                }
                cost = numberWithCommas(cost);
                treasure.push(treasureI + ' - ' + cost + " gp");
            }
        }
    return treasure;
}

function processMagicItem(magicTable, magicItem) {
    // Assigns a specific type of weapon, armor, ammunition, resistance, or spell
    let randomNumber = rando(magicTable.length);
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
    if (magicItem.includes('ammunition')) {
        magicItem = magicItem.replace('ammunition', randoArray(ammunition))
    }
    if (magicItem.includes('of slaying')) {
        magicItem = magicItem.replace('slaying', randoArray(slaying) + ' slaying')
    }
    if (magicItem.includes('spell scroll')) {
        magicItem = "spell scroll of " + getRandomSpell(magicTable[randomNumber].substr(-1));
    }
    if (magicItem.includes('spellwrought tattoo')) {
        magicItem = "spellwrought tattoo (" + getRandomSpell(magicTable[randomNumber].substr(-1)) + ")";
    }
    if (magicItem.includes('undefined')) {
        alert('ERROR CODE: Emerald')
    }
    return magicItem;
}

function generatePatches() {
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
            array.push(object[item] + " " + item)
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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele !== value;
    });
}
*/