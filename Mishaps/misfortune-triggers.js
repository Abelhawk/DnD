function loadPage() {
    document.getElementById('loading').style.display = "none";
}

function hideAll() {
    document.getElementById('randoButton').style.display = "none";
    document.getElementById('wildSurgeButton').style.display = "none";
    document.getElementById('spellButton').style.display = "none";
    document.getElementById('potionButton').style.display = "none";
    document.getElementById('injuryButton').style.display = "none";
    document.getElementById('madnessButton').style.display = "none";
    document.getElementById('curseButton').style.display = "none";
    document.getElementById('fleshButton').style.display = "none";
    document.getElementById('trapButton').style.display = "none";

    document.getElementById('spellLevelField').style.display = "none";
    document.getElementById('damageType').style.display = "none";
    document.getElementById('madnessType').style.display = "none";
    document.getElementById('trapLevel').style.display = "none";
}

function checkMode() {
    let mode = document.getElementById('mishapList').value;
    hideAll();
    switch (mode) {
        case 'random':
            document.getElementById('randoButton').style.display = "block";
            break;
        case 'wildSurge':
            document.getElementById('wildSurgeButton').style.display = "block";
            break;
        case 'spellMishap':
            document.getElementById('spellButton').style.display = "block";
            document.getElementById('spellLevelField').style.display = "block";
            break;
        case 'potionMishap':
            document.getElementById('potionButton').style.display = "block";
            break;
        case 'lingerInjury':
            document.getElementById('injuryButton').style.display = "block";
            document.getElementById('damageType').style.display = "block";
            break;
        case 'madnessMishap':
            document.getElementById('madnessButton').style.display = "block";
            document.getElementById('madnessType').style.display = "block";
            break;
        case 'curseMishap':
            document.getElementById('curseButton').style.display = "block";
            break;
        case 'flesh':
            document.getElementById('fleshButton').style.display = "block";
            break;
        case 'trapMishap':
            document.getElementById('trapButton').style.display = "block";
            document.getElementById('trapLevel').style.display = "block";
            break;
    }
}

function randomFate() {
    let num = rando(8)
    switch (num) {
        case 0:
            postText(wildMagic());
            break;
        case 1:
            postText(oopsSpell());
            break;
        case 2:
            postText(oopsPotion());
            break;
        case 3:
            // postText(lingeringInjury());
            // break;
        case 4:
            postText(madness());
            break;
        case 5:
            postText(oopsCursed());
            break;
        case 6:
            postText(fleshWarp());
            break;
        case 7:
            postText(trapDamage());

    }
}

//Done
function wildMagic() {
    let text = randoArray(wildMagicTable);
    //Conditionals
    let height = randomProperty('height');
    let weight = randomProperty('weight');
    let age = randomProperty('age');
    text = text.replace('XX0', height);
    text = text.replace('XX1', madness("madShort"));
    text = text.replace('XX2', roll(1, "d3"));
    text = text.replace('XX3', age);
    text = text.replace('XX4', roll(1, "d6"));
    text = text.replace('XX5', roll(2, "d10"));
    text = text.replace('XX6', roll(1, "d20"));
    text = text.replace('XX7', roll(5, "d6"));
    text = text.replace('XX8', roll(4, "d10"));
    text = text.replace('XX8', roll(1, "d10"));
    text = text.replace('XX9', roll(1, "d8"));
    text = text.replace('X10', roll(1, "d4"));
    text = text.replace('XX3', weight);
    //
    return text;
}

//Done
function oopsSpell() {
    let spellLevel = document.getElementById('spellLevel').value || rando(9);
    let text = randoArray(spellMishaps);
    // Damage types
    text = text.replace('XX0', roll(spellLevel, 'd4'))
    let time = roll(1, 'd10');
    text = text.replace('XX1', time + " minute" + plur(time))
    //
    return text;
}

//Done
function oopsPotion() {
    let text = randoArray(potionMishaps);
    //Damage amounts, poison
    text = text.replace('XX0', roll(6, 'd10'))
    text = text.replace('YY0', roll(1, 'd10'))
    text = text.replace('XX1', randomPoison())
    //
    return text;
}

function lingeringInjury(dmg) {
    let damageType = dmg || document.getElementById('damageTypeInput').value || randoArray(resistances);
    let injuryTitle;
    let injuryDescr;
    let injuryCure;
    let num = roll(1, 'd20');
    let injury = num;
    switch (damageType) {
        case 'acid':
            injury = findObject(num, LIAcid);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            break;
        case 'bludgeoning':
            injury = findObject(num, LIBludge);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            if (injuryDescr === '*PSYCHIC*') {
                num = rando(20);
                let psyInjury = findObject(num, LIPsychic);
                injuryTitle += " (" + psyInjury.name + ")";
                injuryDescr = psyInjury.desc;
                injuryCure = psyInjury.cure;
            }
            break;
        case 'cold':
            injury = findObject(num, LICold);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            break;
        case 'fire':
            injury = findObject(num, LIFire);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            break;
        case 'force':
            injury = findObject(num, LIForce);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            let res = '1';
            let vul = '1';
            while (res === vul) {
                res = randoArray(resistances);
                vul = randoArray(resistances);
            }
            injuryDescr = injuryDescr.replace('XX1', res);
            injuryDescr = injuryDescr.replace('XX2', vul);
            injuryDescr = injuryDescr.replace('XX3', randoArray(diseases));
            break;
        case 'lightning':
            injury = findObject(num, LILightning);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            if (injuryDescr === '*FIRE*') {
                num = rando(20);
                let fiInjury = findObject(num, LIFire);
                injuryTitle += " (" + fiInjury.name + ")";
                injuryDescr = fiInjury.desc;
                injuryCure = fiInjury.cure;
            }
            break;
        case 'necrotic':
            injury = findObject(num, LINecrotic);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            break;
        case 'piercing':
            injury = findObject(num, LIPiercing);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            break;
        case 'poison':
            injury = findObject(num, LIPoison);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            break;
        case 'psychic':
            injury = findObject(num, LIPsychic);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            break;
        case 'radiant':
            injury = findObject(num, LIRadiant);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            break;
        case 'slashing':
            injury = findObject(num, LISlashing);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
            break;
        case 'thunder':
            injury = findObject(num, LIThunder);
            injuryTitle = injury.name;
            injuryDescr = injury.desc;
            injuryCure = injury.cure;
    }
    injuryDescr = injuryDescr.replace('XX0', madness('madLong') + " Also, you have vulnerability to psychic damage.");
    injuryDescr = injuryDescr.replace('XX4', madness('MAAAAD'))
    injuryTitle = `<p class="bold italic">${injuryTitle}</p>`;
    injuryDescr = `<span style="text-align: left">${injuryDescr}</span>`;
    injuryCure = `<p><span class="bold">Cure: </span>${injuryCure}</p>`;
    return injuryTitle + injuryDescr + injuryCure;
}

//Done
function madness(intens) {
    let intensity = intens || document.getElementById('madnessTypeInput').value || 'madLong';
    let text = "ERROR"
    switch (intensity) {
        case 'madShort':
            text = randoArray(madnessForms.short);
            let time = roll(1, 'd10');
            text = text.replace('XXX', time + " minute" + plur(time))
            break;
        case 'madLong':
            text = randoArray(madnessForms.long);
            let time2 = roll(1, 'd10') * 10;
            text = text.replace('YYY', time2 + " hour" + plur(time2))
            text = text.replace('YY2', `<span class="italic">${randoArray(potionTypes)}</span>`)
            let rand = rando(100);
            let condition = 'deafened'
            if (rand >= 24) {
                condition = 'blinded';
            }
            text = text.replace('YY3', condition);
            break;
        case 'MAAAAD':
            text = 'You have a new flaw: "' + randoArray(madnessForms.indefinite) + '"'
    }
    return text;
}

//Done
function oopsCursed() {
    let text = randoArray(curses)
    //Other stuff
    text = text.replace('XX0', randoArray(resistances));
    text = text.replace('XX1', randoArray(alignments));
    text = text.replace('XX2', randoArray(abilityScores));
    text = text.replace('XX3', roll(3, "d10"));
    text = text.replace('XX4', randoArray(skills));
    text = text.replace('XX5', randoArray(creatureTypes));
    text = text.replace('XX6', `<br>1. ${wildMagic()}<br>2. ${wildMagic()}`);
    //
    return text;
}

//Done
function trapDamage() {
    let level = document.getElementById('playerLevel').value || rando(10);
    let danger = document.getElementById('dangerLevel').value || 'dangerous';
    let text = 'Make a DC ';
    let levelOfDamage = 0;
    switch (true) {
        case (level <= 4):
            levelOfDamage = 1;
            break;
        case (level <= 10):
            levelOfDamage = 2;
            break;
        case (level <= 16):
            levelOfDamage = 3;
            break;
        case (level <= 20):
            levelOfDamage = 4;
            break;
    }
    let dcnum = rando(2);
    let dctrap = 10;
    let damage = 2;
    if (danger === 'setback') {
        dctrap = 10;
        switch (levelOfDamage) {
            case 1:
                damage = roll(1, "d10");
                break;
            case 2:
                damage = roll(2, "d10");
                break;
            case 3:
                damage = roll(4, "d10");
                break;
            case 4:
                damage = roll(10, "d10");
                break;
        }
    }
    if (danger === 'dangerous') {
        dcnum = rando(4)
        dctrap = 12;
        switch (levelOfDamage) {
            case 1:
                damage = roll(2, "d10");
                break;
            case 2:
                damage = roll(4, "d10");
                break;
            case 3:
                damage = roll(10, "d10");
                break;
            case 4:
                damage = roll(18, "d10");
                break;
        }
    }
    if (danger === 'deadly') {
        dcnum = rando(5)
        dctrap = 16;
        switch (levelOfDamage) {
            case 1:
                damage = roll(4, "d10");
                break;
            case 2:
                damage = roll(10, "d10");
                break;
            case 3:
                damage = roll(18, "d10");
                break;
            case 4:
                damage = roll(24, "d10");
                break;
        }
    }
    text += (dcnum + dctrap) + " saving throw. You take " + damage + " damage on a failed save, or half on a success."
    return text;
}

//Done
function randomPoison() {
    let num = rando(15);
    switch (num) {
        case 0:
            return "Make a DC 10 Constitution saving throw. " + roll(1, "d4") + " poison damage on a failure."
        case 1:
            return "Make a DC 10 Constitution saving throw. " + roll(1, "d12") + " poison damage and you're poisoned for 24 hours " +
                "on a failure. Half damage on a success."
        case 2:
            return "Make a DC 13 Constitution saving throw. For each failure, " + roll(3, "d6") + " poison damage. Repeat " +
                "the saving throw each turn. Three successes ends the effect."
        case 3:
            return "Make a DC 13 Constitution saving throw. On a failure, you're poisoned and paralyzed for 1 minute. You can " +
                "repeat the saving throw each turn."
        case 4:
            return "Make a DC 13 Constitution saving throw. On a failure, you're poisoned for 1 hour. If you fail by 5 or more," +
                " you fall asleep for the duration. A creature can wake you up with an action or damage."
        case 5:
            return "Make a DC 15 Constitution saving throw. On a failure, you're poisoned and unconscious for 8 hours. A creature " +
                "can wake you up with an action or damage."
        case 6:
            return "Make a DC 15 Constitution saving throw. On a failure, you're poisoned and blinded for 1 hour."
        case 7:
            return "Tonight at the stroke of midnight, make a DC 17 Constitution saving throw. On a failure, you take " + roll(9, "d6")
                + " poison damage, or half on a success."
        case 8:
            return "Make a DC 13 Constitution saving throw. On a failure, you're poisoned and unconscious for 24 hours. You wake " +
                "up if you take damage."
        case 9:
            return "Make a DC 16 Constitution saving throw. On a failure, " + roll(1, "d6") + " poison damage and you're poisoned. " +
                "Every 24 hours, repeat the save, taking " + roll(1, "d6") + " poison damage for each failure. Such damage cannot " +
                "be healed by any means. After 7 successes, the poison ends."
        case 10:
            return "Make a DC 19 Constitution saving throw. On a failure, " + roll(12, "d6") + " poison damage, or half on a success."
        case 11:
            return "Make a DC 11 Constitution saving throw. On a failure, " + roll(3, "d6") + " poison damage, or half on a success."
        case 12:
            return "Make a DC 15 Constitution saving throw. On a failure, you're poisoned and incapacitated for " + roll(4, "d6") +
                " hours."
        case 13:
            return "Make a DC 11 Constitution saving throw. On a failure, you're poisoned for 1 hour and cannot tell lies."
        case 14:
            return "Make a DC 15 Constitution saving throw. On a failure, " + roll(7, "d6") + " poison damage, or half on a success."
    }
}

//Done
function fleshWarp() {
    return randoArray(fleshWarps)
}

function postText(html) {
    let field = document.getElementById('fateGenerate');
    field.innerHTML = html;
}

//-------------------------

function randomProperty(which) {
    let num = roll(1, 'd10');
    if (which === 'height') {
        let odd = (isOdd(num) === 1);
        if (odd) {
            return `You shrink ${num} inches.`
        } else {
            return `You grow ${num} inches.`
        }
    }
    if (which === 'age') {
        let odd = (isOdd(num) === 1);
        if (odd) {
            return `You get ${num} years younger.`
        } else {
            return `You age ${num} years.`
        }
    }
    if (which === 'weight') {
        let odd = (isOdd(num) === 1);
        if (odd) {
            return `You lose ${num} pounds.`
        } else {
            return `You gain ${num} pounds.`
        }
    }

}

function isOdd(num) {
    return num % 2;
}

function plur(number) {
    if (number === 1) {
        return ''
    }
    return 's'
}

function findObject(number, array) {
    let object;
    for (let i = 0; i < array.length; i++) {
        if (array[i].i.includes(number)) {
            object = array[i];
            break;
        }
    }
    return object;
}