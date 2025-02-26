const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//map with shortest arrow function version
const incrementedNumbers = numbers.map(numb => ++numb);
console.log(incrementedNumbers);

//classic for loop
const incremented_numbers = [];
for (let i = 0; i < numbers.length; i++) {
  let thisNumb = numbers[i];
  incremented_numbers.push(++thisNumb);
}
console.log(incremented_numbers);

//shortest version possible
console.log(numbers.map(numb => ++numb));



