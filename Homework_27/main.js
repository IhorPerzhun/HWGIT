//1.1) Напиши всі можливі варіанти створення функцій.

function function1 (param1, param2){
  //function body
}

const function2 = function(param1, param2){
  //function body
}

const function3 = new Function('param1', 'param2');



//1.2) Створи функцію, яка буде виводити кількість переданих їй аргументів.

function numberOfArguments() {
  return arguments.length;
}

let res1 = numberOfArguments(1);
console.log(res1);
let res2 = numberOfArguments(1, 2, 3);
console.log(res2);

console.log('-------------------------');

/* 1.3) Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/

function getNumb (a, b){
  if (a < b){
    console.log('-1');
  } else if (a > b){
    console.log('1');
  } else {
    console.log('0');
  }
}

getNumb(4, 2);
getNumb(2, 4);
getNumb(2, 2);

console.log('-------------------------');

// 1.4) Напиши функцію, яка обчислює факторіал переданого їй числа.
//  n * (n-1)!

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let result = factorial(4);
console.log(result);

console.log('-------------------------');

/*1.5) Напиши функцію, яка приймає три окремі цифри і перетворює 
їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/

function numberToStoke(x, y, z){
  return (String(x) + String(y) + String(z));
}

let result1 = numberToStoke(1, 4, 9);
console.log(result1);

console.log('-------------------------');

/* 1.6) Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/

function calcSquare(a, b = a){
  if ( arguments.a = 2){
    return a * b;
  } else {
    return a**2;
  }
}

let result2 = calcSquare(5, 4);
console.log(result2);
let result3 = calcSquare(3);
console.log(result3);
