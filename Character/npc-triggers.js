
//-----Global Variables
function Character() {
}

let charIsCreated = false;
let community;
let genders = document.getElementById('gender');
let charNameDiv = document.getElementById('charName');
let charClassDiv = document.getElementById('charClass');
let races = document.getElementById("race");
let subraces = document.getElementById("subrace")
let name = document.getElementById("name");

let characterForm = document.getElementById("characterForm");

//------Dynamic options
let raceOptions = [
    "Human", "Dwarf", "Elf", "Halfling",
    "Half-elf", "Gnome", "Tiefling", "Aasimar",
    "Half-orc", "Dragonborn", "Goliath", "Genasi",
    "Devil", "Aarakocra", "Giant", "Warforged", "Triton",
    "Leonin", "Tortle", "Yuan-ti", "Lizardfolk",
    "Dragon"
];

let subRaceOptions = {
    elf: [
        "High Elf",
        "Wood Elf",
        "Drow",
        "Sea Elf",
        "Shadar-kai",
        "Eladrin"
    ],
    dwarf: [
        "Hill Dwarf",
        "Mountain Dwarf",
        "Duergar"
    ],
    halfling: [
        "Lightfoot Halfling",
        "Stout Halfling"
    ],
    gnome: [
        "Forest Gnome",
        "Rock Gnome",
        "Deep Gnome"
    ],
    genasi: [
        "Fire Genasi",
        "Air Genasi",
        "Earth Genasi",
        "Water Genasi"
    ],
    aasimar: [
        "Fallen Aasimar",
        "Scourge Aasimar",
        "Protector Aasimar"
    ],
    dragonborn: [
        "Red-scale Dragonborn", "Blue-scale Dragonborn", "Black-scale Dragonborn", "White-scale Dragonborn", "Green-scale Dragonborn",
        "Gold-scale Dragonborn", "Silver-scale Dragonborn", "Brass-scale Dragonborn", "Bronze-scale Dragonborn", "Copper-scale Dragonborn"
    ],
    dragon: [
        "Red", "Blue", "Black", "White", "Green", "Gold", "Silver", "Brass", "Bronze", "Copper"
    ]
};

function loadPage() {
    for (let i = 0; i < raceOptions.length; i++) {
        let opt = document.createElement("option");
        opt.value = raceOptions[i];
        opt.innerHTML = raceOptions[i];
        races.appendChild(opt)
    }
    // document.getElementById('loader').style.display = "none";
    document.getElementById('loading').style.display = "none";
    document.getElementById('characterButton').style.display = "block";
}

//------Step 1: Create the character

let your = new Character();

function proceed() {
    your.genderIsMale = true;
    your.race = determineRace();
    community = determineCommunity(your.race);

    if (genders.value === 'female') {
        your.genderIsMale = false;
    } else if (genders.value === 'randomGender') {
        let random = rando(2);
        if (random === 0) your.genderIsMale = false
    }

    your.age = determineAge(your.race, your.class);
    let fullCustomName = name.value.split(" ");
    your.name = fullCustomName[0];
    your.surname = "";
    if (fullCustomName.length > 1)
        for (let i = 1; i < fullCustomName.length; i++) {
            your.surname += fullCustomName[i] + " "
        }
    your.fullName = determineFullName(your.name, your.surname, your.race);
    if (!your.name) {
        your.name = pickFirstName(your.race, your.genderIsMale);
        your.surname = pickLastName(your.race);
        if (your.surname === "xxx") {
            your.fullName = your.name;
        } else {
            your.fullName = determineFullName(your.name, your.surname, your.race);
        }
    }
    charNameDiv.innerText = (your.fullName);
    charClassDiv.innerText = your.genderIsMale ? '♂ ' : '♀ ';
    charClassDiv.innerText += ' ' + (capitalize2(your.race));
}

//---------APPEARANCE

function determineAge(race) {
    let baseAge;

    switch (race) {
        case "human":
        case "aasimar":
        case "tiefling":
        case "goliath":
            baseAge = 15;
            return (baseAge + roll(1, "d8"));
        case "dwarf":
            baseAge = 40;
            return (baseAge + roll(5, "d6"));
        case "elf":
            baseAge = 110;
            return (baseAge + roll(6, "d6"));
        case "gnome":
            baseAge = 40;
            return (baseAge + roll(6, "d6"));
        case "half-elf":
        case "genasi":
            baseAge = 20;
            return (baseAge + roll(2, "d6"));
        case "half-orc":
            baseAge = 14;
            return (baseAge + roll(1, "d6"));
        case "halfling":
            baseAge = 20;
            return (baseAge + roll(3, "d6"));
        case "aarakocra":
            baseAge = 4;
            return (baseAge + roll(2, "d4"));
        case "dragonborn":
            baseAge = 15;
            return (baseAge + roll(1, "d6"));
    }
}

//----------RACE

function determineRace() {
    let r = races.value.toLowerCase();
    if (r !== "randomrace") {
        // return determineSubrace(r);
        return r;
    } else {
        return pickRace();
    }
}

// function determineSubrace(race) {
//     let subs = subraces.value.toLowerCase();
//     if (subs !== "randomSubRace") {
//         return subs;
//     } else {
//         let subRaceArray = [];
//         switch (race) {
//             case "aasimar":
//                 subRaceArray = subraces.aasimar;
//                 break;
//             case "elf":
//             case "half-elf":
//                 subRaceArray = subraces.elf;
//                 break;
//             case "dwarf":
//                 subRaceArray = subraces.dwarf;
//                 break;
//             case "halfling":
//                 subRaceArray = subraces.halfling;
//                 break;
//             case "gnome":
//                 subRaceArray = subraces.gnome;
//                 break;
//             case "genasi":
//                 subRaceArray = subraces.genasi;
//                 break;
//             case "dragonborn":
//                 subRaceArray = subraces.dragonborn;
//                 break;
//             case "dragon":
//                 subRaceArray = subraces.dragon;
//                 break;
//         }
//         let randomIndex = rando(subRaceArray.length);
//         return subRaceArray[randomIndex];
//     }

// }

function determineCommunity(race) {
    switch (race) {
        case "aasimar":
            return "human";
        case "half-elf":
            let chance = rando(2);
            if (chance === 0) {
                return "elf"
            }
            if (chance === 1) {
                return "human"
            }
            break;
        case "genasi":
            let gen = "genasi";
            while (gen === "genasi" || gen === "dragonborn" || gen === "orc" || gen === "aarakocra" || gen === "demon") {
                gen = determineCommunity(pickRace());
            }
            return gen;
        case "half-orc":
            let x = rando(3);
            if (x === 0) {
                return "orc"
            } else {
                return "human"
            }
        case "tiefling":
            let y = rando(3);
            if (y === 0) {
                return "devil"
            } else {
                return "human"
            }
        default:
            return race;
    }
}

//----------NAME

function pickFirstName(race, gender) {
    if (gender === null) {
        let random = rando(2);
        gender = (random === 1);
    }
    switch (race.toLowerCase()) {
        case "human":
        case "aasimar":
            if (gender === true) {
                return maleHuman[rando(maleHuman.length)]
            } else {
                return femaleHuman[rando(femaleHuman.length)]
            }
        case "dwarf":
            if (gender === true) {
                return maleDwarf[rando(maleDwarf.length)]
            } else {
                return femaleDwarf[rando(femaleDwarf.length)]
            }
        case "aarakocra":
            return aarakocraNames[rando(aarakocraNames.length)];
        case "goliath":
            return nicknameGoliath[rando(nicknameGoliath.length)];
        //Goliaths go by their nickname, but have a birth name, nickname, and clan name.
        case "elf":
            if (gender === true) {
                return maleElf[rando(maleElf.length)]
            } else {
                return femaleElf[rando(femaleElf.length)]
            }
        case "halfling":
            if (gender === true) {
                return maleHalfling[rando(maleHalfling.length)]
            } else {
                return femaleHalfling[rando(femaleHalfling.length)]
            }
        case "gnome":
            if (gender === true) {
                return maleGnome[rando(maleGnome.length)]
            } else {
                return femaleGnome[rando(femaleGnome.length)]
            }
        case "half-orc":
            if (gender === true) {
                return maleHalforc[rando(maleHalforc.length)]
            } else {
                return femaleHalforc[rando(femaleHalforc.length)]
            }
        case "tiefling":
            if (gender === true) {
                return maleTiefling[rando(maleTiefling.length)]
            } else {
                return femaleTiefling[rando(femaleTiefling.length)]
            }
        case "half-elf": //Half-elves have elf names if they live among humans, and vice-versa
            if (gender === true) {
                switch (community) {
                    case "elf":
                        return maleHuman[rando(maleHuman.length)];
                    case "human":
                        return maleElf[rando(maleElf.length)];
                }
            } else {
                switch (community) {
                    case "elf":
                        return femaleHuman[rando(femaleHuman.length)];
                    case "human":
                        return femaleElf[rando(femaleElf.length)];
                }
            }
            break;
        case "dragonborn":
            if (gender === true) {
                return maleDragonborn[rando(maleDragonborn.length)]
            } else {
                return femaleDragonborn[rando(femaleDragonborn.length)]
            }
        case "genasi": //Genasi are named based on the community they grow up with
            let x = rando(6);
            if (x > 1) {
                return pickFirstName(community, gender, community)
            } else {
                return genasiNames[rando(genasiNames.length)]
            }
        case "devil":
            let y = rando(3);
            let devilName = devilPref[rando(devilPref.length)] + devilSuff[rando(devilSuff.length)];
            if (y === 0) {
                devilName += ' ' + honorifics[rando(devilPref.length - 1)]
            }
            return devilName;
        case "warforged":
            return warforgedNames[rando(warforgedNames.length)];
        case "triton":
            if (gender === true) {
                return maleTriton[rando(maleTriton.length)]
            } else {
                return femaleTriton[rando(femaleTriton.length)]
            }
        case "leonin":
            if (gender === true) {
                return maleLeonin[rando(maleLeonin.length)]
            } else {
                return femaleLeonin[rando(femaleLeonin.length)]
            }
        case "tortle":
            return tortleNames[rando(tortleNames.length)]
        case "yuan-ti":
            return yuanTiNames[rando(yuanTiNames.length)]
        case "lizardfolk":
            return lizardfolkNames[rando(lizardfolkNames.length)]
        case "giant":
            return giantNames[rando(giantNames.length)]
        case "dragon":
            let numberOfMorphemes = roll(1, 'd3') + 1;
            let dragonName = '';
            for (let i = 0; i < numberOfMorphemes; i++) {
                dragonName += dragonNameElements[rando(dragonNameElements.length)];
                }
            return capitalize2(dragonName);            
        default:
            return "???";
    }
}

function pickLastName(race) {
    switch (race) {
        case "human":
        case "aasimar":
            let last = humanSurname[rando(humanSurname.length)];
            if (last === 'FAMILIALNAME') {
                return maleHuman[rando(maleHuman.length)] + 'son';
            }
            return last;
        case "elf":
            return elfFamily[rando(elfFamily.length)];
        case "dwarf":
            return dwarfClan[rando(dwarfClan.length)];
        case "halfling":
            return halflingFamily[rando(halflingFamily.length)];
        case "gnome":
            return gnomeClan[rando(gnomeClan.length)];
        case "dragonborn":
            return dragonbornClan[rando(dragonbornClan.length)];
        case "genasi":
            return pickLastName(community);
        case "half-elf":
            if (community === "elf") return elfFamily[rando(elfFamily.length)];
            return humanSurname[rando(humanSurname.length)];
        case "goliath":
            return goliathClan[rando(goliathClan.length)];
        case "half-orc":
        case "tiefling":
            if (community === "human") {
                let last2 = humanSurname[rando(humanSurname.length)];
                if (last2 === 'FAMILIALNAME') {
                    alert('Familial name!');
                    return maleHuman[rando(maleHuman.length)] + 'son';
                }
                return last2;
            }
            return '';
        case "triton":
            let w = rando(3);
            if (w === 3) {
                return tritonSurnames[rando(tritonSurnames.length)];
            }
            return ""
        case "leonin":
            return "of the " + leoninPride1[rando(leoninPride1.length)] + leoninPride2[rando(leoninPride2.length)];
        default:
            return "";
    }
}

function determineFullName(first, last, race) {
    if (race === "goliath") {
        let birthName = goliathNames[rando(goliathNames.length)];
        return (birthName + " " + first + " " + last);
    } else if (race === "dragonborn") {
        return (last + " " + first);
    } else {
        return (first + " " + last);
    }
}

//------Randomizers

function pickRace() {
    let x = rando(100);
    x++;
    let output;
    if (x <= 93) {
        switch (true) {
            case (x <= 40):
                output = "human";
                break;
            case (x <= 50):
                output = "dwarf";
                break;
            case (x <= 60):
                output = "elf";
                break;
            case (x <= 70):
                output = "halfling";
                break;
            case (x <= 75):
                output = "dragonborn";
                break;
            case (x <= 80):
                output = "gnome";
                break;
            case (x <= 85):
                output = "half-elf";
                break;
            case (x <= 90):
                output = "half-orc";
                break;
            case (x <= 93):
                output = "tiefling";
        }
    } //Rare races
    else {
        switch (true) {
            case (x <= 95):
                output = "aasimar";
                break;
            case (x <= 97):
                output = "goliath";
                break;
            case (x <= 99):
                output = "aarakocra";
                break;
            case (x === 100):
                output = "genasi";
                break;
        }
    }
    community = output;
    return output;
}

//-------Utility functions

function capitalize2(str) {
    return str.replace(/\w\S*/g, function (txt) {
        if (!txt.includes("of") && !txt.includes("the")) {
            txt = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
        return txt;
    });
}

function aAn(str) {
    //A function to switch between "a" and "an"
    for (let i = 0; i < vowels.length; i++) {
        if (str[0] === vowels[i]) {
            return ("an " + str)
        }
    }
    return ("a " + str);
}

function pluralRace(race) {
    let pluralForm = race;
    switch (race) {
        case "dwarf":
            pluralForm = "dwarves";
            break;
        case "elf":
            pluralForm = "elves";
            break;
        case "half-elf":
            pluralForm = "half-elves";
            break;
        case "human":
        case "halfling":
        case "half-orc":
        case "gnome":
        case "goliath":
        case "tiefling":
            pluralForm = (race + "s");
    }
    return pluralForm;
}
