let number = document.querySelector('.input');
let button = document.querySelector('.submit').onclick = mult;

function mult() {
  if (+number.value%2 === 0) {
    let result_even = +number.value/2;
    
    if (result_even%2 === 0) {
      create_element(result_even, 'red');
    } else {
      create_element(result_even, 'blue');
    }
    
  } else {
      let result_odd = +number.value*3+1;
     
      if (result_odd%2 === 0) {
      create_element(result_odd, 'red');
    } else {
      create_element(result_odd, 'blue');
    }
  }
}

function create_element(value, color) {
  number.value = value;
  
  let div = document.createElement('div');
  
  div.textContent = value;
  div.style.color = color;
  
  document.body.append(div);
}
