let textField = $('.generate');

function refreshPage() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('buttonbutton').style.display = 'block';
}

function activate() {
  textField.html(`<p>` + generate() + `</p>`);
}

function generate() {
  let first;
  let landmarkArray = [];
  let radios = document.getElementsByTagName('input');
  let biome;
  let moodArray = [];
  moodArray.push(defaults);
  let second;
  let result;
  //First word (mood)
  if (document.getElementById('peaceful').checked) {
    moodArray.push(peace);
  }
  if (document.getElementById('dangerous').checked) {
    moodArray.push(danger);
  }
  if (document.getElementById('scary').checked) {
    moodArray.push(scary);
  }
  if (document.getElementById('natural').checked) {
    moodArray.push(natural);
  }

  if (moodArray.length > 1) {
    first = randoArray(randoArray(moodArray));
  } else {
    // If there's no mood selected, some generic words are provided
    while (!first) {
      let z = rando(moodArray[0].length);
      first = moodArray[0][z];
    }
  }
  //Second word (biome)
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked && notALocationDefiner(
        radios[i])) {
      biome = radios[i].value;
    }
  }
  switch (true) {
    case (biome === 'grassland'):
      second = randoArray(grassland);
      landmarkArray.push(compound);
      landmarkArray.push(landmarks);
      break;
    case (biome === 'hills'):
      second = isDuplicate(first, hills);
      landmarkArray.push(compound);
      landmarkArray.push(landmarks);
      break;
    case (biome === 'forest'):
      second = isDuplicate(first, forest);
      landmarkArray.push(compound);
      landmarkArray.push(landmarks);
      break;
    case (biome === 'desert'):
      second = isDuplicate(first, desert);
      landmarkArray.push(compound);
      landmarkArray.push(desertMarks);
      break;
    case (biome === 'arctic'):
      second = isDuplicate(first, arctic);
      landmarkArray.push(compound);
      landmarkArray.push(arcticMarks);
      break;
    case (biome === 'coastal'):
      second = isDuplicate(first, coastal);
      landmarkArray.push(compound);
      landmarkArray.push(coastalMarks);
      break;
    case (biome === 'swamp'):
      second = isDuplicate(first, swamp);
      landmarkArray.push(compound);
      landmarkArray.push(swampMarks);
      break;
    case (biome === 'urban'):
      second = isDuplicate(first, grassland);
      landmarkArray.push(townMarks);
      landmarkArray.push(townMarks);
  }
  if (document.getElementById('XofX').checked) {
    // This returns a place called "BIOME OF MOODS."
    let random = rando(2);
    if (random === 1) {
      return (capitalize(second) + ' of ' + capitalize(plural(first)));
    } else {
      return (capitalize(first) + ' of ' + capitalize(plural(second)));
    }
  }
  result = first + second;
  let landmark = randoArray(isDuplicate(second, landmarkArray));
  if (document.getElementById('compounds').checked) {
    // This returns a place called "MOODBIOME LANDMARK."
    result += (' ' + landmark);
  }
  if (document.getElementById('descriptive').checked) {
    let type = rando(6);
    switch (type) {
      case 2:
      case 3:
        // This returns a place called "MOOD LANDMARK" or "BIOME LANDMARK."
        let firstSec = rando(2);
        if (firstSec === 1) {
          result = first;
        } else {
          result = second;
        }
        result += ' ' + landmark;
        break;
      case 4:
      case 5:
        // This returns a place called "THE MOODS," "THE BIOMES," or "THE LANDMARKS."
        let firstSec2 = rando(3);
        switch (firstSec2) {
          case 0:
            result = plural(first);
            break;
          case 1:
            result = plural(second);
            break;
          case 2:
            result = plural(landmark);
            break;
        }
        result = 'The ' + result;
        break;
      default:
        // This returns a place called "NUMBER LANDMARKS."
        if (landmark.slice(-1) !== 's') {
          landmark = plural(landmark);
        }
        result = randoArray(numbers) + ' ' + landmark
    }
  }
  if (document.getElementById('possess').checked) {
    // This returns a place called "NAME'S LANDMARK"
    let random = rando(6);
    if (random === 1) {
      result = randoArray(possessives);
    } else {
      let random2 = rando(2);
      if (random2 === 1) {
        result = pickFirstName('human', null) + '\'s';
      } else {
        result = pickLastName('human') + '\'s';
      }
    }
    result += ' ' + landmark;
  }
  return capitalize(result);
}

function notALocationDefiner(radio) {
  //todo: What is this crap?
  return (radio.value !== '' && radio.value !== 'compounds' && radio.value
      !== 'descriptive' && radio.value !== 'XofX' && radio.value !== 'possess')
}

//---------------------

function isDuplicate(first, biome) {
  let second = randoArray(biome);
  if (first === undefined) {
    alert('ERROR CODE: Tourmaline')
    return;
  }
  if (first === second || second === undefined) {
    isDuplicate(first, biome)
  } else {
    return second;
  }
}
