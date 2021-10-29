let textField = $('.generate');

function refreshPage() {
  document.getElementById('loading').style.display = "none";
  document.getElementById('buttonbutton').style.display = "block";
}

function activate() {
  textField.html(`<p>` + generate() + `</p>`);
}

function generate() {
  let dangerThreshold = 21 - document.getElementById('areaDanger').value;
  let roll = roll(1, 'd20');
  if (roll < dangerThreshold) {
    return "The journey continues uneventfully."
  } else {
    // Calculate which array and stuff
    let discoveryOrEncounter = roll(1, "d100");
    if (discoveryOrEncounter < 60) {
      return randoArray(arcticEncounters)
    }
      return randoArray(arcticDiscoveries)
  }
}

//---------------------

function plural(str) {
  let secondToLast = str.slice(-2);
  switch (str.substr(-1)) {
    case "s":
    case "x":
    case "o":
      return str + "es";
    case "h":
      switch (secondToLast) {
        case "c":
        case "s":
          return str + "es";
        case "t":
          return str + "s";
      }
      break;
    case "y":
      return str.substring(0, str.length - 1) + "ies";
    case "f":
      if (secondToLast === "f") {
        return str.substring(0, str.length - 2) + "ves";
      } else {
        return str.substring(0, str.length - 1) + "ves";
      }
    case "e":
      if (secondToLast === "f") {
        return str.substring(0, str.length - 1) + "ves";
      }
    default:
      return str + "s";
  }
}