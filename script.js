const display = document.querySelector('input[name="display"]');

function data(val) {
  display.value += val;
}

function ac() {
  display.value = "";
}

function del(){
  display.value = display.value.slice(0, -1);
}

function equal(){
  display.value = eval(display.value);
}
