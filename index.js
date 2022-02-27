console.log("index.js");

var keyboard = document.getElementById("keyboard");
var boxes = document.getElementById("boxes");
var boxArea = document.getElementById("boxArea");
var buttons = keyboard.getElementsByTagName("button");

var targetWord = "spill";
var guess = "";
// var guessesList = [];

document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    //did you win?
    if (targetWord == guess) {
      console.log("YOU WIN");
    } else {
      console.log("TOO BAD");
    }
  } else if (event.key == "Backspace") {
    //removes last letter of guess
    guess = guess.substring(0, guess.length - 1);
  } else if (guess.length < 5) {
    //   add a new letter, but only 5!
    guess += event.key;
  }
  renderBoxesList();
});

// TWO FOR LOOP VERSIONS! DO THE SAME THING!

// for (var x = 0; x < buttons.length; x++) {
//   var button = buttons[x];
//   button.addEventListener("click", function (event) {
//     event.target.style.color = "red";
//   });
// }

for (var button of buttons) {
  button.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "red";
  });
}

renderBoxesList();
// renderBoxesList2();

// Javascript quirk
// called "Hoisting"
// when you use the "function" keyword, javascript will compile it first
function renderBoxesList() {
  boxArea.innerHTML = ""; // clears out the HTML of boxArea
  var rowDiv = document.createElement("div");
  rowDiv.classList.add("row"); //add the word row to the class
  for (var x = 0; x < 5; x++) {
    var letter = guess[x];
    var box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = letter || "";
    rowDiv.appendChild(box); //put the box in the row
  }
  boxArea.appendChild(rowDiv); //put the row in the boxArea
}

function renderBoxesList2() {
  var htmlString = `
    <div class="row">
        <div class="box">${guess[0] || ""}</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
    `;
  boxArea.innerHTML += htmlString;
}

{
  /* <div class="row">
<div class="box apple banana">a</div>
<div class="box">a</div>
<div class="box">a</div>
<div class="box">a</div>
<div class="box">a</div>
</div> */
}
