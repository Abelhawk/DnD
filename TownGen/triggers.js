let number;

function generate(){
    number = $('#number').val();
    $('#generate').append(determine());
    $('#generate').append(`<br>`);
}

function determine() {
    for (let i = 0; i < number; i++) {

    }
}



//---------------------

function rando(probability){
    return Math.floor(Math.random() * probability + 1);
}

function capitalize(str){
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}