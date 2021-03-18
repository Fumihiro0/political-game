//Values
var currency = 100;
var karma = 0;

function changeImage(value) {document.getElementById("textimage").innerHTML = value}
function changeText(value) {document.getElementById("textmessage").innerHTML = value}

function createButton(value, leadto) {
  var button = document.createElement("BUTTON");
  button.innerHTML = value;
  document.getElementById("buttonchoices").appendChild(button);
  button.onclick = function()
  {
    console.log('https://github.com/Starlight-Developers/political-game/tree/main/text-images/'+leadto)
    fetch('https://github.com/Starlight-Developers/political-game/tree/main/text-images/'+leadto)
    .then(response => response.text())
    .then(text => changeImage(text))
  };
}
