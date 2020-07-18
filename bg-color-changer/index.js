document.getElementById("change-color").addEventListener("click", changeColor);

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function changeColor() {
    document.body.style.backgroundColor = randomColor();
    document.getElementById("color").textContent = randomColor();
}