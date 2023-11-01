let advantageBonus = 0;

function loadPage() {
    document.getElementById('loading').style.display = "none";
    document.getElementById('characterButton').style.display = "block";
    document.getElementById("travelText").innerText = '';
    document.getElementById("notes").innerText = '';
    document.getElementById("subnotes").innerText = '';
}

function calculate() {
    document.getElementById("travelText").innerText = '';
    document.getElementById("notes").innerText = '';
    document.getElementById("subnotes").innerText = '';
    let speed = document.getElementById("speed").value; //speed in feet per round (or mph for sailing)

    if (speed == 0) {
        document.getElementById("travelText").innerText = "Buddy, your party ain't goin' nowhere today.";
        return;
    }
    if (document.getElementById("sailing").checked) {
        // SAILING
        let formattedSpeed = speed * 24;
        formattedSpeed = formattedSpeed.toFixed(1).toString()
        if (formattedSpeed.charAt(formattedSpeed.length - 2) === '.' && formattedSpeed.charAt(formattedSpeed.length - 1) === '0') {
            formattedSpeed = formattedSpeed.slice(0, -1);
            formattedSpeed = formattedSpeed.slice(0, -1);
        }
        document.getElementById("travelText").innerText = 'You can travel ' + formattedSpeed + ' miles per day.';
        return;
    };

    //ON FOOT   
    let speedFactor = 1;
    let marchSpeed = speed / 10;
    if (document.getElementById("fast").checked) {
        document.getElementById("notes").innerText = 'You have a -5 to your passive Perception.';
        marchSpeed = marchSpeed * (1 + (1/3));
    }
    if (document.getElementById("normal").checked) {
        speedFactor = 0.8;
    }
    if (document.getElementById("slow").checked) {
        document.getElementById("notes").innerText = 'You can move stealthily.';
        speedFactor = 0.6;
        marchSpeed = marchSpeed * ((2/3));
    }    
    if (document.getElementById("difficult").checked) {
        speed = speed / 2;
        marchSpeed = marchSpeed / 2;
    }
    let formattedSpeed = speed * speedFactor;
    marchSpeed = marchSpeed.toFixed(1).toString()
    if (marchSpeed.charAt(marchSpeed.length - 2) === '.' && marchSpeed.charAt(marchSpeed.length - 1) === '0') {
        marchSpeed = marchSpeed.slice(0, -1);
        marchSpeed = marchSpeed.slice(0, -1);
    }
    formattedSpeed = formattedSpeed.toFixed(1).toString()
    if (formattedSpeed.charAt(formattedSpeed.length - 2) === '.' && formattedSpeed.charAt(formattedSpeed.length - 1) === '0') {
        formattedSpeed = formattedSpeed.slice(0, -1);
        formattedSpeed = formattedSpeed.slice(0, -1);
    }
    document.getElementById("travelText").innerText = 'You can travel ' + formattedSpeed + ' miles per day.';
    document.getElementById("subnotes").innerText = 'A forced march is ' + marchSpeed + ' additional miles per hour.';
    return;
}

function checkSailing() {
    document.getElementById("travelText").innerText = '';
    document.getElementById("notes").innerText = '';
    document.getElementById("subnotes").innerText = '';
    let speed = document.getElementById("speed").value;
    if (document.getElementById("sailing").checked) {
        //Sailing
        document.getElementById("fast").disabled = true;
        document.getElementById("slow").disabled = true;
        document.getElementById("normal").disabled = true;
        document.getElementById("difficult").disabled = true;
        document.getElementById("measure").innerText = 'mph';
        document.getElementById("speed").value = speed / 10;
    } else {
        //On Foot
        document.getElementById("fast").disabled = false;
        document.getElementById("slow").disabled = false;
        document.getElementById("normal").disabled = false;
        document.getElementById("difficult").disabled = false;
        document.getElementById("measure").innerText = 'feet';
        document.getElementById("speed").value = speed * 10;
    }
}