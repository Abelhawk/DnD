let textField = $('.generate');

function refreshPage() {
    document.getElementById('loading').style.display = "none";
    document.getElementById('buttonbutton').style.display = "block";
}

function activate() {
    textField.html(`<p>` + generate() + `</p>`);
}

function generate() {
    let first;
    let landmarkArray = [];
    let radios = document.getElementsByTagName('input');
    let biome;
    let moodArray = [];
    moodArray.push(defaults);
    let second;
    let result;
    //First word (mood)
    if (document.getElementById("peaceful").checked) {
        moodArray.push(peace);
    }
    if (document.getElementById("dangerous").checked) {
        moodArray.push(danger);
    }
    if (document.getElementById("scary").checked) {
        moodArray.push(scary);
    }
    if (document.getElementById("natural").checked) {
        moodArray.push(natural);
    }

    if (moodArray.length > 1) {
        first = randoArray(randoArray(moodArray));
    } else {
        while (first === undefined) {
            let z = rando(moodArray[0].length);
            first = moodArray[0][z];
        }
    }
    //Second part of word (biome)
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked && notALocationDefiner(radios[i])) {
            biome = radios[i].value;
        }
    }
    switch (true) {
        case (biome === "grassland"):
            second = randoArray(grassland);
            landmarkArray.push(compound);
            landmarkArray.push(landmarks);
            break;
        case (biome === "hills"):
            second = isDuplicate(first, hills);
            landmarkArray.push(compound);
            landmarkArray.push(landmarks);
            break;
        case (biome === "forest"):
            second = isDuplicate(first, forest);
            landmarkArray.push(compound);
            landmarkArray.push(landmarks);
            break;
        case (biome === "desert"):
            second = isDuplicate(first, desert);
            landmarkArray.push(compound);
            landmarkArray.push(desertMarks);
            break;
        case (biome === "arctic"):
            second = isDuplicate(first, arctic);
            landmarkArray.push(compound);
            landmarkArray.push(arcticMarks);
            break;
        case (biome === "coastal"):
            second = isDuplicate(first, coastal);
            landmarkArray.push(compound);
            landmarkArray.push(coastalMarks);
            break;
        case (biome === "swamp"):
            second = isDuplicate(first, swamp);
            landmarkArray.push(compound);
            landmarkArray.push(swampMarks);
            break;
        case (biome === "urban"):
            second = isDuplicate(first, grassland);
            landmarkArray.push(townMarks);
            landmarkArray.push(townMarks);
    }
    if (document.getElementById("XofX").checked) {
        let random = rando(2);
        if (random === 1) {
            return (capitalize(second) + " of " + capitalize(plural(first)));
        } else {
            return (capitalize(first) + " of " + capitalize(plural(second)));
        }
    }
    result = first + second;
    let landmark = randoArray(isDuplicate(second, landmarkArray));
    if (document.getElementById("compounds").checked) {
        result += (" " + landmark);
    }
    if (document.getElementById("descriptive").checked) {
        let type = rando(6);
        if (type >= 2) {
            let firstSec = rando(2);
            if (firstSec === 1) {
                result = first;
            } else {
                result = second;
            }
            result += " " + landmark;
        } else {
            if (landmark.slice(-1) !== 's') {
                landmark = plural(landmark);
            }
            result = randoArray(numbers) + " " + landmark
        }
    }
    if (document.getElementById("possess").checked) {
        let random = rando(6);
        if (random === 1) {
            result = randoArray(possessives);
        } else {
            let random2 = rando(2);
            if (random2 === 1) {
                result = pickFirstName('human', null) + "'s";
            } else {
                result = pickLastName('human') + "'s";
            }
        }
        result += " " + landmark;
    }
    return capitalize(result);
}

function notALocationDefiner(radio) {
    return (radio.value !== "" && radio.value !== "compounds" && radio.value !== "descriptive" && radio.value !== "XofX")
}

//---------------------

function plural(str) {
    let secondToLast = str.slice(-2);
    switch (str.substr(-1)) {
        case "s":
        case "x":
        case "o":
            return str + "es";
        case "h":
            switch (secondToLast) {
                case "c":
                case "s":
                    return str + "es";
                case "t":
                    return str + "s";
            }
            break;
        case "y":
            return str.substring(0, str.length - 1) + "ies";
        case "f":
            if (secondToLast === "f") {
                return str.substring(0, str.length - 2) + "ves";
            } else {
                return str.substring(0, str.length - 1) + "ves";
            }
        case "e":
            if (secondToLast === "f") {
                return str.substring(0, str.length - 1) + "ves";
            }
        default:
            return str + "s";
    }
}

function isDuplicate(first, biome) {
    let second = randoArray(biome);
    if (first === undefined) {
        alert("Undefined error! I mean, the variable's undefined, not the error itself.")
    }
    if (first === second || second === undefined) {
        isDuplicate(first, biome)
    } else {
        return second;
    }
}
