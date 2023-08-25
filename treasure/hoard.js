function generateHoard(lvl) {
  let randomNumber = roll(1, 'd100');
  let treasure = [];  
  switch (true) {
    case (lvl <= 4):
      treasure.push(rollTreasure(6, "d6", 100) + " copper pieces");
      treasure.push(rollTreasure(3, "d6", 100) + " silver pieces");
      treasure.push(rollTreasure(2, "d6", 100) + " gold pieces");
      mergeArray(getTreasures(1), treasure);
      break;
    case (lvl <= 10):
      treasure.push(rollTreasure(2, "d6", 100) + " copper pieces");
      treasure.push(rollTreasure(2, "d6", 1000) + " silver pieces");
      treasure.push(rollTreasure(6, "d6", 100) + " gold pieces");
      treasure.push(rollTreasure(3, "d6", 10) + " platinum pieces");
      mergeArray(getTreasures(2), treasure);
      break;
    case (lvl <= 16):
      treasure.push(rollTreasure(4, "d6", 1000) + " gold pieces");
      treasure.push(rollTreasure(5, "d6", 100) + " platinum pieces");
      mergeArray(getTreasures(3), treasure);
      break;
    case (lvl >= 17):
      treasure.push(rollTreasure(12, "d6", 1000) + " gold pieces");
      treasure.push(rollTreasure(8, "d6", 1000) + " platinum pieces");
      mergeArray(getTreasures(4), treasure);
  }
  return treasure;
}
