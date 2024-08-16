function rando(probability) {
    //If you want a binary one, do rando(2), which returns a 0 or a 1.
    return Math.floor(Math.random() * probability);
}

function randoArray(array) {
    return array[rando(array.length)];
}

function coinFlip(heads, tails) {
    return rando(2) === 0 ? heads : tails;
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
    const diceType = parseInt(dice.slice(1)); // Can be any "d" number (d1, d1000, etc.)
    let totalRoll = 0;
    for (let i = 0; i < number; i++) {
        totalRoll += (rando(diceType) + 1); // +1 because rando() returns 0 to diceType-1
    }
    return totalRoll;
}

function plural(str) {
    //special cases
    if (str === 'staff') {
        return 'staves';
    }
    //typical
    const lastChar = str.charAt(str.length - 1);
    const secondToLastChar = str.charAt(str.length - 2);
    switch (lastChar) {
        case 's':
        case 'x':
        case 'o':
            return str + 'es';
        case 'h':
            if (secondToLastChar === 'c' || secondToLastChar === 's') {
                return str + 'es';
            }
            break;
        case 'y':
            if ('aeiou'.includes(secondToLastChar)) {
                return str + 's';
            } else {
                return str.slice(0, -1) + 'ies';
            }
        case 'f':
            if (secondToLastChar === 'f') {
                return str.slice(0, -1) + 'ves';
            } else {
                return str + 'ves';
            }
        default:
            return str + 's';
    }
}

function bold(text) {
    return `<span class="bold">${text}</span>`
}