//startState = random number populates in random number div between 19-120, each crystal is assigned a value between 1-12, score is 0, wins and loses set to 0.

//User Input= User clicks on a gem and that number is added to the number in the count div, the number in the count div is evaluated
//if the number in count is less than the random number, game continues
//if the number in count is equal to the random number, win count goes up, go back to startState +1 win
//if the number in the count is greater than random number, lose count goes up, go back to startState +1lose



alert("yes");
let win = 0;
let lose = 0;
var counter = 0;
let secretNumber = Math.floor(Math.random()*100) + 21;
console.log(secretNumber);
  $("#number-to-guess").text(secretNumber);

let amethyst = Math.floor(Math.random()*12);
  $("img.amethyst").attr("data-crystalvalue", amethyst);

let garnet = Math.floor(Math.random()*12);
  $("img.garnet").attr("data-crystalvalue", garnet);

let pearl = Math.floor(Math.random()*12);
  $("img.pearl").attr("data-crystalvalue", pearl);

let steven = Math.floor(Math.random()*12);
  $("img.steven").attr("data-crystalvalue", steven);


// We then add the crystalValue to the user's "counter" which is a global variable.
// Every click, from every crystal adds to the global counter.



//generates random number and has it appear in html//


$("img").on("click", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;

  alert("new count! " + counter);

if (counter == secretNumber) {
  alert("you win!")
  winGame()


} else if (counter >= secretNumber) {
  alert("you lose!")
  loseGame()
}
return ;

});


function winGame() {
counter = 0
secretNumber = Math.floor(Math.random()*100) + 20;
  console.log(secretNumber);
    $("#number-to-guess").text(secretNumber);

amethyst = Math.floor(Math.random()*12);
      $("img.amethyst").attr("data-crystalvalue", amethyst);

garnet = Math.floor(Math.random()*12);
      $("img.garnet").attr("data-crystalvalue", garnet);

pearl = Math.floor(Math.random()*12);
      $("img.pearl").attr("data-crystalvalue", pearl);

steven = Math.floor(Math.random()*12);
      $("img.steven").attr("data-crystalvalue", steven);

      $("#wincount").text(win += 1);

  return;

}

function loseGame(){
  counter = 0;
  secretNumber = Math.floor(Math.random()*100) + 20;
    console.log(secretNumber);
      $("#number-to-guess").text(secretNumber);

  amethyst = Math.floor(Math.random()*12);
        $("img.amethyst").attr("data-crystalvalue", amethyst);

  garnet = Math.floor(Math.random()*12);
        $("img.garnet").attr("data-crystalvalue", garnet);

  pearl = Math.floor(Math.random()*12);
        $("img.pearl").attr("data-crystalvalue", pearl);

  steven = Math.floor(Math.random()*12);
        $("img.steven").attr("data-crystalvalue", steven);

  $("#losecount").text(lose += 1);

  return;
}




// let count = sum of user input based on crystal assignment
//
// let win = 0
//
// let loss = 0
