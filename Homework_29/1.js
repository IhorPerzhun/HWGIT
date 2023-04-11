// Shopping list array
const shoppingList = [
    { name: "Apples", quantity: 5, bought: false, price: 1.2, amount: 6 },
    { name: "Milk", quantity: 1, bought: true, price: 2.3, amount: 2.3 },
    { name: "Bread", quantity: 2, bought: false, price: 1.8, amount: 3.6 },
    { name: "Eggs", quantity: 12, bought: false, price: 0.3, amount: 3.6 },
  ];
  
  // Function to display the entire list
  function displayList(list) {
    console.log("Shopping List:");
    // sort the list by whether it's bought or not
    list.sort((a, b) => (a.bought === b.bought ? 0 : a.bought ? 1 : -1));
    list.forEach((item) => {
      const status = item.bought ? " (Bought)" : "";
      console.log(`- ${item.name} x${item.quantity}${status} - $${item.amount.toFixed(2)}`);
    });
  }
  
  // Function to mark a product as bought
  function markAsBought(list, name) {
    const item = list.find((item) => item.name === name);
    if (item) {
      item.bought = true;
      console.log(`Marked ${name} as bought.`);
    } else {
      console.log(`Error: ${name} not found in the shopping list.`);
    }
  }
  
  // Example usage
  displayList(shoppingList); // display the list before making any changes
  markAsBought(shoppingList, "Milk"); // mark "Milk" as bought
  displayList(shoppingList); // display the updated list
  