function loadPage() {
    document.getElementById('loading').style.display = "none";
    document.getElementById('characterButton').style.display = "block";
    checkResult();
}

function checkResult() {
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
    let numberOfMobs = document.getElementById("numberOfCreatures").value;
    let bonus = document.getElementById("bonus").value;
    let diffClass = document.getElementById("DC").value;
    let result = document.getElementById("endSentence");

    let damage = document.getElementById("damage").value;
    let attackers = percentageThatHit(diffClass - bonus);
    console.log(attackers)
    let endResult = Math.floor(attackers * numberOfMobs);
    let text1 = endResult;
    if (endResult == numberOfMobs) {
        text1 = 'All'
    }

    if ((document.getElementById("mob").checked)) {
        let text = ' of the creatures hit'
        if (endResult === 1) {
            text = " creature hits";
        }
        if (damage !== null && damage !== 0 && damage !== '') {
            let totalDamage = damage * endResult;
            console.log(totalDamage)
            text += ', for a total of ' + totalDamage + ' damage.'
        } else {
            text += '.';
        }
        result.innerText = text1 + text;
        return;
    }
    let text = ' of the creatures succeed on the saving throw.'
    if (endResult === 1) {
        text = " creature succeeds on the saving throw.";
    }
    result.innerText = endResult + text;
}

function percentageThatHit(diff) {
    if (diff > 20) {
        diff = 20;
    }
    return (21 - diff) / 20
    // if (diff <= 5) {
    //     return 1;
    // } else if (diff <= 12) {
    //     return 2
    // } else if (diff <= 14) {
    //     return 3;
    // } else if (diff <= 16) {
    //     return 4;
    // } else if (diff <= 18) {
    //     return 5;
    // } else if (diff === 19) {
    //     return 10;
    // } else if (diff >= 20) {
    //     return 20;
    // }
}

function numberOfHits(mobs, attacksNeeded) {
    let number = Math.floor(mobs / attacksNeeded);
    if (number === 0) {
        return 1;
    } else {
        return number;
    }
}
