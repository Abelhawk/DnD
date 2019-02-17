
//-----Global Variables
function Character(){}
let Father = new Character;
let Mother = new Character;
let subclassFix;
let charIsCreated = false;
let community;
let genders = document.getElementById('gender');
let charNameDiv = document.getElementById('charName');
let charClassDiv = document.getElementById('charClass');
let races = document.getElementById("race");
let classes = document.getElementById("class");
let domains = document.getElementById("domain");
let patrons = document.getElementById("patron");
let origins = document.getElementById("origin");

//------Dynamic options
let raceOptions = [
    "Human",
    "Dwarf",
    "Elf",
    "Halfling",
    "Half-elf",
    "Gnome",
    "Tiefling",
    "Aasimar",
    "Half-orc",
    "Dragonborn",
    "Goliath",
    "Genasi",
    // "Aarakocra"
];
let classOptions = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard"
];
let clericDomainOptions = [
    "Arcana",
    "Death",
    "Forge",
    "Grave",
    "Knowledge",
    "Life",
    "Light",
    "Nature",
    "Order",
    "Tempest",
    "Trickery",
    "War"
];
let warlockPatronOptions = [
    "Archfey",
    "Celestial",
    "Fiend",
    "Great Old One",
    "Hexblade"
];
let sorcererOriginOptions = [
    "Divine Soul",
    "Draconic Bloodline",
    "Giant Soul",
    "Shadow Magic",
    "Storm Sorcery",
    "Wild Magic"
];

function loadPage(){
    for (let i = 0; i < raceOptions.length; i++){
        let opt = document.createElement("option");
        opt.value = raceOptions[i];
        opt.innerHTML = raceOptions[i];
        races.appendChild(opt)
    }
    for (let i = 0; i < classOptions.length; i++){
        let opt = document.createElement("option");
        opt.value = classOptions[i];
        opt.innerHTML = classOptions[i];
        classes.appendChild(opt)
    }
    for (let i = 0; i < clericDomainOptions.length; i++){
        let opt = document.createElement("option");
        opt.value = clericDomainOptions[i];
        opt.innerHTML = clericDomainOptions[i];
        domains.appendChild(opt)
    }
    for (let i = 0; i < warlockPatronOptions.length; i++){
        let opt = document.createElement("option");
        opt.value = warlockPatronOptions[i].replace(/\s/g, '');
        opt.innerHTML = warlockPatronOptions[i];
        patrons.appendChild(opt)
    }
    for (let i = 0; i < sorcererOriginOptions.length; i++){
        let opt = document.createElement("option");
        opt.value = sorcererOriginOptions[i].replace(/\s/g, '');
        opt.innerHTML = sorcererOriginOptions[i];
        origins.appendChild(opt)
    }
}

//------Step 1: Create the character

let your = new Character();
your.genderIsMale = true;

function proceed() {
    your.race = determineRace();
    your.heritage = determineCommunity(your.race);

    your.pClass = determineClass();
    your.fullClass = checkSubclass(your.pClass);

    if (genders.value === 'female') {
        your.genderIsMale = false;
    } else if (genders.value === 'randomGender') {
        let random = rando(1);
        if (random === 0) your.genderIsMale = false
    }

    your.age = determineAge(your.race, your.class);
    your.name = $('#name').val();
    if(!your.name) {
        your.name = pickFirstName(your.race, your.genderIsMale);
        your.surname = pickLastName(your.race, your.heritage);
        if (your.surname === "xxx"){
            your.fullName = your.name;
        }
        else {
            your.fullName = determineFullName(your.name, your.surname, your.race);
        }
    }
    charNameDiv.innerText =(capitalize(your.fullName));
    if (your.fullClass === "the great old one warlock") {
        charClassDiv.innerText = (capitalize(your.race) + " Warlock of the Great Old One");
    }
    else {
        charClassDiv.innerText = (capitalize(your.race) + " " + capitalize(your.fullClass));
    }
    if(charIsCreated === false){
        let button1 = document.getElementById("familyButton");
        let button2 = document.getElementById("backstoryButton");
        let button3 = document.getElementById("appearanceButton");
        button1.style.display = "block";
        button2.style.display = "block";
        button3.style.display = "block";
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

function createFamily(){
    let a;
    if (your.race === "half-elf" || your.race === "half-orc" || your.race === "tiefling" || your.race === "aasimar") {
        let x = rando(8);
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
    }
    else{
        Father.race = your.race;
        Mother.race = your.race;
    }
    Father.name = pickFirstName(Father.race,true);
    Mother.name = pickFirstName(Mother.race,false);
    Mother.surname = pickLastName(Mother.race,community);
    let birthplace = setBirthplace(your.race);
    let family = setFamily(); //[0] is the string, [1] is momGone, [2] is dadGone
    let home = setHome(birthplace[0],family[0]);
    let siblings = 0;
    $(".guide").hide();
    $("#begin").hide();
    $('#titleName').attr("contenteditable", false);
    $('#titleCharacter').attr("contenteditable", false);

    $('#genChildhood').html(
        //-----Home

        `You were born ` + birthplace[1] + `. ` + home[0] + family[0] + `<br>` + family[1]
    );
}



//---------------------------------------------------------------------------->})][][][]K<-o


//---------APPEARANCE

function determineAge(race) {
    let baseAge;

    switch (race){
        case "human":
        case "aasimar":
        case "tiefling":
        case "goliath":
            baseAge = 15;
            return (baseAge + roll(1,"d8"));
        case "dwarf":
            baseAge = 40;
            return (baseAge + roll(5,"d6"));
        case "elf":
            baseAge = 110;
            return (baseAge + roll(6,"d6"));
        case "gnome":
            baseAge = 40;
            return (baseAge + roll(6,"d6"));
        case "half-elf":
        case "genasi":
            baseAge = 20;
            return (baseAge + roll(2,"d6"));
        case "half-orc":
            baseAge = 14;
            return (baseAge + roll(1,"d6"));
        case "halfling":
            baseAge = 20;
            return (baseAge + roll(3,"d6"));
        case "aarakocra":
            baseAge = 4;
            return (baseAge + roll(2,"d4"));
        case "dragonborn":
            baseAge = 15;
            return (baseAge + roll(1,"d6"));
    }
}

//----------RACE

function determineRace(){
    let r = $('#race').val();
    if(r !== "randomRace"){
        return r;
    }
    else{
        return pickRace();
    }
}

function determineCommunity(race) {
    switch (race) {
        case "dwarf":
        case "elf":
        case "halfling":
        case "gnome":
        case "dragonborn":
        case "goliath":
        case "aarakocra":
            return race;
        case "aasimar":
        case "human":
            return "human";
        case "half-elf":
            let chance = rando(2);
            if (chance === 1) {return "elf"}
            if (chance === 2) {return "human"}
            break;
        case "genasi":
            let gen = "genasi";
            while (gen === "genasi" || gen === "dragonborn" || gen === "orc" || gen === "aarakocra" || gen === "demon"){
                gen = determineCommunity(pickRace());
                console.log(gen);
            }
            return gen;
        case "half-orc":
            let x = rando(3);
            if (x === 1) { return "orc"}
            else { return "human" }
        case "tiefling":
            let y = rando(3);
            if (y === 1) { return "demon"}
            else { return "human" }
    }
}

//-----------CLASS

function determineClass() {
    let c = $('#class').val();
    let output;
    if (c !== "randomClass") {
        output = c;
    }
    else {
        output = pickClass();
    }
    return output;
}

function checkSubclass(baseClass){
    if (baseClass === "cleric" || baseClass === "warlock" || baseClass === "sorcerer") {
        return  determineSubclass(baseClass);
    }
    else{
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
                    subclass = (domainOptions[rando(domainOptions.length - 1)]);

                } else {
                    subclass = cle;
                }
                break;
            case "warlock":
                if (subclassFix === "warlock" && war === "randomPatron") {
                    subclass = (patronOptions[rando(patronOptions.length - 1)]);

                } else {
                    subclass = war;
                }
                break;
            case "sorcerer":
                if (subclassFix === "sorcerer" && sor === "randomOrigin") {
                    subclass = (originOptions[rando(originOptions.length - 1)]);

                } else {
                    subclass = sor;
                }
            }
        return (subclass + " " + baseClass);
        }
}

function subclassOptions() {
    let subChoice = classes.value.toLowerCase();
    console.log(subChoice);
    let domainDiv = document.getElementById('domainField');
    let patronDiv = document.getElementById('patronField');
    let originDiv = document.getElementById('originField');
    hideOthers();
    subclassFix = subChoice;
    if ( subChoice === 'cleric'){
        domainDiv.style.display = "block"
    }
    else if (subChoice === 'warlock') {
        patronDiv.style.display = "block"
    }
    else if (subChoice === 'sorcerer') {
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
    switch(race){
        case "human":
        case "aasimar":
            if (gender === true) { return maleHuman[rando(maleHuman.length - 1)] }
            else {return femaleHuman[rando(femaleHuman.length - 1)]}
        case "dwarf":
            if (gender === true) { return maleDwarf[rando(maleDwarf.length - 1)] }
            else {return femaleDwarf[rando(femaleDwarf.length - 1)]}
        case "aarakocra":
            return aarakocraNames[rando(aarakocraNames.length - 1)];
        case "goliath":
            return nicknameGoliath[rando(nicknameGoliath.length - 1)];
            //Goliaths go by their nickname, but have a birth name, nickname, and clan name.
        case "elf":
            if (gender === true) { return maleElf[rando(maleElf.length - 1)] }
            else {return femaleElf[rando(femaleElf.length - 1)]}
        case "halfling":
            if (gender === true) { return maleHalfling[rando(maleHalfling.length - 1)] }
            else {return femaleHalfling[rando(femaleHalfling.length - 1)]}
        case "gnome":
            if (gender === true) { return maleGnome[rando(maleGnome.length - 1)] }
            else {return femaleGnome[rando(femaleGnome.length - 1)]}
        case "half-orc":
            if (gender === true) { return maleHalforc[rando(maleHalforc.length - 1)] }
            else {return femaleHalforc[rando(femaleHalforc.length - 1)]}
        case "tiefling":
            if (gender === true) { return maleTiefling[rando(maleTiefling.length - 1)] }
            else {return femaleTiefling[rando(femaleTiefling.length - 1)]}
        case "half-elf": //Half-elves have elf names if they live among humans, and vice-versa
            if (gender === true) {
                switch(community){
                    case "elf":
                        return maleHuman[rando(maleHuman.length - 1)];
                    case "human":
                        return maleElf[rando(maleElf.length - 1)];
                }
            }
            else {
                switch(community){
                    case "elf":
                        return femaleHuman[rando(femaleHuman.length - 1)];
                    case "human":
                        return femaleElf[rando(femaleElf.length - 1)];
                }
            }
            break;
        case "dragonborn":
            if (gender === true) { return maleDragonborn[rando(maleDragonborn.length - 1)] }
            else {return femaleDragonborn[rando(femaleDragonborn.length - 1)]}
        case "genasi": //Genasi are named based on the community they grow up with
            let x = rando(6);
            if (x > 1){ return pickFirstName(community,gender, community) }
            else {return genasiNames[rando(genasiNames.length - 1)] }
        case "devil":
            return "Baator";
        default:
            return "???";
    }
}

function pickLastName(race) {
    switch(race){
        case "human":
        case "aasimar":
            return humanSurname[rando(humanSurname.length - 1)];
        case "elf":
            return elfFamily[rando(elfFamily.length - 1)];
        case "dwarf":
            return dwarfClan[rando(dwarfClan.length - 1)];
        case "halfling":
            return halflingFamily[rando(halflingFamily.length - 1)];
        case "gnome":
            return gnomeClan[rando(gnomeClan.length - 1)];
        case "dragonborn":
            return dragonbornClan[rando(dragonbornClan.length - 1)];
        case "genasi":
            return pickLastName(community);
        case "half-elf":
            if (community === "elf") {return elfFamily[rando(elfFamily.length - 1)]}
            if (community === "human") {return humanSurname[rando(humanSurname.length - 1)]}
            break;
        case "goliath":
            return goliathClan[rando(goliathClan.length - 1)];
        case "half-orc":
        case "tiefling":
            if (community === "human") {return humanSurname[rando(humanSurname.length - 1)];}
            //Volo's Guide might have some insights. Otherwise, works for me.
        case "aarakocra":
        default:
            return "";
    }
}

function determineFullName(first, last, race){
    if (race === "goliath"){
        let birthname = goliathNames[rando(goliathNames.length - 1)];
        return (birthname + " " + first + " " + last);
    }
    else if (race === "dragonborn") {
        return (last + " " + first);
    }
    else{
        return (first + " " + last);
    }
}

//------Randomizers

function pickRace() {
    let x = rando(100);
    let output;
    if (x <= 93){
        switch(true) {
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
        switch(true) {
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
    let x = rando(100);
    let output;
    switch(true){
        case (x <= 7):
            output = "barbarian";
            break;
        case (x <= 14):
            output = "bard";
            break;
        case (x <= 29):
            output = "cleric";
            subclassFix = "cleric";
            break;
        case (x <= 36):
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

let domainOptions = [
    "forge", "grave", "knowledge", "life", "light",
    "nature", "tempest", "trickery", "war"
];

let patronOptions = [
    "fiend", "archfey", "the great old one",
    "celestial", "hexblade"
];

let originOptions = [
    "wild magic", "dragon bloodline", "divine soul",
    "storm", "shadow",
];

/* weighted randomizer
function pickX() {
    let x = rando(100);
    let output;
    switch(x){
        case (x < ):
            output = "";
            break;
        case 2:
    }
    return output;
}
 */

//-------Utility functions

function rando(probability){
    return Math.floor(Math.random() * probability);
}

function capitalize(str){
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

let vowels = ["a","e","i","o","u"];
function aAn(str){
    //A function to switch between "a" and "an"
    for (let i = 0; i < vowels.length; i++){
        if(str[0] === vowels[i]){
            return ("an " + str)
        }
    }
    return ("a " + str);
}

function roll(number, dice){
    switch(dice){
        case "d4":
            return (rando(4)* number)+1;
        case "d6":
            return (rando(6)* number)+1;
        case "d8":
            return (rando(8)* number)+1;
        case "d10":
            return (rando(10)* number)+1;
        case "d12":
            return (rando(12)* number)+1;
        case "d100":
            return (rando(100))+1;
    }
}

function plural(race){
    let pluralForm = race;
    switch(race){
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

function say(x){
    alert(x);
}