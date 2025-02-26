const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//filter with shortest arrow function
const evenNumbs = nums.filter(numb => numb % 2 === 0);
console.log(evenNumbs);

//classic for loop
const even_numbs = [];
for (let i = 0; i < nums.length; i++) {
  const thisNum = nums[i];
  if (thisNum % 2 === 0) {
    even_numbs.push(thisNum);
  }
}
console.log(even_numbs);

//shortest version possible
console.log(nums.filter(numb => numb % 2 === 0));



