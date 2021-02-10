function createButton(value) {
  var button = document.createElement("BUTTON");
  button.innerHTML = value;
  document.getElementById("buttonchoices").appendChild(button);
}
function changeImage(value) {document.getElementById("textimage").innerHTML = value}
function changeText(value) {document.getElementById("textmessage").innerHTML = value}
