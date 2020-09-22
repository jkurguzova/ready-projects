var numbers = document.querySelectorAll('.number');
var operations = document.querySelectorAll('.operator');
var decimalBtn = document.getElementById('decimal');
var result = document.getElementById('result');
var ce = document.getElementById('ce');
var c = document.getElementById('c');


for (i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click', function (e) {
console.log ('клик по кнопке цифра');
  });
}