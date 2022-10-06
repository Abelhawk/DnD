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