
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function(el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);


let yourRace;
let yourName;
let yourFamilyName;
let yourClass;
let yourSubclass;
let youAreMale = true;
let subclassFix;
let charIsCreated = false;


function proceed() {

    determineRace();
    determineClass();
    if ($('#gender').val() === "female") {youAreMale = false;}
    determineName();
    $('#titleName').text(capitalize(yourName + " " + yourFamilyName));
    if (yourSubclass === "the great old one") {
        $('#titleCharacter').text(capitalize(yourRace) + " Warlock of the Great Old One");
    }
    else {
        $('#titleCharacter').text(capitalize(yourRace) + " " + capitalize(yourClass));
    }
    if(charIsCreated === false){
        $(".title").show();
        $(".choices").hide();
        $("#welcome").hide();
        $(".guide").show();
        $(".proceed").css("visibility", "visible");
        $("#begin").html('Randomize');
        charIsCreated = true;
        // alert("Success! Feel free now to flesh out your character by clicking on any of the categories below. You can click on generated text to edit it at any time.");
    }

}

//-----Choose


function determineRace(){
    let r = $('#race').val();
    if(r !== "randomRace"){
        yourRace = r;
    }
    else{
        yourRace = pickRace();
    }
    console.log("> Your race is " + yourRace + ".");
}

function determineClass() {
    let c = $('#class').val();
    if (c !== "randomClass") {
        yourClass = c;
    }
    else {
        yourClass = pickClass();
    }
    if (yourClass === "cleric" || yourClass === "warlock" || yourClass === "sorcerer") {
        determineSubclass(yourClass);
    }

    function determineSubclass(cl) {
        let cle = ($('#domain').val());
        let war = ($('#patron').val());
        let sor = ($('#origin').val());

        switch (cl) {
            case "cleric":
                if (subclassFix === "cleric" && cle === "randomDomain") {
                    yourSubclass = pickDomain();
                } else {
                    yourSubclass = cle;
                }
                break;
            case "warlock":
                if (subclassFix === "warlock" && war === "randomPatron") {
                    yourSubclass = pickPatron();
                } else {
                    yourSubclass = war;
                }
                break;
            case "sorcerer":
                if (subclassFix === "sorcerer" && sor === "randomOrigin") {
                    yourSubclass = pickOrigin();
                } else {
                    yourSubclass = sor;
                }

            }
        yourClass = yourSubclass.concat(" " + yourClass);
        }
    console.log("> You are a " + yourClass + ".");
}


function determineName() {
    yourName = $('#name').val();
    if(!yourName) {
        yourName = pickFirstName(yourRace, youAreMale);
        yourFamilyName = pickLastName(yourRace);
    }
    console.log("> Your name is " + yourName + yourFamilyName);
}

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
    }
    else {
        switch(true) {
            case (x <= 95):
                output = "aasimar";
            case (x <= 97):
                output = "goliath";
                break;
            case (x <= 99):
                output = "aaracokra";
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
    "forge",
    "grave",
    "knowledge",
    "life",
    "light",
    "nature",
    "tempest",
    "trickery",
    "war"
];

function pickDomain() {
    let x = rando(9);
    return domainOptions[x];
}

let patronOptions = [
    "fiend",
    "archfey",
    "the great old one",
    "celestial",
    "hexblade"
];

function pickPatron() {
    let x = rando(5);
    return patronOptions[x];
}

let originOptions = [
    "wild magic",
    "dragon bloodline",
    "divine soul",
    "storm",
    "shadow",
];

function pickOrigin() {
    let x = rando(5);
    return originOptions[x];
}

function pickFirstName(race, gender) {
    switch(race){
        case "human":
            if (gender === true) { return maleHuman[rando(maleHuman.length - 1)] }
            else {return femaleHuman[rando(femaleHuman.length - 1)]}
        case "dwarf":
            if (gender === true) { return maleDwarf[rando(maleDwarf.length - 1)] }
            else {return femaleDwarf[rando(femaleDwarf.length - 1)]}
        case "aaracokra":
            return aaracokraNames[rando(aaracokraNames.length - 1)];
        case "goliath":
            return goliathNames[rando(goliathNames.length - 1)];
            //Figure out how to add a nickname too, since it's more important
        default:
            return "XX";
    }
}

function pickLastName(race) {
    switch(race){
        case "human":
            return humanSurname[rando(humanSurname.length - 1)];
        case "dwarf":
            return dwarfClan[rando(dwarfClan.length - 1)];
        case "goliath":
            return goliathClan[rando(goliathClan.length - 1)];
        default:
            return "YY";
    }
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