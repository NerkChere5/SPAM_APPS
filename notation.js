let _button_reset = document.querySelector('.notation__button_reset');
let _button_result = document.querySelector('.notation__button_result');
let _edit_in = document.querySelector('.notation__edit_in');
let _edit_notation_from = document.querySelector('.notation__edit_notation_from');
let _edit_notation_to = document.querySelector('.notation__edit_notation_to');
let _label_out = document.querySelector('.notation__label_out');




function _button_reset__on_click() {
  _edit_in.value = '';
  _edit_notation_from.value = 10;
  _edit_notation_to.value = 2;
  _label_out.textContent = '';
}


function _button_result__on_click() {
  let number = +_edit_in.value;
  let notation_from = +_edit_notation_from.value;
  let notation_to = +_edit_notation_to.value;
  
  _label_out.textContent = _number_transform(number, notation_from, notation_to);
}


function _number_transform(number, notation_from, notation_to) {
  return parseInt(number, notation_from).toString(notation_to);
}




function main() {
  _button_reset.onclick = _button_reset__on_click;
  _button_result.onclick = _button_result__on_click;
}




main();
