let textField = document.getElementById('generate');

function refreshPage() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('buttonbutton').style.display = 'block';
}

function activate() {
  let number = roll(1, 'd20');
  if (number === 1) {
    let sound = new Audio('ChaosSpell.wav');
    sound.play().then('Chaos!');
    textField.innerHTML = `<p style="font-size:36 pt; color:white;">'SURGE!'</p>`
    setTimeout(function () {
      textField.innerText = ''
    }, 2000);
    return;
  }
  textField.innerText = 'Nothing...'
  setTimeout(function () {
    textField.innerText = ''
  }, 2000);
}