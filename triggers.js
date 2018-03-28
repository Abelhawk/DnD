let yourRace;
let yourName;
let yourClass;
let yourSubclass;
let next = 0;
let yourGender = "male";

function proceed() {
    next ++;
    switch(next){
        case 1:
            determineRace();
            determineClass();
            determineName();
            $(".title").show();
            $(".choices").hide();
        case 2:
            console.log("Yeah, not sure what's going on, man");
    }

}

//-----Choose
function determineRace(){
    let r = $('#race').val();
    console.log(r);
    if(r !== "randomRace"){
        yourRace = r;
    }
    else{
        yourRace = pickRace();
    }
    console.log("Your race is " + yourRace);
}

function determineClass() {
    let c = $('#class').val();
    console.log(c);
    if(c !== "randomClass"){
        yourClass = c;
    }
    else{
        yourClass = pickClass();
    }
    if(yourClass === "cleric" || yourClass === "warlock" || yourClass === "sorcerer"){
        let subclass;
        switch
        yourClass = c;
    }
    else{
        yourClass = pickClass();
    }
    console.log("You are a " + yourClass);
}

function determineName() {
    let n = $('#name').val();
    console.log(c);
    if(n != "(random)"){
        yourName = n;
    }
    else{
        yourName = pickName(yourRace,yourRace);
    }
    console.log("You are a " + yourClass);
}

function checkSubclass(element) {
    hideOthers();
    if (element.options[element.selectedIndex].value == 'cleric'){
        $('.clericDomain').show();
    }
    else if (element.options[element.selectedIndex].value == 'warlock') {
        $('.warlockPatron').show();
    }
    else if (element.options[element.selectedIndex].value == 'sorcerer') {
        $('.sorcererOrigin').show();
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
    let output = "race";
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


//-------Utility functions
function rando(probability){
    // console.log("Calculating a number between 1 and " + probability + "...");
    return Math.floor(Math.random() * probability + 1);
}

function print(text){
    $(".information").append(text);
}