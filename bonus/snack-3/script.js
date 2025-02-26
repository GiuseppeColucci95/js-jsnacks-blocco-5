const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//map with extended arrow function
const incrementedNumbers = numbers.map((numb) => {
  return ++numb;
});
console.log(incrementedNumbers);


