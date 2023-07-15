const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("size", updateSize);

function changeColor(newColor){
  const elem = document.getElementById("color");
  elem.style.color = newColor;
}