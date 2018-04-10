let textField = $('#generate');

function activate(){
        textField.html(`<p>`+ capitalize(generate()) + `</p>`);
}

function generate(){
    let first;
    let landmarkArray = [];
    let radios = document.getElementsByTagName('input');
    let biome;
    let moodArray = [];
    moodArray.push(defaults);
    let second;
    let result;
    //First word (mood)
    if (document.getElementById("peaceful").checked) {moodArray.push(peace);}
    if (document.getElementById("dangerous").checked) {moodArray.push(danger);}
    if (document.getElementById("scary").checked) {moodArray.push(scary);}
    if (document.getElementById("natural").checked) {moodArray.push(natural);}

    if (moodArray.length > 1){first = randoArray(randoArray(moodArray));}
    else {
        let z = rando(moodArray[0].length);
        first = moodArray[0][z];
    }
    //Second part of word (biome)
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            biome = radios[i].value;
        }
    }
    switch(true){
        case (biome === "grassland"):
            second = randoArray(grassland);
            landmarkArray.push(compound);
            landmarkArray.push(landmarks);
            break;
        case (biome === "hills"):
            second = isDuplicate(first,hills);
            landmarkArray.push(compound);
            landmarkArray.push(landmarks);
            break;
        case (biome === "forest"):
            second = isDuplicate(first,forest);
            landmarkArray.push(compound);
            landmarkArray.push(landmarks);
            break;
        case (biome === "desert"):
            second = isDuplicate(first,desert);
            landmarkArray.push(compound);
            landmarkArray.push(desertMarks);
            break;
        case (biome === "arctic"):
            second = isDuplicate(first,arctic);
            landmarkArray.push(compound);
            landmarkArray.push(arcticMarks);
            break;
        case (biome === "coastal"):
            second = isDuplicate(first,coastal);
            landmarkArray.push(compound);
            landmarkArray.push(coastalMarks);
            break;
        case (biome === "swamp"):
            second = isDuplicate(first,swamp);
            landmarkArray.push(compound);
            landmarkArray.push(swampMarks);
            break;
        case (biome === "urban"):
            second = isDuplicate(first,grassland);
            landmarkArray.push(townMarks);
            landmarkArray.push(townMarks);

    }
    console.log("LandmarkArray contains " + landmarkArray);
    result = first + second;
    if (document.getElementById("compounds").checked){
        let landmark = randoArray(isDuplicate(second,landmarkArray));
        console.log(landmark);
        result += (" " + landmark);
    }
    return result;
}

//---------------------

function rando(probability){
    return Math.floor(Math.random() * probability + 1);
}

function randoArray(array){
    x = rando(array.length - 1);
    return array[x];
}

function capitalize(str){
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function isDuplicate(first,biome){
    let second = randoArray(biome);

    if (first !== second){
        return second;
    }
    else {
        isDuplicate(first,biome);
    }
}