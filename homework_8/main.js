

let first = document.querySelector('.first');
let action = document.querySelector('.action');
let second = document.querySelector('.second');
let resultBtn = document.querySelector('button');


resultBtn.addEventListener('click', function () {
  calculator(first.value, action.value, second.value);
})
let calculator = (first, action, second) => {
  let result;
  switch (action) {
    case '+':
      result = parseInt(first) + parseInt(second);
      break
    case '':
      result = 'Не введен знак';
      break
    case '-':
      result = parseInt(first) - parseInt(second);
      break
    case '*':
      result = parseInt(first) * parseInt(second);
      break
    case '/':
      result = parseInt(first) / parseInt(second);
      break
    default:
      return result;
  }
  switch (first) {
    case '':
      result = 'Первое чило не введено';
      break
  }
  switch (second) {
    case '':
      result = 'Второе число не введено';
      break
  }

  console.log(result);
}


