//ARCTIC=== == == == == -- -- -- -- -- - - - - -

let arcticEncounters = [
  npc(1, 'giant owl'),
  npc(roll(1, 'd6') + 3, 'kobold'),
  npc(roll(1, 'd4') + 3, 'commoner') + ' (trappers)',
  npc(1, 'owl'),
  npc(roll(2, 'd4'), 'blood hawk'),
  npc(roll(2, 'd6'), 'bandits'),
  npc(roll(1, 'd3'), 'winged kobold') + 'with' + npc(roll(1, 'd6'), 'kobold'),
  npc(roll(2, 'd8') + 3, 'tribal warrior') + ' (hunters)',
  npc(1, 'half-ogre'),
  npc(roll(1, 'd3') + 3, 'ice mephit'),
  npc(1, 'brown bear'),
  npc(roll(1, 'd6') + 1, 'orc'),
  npc(1, 'polar bear'),
  npc(roll(1, 'd6'), 'scout'),
  npc(1, 'saber-toothed tiger'),
  npc(1, 'berserker'),
  npc(1, 'ogre'),
  npc(1, 'griffin'),
  npc(1, 'druid'),
  npc(roll(1, 'd4') + 3, 'commoner') + ' (refugees) fleeing from orcs',
  npc(roll(1, 'd3'), 'veteran'),
  npc(roll(1, 'd4'), 'orog'),
  npc(2, 'brown bear'),
  npc(1, 'orc eye', 'of Gruumsh') + 'with' + npc(roll(2, 'd8'), 'orc'),
  npc(roll(1, 'd3'), 'winter wolf'),
  npc(roll(1, 'd4'), 'yeti'),
  npc(roll(1, 'd3'), 'manticore'),
  npc(1, 'bandit captain') + 'with' + npc(roll(2, 'd6'), 'bandit'),
  npc(1, 'revenant'),
  npc(1, 'troll'),
  npc(1, 'werebear'),
  npc(1, 'young remorhaz'),
  npc(1, 'mammoth'),
  npc(1, 'young white dragon'),
  npc(1, 'frost giant'),
]

arcticDiscoveries = [
  {
    name: 'Mammoth corpse.',
    desc: "It's partially eaten. " + amount(roll(1, 'd4'), 'ration') + ' can be harvested from it.',
  },
  {
    name: 'Tracks in the snow.',
    desc: "They walk in single file and then stop abruptly."
  },
  {
    name: 'Frozen pond',
    desc: "There's a jagged hole in the ice that appears recently made."
  },
  {
    name: 'Snowstorm',
    desc: "The temperature drops below zero, swirling snow reduces visibility to 30 feet, and strong winds blow. This will last for " + amount(roll(1,'d6'), 'day') + '.'
  },
  {
    name: 'Injured Polar Bear',
    desc: "A half-orc druid is tending to it. If the characters assist her, she gives them a vial of antitoxin."
  },
  {
    name: 'Extreme Cold',
    desc: "For the next " + amount(roll(1,'d4'), 'hour') + ", characters must deal with extreme cold conditions."
  },
  {
    name: 'Mournful Howl',
    desc: "A howl echoes over the land for " + amount(roll(1,'d3')) + " minutes."
  },
  {
    name: 'Blizzard',
    desc: "Visibility is reduced to 5 feet for " + amount(roll(1,"d6"), 'hour') + ")."
  },
  {
    name: 'Caribou Herd',
    desc: "A herd of " + npc(roll(3, "d20") + 60, 'deer') + " (caribou) move through the snow."
  },
  {
    name: 'Frozen Lake',
    desc: "It stretches out a mile wide. Preserved corpses of strange creatures are frozen in its surface."
  },
  {
    name: 'Crumbling Ice Castle',
    desc: "The area is littered with the frozen bodies of blue-skinned humanoids."
  },
  {
    name: 'Black Ice',
    desc: "A patch of black ice is on the ground. The air temperature around the patch is warmer than in the surrounding area. Characters who inspect the ice find bits of machinery frozen within."
  },
  {
    name: 'Frozen Adventurer',
    desc: "An adventurer is frozen six feet under the ice. " + function chance() {let num = rando(2); if (num === 1) return 'The corpse has a Rare magic item.'}
  },
  {
    name: 'Wall of Ice',
    desc: "A 500-foot tall wall of ice, 300 feet thick, stretches across " + amount(roll(1, "d4")) + " miles."
  },
  {
    name: 'Mountain Carving',
    desc: "The likeness of a stern woman with long, flowing hair is carved into the side of a mountain."
  },
]

//=== == == == == -- -- -- -- -- - - - - -


function roll(number, dice) {
  let diceType = 1;
  switch (dice) {
      case "d2":
          diceType = 2;
          break;
      case "d3":
          diceType = 3;
          break;
      case "d4":
          diceType = 4;
          break;
      case "d6":
          diceType = 6;
          break;
      case "d8":
          diceType = 8;
          break;
      case "d10":
          diceType = 10;
          break;
      case "d12":
          diceType = 12;
          break;
      case "d20":
          diceType = 20;
          break;
      case "d100":
          diceType = 100;
  }
  let totalRoll = 0;
  for (let i = 0; i < number; i++) {
      totalRoll += ((rando(diceType) + 1));
  }
  return totalRoll;
}

function rando(probability) {
  //If you want a binary one, do rando(2), which returns a 0 or a 1.
  return Math.floor(Math.random() * probability);
}

function npc(number, creature, suffix) {
  if (!suffix) {
    suffix = ''
  }
  if (number > 1) {
    creature = plural(creature)
  }
  return `${number} <span class="bold">${creature}${suffix}</span>`
}

function amount(number, thing) {
  if (number > 1) {
    thing = plural(thing)
  }
  return number + ' ' + thing;
}