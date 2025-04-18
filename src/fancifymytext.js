function boxFontSize() {
  document.getElementById("boxtext").style.fontSize = "24px";
}

function makeFancy() {
  // target the text being typed directly and store it in a var
  const fancify = document.getElementById("boxtext");

  fancify.style.fontWeight = "bold"
  fancify.style.color = "blue"
  fancify.style.textDecoration = "underline"
}

function resetFancy() {
  const unfancify = document.getElementById("boxtext");

  unfancify.style.fontWeight = "normal"
  unfancify.style.color = "black"
  unfancify.style.textDecoration = "none"
}

function mooBut() {
  const getboxtext = document.getElementById("boxtext");
  getboxtext.value = getboxtext.value.toUpperCase();

  var stringbits = getboxtext.value.split(".")
  getboxtext.value = stringbits.join("-Moo")


}