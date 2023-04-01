//1.1
alert((0.1 * 10 + 0.2 * 10) / 10);


//1.2
let a = ("1");
let b = (2);
let num = Number(a);
alert(num + b);

//1.3
const volumeFlash = prompt('Enter the volume of the flash drive in GB');
let volumeFile = ('0.820');
let q = (volumeFlash / volumeFile);
alert(`Number of files: ${q.toFixed(0)} pcs`);

//2.1
const money = prompt('Enter amount of money available in $');
const priceChoko = prompt('Enter the cost of one chokolate');
let quantity = (money / priceChoko);
let rest = (money % priceChoko);
alert(`Quantity of chokolate: ${quantity.toFixed(0)} pcs \nThe rest of money: ${rest} $`);

//2.2
const number = prompt('Enter three digit number');
let hundreds = ((number / 100).toFixed(0));
let hundRest = (number % 100);
let dozens = ((hundRest / 10).toFixed(0));
let dozensRest = (hundRest % 10);
dozensRestt = String(dozensRest)
alert (dozensRestt + dozens + hundreds);

//3.1
const investAmount = prompt('Enter investement amount in $');
const investPeriod = prompt('Enter for how many months you want to invest');
const annualRate = (0.05);
let interestAmount = ((investAmount * investPeriod) * (annualRate / 12));
alert(`At an annual rate 5% \nAmount of deposit interest: ${interestAmount.toFixed(2)} $`);

//3.2
alert(2 && 0 && 3);
//перше хибне "0"
alert(2 || 0 || 3);
// перше істинне "2"
alert(2 && 0 || 3);
// && маэ пріоритет- визначає хибне "0", далі порівнюе і вибирає істинне "3"













