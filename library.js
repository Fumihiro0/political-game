//Values
var currency = 100;
var karma = 0;

function createButton(value) {
  var button = document.createElement("BUTTON");
  button.innerHTML = value;
  document.getElementById("buttonchoices").appendChild(button);
}

function test() {
  fetch('file.txt')
  .then(response => response.text())
  .then(text => console.log(text))
}

function changeImage(value) {document.getElementById("textimage").innerHTML = value}
function changeText(value) {document.getElementById("textmessage").innerHTML = value}
