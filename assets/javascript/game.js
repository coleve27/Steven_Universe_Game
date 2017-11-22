
//variable representing the number of wins//
var win = 0;
//variable representing the number of losses//
var lose = 0;
//variable representing the current user total//
var counter = 0;

//variable that assigns random number for user to guess and inserts it into html//
var secretNumber = Math.floor(Math.random()*100) + 21;
  $("#number-to-guess").text(secretNumber);

//function that assigns the gems random numbers//
startState();

//function that parses the gems value and adds them to the counter-- determines wins/loss//
$("img").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;

  $("#userguess").text(counter);

if (counter == secretNumber) {
  alert("you win!")
  winGame()


} else if (counter >= secretNumber) {
  alert("you lose!")
  loseGame()
}
return ;

});

//describes startState function//

function startState() {

var amethyst = Math.floor(Math.random()*12)+1;
  $("img.amethyst").attr("data-crystalvalue", amethyst);

var garnet = Math.floor(Math.random()*12)+1;
  $("img.garnet").attr("data-crystalvalue", garnet);

var pearl = Math.floor(Math.random()*12)+1;
  $("img.pearl").attr("data-crystalvalue", pearl);

var steven = Math.floor(Math.random()*12)+1;
  $("img.steven").attr("data-crystalvalue", steven);
}

//describes win game function//
//resets counter, resets random number, adds 1 to win count//

function winGame() {
counter = 0
secretNumber = Math.floor(Math.random()*100) + 20;
  console.log(secretNumber);
    $("#number-to-guess").text(secretNumber);

$("#wincount").text(win += 1);
startState ();

  return;

}

//describes lose game function//
//resets counter, resets random number, adds 1 to loss count//

function loseGame(){
  counter = 0;
  secretNumber = Math.floor(Math.random()*100) + 20;
    console.log(secretNumber);
      $("#number-to-guess").text(secretNumber);

  startState();

  $("#losecount").text(lose += 1);

  return;
}
