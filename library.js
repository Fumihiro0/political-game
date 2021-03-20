//Values
var currency = 100;
var karma = 0;

function changeImage(value) {document.getElementById("textimage").src = value}
function changeText(value) {document.getElementById("textmessage").innerHTML = value}

function createButton(value, leadto) {
  var button = document.createElement("BUTTON");
  button.innerHTML = value;
  document.getElementById("buttonchoices").appendChild(button);
  button.onclick = function()
  {
    changeImage("https://raw.githubusercontent.com/Starlight-Developers/political-game/main/images/"+leadto+".png");
  };
}
