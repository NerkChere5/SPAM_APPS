let number = document.querySelector('.input');
let button = document.querySelector('.submit').onclick = mult;

function mult() {
  if (+number.value%2 === 0) {
    let result_even = +number.value/2;
    create_element(result_even, 'red');
  } else {
        let result_odd = +number.value*3+1;
        create_element(result_odd, 'blue')
  }
}

function create_element(value, color) {
  number.value = value;
  
  let div = document.createElement('div');
  
  div.textContent = value;
  div.style.color = color;
  
  document.body.append(div);
}
