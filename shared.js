function rando(probability) {
    //If you want a binary one, do rando(2), which returns a 0 or a 1.
    return Math.floor(Math.random() * probability);
}

function capitalize(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

//-----A function to switch between "a" and "an"
let vowels = ["a", "e", "i", "o", "u"];

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
        case "d100":
            return ((rando(100) + 1));
    }
};
