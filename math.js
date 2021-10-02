let number = document.querySelector('.input');
let button = document.querySelector('.submit').onclick = mult;


function mult() {
  let numberNum = +number.value;
  
  if (numberNum%2 === 0) {
    let result_even = numberNum/2;
    
    checkColor(result_even);
  } else {
      let result_odd = numberNum*3+1;
      checkColor(result_odd);
  }
}

function create_element(checkResultValue, color) {
  number.value = checkResultValue;
  
  let element = document.createElement('div');
  
  element.textContent = checkResultValue;
  element.style.color = color;
  
  document.body.append(element);
}


function checkColor(resultValue) {
  if (resultValue%2 === 0) {
      create_element(resultValue, 'red');
    } else {
      create_element(resultValue, 'blue');
    }
}
