function rando(probability) {
    //If you want a binary one, do rando(2), which returns a 0 or a 1.
    return Math.floor(Math.random() * probability);
}

function randoArray(array) {
    if (!array) {
        alert('ERROR CODE: Garnet')
        return;
    }
    return array[rando(array.length)];
}

function capitalize(str) {
    if (!str) {
        alert('ERROR CODE: Ruby')
    }
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


let vowels = ["a", "e", "i", "o", "u"];

//-----A function to switch between "a" and "an"
function aAn(str) {
    for (let i = 0; i < vowels.length; i++) {
        if (str[0] === vowels[i]) {
            return ("an " + str)
        }
    }
    return ("a " + str);
}

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

function plural(str) {
    if (!str) {
        alert('ERROR CODE: Sapphire')
    }
    let secondToLast = str.charAt(str.length - 2);
    switch (str.substr(-1)) {
        case 's':
            if (secondToLast !== 's') {
                return str;
            }
        case 'x':
        case 'o':
            return str + 'es';
        case 'h':
            if (secondToLast === 'c' || secondToLast === 's') {
                return str + 'es';
            }
        case 'y':
            if (secondToLast === 'a' ||
                secondToLast === 'e' ||
                secondToLast === 'i' ||
                secondToLast === 'o'
            ) {
                return str + 's';
            } else {
                return str.substring(0, str.length - 1) + 'ies';
            }
        case 'f':
            if (secondToLast === 'f') {
                return str + 's';
            } else {
                return str.substring(0, str.length - 1) + 'ves';
            }
        case 'e':
            if (secondToLast === 'f') {
                return str.substring(0, str.length - 1) + 'ves';
            }
        default:
            return str + 's';
    }
}

function bold(text) {
    return `<span class="bold">${text}</span>`
}