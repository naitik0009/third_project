function randomColor() {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  return `rgb(${a},${b},${c})`;
}
const btn = document.querySelectorAll("button");
btn.forEach(function (but) {
  but.addEventListener("click", function () {
    this.style.backgroundColor = randomColor();
  });
});
