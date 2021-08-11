/*
* TO-DO LIST:
*
* - Get started on families and backstories
*
*/


//-----Global Variables
function Character() {
}

let Father = new Character;
let Mother = new Character;
let subclassFix;
let charIsCreated = false;
let community;
let genders = document.getElementById('gender');
let charNameDiv = document.getElementById('charName');
let charClassDiv = document.getElementById('charClass');
let races = document.getElementById("race");
let name = document.getElementById("name");
let classes = document.getElementById("class");
let domains = document.getElementById("domain");
let patrons = document.getElementById("patron");
let origins = document.getElementById("origin");

let characterForm = document.getElementById("characterForm");

//------Dynamic options
let raceOptions = [
    "Human", "Dwarf", "Elf", "Halfling",
    "Half-elf", "Gnome", "Tiefling", "Aasimar",
    "Half-orc", "Dragonborn", "Goliath", "Genasi",
    "Devil", "Aarakocra", "Warforged", "Triton",
    "Leonin", "Tortle", "Yuan-ti", "Lizardfolk"
];
let classOptions = [
    "Barbarian", "Bard",
    "Cleric", "Druid",
    "Fighter", "Monk",
    "Paladin", "Ranger",
    "Rogue", "Sorcerer",
    "Warlock", "Wizard",
    "Artificer"
];
let domainOptions = [
    "Arcana", "Death", "Forge", "Grave", "Knowledge", "Life",
    "Light", "Nature", "Order", "Tempest", "Trickery", "War",
    "Peace", "Twilight"
];
let patronOptions = [
    "Archfey", "Celestial", "Fiend",
    "Great Old One", "Hexblade", "Undying",
    "Undead", "Genie", "Fathomless"
];
let originOptions = [
    "Divine Soul", "Draconic Bloodline",
    "Shadow Magic", "Storm Sorcery", "Wild Magic",
    "Aberrant Mind", "Clockwork Soul"
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
    ]
};

function loadPage() {
    for (let i = 0; i < raceOptions.length; i++) {
        let opt = document.createElement("option");
        opt.value = raceOptions[i];
        opt.innerHTML = raceOptions[i];
        races.appendChild(opt)
    }
    for (let i = 0; i < classOptions.length; i++) {
        let opt = document.createElement("option");
        opt.value = classOptions[i];
        opt.innerHTML = classOptions[i];
        classes.appendChild(opt)
    }
    for (let i = 0; i < domainOptions.length; i++) {
        let opt = document.createElement("option");
        opt.value = domainOptions[i];
        opt.innerHTML = domainOptions[i];
        domains.appendChild(opt)
    }
    for (let i = 0; i < patronOptions.length; i++) {
        let opt = document.createElement("option");
        opt.value = patronOptions[i].replace(/\s/g, '');
        opt.innerHTML = patronOptions[i];
        patrons.appendChild(opt)
    }
    for (let i = 0; i < originOptions.length; i++) {
        let opt = document.createElement("option");
        opt.value = originOptions[i].replace(/\s/g, '');
        opt.innerHTML = originOptions[i];
        origins.appendChild(opt)
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

    your.pClass = determineClass();
    if (!your.pClass) {
        alert('error determining class.')
    }
    your.fullClass = checkSubclass(your.pClass);
    if (!your.fullClass) {
        alert('error determining full class.')
    }

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
    if (your.fullClass) {
        your.fullClass = capitalize2(your.fullClass);
        if (your.fullClass.includes('Of The')) {
            your.fullClass = your.fullClass.replace('Of The', 'of the')
        }
        charClassDiv.innerText = your.genderIsMale ? '♂' : '♀';
        if (your.fullClass.toLowerCase() === "warlock of the hexblade") {
            charClassDiv.innerText += (capitalize2(your.race) + " Hexblade Warlock");
        } else {
            charClassDiv.innerText += (capitalize2(your.race) + " " + your.fullClass);
        }
    }
    //todo: shouldn't need this check
    if (charIsCreated === false) {
        let button1 = document.getElementById("familyButton");
        let button2 = document.getElementById("backstoryButton");
        let button3 = document.getElementById("appearanceButton");
        let welcome = document.getElementById("welcome");
        button1.style.display = "block";
        button2.style.display = "block";
        button3.style.display = "block";
        welcome.style.display = "none";
        charIsCreated = true;
    }
}

//-----Step 2: Create appearance---------------------------------------------->})][][][]K<-o

// function createAppearance(){
//     $(".guide").hide();
//     $("#begin").hide();
//     $('#titleName').attr("contenteditable", false);
//     $('#titleCharacter').attr("contenteditable", false);
//
//
//     $('#genAppearance').text(
//         `You are ${your.fullName}, ${aAn(your.race)} of ${your.age} years old.`
//     );
//
// }

//------Step 2: Generate Family--------------------------------------------->})][][][]K<-o

function createFamily() {
    let a;
    if (your.race === "half-elf" || your.race === "half-orc" || your.race === "tiefling" || your.race === "aasimar") {
        let x = rando(raceOptions.length);
        switch (your.race) {
            case "half-elf":
                switch (true) {
                    case (x < 6):
                        a = rando(2);
                        if (a === 1) {
                            Father.race = "elf";
                            Mother.race = "human";
                        } else {
                            Father.race = "human";
                            Mother.race = "elf";
                        }
                        break;
                    case (x === 6):
                        a = rando(2);
                        if (a === 1) {
                            Father.race = "elf";
                            Mother.race = "half-elf";
                        } else {
                            Father.race = "half-elf";
                            Mother.race = "elf";
                        }
                        break;
                    case (x === 7):
                        a = rando(2);
                        if (a === 1) {
                            Father.race = "human";
                            Mother.race = "half-elf";
                        } else {
                            Father.race = "half-elf";
                            Mother.race = "human";
                        }
                        break;
                    case (x === 8):
                        Father.race = "half-elf";
                        Mother.race = "half-elf";
                }
                break;
            case "half-orc":
                switch (true) {
                    case (x <= 3):
                        a = rando(2);
                        if (a === 1) {
                            Father.race = "orc";
                            Mother.race = "human";
                        } else {
                            Father.race = "human";
                            Mother.race = "orc";
                        }
                        break;
                    case (x <= 5):
                        a = rando(2);
                        if (a === 1) {
                            Father.race = "orc";
                            Mother.race = "half-orc";
                        } else {
                            Father.race = "half-orc";
                            Mother.race = "orc";
                        }
                        break;
                    case (x === 7):
                        a = rando(2);
                        if (a === 1) {
                            Father.race = "human";
                            Mother.race = "half-orc";
                        } else {
                            Father.race = "half-orc";
                            Mother.race = "human";
                        }
                        break;
                    case (x === 8):
                        Father.race = "half-orc";
                        Mother.race = "half-orc";
                }
                break;
            case "tiefling":
                switch (true) {
                    case (x <= 4):
                        Father.race = "human";
                        Mother.race = "human";
                        break;
                    case (x <= 6):
                        a = rando(2);
                        if (a === 1) {
                            Father.race = "tiefling";
                            Mother.race = "human";
                        } else {
                            Father.race = "human";
                            Mother.race = "tiefling";
                        }
                        break;
                    case (x === 7):
                        a = rando(2);
                        if (a === 1) {
                            Father.race = "tiefling";
                            Mother.race = "devil";
                        } else {
                            Father.race = "devil";
                            Mother.race = "tiefling";
                        }
                        break;
                    case (x === 8):
                        Father.race = "devil";
                        Mother.race = "devil";
                }
        }
    } else {
        Father.race = your.race;
        Mother.race = your.race;
    }
    Father.name = pickFirstName(Father.race, true);
    Mother.name = pickFirstName(Mother.race, false);
    Mother.surname = pickLastName(Mother.race, community);
    let birthplace = setBirthplace(your.race);
    let family = setFamily(); //[0] is the string, [1] is momGone, [2] is dadGone
    let home = setHome(birthplace[0], family[0]);
    let siblings = 0;
    characterForm.style.display = "none";
    document.getElementById("nameGenerate").style.border = "none";
    document.getElementById("familyGenerate").style.display = "block";
    document.getElementById("characterButton").style.display = "none";
    //-----Home

    let info = document.getElementById("charFam");
    info.innerHTML = `<p>You were born ${birthplace[1]}.</p>`;
    info.innerHTML += `<p>${home[0]}</p>`;
    info.innerHTML += `<p>${family[0]}</p>`;
    info.innerHTML += `<p>${family[1]}</p>`;
}


//---------------------------------------------------------------------------->})][][][]K<-o


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
        return r;
    } else {
        return pickRace();
    }
}

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

//-----------CLASS

function determineClass() {
    let c = classes.value.toLowerCase();
    let output;
    if (c !== "randomclass") {
        output = c;
    } else {
        output = pickClass();
    }
    return output;
}

function checkSubclass(baseClass) {
    if (baseClass === "cleric" || baseClass === "warlock" || baseClass === "sorcerer") {
        return determineSubclass(baseClass);
    } else {
        return baseClass;
    }

    function determineSubclass(cl) {
        let cle = domains.value;
        let war = patrons.value;
        let sor = origins.value;
        let subclass;
        switch (cl) {
            case "cleric":
                if (subclassFix === "cleric" && cle === "randomDomain") {
                    subclass = (domainOptions[rando(domainOptions.length)]);

                } else {
                    subclass = cle;
                }
                return (subclass + " " + baseClass);
            case "warlock":
                if (subclassFix === "warlock" && war === "randomPatron") {
                    subclass = (patronOptions[rando(patronOptions.length)]);
                } else {
                    subclass = war;
                }
                return (baseClass + " of the " + subclass);
            case "sorcerer":
                if (subclassFix === "sorcerer" && sor === "randomOrigin") {
                    subclass = (originOptions[rando(originOptions.length)]);
                } else {
                    subclass = sor;
                }
                if (subclass === "Storm Sorcery") {
                    return "Storm Sorcerer";
                } else {
                    return subclass + " Sorcerer"
                }
        }
    }
}

function subclassOptions() {
    let subChoice = classes.value.toLowerCase();
    let domainDiv = document.getElementById('domainField');
    let patronDiv = document.getElementById('patronField');
    let originDiv = document.getElementById('originField');
    hideOthers();
    subclassFix = subChoice;
    if (subChoice === 'cleric') {
        domainDiv.style.display = "block"
    } else if (subChoice === 'warlock') {
        patronDiv.style.display = "block"
    } else if (subChoice === 'sorcerer') {
        originDiv.style.display = "block"
    }

    function hideOthers() {
        domainDiv.style.display = "none";
        patronDiv.style.display = "none";
        originDiv.style.display = "none"
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
        case "Yuan-ti":
            return yuanTiNames[rando(yuanTiNames.length)]
        case "Lizardfolk":
            return lizardfolkNames[rando(lizardfolkNames.length)]
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
                alert('Familial name!');
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
            return "of the " + leoninPride1[rando(leoninPride1.length)]+ leoninPride2[rando(leoninPride2.length)];
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

function pickClass() {
    let x = roll(1, 'd100');
    let output;
    switch (true) {
        case (x <= 2):
            output = "artificer";
            break;
        case (x <= 9):
            output = "barbarian";
            break;
        case (x <= 16):
            output = "bard";
            break;
        case (x <= 31):
            output = "cleric";
            subclassFix = "cleric";
            break;
        case (x <= 35):
            output = "druid";
            break;
        case (x <= 52):
            output = "fighter";
            break;
        case (x <= 58):
            output = "monk";
            break;
        case (x <= 64):
            output = "paladin";
            break;
        case (x <= 70):
            output = "ranger";
            break;
        case (x <= 84):
            output = "rogue";
            break;
        case (x <= 89):
            output = "sorcerer";
            subclassFix = "sorcerer";
            break;
        case (x <= 94):
            output = "warlock";
            subclassFix = "warlock";
            break;
        case (x <= 100):
            output = "wizard";
    }
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

function plural(race) {
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
