function calculate() {
    let population = parseInt(document.getElementById('population').value);
    let districts = getDistricts(population)
    getTownType(population);
    getPopulation(population);
    getGovernment(population, districts)
    getDefense(population, districts)
    document.getElementById('thebox').style.display = "block";
}

function getTownType(number) {
    let box = document.getElementById('settlement-type');
    switch (true) {
        case (number === 0):
            box.innerText = 'Ghost Town'
            break;
        case (number <= 12):
            box.innerText = 'House'
            break;
        case (number <= 100):
            box.innerText = 'Camp'
            break;
        case (number <= 600):
            box.innerText = 'Hamlet'
            break;
        case (number <= 1000):
            box.innerText = 'Village'
            break;
        case (number <= 6000):
            box.innerText = 'Town'
            break;
        case (number <= 12000):
            box.innerText = 'City'
            break;
        case (number <= 25000):
            box.innerText = 'Capitol'
            break;
        case (number > 25000):
            box.innerText = 'Metropolis'
            break;
    }
}

function getPopulation(number) {
    let box = document.getElementById('pop');
    let numberOfPeople = wordify(number);
    switch (true) {
        case (number === 0):
            box.innerText = 'Regardless of its origins, no one lives here and there is no commerce to be had.'
            break;
        case (number === 1):
            box.innerText = 'A lone building stands here, housing a single person who lives alone.'
            break;
        case (number <= 12):
            box.innerText = 'A lone building stands here, housing a family of ' + numberOfPeople + ' people.'
            break;
        case (number <= 100):
            box.innerText = 'This encampment, likely temporary, houses a mere ' + number + ' people.'
            break;
        case (number <= 600):
            box.innerText = 'This small settlement houses ' + number + ' people.'
            break;
        case (number >= 601):
            box.innerText = 'A population of ' + comma(number) + ' people live here.'
    }
}

function getGovernment(number, districts) {
    districts = wordify(districts/2);
    let box = document.getElementById('government');
    switch (true) {
        case (number <= 6):
            box.innerHTML = '';
            break;
        case (number <= 20):
            box.innerHTML = `A single ${npc('commoner')} leads this group.`
            break;
        case (number <= 100):
            box.innerHTML = `A single leader (${npc('bandit captain')} or ${npc('tribal warrior')}) leads and defends this band.`
            break;
        case (number <= 400):
            box.innerHTML = `This settlement is led by a council of ${npc('commoners')}.`
            break;
        case (number <= 1000):
            box.innerHTML = `A resident reeve (${npc('noble')}) leads this settlement, along with a council of ${npc('commoners')}.`
            break;
        case (number <= 6000):
            box.innerHTML = `A resident noble and his lord mayor (${npc('nobles')}) lead this settlement, and an elected council of ${npc('commoners')} 
            represents the middle class.`
            break;
        case (number <= 12000):
            box.innerHTML = `A resident ${npc('noble')} leads the city, along with a council of ${districts} ${npc('nobles')} overseeing the
            surrounding areas and functions of government. an elected council of ${npc('commoners')} represents merchants and the middle class.`
            break;
        case (number > 12000):
            box.innerHTML = `This capitol is governed by a monarch (${npc('noble')}), a magic counselor (${npc('archmage')} or
            ${npc('priest')}) a council of aristocrats (${npc('nobles')}) of noble houses, a war captain (${npc('warlord')}),
            an elected council of high-class ${npc('nobles')}, and several councils of ${npc('commoners')} represent merchants, the middle class,
            and other power centers.`
    }
}

function getDefense(number) {
    let box = document.getElementById('defense');
    let militia = comma(Math.round(number / 20));
    let guards = comma(Math.round(number / 100));
    let mages = rando(4)-1;
    if (mages === 0) { mages = ''}
    if (mages === 1) { mages = `One ${npc('mage')} is also available to help defend.`}
    if (mages === 1) { mages = `A group of ${mages} ${npc('mages')} is also available to help defend.`}
    let moreMages = comma(Math.round(number / 500));
    let archmagi = Math.round(number / 5000);
    switch (true) {
        case (number <= 100): //Encampment
            box.innerHTML = ``
            break;
        case (number <= 600): //Hamlet
            box.innerHTML = `A citizen's militia of ${militia} ${npc('thugs')} defend its people.`
            break;
        case (number <= 1000): //Village
            box.innerHTML = `A force of ${guards} ${npc('guards')} protect it, and a citizen's militia of 
            ${militia} ${npc('thugs')} is available in dire situations.`
            break;
        case (number <= 6000): //Town
            box.innerHTML = `It boasts a force of ${guards} soldiers (${npc('guards')}) to maintain order and protect it. In addition,
            each noble has at least one personal bodyguard (${npc('veteran')}).`
            break;
        case (number <= 12000): //City
            box.innerHTML = `A town watch of ${guards} ${npc('guards')} maintains order. 
            ${npc('Knights')} act as bodyguards for nobles. In times of war, an army of ${militia} ${npc('veterans')}
            can be conscripted.`
            if (mages > 0) box.innerHTML = `A town watch of ${guards} ${npc('guards')} maintains order. 
            ${npc('Knights')} act as bodyguards for nobles. In times of war, an army of ${militia} ${npc('veterans')}
            can be conscripted. ${mages}`
            break;
        case (number > 12000): //Capitol and Metropolis
            box.innerHTML = box.innerHTML = `A town watch of ${guards} ${npc('guards')} maintains order. 
            ${npc('Knights')} act as bodyguards for nobles. In times of war, an army of ${militia} ${npc('veterans')}
            can be conscripted. A group of ${moreMages} ${npc('mages')} led by ${archmagi} ${npc('archmages')} are also available to defend the city.`
    }
}

function getReligion(number) {
    let box = document.getElementById('religion');
    switch (true) {
        case (number <= 6): //House
            box.innerHTML = '';
            break;
        case (number <= 20): //Group of houses
            box.innerHTML = ``
            break;
        case (number <= 100): //Encampment
            box.innerHTML = ``
            break;
        case (number <= 400): //Hamlet
            box.innerHTML = ``
            break;
        case (number <= 1000): //Village
            box.innerHTML = ``
            break;
        case (number <= 6000): //Town
            box.innerHTML = ``
            break;
        case (number <= 12000): //City
            box.innerHTML = ``
            break;
        case (number > 12000): //Capitol and Metropolis
            box.innerHTML = ``
    }
}

function getDistricts(number) {
    switch (true) {
        case (number <= 599):
            return 0;
        case (number <= 1000):
            return 3;
        case (number > 1000):
            return Math.round(number / 200);
    }
}

//--------------------------------

function npc(string) {
    return '<span class="bold">' + string + '</span>'
}

function wordify(number) {
    switch (number) {
        case 1:
            return 'one'
        case 2:
            return 'two'
        case 3:
            return 'three'
        case 4:
            return 'four'
        case 5:
            return 'five'
        case 6:
            return 'six'
        case 7:
            return 'seven'
        case 8:
            return 'eight'
        case 9:
            return 'nine'
        case 10:
            return 'ten'
        case 11:
            return 'eleven'
        case 12:
            return 'twelve'
        default:
            return number
    }
}

function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
