const display = document.getElementById("myinput");
// const total = document.getElementById("total");
// const clear = document.getElementById("clear");

function calculate(input) {
  display.value += input;
}
function cleardisplay() {
  display.value = "";
}
function Total() {
  display.value = eval(display.value);
}
function remove() {
  display.value = display.value.tostring(0, display.value < length - 1);
}
