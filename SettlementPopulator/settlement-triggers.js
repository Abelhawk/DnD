function calculate() {
    let population = parseInt(document.getElementById('population').value);
    let districts = getDistricts(population)
    getTownType(population);
    getPopulation(population);
    getGovernment(population, districts)
    getDefense(population)
    getReligion(population)
    getCommerce(population)
    getStructures(population);
    console.log(districts);
    if (districts > 0) {
        document.getElementById('districts').innerText = `You can find ${districts} districts here.`
    } else {
        document.getElementById('districts').innerText = ``;
    }
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
            box.innerText = 'Encampment'
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
    let numberOfPeople = comma(wordify(number));
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
            box.innerText = 'This encampment, likely temporary, houses a mere ' + numberOfPeople + ' people.'
            break;
        case (number <= 600):
            box.innerText = numberOfPeople + ' people live here.'
            break;
        case (number >= 601):
            box.innerText = 'A population of ' + numberOfPeople + ' people live here.'
    }
}

function getGovernment(number, districts) {
    let nobles = comma(wordify(Math.round(districts / 2)));
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
        case (number <= 599): //Hamlet
            box.innerHTML = `This settlement is led by a council of ${npc('commoners')}.`
            break;
        case (number <= 999): //Village
            box.innerHTML = `A resident reeve (${npc('noble')}) leads this settlement, along with a council of ${npc('commoners')}.`
            break;
        case (number <= 6000): //Town
            box.innerHTML = `A resident ${npc('noble')} and his lord mayor (${npc('noble')}) lead this settlement, and an elected council of ${npc('commoners')} 
            represents the middle class.`
            break;
        case (number <= 12000): //City
            box.innerHTML = `A resident ${npc('noble')} leads the city, along with a council of ${nobles} ${npc('nobles')} overseeing the
            surrounding areas and functions of government. An elected council of ${npc('commoners')} represents merchants and the middle class.`
            break;
        case (number > 12000): //Metropolis
            box.innerHTML = `This large city is governed by a monarch (${npc('noble')}), a magic counselor (${npc('archmage')} or
            ${npc('priest')}) a council of ${nobles} aristocrats (${npc('nobles')}) of noble houses, a war captain (${npc('warlord')}),
            an elected council of high-class ${npc('nobles')}, and several councils of ${npc('commoners')} represent merchants, the middle class,
            and other power centers.`
    }
}

function getDefense(number) {
    let box = document.getElementById('defense');
    let militia = comma(wordify(Math.round(number / 20)));
    let guards = comma(wordify(Math.round(number / 100)));
    let mageNumber = rando(4) - 1;
    let mages = '';
    if (mageNumber === 1) {
        mages = `A resident ${npc('mage')} is also available to help defend.`
    }
    if (mageNumber > 1) {
        mages = `A group of ${mages} ${npc('mages')} is also available to help defend.`
    }
    let moreMages = comma(wordify(Math.round(number / 500)));
    let archmagi = comma(wordify(Math.round(number / 5000)));
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
            each noble has at least one personal bodyguard (${npc('veteran')}). A wooden palisade wall offers some protection.`
            break;
        case (number <= 12000): //City
            box.innerHTML = `A town watch of ${guards} ${npc('guards')} maintains order. A stone wall surrounds the town. 
            ${npc('Knights')} act as bodyguards for nobles. In times of war, an army of ${militia} ${npc('veterans')}
            can be conscripted.${mages}`
            break;
        case (number > 12000): //Capitol and Metropolis
            box.innerHTML = box.innerHTML = `A town watch of ${guards} ${npc('guards')} maintains order within the fortified walls. 
            ${npc('Knights')} act as bodyguards for nobles. In times of war, an army of ${militia} ${npc('veterans')}
            can be conscripted. A group of ${moreMages} ${npc('mages')} led by ${archmagi} ${npc('archmages')} are also available to defend the city.`
    }
}

function getReligion(number) {
    let box = document.getElementById('religion');
    let acolytes = comma(wordify(Math.round(number / 300)));
    let priests = comma(wordify(Math.round(number / 1000)));
    let Xpriests = comma(wordify(Math.round(number / 500)));
    switch (true) {
        case (number <= 299): //House
            box.innerHTML = '';
            break;
        case (number <= 300): //Group of houses
            box.innerHTML = `The people's religion is guided at a small shrine by an ${npc('acolyte')} or a ${npc('druid')}.`
            break;
        case (number <= 999): //Encampment
            box.innerHTML = `Local religion is guided at a shrine by ${acolytes} ${npc('acolytes')}.`
            break;
        case (number <= 1999): //Village
            box.innerHTML = `Local religion is guided at a small temple by a ${npc('priest')} and ${acolytes} ${npc('acolytes')}.`
            break;
        case (number <= 6000): //Town
            box.innerHTML = `Temples operated by ${priests} ${npc('priests')} and ${acolytes} ${npc('acolytes')} throughout the
            city guide religion here.`
            break;
        case (number > 6000): //Capitol and Metropolis
            box.innerHTML = `A variety of temples are in operation here, guided by ${Xpriests} ${npc('priests')} and 
            ${acolytes} ${npc('acolytes')}.`
    }
}

function getCommerce(number) {
    let box = document.getElementById('commerce');
    switch (true) {
        case (number <= 200): //House
            box.innerHTML = '';
            break;
        case (number <= 600): //Hamlet
            box.innerHTML = `Basic trade goods and items can be bartered for, and on market days, the only items for sale are never worth
            more than 1 gp.`
            break;
        case (number <= 1000): //Village
            box.innerHTML = `Goods worth 1 gp or less can be bought or bartered for. On market days, wares worth up to 5 gp can be found for sale.`
            break;
        case (number <= 6000): //Town
            box.innerHTML = `Wares worth up to 50 gp and some common magic items can be found for sale. Some craftsman may be available for hire. 
            Visiting merchants sometimes have things worth up to 100 gp.`
            break;
        case (number <= 15000): //Capitol
            box.innerHTML = `Just about anything is available for purchase or special order, including magic items, if you look hard enough.`
            break;
        case (number > 15000): //Metropolis
            box.innerHTML = `You can find anything for sale here, but the price of mundane items here is 25% higher than in smaller towns.`
            break;
    }
}

function getDistricts(number) {
    switch (true) {
        case (number <= 599):
            return 0;
        case (number <= 1000):
            return 3;
        case (number > 1000):
            return wordify(Math.round(number / 200));
    }
}

function getStructures(number) {
    let box = document.getElementById('structures');
    let residences = comma(wordify(Math.round(number / 6)));
    let middles = comma(wordify(Math.round((number/3)/3)));
    let slums = comma(wordify(Math.round(number / 6)));
    let shops = comma(wordify(Math.round(number / 60)));
    let nobles = comma(wordify(Math.round(getDistricts(number))));
    let bigNobles = comma(wordify(Math.round(getDistricts(number) / 2)));
    let magicShops = comma(wordify(Math.round(number / 5000)));
    let mageTowers = 'mage tower';
    if (number >= 20000) {
        mageTowers = comma(wordify(Math.round(number / 10000))) + 'mage towers'
    }
    let structuresArray = [];
    if (number <= 200) {
        box.innerHTML = '';
        return;
    }
    if (number < 6000) {
        if (number > 200) {
            structuresArray.push('well', 'gathering place', `${residences} small wooden homes`)
        }
        if (number > 600) {
            structuresArray.push('marketplace', 'general store', `inn`, `stone noble's manor`, `shrine`)
        }
    } else {
        structuresArray.push(`fountain`, `gathering place`, `marketplace`, `stables`, `tavern`, `${slums} small wooden homes`,
            `${middles} middle-class homes`, `${nobles} noble's manors`, `${bigNobles} noble estates`, `${shops} shops`, `temples`
        )
        if (number <= 12000) {
            structuresArray.push(`sewers`, `${magicShops} common magic item shops`, `keep`, `barracks`, 'parks',
                `schools`, `academies`)
        }
        if (number > 12000) {
            structuresArray.push(`specialty shops`, `${mageTowers}`, 'auction house', `arena`, `university`)
        }
    }
    box.innerHTML = `Some places you might find here include: <br><ul>`
    for (let i = 0; i < structuresArray.length; i++) {
        box.innerHTML += `<li>${structuresArray[i]}</li>`
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
    if (x >= 1000) {
        x = Math.round(x/100)*100
    } else if (x >= 50) {
        x = Math.round(x/10)*10
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
