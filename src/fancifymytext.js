function boxFontSize() {
  document.getElementById("boxtext").style.fontSize = "24px";
}

function makeFancy() {
  const fancify = document.getElementById("boxtext");

  fancify.style.fontWeight = "bold"
  fancify.style.color = "blue"
  fancify.style.textDecoration = "underline"
}

function resetFancy() {
  document.getElementById("boxtext").style.fontWeight = "normal"
}

function mooBut() {
  const getboxtext = document.getElementById("boxtext");
  getboxtext.value = getboxtext.value.toUpperCase();

  var stringbits = getboxtext.value.split(".")
  getboxtext.value = stringbits.join("-Moo")


}