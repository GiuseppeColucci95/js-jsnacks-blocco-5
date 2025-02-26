const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

//find with shortest arrow function version
const student = students.find(student => student.id === 2);
console.log(student);

//classic for loop
let studentt;
for (let i = 0; i < students.length; i++) {
  const thisStudent = students[i];
  if (thisStudent.id === 2) {
    studentt = thisStudent;
  }
}
console.log(studentt);

//shortest version possible
console.log(students.find(student => student.id === 2));

