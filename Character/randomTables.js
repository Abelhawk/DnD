
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
    console.log("You rolled a " + family + ". If the number is less than 35, both of your parents should be gone");
    let fatherGone = false;
    let motherGone = false;
    if (family <= 35){fatherGone = true; motherGone = true}
    switch(true) {
        case (family <= 1):
            family = "You didn't grow up with any family.";
            break;
        case (family === 2):
            family = "You grew up in an institution.";
            break;
        case (family === 3):
            family = "You grew up in a temple.";
            break;
        case (family <= 5):
            family = "You grew up in an orphanage.";
            break;
        case (family <= 7):
            family = "You were raised by " + generateNPC(community,randomSex()) + ", your guardian.";
            break;
        case (family <= 25):
            let relative = rando(6);
            let x;
            let y;
            if (family <= 15){x = "aunt"; y = "uncle"}
            else {x = "grandmother"; y = "grandfather"}
            switch(relative){
                case 1: //paternal
                    family = "You were raised by your " + x + ", " + pickFirstName(Father.race,false) + " " + your.surname + ".";
                    break;
                case 2:
                    family = "You were raised by your " + y + ", " + pickFirstName(Father.race,true) + " " + your.surname + ".";
                    break;
                case 3:
                    family = "You were raised by your " + x + " and " + y + ", " + pickFirstName(Father.race,true) + " and " + pickFirstName(Father.race,false) + " " + your.surname + ".";
                    break;
                case 4: //maternal
                    family = "You were raised by your " + x + ", " + pickFirstName(Mother.race,false) + " " + Mother.surname + ".";
                    break;
                case 5:
                    family = "You were raised by your " + y + ", " + pickFirstName(Mother.race,true) + " " + Mother.surname + ".";
                    break;
                case 6:
                    family = "You were raised by your " + x + " and " + y + ", " + pickFirstName(Mother.race,true) + " and " + pickFirstName(Mother.race,false) + " " + Mother.surname + ".";
            }
            break;
        case (family <= 35):
            family = "You were adopted and raised by a family of " + plural(community) + ".";
            break;
        case (family <= 55):
            family = "You were raised by your father, " + Father.name + " " + your.surname + ".";
            motherGone = true;
            break;
        case (family <= 75):
            family = "You were raised by your mother, " + Mother.name + " " + your.surname + ".";
            fatherGone = true;
            break;
        case (family <= 100):
            family = "You were raised by your parents, " + Father.name + " and " + Mother.name + " " + your.surname + ".";
    }
    //What happened to them?
    if (motherGone === true || fatherGone === true){
        let both = false;
        if (motherGone === true && fatherGone === true){both = true}
        let status = whereParentsGo(both);
        if (motherGone === true && fatherGone === false){
            family += " Your mother " + status;
        }else if (fatherGone === true && motherGone === false){
            family += " Your father " + status;
        }
        else {
            family += " Your parents " + status;
        }
    }
    return [family, motherGone, fatherGone];
}

function whereParentsGo(both){
    let status;
    let plursing = "";
    if (both === true){plursing = "were"}
    else {plursing = "was"}
    let a = roll(1, 'd4');
    switch(a){
        case 1:
            status = "died. "; //Add cause of death function
            break;
        case 2:
            status = plursing + " imprisoned and taken away from you.";
            break;
        case 3:
            status = "abandoned you.";
            break;
        case 4:
            status = "disappeared to an unknown fate.";
    }
    return status;
}

function setFamily(){
    let knewParents = rando(100);
    let siblingList = "";
    let string = "";
    if (knewParents < 95){
        knewParents = false;
        // string = "You do not know who your parents were."; //This is stupid and unnecessary.
    }
    else {
        knewParents = true;
    }
    //Siblings
    let siblingR = rando(10);
    if (your.race === "dwarf" || your.race === "elf" || Mother.race === "elf"){
        siblingR -= 2;
    }
    let siblings;
    switch (true){
        case (siblingR < 4):
            siblings = 0;
            break;
        case (siblingR === 4):
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
    if (siblings === 0) string += " You were an only child.";
    else {
        let allSibs = [];
        let older = [];
        let younger = [];
        let twins = [];
        for(let i = 0; i < siblings; i++){ //The array goes [Name, Race, Gender, Age]
            let currentSibling = generateSibling();
            switch(true){
                case (currentSibling[3] === "older"):
                    older.push(currentSibling);
                    break;
                case (currentSibling[3] === "younger"):
                    younger.push(currentSibling);
                    break;
                case (currentSibling[3] === "twin"):
                    twins.push(currentSibling);
            }
        }
        for (let i = 0; i < older.length; i++) allSibs.push(older[i]);
        for (let i = 0; i < twins.length; i++) allSibs.push(twins[i]);
        for (let i = 0; i < younger.length; i++) allSibs.push(younger[i]);
        let position;
        switch(true){
            case (older.length === 0 && twins.length === 0):
                position = "oldest";
                break;
            case (younger.length === 0 && twins.length === 0):
                position = "youngest";
                break;
            case (older.length === 1 && twins.length === 0):
                position = "second-oldest";
                break;
            case (younger.length === 1 && twins.length === 0):
                position = "second-youngest";
                break;
            default:
                position = "middle child";
            }
        string += " You are the " + position + " of " + (allSibs.length) + " children: ";
        for (let i = 0; i < allSibs.length; i++){
            let currentSibling = allSibs[i];
            let relation = "";
            if (currentSibling[3] === "twin"){
                relation = "twin ";
            }
            if (currentSibling[2] === true){
                relation += "brother";
            }else {
                relation += "sister";
            }
            if (i === 0) siblingList += "Your ";
            else siblingList += "your ";
            siblingList += relation + " " + currentSibling[0];
            if (i < allSibs.length - 1) siblingList += `,<br>`;
            else if (i === allSibs.length) siblingList += `, and <br>`;
            else siblingList += `.<br>`; //Change these to CLASSES
        }
    }
    return [string,siblingList];
}


function generateSibling(){
    let x = rando(2);
    let sibRace;
    let sibAge;
    let sibGender = randomSex();
    if (x === 1){sibRace = Father.race}
    else {sibRace = Mother.race}
    let sibName = pickFirstName(your.race,sibGender, community);
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
    return [sibName,sibRace,sibGender,sibAge];
}

function generateNPC(race,sex){
    let first = pickFirstName(race,sex);
    let last = your.surname;
        while(last === your.surname){
            last = pickLastName(race);
        }
    return first + " " + last;
}

function randomSex(){ //Remember that the way I chose to do it (><) is genderIsMale = true/false;
    let x = rando(2);
    if (x === 1){
        return false;
    }
    else {
        return true;
    }
}

function causeOfDeath(){ //So and so...
    let x = rando(12);
    switch(x){
        case 1: return "died of unknown causes.";
        case 2: return "was murdered.";
        case 3: return "was killed in battle.";
        case 4: return "died in a work-related accident.";
        case 5: return "died in an accident.";
        case 6:
        case 7: return "died of natural causes.";
        case 8: return "committed suicide.";
        case 9: return "was torn apart by an animal.";
        case 10: return "was consumed by a monster.";
        case 11: return "was executed for a crime.";
        case 12: return "was struck down by an angry god.";
    }
}

function status(){ //So and so is...
    let x = roll(3,"d6");
    switch(x){
        case 3: return causeOfDeath();
        case 4:
        case 5: return "went missing years ago.";
        case 6: return "is doing poorly due to financial troubles.";
        case 7: return "is doing poorly due to an injury.";
        case 8: return "is doing poorly due to relationship troubles.";
        case 7: return "died of natural causes.";
        case 8: return "committed suicide.";
        case 9:
        case 10:
        case 11:
        case 12: return "is alive and well.";
    }
}
