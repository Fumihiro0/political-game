//Values
var currency = 100;
var karma = 0;

function changeImage(value) {document.getElementById("image").src = value}
function changeText(value) {document.getElementById("textmessage").innerHTML = value}
function removeAllChildNodes(parent) {/*totally wrote this myself*/while (parent.firstChild) { parent.removeChild(parent.firstChild);}}
function createButton(value, leadto, changeImageBool) {
  var button = document.createElement("BUTTON");
  button.innerHTML = value;
  document.getElementById("buttonchoices").appendChild(button);
  button.onclick = function()
  {
     removeAllChildNodes(document.querySelector("#buttonchoices"));
     if(changeImageBool) {changeImage("images/"+leadto+".png");}
     fetch('code-run/'+leadto+'.js')
    .then(response => response.text())
    .then(text => eval(text))
    setTimeout(function() {
    document.getElementById("money").innerHTML = "Money: "+currency
    document.getElementById("karma").innerHTML = "Reputation: "+karma
    }, 10);
  };
}
