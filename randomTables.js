
//  There are 13 races:
//      HUMAN   DWARF   ELF     HALFLING    GNOME
//      DRAGONBORN  TIEFLING    AASIMAR     GENASI
//      AARAKOCRA   GOLIATH     HALF-ORC    HALF-ELF

//------------Home------------------------


//------------Parents------------------------

function setParents(){ // Maybe return an array? [Did you know your parents, who were they if so,
    let result = roll(1,"d100"); //True or false: You knew who your parents were?
    switch(true){
        case (result => 96):
            //You did not know who your parents were.
            break;
        case (result < 96):
            result = roll
    }
}

function setBirthplace(race){
    let choose = roll(1,"d100");
    let birthplace;
    let string;
    switch(true) {
        case (choose <= 50):
            birthplace = "home";
            string = "in your family's home";
            break;
        case (choose <= 55):
            birthplace = "friendHome";
            string = "in the home of " + generateNPC(race,randomSex()) + ", a family friend";
            break;
        case (choose <= 63):
            birthplace = "healerHome";
            string = "in the home of a midwife in your family's community";
            break;
        case (choose <= 65):
            birthplace = "wagon";
            string = "in the back of a carriage on a journey";
            break;
        case (choose <= 68):
            birthplace = "barn";
            string = "in a barn during a storm";
            break;
        case (choose <= 70):
            birthplace = "cave";
            string = "in a cave your mother took refuge in";
            break;
        case (choose <= 72):
            birthplace = "field";
            string = "in the middle of a wheat field";
            break;
        case (choose <= 74):
            birthplace = "forest";
            string = "in a wooded forest surrounded by trees";
            break;
        case (choose <= 77):
            birthplace = "temple";
            string = "in a temple, delivered by one of its priests";
            break;
        case (choose === 78):
            birthplace = "battlefield";
            string = "in a war camp during a battle";
            break;
        case (choose <= 80):
            birthplace = "streets";
            string = "in an alleyway on the streets";
            break;
        case (choose <= 82):
            birthplace = "tavern";
            string = "in a room in an inn";
            break;
        case (choose <= 84):
            birthplace = "castle";
            string = "in a royal castle";
            break;
        case (choose === 85):
            birthplace = "sewer";
            string = "in the dank sewers of a city";
            break;
        case (choose <= 88):
            let otherRace = your.race;
            while (otherRace === your.race || otherRace === "half-elf" || otherRace === "half-orc" || otherRace === "aasimar"){
                otherRace = pickRace();
            }
            birthplace = "otherRace";
            string = "among " + plural(otherRace);
            break;
        case (choose <= 91):
            birthplace = "ship";
            string = "on board a ship";
            break;
        case (choose <= 93):
            birthplace = "prison";
            string = "in a prison cell";
            break;
        case (choose <= 95):
            birthplace = "labaratory";
            string = "by magical means in the labaratory of a sage";
            break;
        case (choose === 96):
            birthplace = "feywild";
            string = "in the mysterious plane of the Feywild";
            break;
        case (choose === 97):
            birthplace = "shadowfell";
            string = "in the dark plane of the Shadowfell";
            break;
        case (choose === 98):
            birthplace = "astral plane";
            string = "in the Astral Plane";
            break;
        case (choose === 99):
            birthplace = "innerPlane";
            let plane = rando(4);
            switch (plane){
                case 1:
                    string = "amid the clouds of the Plane of Air";
                    break;
                case 2:
                    string = "in the heat of the Plane of Fire";
                    break;
                case 3:
                    string = "in a cave in the Plane of Earth";
                    break;
                case 4:
                    string = "on a ship floating in the Plane of Water";
            }
            break;
        case (choose === 100):
            birthplace = "outerPlane";
            let outplane = rando(16)
            switch (outplane){
                case 1:
                    string = "in the Seven Heavens of Mount Celestia";
                    break;
                case 2:
                    string = "in the Twin Paradises of Bytopia";
                    break;
                case 3:
                    string = "in the Blessed Fields of Elysium";
                    break;
                case 4:
                    string = "in the Wilderness of the Beastlands";
                    break;
                case 5:
                    string = "in the Olympian Glades of Arborea";
                    break;
                case 6:
                    string = "in the Heroic Domains of Ysgard";
                    break;
                case 7:
                    string = "in the Ever-Changing Chaos of Limbo";
                    break;
                case 8:
                    string = "in the Windswept Depths of Pandemonium";
                    break;
                case 9:
                    string = "in the Infinite Layers of the Abyss";
                    break;
                case 10:
                    string = "in the Tarterian Depths of Carceri";
                    break;
                case 11:
                    string = "in the Gray Waste of Hades";
                    break;
                case 12:
                    string = "in the Bleak Eternity of Gehenna";
                    break;
                case 13:
                    string = "in the Nine Hells of Baator";
                    break;
                case 14:
                    string = "in the Infinite Battlefield of Acheron";
                    break;
                case 15:
                    string = "in the Clockwork Nirvana of Mechanus";
                    break;
                case 16:
                    string = "in the Peaceable Kingdom of Arcadia";
            }
    }
    return [birthplace,string];
}

function setHome(){
    let family = rando(100);
    let fatherGone = false;
    let motherGone = false;
    if (family <= 35){fatherGone = true; motherGone = true}
    switch(true) {
        case (family <= 1):
            family = "You didn't grow up with any family";
            break;
        case (family === 2):
            family = "You grew up in an institution";
            break;
        case (family === 3):
            family = "You grew up in a temple";
            break;
        case (family <= 5):
            family = "You grew up in an orphanage";
            break;
        case (family <= 7):
            family = "You were raised by " + generateNPC(community,randomSex()) + ", your guardian"
            break;
        case (family <= 25):
            let relative = rando(6);
            let x;
            let y;
            if (family <= 15){x = "aunt"; y = "uncle"}
            else {x = "grandmother"; y = "grandfather"}
            switch(relative){
                case 1: //paternal
                    family = "You were raised by your " + x + ", " + pickFirstName(Father.race,"female") + " " + your.surname;
                    break;
                case 2:
                    family = "You were raised by your " + y + ", " + pickFirstName(Father.race,"male") + " " + your.surname;
                    break;
                case 3:
                    family = "You were raised by your " + x + " and " + y + ", " + pickFirstName(Father.race,"male") + " and " + pickFirstName(Father.race,"female") + " " + your.surname;
                    break;
                case 4: //maternal
                    family = "You were raised by your " + x + ", " + pickFirstName(Mother.race,"female") + " " + Mother.surname;
                    break;
                case 5:
                    family = "You were raised by your " + y + ", " + pickFirstName(Mother.race,"male") + " " + Mother.surname;
                    break;
                case 6:
                    family = "You were raised by your " + x + " and " + y + ", " + pickFirstName(Mother.race,"male") + " and " + pickFirstName(Mother.race,"female") + " " + Mother.surname;
            }
            break;
        case (family <= 35):
            family = "You were raised by an adoptive family of " + plural(community);
            break;
        case (family <= 55):
            family = "You were raised by your father, " + Father.name + " " + your.surname;
            motherGone = true;
            break;
        case (family <= 75):
            family = "You were raised by your mother, " + Mother.name + " " + your.surname;
            fatherGone = true;
            break;
        case (family <= 100):
            family = "You were raised by your parents, " + Father.name + " " + Mother.name + " " + your.surname;
    }
    //What happened to them?
    let status = whereParentsGo();
    let plursing;
    if (motherGone === true && fatherGone === false){
        plursing = "was";
        family += " Your mother " + plursing + status;
    }if (fatherGone === true && motherGone === false){
        plursing = "was";
        family += " Your father " + status;
    }
    return [family, motherGone, fatherGone];
}
/*
function whereParentsGo(){
    let a = rando(4);
    switch(a){
        case 1:
            status = "died. "; //
            break;
        case 2:
            status = " imprisoned and taken away from you.";
            break;
        case 3:

    }
}
*/
function setFamily(race){
    let knewParents = rando(100);
    let string = "";
    if (knewParents < 95){
        knewParents = false;
        string = "You do not know who your parents were.";
    }
    else {
        knewParents = true;
    }
    //Siblings
    let siblingR = rando(10);
    if (your.race === "dwarf" || your.race === "elf" || Mother.race === "elf"){
        siblingR -= 2;
    }
    let siblings = 0;
    switch (true){
        case (siblingR <= 4):
            siblings = roll(1,"d3");
            break;
        case (siblingR <= 6):
            siblings = (roll(1,"d4") + 1);
            break;
        case (siblingR <= 8):
            siblings = (roll(1,"d6") + 2);
            break;
        case (siblingR <= 10):
            siblings = (roll(1,"d8") + 3);
    }
    if (siblings === 0){ string += " You were an only child." }
    else {

    }

    return [knewParents, string]
}

function generateSibling(){
    let x = rando(2);
    let sibRace;
    let sibAge;
    if (x === 1){sibRace = Father.race}
    else {sibRace = Mother.race}
    let sibling = generateNPC(your.race,randomSex());
    x = roll(2,"d6");
    switch(true){
        case (x <= 2):
            sibAge = "twin";
            break;
        case (x <= 7):
            sibAge = "older";
            break;
        case (x <= 12):
            sibAge = "younger";

    }
}

function generateNPC(race,sex){
    let first = pickFirstName(race,sex);
    let last = your.surname;
        while(last === your.surname){
            last = pickLastName(race,race);
        }
    return first + " " + last;
}

function randomSex(){
    let x = rando(2);
    if (x === 1){
        return "female";
    }
    else {
        return "male";
    }
}