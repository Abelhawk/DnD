let number;
let textField = $('#generate');

function activate(){
    number = $('#number').val();
    // for (let i = 0; i < number; i++) {
        textField.html(`<p>`+ capitalize(generate()) + `</p>`);
    // }
}

function generate(){
    let first;
    let radios = document.getElementsByTagName('input');
    let biome;
    let moodArray = [];
    let second;
    let result;
    //First word (mood)
    moodArray.push(defaults);
    if (document.getElementById("peaceful").checked) {moodArray.push(peace);}
    if (document.getElementById("dangerous").checked) {moodArray.push(danger);}
    if (document.getElementById("scary").checked) {moodArray.push(scary);}
    if (document.getElementById("natural").checked) {moodArray.push(natural);}
    first = randoArray(randoArray(moodArray));
    moodArray = 0;
    console.log("The first word should be " + first);
    //Second part of word (biome)
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            biome = radios[i].value;
        }
    }
    switch(true){
        case (biome === "grassland"):
            second = (randoArray(grassland));
            break;
        case (biome === "hills"):
            second = (randoArray(hills));
            break;
        case (biome === "forest"):
            second = (randoArray(forest));
            break;
        case (biome === "desert"):
            second = (randoArray(desert));
            break;
        case (biome === "arctic"):
            second = (randoArray(arctic));
            break;
        case (biome === "coastal"):
            second = (randoArray(coastal));
            break;
        case (biome === "swamp"):
            second = (randoArray(swamp));
            break;
        case (biome === "urban"):
            second = (randoArray(urban));
    }
    console.log("The second word should be " + second);
    result = first + second;
    if (document.getElementById("compounds").checked){
        result += (" " + randoArray(compound));
    }
    return result;
}

//---------------------

function rando(probability){
    return Math.floor(Math.random() * probability + 1);
}

function randoArray(array){
    x = rando(array.length - 1);
    console.log(x);
    return array[x];
}

function capitalize(str){
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}