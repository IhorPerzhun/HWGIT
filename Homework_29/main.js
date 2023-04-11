/* 1) Створи масив «Список покупок». Кожен елемент масиву є об'єктом, 
який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 

Написати кілька функцій для роботи з таким масивом:

1.1) Виводити весь список на екран таким чином, щоб спочатку йшли продукти, 
що ще не придбані, а потім - ті, що вже придбали.
1.2) Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.*/


const shoppingList = [
  {name: 'Bread', quantity: 3, costOfOne: 45, summ: 135, purchaseStatus: true},
  {name: 'Water', quantity: 2, costOfOne: 28, summ: 56, purchaseStatus: false},
  {name: 'Meat', quantity: 3, costOfOne: 320, summ: 960, purchaseStatus: true},
  {name: 'Tomato', quantity: 3, costOfOne: 70, summ: 210, purchaseStatus: false},
  {name: 'Banana', quantity: 4, costOfOne: 63, summ: 252, purchaseStatus: true},
  {name: 'Potato', quantity: 8, costOfOne: 30, summ: 240, purchaseStatus: false}
];


function displayList(list) {
  console.log("Shopping List:");
  // sort the list by whether it's bought or not
  list.sort((a, b) => (a.purchaseStatus === b.purchaseStatust ? 0 : a.purchaseStatus ? 1 : -1));
  list.forEach((item) => {
    const status = item.purchaseStatus ? " (Bought)" : "";
    console.log(`- ${item.name} x${item.quantity}${status} - $${item.amount.toFixed(2)}`);
  });
}

// Function to mark a product as bought
function markAsBought(list, name) {
  const item = list.find((item) => item.name === name);
  if (item) {
    item.purchaseStatus = true;
    console.log(`Marked ${name} as bought.`);
  } else {
    console.log(`Error: ${name} not found in the shopping list.`);
  }
}

// Example usage
displayList(shoppingList); // display the list before making any changes
markAsBought(shoppingList, "Milk"); // mark "Milk" as bought
displayList(shoppingList); // display the updated list
