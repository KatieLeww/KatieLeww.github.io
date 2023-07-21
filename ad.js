window.addEventListener('DOMContentLoaded', () => {
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

const textLen = document.getElementById('text').textContent.length
document.getElementById('len').textContent = textLen

let text = document.getElementById("hello").textContent.substring(0,5)
document.getElementById('world').textContent = text

});