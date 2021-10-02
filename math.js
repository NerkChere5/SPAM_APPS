let number = document.querySelector('.input');
let button = document.querySelector('.submit').onclick = mult;


function mult() {
  if (+number.value%2 === 0) {
    let result_even = +number.value/2;
    
    checkColor(result_even);
  } else {
      let result_odd = +number.value*3+1;
      checkColor(result_odd);
  }
}

function create_element(value, color) {
  number.value = value;
  
  let div = document.createElement('div');
  
  div.textContent = value;
  div.style.color = color;
  
  document.body.append(div);
}


function checkColor(resultValue) {
  if (resultValue%2 === 0) {
      create_element(resultValue, 'red');
    } else {
      create_element(resultValue, 'blue');
    }
}
