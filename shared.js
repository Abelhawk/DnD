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
        alert ('ERROR CODE: Ruby')
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
    switch (dice) {
        case "d3":
            return ((rando(3) + 1) * number);
        case "d4":
            return ((rando(4) + 1) * number);
        case "d6":
            return ((rando(6) + 1) * number);
        case "d8":
            return ((rando(8) + 1) * number);
        case "d10":
            return ((rando(10) + 1) * number);
        case "d12":
            return ((rando(12) + 1) * number);
        case "d20":
            return ((rando(20) + 1) * number);
        case "d100":
            return ((rando(100) + 1));
    }
}

function plural(str) {
    if (!str) {
        alert('ERROR CODE: Sapphire')
    }
    let secondToLast = str.charAt(str.length-2);
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