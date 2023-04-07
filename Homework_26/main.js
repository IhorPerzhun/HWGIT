


/*1.1) Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
 дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/

const age = prompt('Enter your age');

if (age >= 0 && age <= 11) {
    alert('You are a child');
} else if (age >= 12 && age <= 17) {
    alert('You are a teenager');
} else if (age >= 18 && age <= 59) {
    alert('You are an adult');
} else if (age >= 60) {
    alert('You are pensioner');
} else {
    alert('error');
}

/* 1.2) Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/

const numberForsymbol = prompt('Enter a number from 0 to 9');

if (numberForsymbol == 0){
    alert(')');
} else if (numberForsymbol == 1){
    alert('!');
} else if (numberForsymbol == 2){
    alert('@');
} else if (numberForsymbol == 3){
    alert('#');
} else if (numberForsymbol == 4){
    alert('$');
} else if (numberForsymbol == 5){
    alert('%');
} else if (numberForsymbol == 6){
    alert('^');
} else if (numberForsymbol == 7){
    alert('&');
} else if (numberForsymbol == 8){
    alert('*');
} else if (numberForsymbol == 9){
    alert('(');
} else {
    alert('error, the number is out of range');
}


//1.3) Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const minRangeDigit = prompt('Enter the starting number of range');
const maxRangeDigit = prompt('Enter the last number of range');

let sum = 0;
for (let i = minRangeDigit; i <= maxRangeDigit; i++) {
    sum += i;
}

alert(`Sum of number ${sum}`);




//1.4) Запитай у користувача 2 числа і знайди найбільший спільний дільник.


let firstnum = prompt("Enter the first number: ");
let secondnum = prompt("Enter the second number: ");

while (secondnum !== 0) {
  let tempdata = secondnum;
  secondnum = firstnum % secondnum;
  firstnum = tempdata;
}
alert(`Greatest common dominator ${firstnum}`);



//1.5) Запитай у користувача число і виведи всі дільники цього числа.

let numForDenominator = prompt("Enter a number");

for (let i = 1; i <= numForDenominator; i++) {
  if (numForDenominator % i === 0) {
    console.log(i);
  }
}





//2.1) Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const num = prompt("Enter a five-digit number");

if (num.length !== 5) {
  alert('Error: Input must be a five-digit number');
} else if (num[0] === num[4] && num[1] === num[3]) {
  alert('The number is a palindrome');
} else {
  alert('The number is not a palindrome');
}

/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.*/


const amount = prompt("Enter the amount of the purchase: ");

if (amount >= 200 && amount < 300) {
  const discount = amount * 0.03;
  const totalAmount = amount - discount;
  alert(`Amount to be paid: ${totalAmount.toFixed(2)}$ with a 3% discount`);
} else if (amount >= 300 && amount < 500) {
  const discount = amount * 0.05;
  const totalAmount = amount - discount;
  alert(`Amount to be paid: ${totalAmount.toFixed(2)}$ with a 5% discount`);
} else if (amount >= 500) {
  const discount = amount * 0.07;
  const totalAmount = amount - discount;
  alert(`Amount to be paid: ${totalAmount.toFixed(2)}$ with a 7% discount`);
} else {
  alert(`Amount to be paid: ${amount} $ without discount`);
}









    

 











