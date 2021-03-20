//Values
var currency = 100;
var karma = 0;

function changeImage(value) {document.getElementById("image").src = value}
function changeText(value) {document.getElementById("textmessage").innerHTML = value}
function removeAllChildNodes(parent) { // totally wrote this myself
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function createButton(value, leadto, changeImageBool) {
  var button = document.createElement("BUTTON");
  button.innerHTML = value;
  document.getElementById("buttonchoices").appendChild(button);
  button.onclick = function()
  {
     fetch('https://raw.githubusercontent.com/Starlight-Developers/political-game/main/code-run/'+leadto+'.js')
    .then(response => response.text())
    .then(text => eval(text))
    if(changeImageBool) {changeImage("images/"+leadto+".png");}
    removeAllChildNodes(document.querySelector("#buttonchoices"));
    document.getElementById("money").innerHTML = "Money: "+currency
    document.getElementById("karma").innerHTML = "Reputation: "+karma
  };
function currencyChange(value) = {currency += value}
function currencyKarma(value) = {karma += value}
}
