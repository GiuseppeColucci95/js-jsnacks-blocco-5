const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//forEach with shortest arrow function version
people.forEach(person => console.log(person.name));

//classic for loop
for (let i = 0; i < people.length; i++) {
  const thisPerson = people[i];
  console.log(thisPerson.name);
}