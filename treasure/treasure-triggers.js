let textField = document.getElementById("generate");

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
    let level = document.getElementById("playerLevel").value;
    if (individ.checked) {
        return generateIndividualTreasure(level);
    } else {
        return generateHoard(level);
    }
}

function generateIndividualTreasure(lvl) {
    let randomNumber = rando(100);
    let treasure = [];
    switch (true) {
        case (lvl < 5):
            switch (true) {
                case (randomNumber <= 30):
                    treasure.push(roll(5, "d6") + " copper pieces");
                    break;
                case (randomNumber <= 60):
                    treasure.push(roll(4, "d6") + " silver pieces");
                    break;
                case (randomNumber <= 95):
                    treasure.push(roll(3, "d6") + " gold pieces");
                    break;
                default:
                    treasure.push(roll(1, "d6") + " platinum pieces");
            }
            break;
        case (lvl < 10):
            switch (true) {
                case (randomNumber <= 30):
                    treasure.push((roll(4, "d6", 100)) + " copper pieces");
                    treasure.push((roll(1, "d6", 5)) + " gold pieces");
                    break;
                case (randomNumber <= 60):
                    treasure.push((roll(6, "d6", 10)) + " silver pieces");
                    treasure.push((roll(2, "d6", 10)) + " gold pieces");
                    break;
                case (randomNumber <= 95):
                    treasure.push((roll(4, "d6", 10)) + " gold pieces");
                    break;
                default:
                    treasure.push((roll(2, "d6", 10)) + " gold pieces");
                    treasure.push(roll(3, "d6") + " platinum pieces");
            }
            break;
        case (lvl < 16):
            switch (true) {
                case (randomNumber <= 20):
                    treasure.push((roll(4, "d6", 100)) + " silver pieces");
                    treasure.push((roll(1, "d6", 100)) + " gold pieces");
                    break;
                case (randomNumber <= 75):
                    treasure.push((roll(2, "d6", 100)) + " gold pieces");
                    treasure.push((roll(1, "d6", 10)) + " platinum pieces");
                    break;
                default:
                    treasure.push((roll(2, "d6", 100)) + " gold pieces");
                    treasure.push((roll(2, "d6", 10)) + " platinum pieces");
            }
            break;
        case (lvl >= 17):
            switch (true) {
                case (randomNumber <= 15):
                    treasure.push((roll(9, "d6", 100)) + " gold pieces");
                    break;
                case (randomNumber <= 55):
                    treasure.push((roll(1, "d6", 1000)) + " gold pieces");
                    treasure.push((roll(1, "d6", 100)) + " platinum pieces");
                    break;
                default:
                    treasure.push((roll(1, "d6", 1000)) + " gold pieces");
                    treasure.push((roll(2, "d6", 100)) + " platinum pieces");
            }
    }
    return treasure;
}

function generateHoard(lvl) {

}

function rando(probability) {
    return Math.floor(Math.random() * probability);
}

function randoArray(array) {
    return array[rando(array.length)];
}

function roll(number, dice, multiplier) {
    let result;
    if (!multiplier) multiplier = 1;
    switch (dice) {
        case "d4":
            result = (rando(4) * number) + 1;
            break;
        case "d6":
            result = (rando(6) * number) + 1;
            break;
        case "d8":
            result = (rando(8) * number) + 1;
            break;
        case "d10":
            result = (rando(10) * number) + 1;
            break;
        case "d12":
            result = (rando(12) * number) + 1;
            break;
        case "d100":
            result = (rando(100)) + 1;
    }
    return numberWithCommas(result * multiplier)
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}