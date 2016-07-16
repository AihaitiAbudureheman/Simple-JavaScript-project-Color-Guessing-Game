var colors = ["blue", "cyan", "green", "red", "gray", "gold", "orange", "white", "yellow", "magenta"];
var size = colors.length;
var click = 0;
document.getElementById('restart').style = "display:none";


function myFunction() {

    document.getElementById('start').style = "display:none";
    document.getElementById('restart').style = "display:inline-block";

    click += 1;
    var target_index = Math.floor(Math.random() * 10);
    var target = document.getElementById('color').value;



    if (target_index > size) {
        document.getElementById('alert-options').innerHTML = "Sorry I don't recognize your color!";
        document.getElementById('alert-questions').innerHTML = "Please try again!";

    } else if (target_index < size && target != colors[target_index] && target > colors[target_index]) {
        document.getElementById('alert-options').innerHTML = "Sorry your guess is not correct!"
        document.getElementById('hint').innerHTML = "Hint: Your color is alphabatically higher than mine.";
        document.getElementById('alert-questions').innerHTML = "Please try again!";

    } else if (target_index < size && target != colors[target_index] && target < colors[target_index]) {
        document.getElementById('alert-options').innerHTML = "Sorry your guess is not correct!"
        document.getElementById('hint').innerHTML = "Hint: Your color is alphabatically lower than mine.";
        document.getElementById('alert-questions').innerHTML = "Please try again!";


    } else if (target == colors[target_index]) {
        document.getElementById('alert-options').innerHTML = "Congratulations!";
        document.getElementById('hint').innerHTML = "You have guessed the color, it took you " + click + " guess to finish the game.";
        document.getElementById('alert-questions').innerHTML = "You can see the color in the background!";
        document.body.style.backgroundColor = target;



    }


}

function reset() {
    document.getElementById('start').style = "display:inline-block";
    document.getElementById('restart').style = "display:none";
    document.body.style.backgroundColor = "white";
}

function cancel() {
    location.reload();
}
