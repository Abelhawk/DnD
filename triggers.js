let yourRace;
let yourName;
let yourClass;
let yourSubclass;
let next = 0;
let youAreMale = true;
let subclassFix;

function proceed() {
    next ++;
    // switch(next){
    //     case 1:
            determineRace();
            determineClass();
            if ($('#gender').val() === "female") {youAreMale = false;}
            determineName();
            $('#titleName').text(capitalize(yourName));
    if (yourSubclass === "the great old one") {
        $('#titleCharacter').text(capitalize(yourRace) + " Warlock of the Great Old One");
    }
    else {
        $('#titleCharacter').text(capitalize(yourRace) + " " + capitalize(yourClass));
    }
            $(".title").show();
            $(".choices").hide();
            // break;
        // case 2:
    // }

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
    console.log("Your primary class is " + yourClass + ".");
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
        yourName = pickName(yourRace, youAreMale);
    }
    console.log("> Your name is " + yourName);
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
    if (x < 96){
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
            case (x <= 95):
                output = "tiefling";
        }
    }
    else {
        switch(true) {
            case (x <= 97):
                output = "aasimar";
                break;
            case (x <= 99):
                output = "goliath";
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

function pickDomain() {
    console.log("Hi Aust, I'm in the cleric picker now.");
    let x = rando(9);
    console.log("Okay, the number is " + x + "...");
    let output;
    switch(x){
        case 1:
            output = "forge";
            break;
        case 2:
            output = "grave";
            break;
        case 3:
            output = "knowledge";
            break;
        case 4:
            output = "life";
            break;
        case 5:
            output = "light";
            break;
        case 6:
            output = "nature";
            break;
        case 7:
            output = "tempest";
            break;
        case 8:
            output = "trickery";
            break;
        case 9:
            output = "war";
    }
    console.log("It turns out the chosen subclass is " + output + ". I'm exiting now...");
    return output;
}

function pickPatron() {
    let x = rando(5);
    let output;
    switch(x){
        case 1:
            output = "fiend";
            break;
        case 2:
            output = "archfey";
            break;
        case 3:
            output = "the great old one";
            break;
        case 4:
            output = "celestial";
            break;
        case 5:
            output = "hexblade";
    }
    return output;
}

function pickOrigin() {
    let x = rando(5);
    let output;
    switch(x){
        case 1:
            output = "wild";
            break;
        case 2:
            output = "dragonblood";
            break;
        case 3:
            output = "divine soul";
            break;
        case 4:
            output = "storm";
            break;
        case 5:
            output = "shadow";
    }
    return output;
}

function pickName(race, gender) {
    return (gender ? "Sir Jeffery" : "Lady Emmeline");
}

/* vanilla randomizer
function pickX() {
    let x = rando();
    let output;
    switch(x){
        case 1:
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