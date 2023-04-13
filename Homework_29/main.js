/* 1) Створи масив «Список покупок». Кожен елемент масиву є об'єктом, 
який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 

Написати кілька функцій для роботи з таким масивом:

1.1) Виводити весь список на екран таким чином, щоб спочатку йшли продукти, 
що ще не придбані, а потім - ті, що вже придбали.
1.2) Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.*/


const shoppingList = [
  {name: 'Bread', quantity: 3, price: 45, amount: 135, bought: true},
  {name: 'Water', quantity: 2, price: 28, amount: 56, bought: false},
  {name: 'Meat', quantity: 3, price: 320, amount: 960, bought: true},
  {name: 'Tomato', quantity: 3, price: 70, amount: 210, bought: false},
  {name: 'Banana', quantity: 4, price: 63, amount: 252, bought: true},
  {name: 'Potato', quantity: 8, price: 30, amount: 240, bought: false}
];


function displayList(list) {
  console.log("Shopping List:");
  
  list.sort((a, b) => (a.bought === b.bought ? 0 : a.bought ? 1 : -1));
  list.forEach((item) => {
    const status = item.bought ? " (Bought)" : "";
    console.log(`  ${item.name} *${item.quantity}${status} - ${item.amount} UAH`);
  });
}



function markAsBought(list, name) {
  const item = list.find((item) => item.name === name);
  if (item) {
    item.bought = true;
    console.log(`Marked ${name} as bought.`);
  } else {
    console.log(`Error: ${name} not found in the shopping list.`);
  }
}



displayList(shoppingList); 
markAsBought(shoppingList, "Bread"); 
markAsBought(shoppingList, "Vodka");
