const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

//map with shortes arrow function version
const authors = posts.map(post => post.author);
console.log(authors);

//classic for loop
const authorss = [];
for (let i = 0; i < posts.length; i++) {
  const thisPost = posts[i];
  authorss.push(thisPost.author);
}
console.log(authorss);

//shortest version possible
console.log(posts.map(post => post.author));



