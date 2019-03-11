function generateHoard(lvl) {
    let randomNumber = roll(1, 'd100');
    let treasure = [];
    let numberOfRewards;
    let randMag;
    switch (true) {
        case (lvl <= 4):
            treasure.push(numberWithCommas(roll(6, "d6", 100) + " copper pieces"));
            treasure.push(numberWithCommas(roll(3, "d6", 100) + " silver pieces"));
            treasure.push(numberWithCommas(roll(2, "d6", 100) + " gold pieces"));

            switch (true) {
                case (randomNumber <= 6):
                    //You get NOTHING! You LOSE! Good DAY, sir!
                    break;
                case (randomNumber <= 16):
                    numberOfRewards = roll(2, "d6");
                    organize(getGems(numberOfRewards, 10), treasure);
                    break;
                case (randomNumber <= 26):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    break;
                case (randomNumber <= 36):
                    numberOfRewards = roll(2, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    break;
                case (randomNumber <= 44):
                    numberOfRewards = roll(2, "d6");
                    organize(getGems(numberOfRewards, 10), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    break;
                case (randomNumber <= 52):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    break;
                case (randomNumber <= 60):
                    numberOfRewards = roll(2, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    break;
                case (randomNumber <= 65):
                    numberOfRewards = roll(2, "d6");
                    organize(getGems(numberOfRewards, 10), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 70):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 75):
                    numberOfRewards = roll(2, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 78):
                    numberOfRewards = roll(2, "d6");
                    organize(getGems(numberOfRewards, 10), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 80):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 85):
                    numberOfRewards = roll(2, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 92):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table F"));
                    }
                    break;
                case (randomNumber <= 97):
                    numberOfRewards = roll(2, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table F"));
                    }
                    break;
                case (randomNumber <= 99):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    treasure.push(getMagicItem("table G"));
                    break;
                case (randomNumber <= 100):
                    numberOfRewards = roll(2, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    treasure.push(getMagicItem("table G"));
                    break;
            }
            break;
        case (lvl <= 10):
            treasure.push(numberWithCommas(roll(2, "d6", 100) + " copper pieces"));
            treasure.push(numberWithCommas(roll(2, "d6", 1000) + " silver pieces"));
            treasure.push(numberWithCommas(roll(6, "d6", 100) + " gold pieces"));
            treasure.push(numberWithCommas(roll(3, "d6", 10) + " platinum pieces"));
            switch (true) {
                case (randomNumber <= 4):
                    //You get NOTHING! You LOSE! Good DAY, sir!
                    break;
                case (randomNumber <= 10):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    break;
                case (randomNumber <= 16):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    break;
                case (randomNumber <= 22):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 100), treasure);
                    break;
                case (randomNumber <= 28):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    break;
                case (randomNumber <= 32):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    break;
                case (randomNumber <= 36):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    break;
                case (randomNumber <= 40):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 100), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    break;
                case (randomNumber <= 44):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    break;
                case (randomNumber <= 49):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 54):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 59):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 100), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 63):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 66):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 69):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 72):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 100), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 74):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 76):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    treasure.push(getMagicItem("table D"));
                    break;
                case (randomNumber <= 78):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    treasure.push(getMagicItem("table D"));
                    break;
                case (randomNumber === 79):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 100), treasure);
                    treasure.push(getMagicItem("table D"));
                    break;
                case (randomNumber === 80):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    treasure.push(getMagicItem("table D"));
                    break;
                case (randomNumber <= 84):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 25), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table F"));
                    }
                    break;
                case (randomNumber <= 88):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 50), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table F"));
                    }
                    break;
                case (randomNumber <= 91):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 100), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table F"));
                    }
                    break;
                case (randomNumber <= 94):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table F"));
                    }
                    break;
                case (randomNumber <= 96):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 100), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table G"));
                    }
                    break;
                case (randomNumber <= 98):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table G"));
                    }
                    break;
                case (randomNumber === 99):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 100), treasure);
                    treasure.push(getMagicItem("table H"));
                    break;
                case (randomNumber === 100):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    treasure.push(getMagicItem("table H"));
                    break;
            }
            break;
        case (lvl <= 16):
            treasure.push(numberWithCommas(roll(4, "d6", 1000) + " gold pieces"));
            treasure.push(numberWithCommas(roll(5, "d6", 100) + " platinum pieces"));
            switch(true){
                case (randomNumber <= 3):
                    //You get NOTHING! You LOSE! Good DAY, sir!
                    break;
                case (randomNumber <= 6):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    break;
                case (randomNumber <= 9):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 750), treasure);
                    break;
                case (randomNumber <= 12):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 500), treasure);
                    break;
                case (randomNumber <= 15):
                    numberOfRewards = roll(3, "d6");
                    organize(getGems(numberOfRewards, 1000), treasure);
                    break;
                case (randomNumber <= 19):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 23):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 750), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 26):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 500), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 29):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 1000), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table A"));
                    }
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table B"));
                    }
                    break;
                case (randomNumber <= 35):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 40):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 750), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 45):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 500), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 50):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 1000), treasure);
                    randMag = roll(1, "d6");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table C"));
                    }
                    break;
                case (randomNumber <= 54):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table D"));
                    }
                    break;
                case (randomNumber <= 58):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 750), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table D"));
                    }
                    break;
                case (randomNumber <= 62):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 500), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table D"));
                    }
                    break;
                case (randomNumber <= 66):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 1000), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table D"));
                    }
                    break;
                case (randomNumber <= 68):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    treasure.push(getMagicItem("table E"));
                    break;
                case (randomNumber <= 70):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 750), treasure);
                    randMag = roll(1, "d4");
                    treasure.push(getMagicItem("table E"));
                    break;
                case (randomNumber <= 72):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 500), treasure);
                    treasure.push(getMagicItem("table E"));
                    break;
                case (randomNumber <= 74):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 1000), treasure);
                    treasure.push(getMagicItem("table E"));
                    break;
                case (randomNumber <= 76):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    treasure.push(getMagicItem("table F"));
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table G"));
                    }
                    break;
                case (randomNumber <= 78):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 750), treasure);
                    treasure.push(getMagicItem("table F"));
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table G"));
                    }
                    break;
                case (randomNumber <= 80):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 500), treasure);
                    treasure.push(getMagicItem("table F"));
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table G"));
                    }
                    break;
                case (randomNumber <= 82):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 1000), treasure);
                    treasure.push(getMagicItem("table F"));
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table G"));
                    }
                    break;
                case (randomNumber <= 85):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table H"));
                    }
                    break;
                case (randomNumber <= 88):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 750), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table H"));
                    }
                    break;
                case (randomNumber <= 90):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 500), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table H"));
                    }
                    break;
                case (randomNumber <= 92):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 1000), treasure);
                    randMag = roll(1, "d4");
                    for (let i = 0; i < randMag; i++) {
                        treasure.push(getMagicItem("table H"));
                    }
                    break;
                case (randomNumber <= 94):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    treasure.push(getMagicItem("table I"));
                    break;
                case (randomNumber <= 96):
                    numberOfRewards = roll(2, 'd4');
                    mergeArray(getArtObjects(numberOfRewards, 250), treasure);
                    treasure.push(getMagicItem("table I"));
                    break;
                case (randomNumber <= 98):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 500), treasure);
                    treasure.push(getMagicItem("table I"));
                    break;
                case (randomNumber <= 100):
                    numberOfRewards = roll(3, 'd6');
                    organize(getGems(numberOfRewards, 1000), treasure);
                    treasure.push(getMagicItem("table I"));
                    break;
            }
            break;
        case (lvl >= 17):
    }
    return treasure;
}
