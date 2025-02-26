const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

//forEach with shortest arrow function
names.forEach(name => console.log(name));

//classic for loop
for (let i = 0; i < names.length; i++) {
  const thisName = names[i];
  console.log(thisName);
}


