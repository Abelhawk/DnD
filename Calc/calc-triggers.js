let advantageBonus = 0;

function loadPage() {
    document.getElementById('loading').style.display = "none";
    document.getElementById('characterButton').style.display = "block";
    checkResult();
}

function checkResult() {
    document.getElementById("endSentence").innerText = '';
    if (document.getElementById("mob").checked) {
        document.getElementById("2").innerHTML = `Their attack bonus is +<input min=0 type="number" class="field" id="bonus" value="0">.`;
        document.getElementById("3").hidden = false;
        document.getElementById("4").innerHTML = `Your Armor Class is <input min=1 type="number" class="field" id="DC" value="10">.`;
    } else {
        document.getElementById("2").innerHTML = `The save DC is <input min=1 type="number" class="field" id="DC" value="10">.`;
        document.getElementById("3").hidden = true;
        document.getElementById("4").innerHTML = `Their saving throw bonus is +<input min=0 type="number" class="field" id="bonus" value="0">.`;

    }
}

function calculate() {
    let creatureType = document.getElementById("creatureType").value;
    let numberOfMobs = document.getElementById("numberOfCreatures").value;
    let bonus = document.getElementById("bonus").value;
    bonus = parseInt(bonus) + advantageBonus;
    let diffClass = document.getElementById("DC").value;
    let result = document.getElementById("endSentence");
    let damage = document.getElementById("damage").value;
    let attackers = percentageThatHit(diffClass - bonus);
    let endResult = Math.floor(attackers * numberOfMobs);
    if (endResult === 0) {
        endResult = 1;
    }
    let text1 = endResult;
    let text2 = 0;
    if (text1 == numberOfMobs) { // <== leave it. Type coercion is good in this case
        text1 = 'All'
    } else {
        text2 = numberOfMobs - text1;
    }
    if ((document.getElementById("mob").checked)) {
        let text = ' of the ' + creatureType + ' hit'
        if (endResult === 1) {
            text = ' of the ' + creatureType + ' hits';
        }
        if (damage !== null && damage !== 0 && damage !== '') {
            let totalDamage = damage * endResult;
            text += ', for a total of ' + totalDamage + ' damage.'
        } else {
            text += '.';
        }
        result.innerText = text1 + text;
        return;
    }
    let text = ' of the ' + creatureType + ' succeed on the saving throw.'
    if (endResult === 1) {
        text = ' of the ' + creatureType + ' succeeds on the saving throw.'
    }
    let textB = '';
    if (text2 === 1) {
        textB = ' One fails.'
    } else {
        textB = ' ' + text2 + ' fail.'
    }
    if (text2 === 0) {
        textB = ''
    }
    result.innerText = text1 + text + textB;
}

function checkAdvantage(which) {
    if (which === 'a') {
        if (document.getElementById("advCheck").checked) {
            advantageBonus = 5;
            document.getElementById("disadvCheck").checked = false;
        }
        else {
            advantageBonus = 0;
        }
    }
    if (which === 'd') {
        if (document.getElementById("disadvCheck").checked) {
            advantageBonus = -5;
            document.getElementById("advCheck").checked = false;
        }
        else {
            advantageBonus = 0;
        }
    }
}

function percentageThatHit(diff) {
    if (diff > 20) {
        diff = 20;
    }
    return (21 - diff) / 20
}

function numberOfHits(mobs, attacksNeeded) {
    let number = Math.floor(mobs / attacksNeeded);
    if (number === 0) {
        return 1;
    } else {
        return number;
    }
}
