function transactionsFor(itemNumber, transactions) {
  return transactions.filter(transaction => transaction.id === itemNumber);
}

function positiveQuantity(array) {
  let total = array.reduce((sum, value) => {
    return (value.movement === 'in') ? sum + value.quantity : sum - value.quantity;
  }, 0);

  return total > 0;
}

function isItemAvailable(itemNumber, transactions) {
  return positiveQuantity(transactionsFor(itemNumber, transactions));
}

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
