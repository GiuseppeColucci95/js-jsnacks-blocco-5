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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

//find with shortest arrow function version
const studentClass = students.find(student => student.id === 2).class;
console.log(studentClass);

//classic for loop
let student_class;
for (let i = 0; i < students.length; i++) {
  const thisStudent = students[i];

  if (thisStudent.id === 2) {
    student_class = thisStudent.class
  }
}
console.log(student_class);

//shortest version possible
console.log((students.find(student => student.id === 2).class));


