
function Character(){
    // race;
    // name;
    // surname;
    // fullname;
    // pClass;
    // fullClass;
}

let subclassFix;
let charIsCreated = false;
let genasiCommunity;
let halfelfHeritage;


let your = new Character();

function proceed() {
    let your = new Character();

    your.race = determineRace();

    your.pClass = determineClass();
    your.fullClass = checkSubclass(your.pClass);

    if ($('#gender').val() === "female") {your.genderIsMale = false;}

    your.name = $('#name').val();
    if(!your.name) {
        your.name = pickFirstName(your.race, your.genderIsMale);
        your.surname = pickLastName(your.race);
        if (your.surname === "xxx"){
            your.fullName = your.name;
        }
        else {
            your.fullName = determineFullName(your.name, your.surname, your.race);
        }
    }
    $('#titleName').text(capitalize(your.fullName));
    if (your.fullClass === "the great old one warlock") {
        $('#titleCharacter').text(capitalize(your.race) + " Warlock of the Great Old One");
    }
    else {
        $('#titleCharacter').text(capitalize(your.race) + " " + capitalize(your.fullClass));
    }
    if(charIsCreated === false){
        $(".title").show();
        $(".choices").hide();
        $("#welcome").hide();
        $(".guide").show();
        $(".proceed").css("visibility", "visible");
        $("#begin").html('Randomize');
        charIsCreated = true;
    }

}

//-------------------------------------------------------------------------------------------
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
        let cle = ($('#domain').val());
        let war = ($('#patron').val());
        let sor = ($('#origin').val());
        let subclass;

        switch (cl) {
            case "cleric":
                if (subclassFix === "cleric" && cle === "randomDomain") {
                    subclass = pickDomain();
                } else {
                    subclass = cle;
                }
                break;
            case "warlock":
                if (subclassFix === "warlock" && war === "randomPatron") {
                    subclass = pickPatron();
                } else {
                    subclass = war;
                }
                break;
            case "sorcerer":
                if (subclassFix === "sorcerer" && sor === "randomOrigin") {
                    subclass = pickOrigin();
                } else {
                    subclass = sor;
                }
            }
        return (subclass + " " + baseClass);
        }
}

//---->This might break stuff in the future :(
function subclassOptions(element) {
    let subChoice = element.options[element.selectedIndex].value;
    hideOthers();
    if ( subChoice === 'cleric'){
        $('.clericDomain').show();
        subclassFix = "cleric";
        console.log("Switched to cleric mode.");
    }
    else if (subChoice === 'warlock') {
        $('.warlockPatron').show();
        subclassFix = "warlock";
        console.log("Switched to warlock mode.");
    }
    else if (subChoice === 'sorcerer') {
        $('.sorcererOrigin').show();
        subclassFix = "sorcerer";
        console.log("Switched to sorcerer mode.");
    }
    function hideOthers() {
        $('.warlockPatron').hide();
        $('.sorcererOrigin').hide();
        $('.clericDomain').hide();

    }
}

//----------NAME

function pickFirstName(race, gender) {
    let chance;
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
            chance = rando(2);
            if (gender === true) {
                switch(chance){
                    case 1:
                        halfelfHeritage = "elf";
                        return maleHuman[rando(maleHuman.length - 1)];
                    case 2:
                        halfelfHeritage = "human";
                        return maleElf[rando(maleElf.length - 1)];
                }
            }
            else {
                switch(chance){
                    case 1:
                        halfelfHeritage = "elf";
                        return femaleHuman[rando(femaleHuman.length - 1)];
                    case 2:
                        halfelfHeritage = "human";
                        return femaleElf[rando(femaleElf.length - 1)];
                }
            }
            break;
        case "dragonborn":
            if (gender === true) { return maleDragonborn[rando(maleDragonborn.length - 1)] }
            else {return femaleDragonborn[rando(femaleDragonborn.length - 1)]}
        case "genasi": //Genasi are named based on the community they grow up with
            let x = rando(10);
            if (x > 1){
                genasiCommunity = pickRace();
                return pickFirstName(genasiCommunity,gender);
            }
                return genasiNames[rando(genasiNames.length - 1)];
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
        case "half-elf":
            if (halfelfHeritage === "elf") {return elfFamily[rando(elfFamily.length - 1)]}
            if (halfelfHeritage === "human") {return humanSurname[rando(humanSurname.length - 1)]}
            break;
        case "goliath":
            return goliathClan[rando(goliathClan.length - 1)];
        case "half-orc":
        case "tiefling":
            let x = rando(3);
            if (x === 1) {return humanSurname[rando(humanSurname.length - 1)]}
        case "aarakocra":
        default:
            return "xxx";
    }
}

function determineFullName(first, last, race){
    if (race === "goliath"){
        let birthname = goliathNames[rando(goliathNames.length - 1)];
        return (birthname + " " + first + " " + last);
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

function pickDomain() {
    let x = rando(9);
    return domainOptions[x];
}

let patronOptions = [
    "fiend", "archfey", "the great old one",
    "celestial", "hexblade"
];

function pickPatron() {
    let x = rando(5);
    return patronOptions[x];
}

let originOptions = [
    "wild magic", "dragon bloodline", "divine soul",
    "storm", "shadow",
];

function pickOrigin() {
    let x = rando(5);
    return originOptions[x];
}

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
    return Math.floor(Math.random() * probability + 1);
}

function print(text){
    $(".information").append(text);
}

function capitalize(str){
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}