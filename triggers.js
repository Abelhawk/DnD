
//  There are 13 races:
//      HUMAN   DWARF   ELF     HALFLING    GNOME
//      DRAGONBORN  TIEFLING    AASIMAR     GENASI
//      AARAKOCRA   GOLIATH     HALF-ORC    HALF-ELF


//-----Global Variables
function Character(){}
let subclassFix;
let charIsCreated = false;
let community;

//------Step 1: Create the character---------------------------------------------->})][][][]K<-o

let your = new Character();
your.genderIsMale = true;

function proceed() {
    your.race = determineRace();
    your.heritage = determineCommunity(your.race);
    // console.log(`You are a ${your.race} and were born in ${aAn(your.heritage)} community.`);

    your.pClass = determineClass();
    your.fullClass = checkSubclass(your.pClass);

    if ($('#gender').val() === "female") {your.genderIsMale = false;}

    your.name = $('#name').val();
    if(!your.name) {
        your.name = pickFirstName(your.race, your.genderIsMale, your.heritage);
        your.surname = pickLastName(your.race, your.heritage);
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

//-----Step 2: Create appearance---------------------------------------------->})][][][]K<-o

function createAppearance(){
    $(".guide").hide();
    $("#begin").hide();
    $('#titleName').attr("contenteditable", false);
    $('#titleCharacter').attr("contenteditable", false);

    your.age = determineAge(your.race, your.class);

    $('#genAppearance').text(
        `You are ${your.fullname}, ${aAn(your.race)} of ${your.age} years old.`
    );

}

//---------------------------------------------------------------------------->})][][][]K<-o


//---------AGE

function determineAge(race) {
    let baseAge;

    switch (race){
        case "human":
        case "aasimar":
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
        let cle = ($('#domain').val());
        let war = ($('#patron').val());
        let sor = ($('#origin').val());
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

//---->This might break stuff in the future :(
function subclassOptions(element) {
    let subChoice = element.options[element.selectedIndex].value;
    hideOthers();
    if ( subChoice === 'cleric'){
        $('.clericDomain').show();
        subclassFix = "cleric";
    }
    else if (subChoice === 'warlock') {
        $('.warlockPatron').show();
        subclassFix = "warlock";
    }
    else if (subChoice === 'sorcerer') {
        $('.sorcererOrigin').show();
        subclassFix = "sorcerer";
    }
    function hideOthers() {
        $('.warlockPatron').hide();
        $('.sorcererOrigin').hide();
        $('.clericDomain').hide();

    }
}

//----------NAME

function pickFirstName(race, gender, community) {
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
        default:
            return "???";
    }
}

function pickLastName(race, community) {
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
            return "xxx";
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
    return Math.floor(Math.random() * probability + 1);
}

function capitalize(str){
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

//-----A function to switch between "a" and "an"
let vowels = ["a","e","i","o","u"];
function aAn(str){
    for (let i = 0; i < vowels.length; i++){
        if(str[0] === vowels[i]){
            return ("an " + str)
        }
    }
    return ("a " + str);
}

function roll(number, dice){
    console.log("Rolling " + number + dice + "...");
    switch(dice){
        case "d4":
            return (rando(4)* number);
        case "d6":
            return (rando(6)* number);
        case "d8":
            return (rando(8)* number);
        case "d10":
            return (rando(10)* number);
        case "d12":
            return (rando(12)* number);
        case "d100":
            return (rando(100));
    }
}