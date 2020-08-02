// const person: {
//     name: string;
//     age: number;
//     hobby: string[];
//     role: [number, string];
// } = {
//     name: 'Sifat M',
//     age: 25,
//     hobby: ['sports', 'programming'],
//     role: [3, 'author']
// }

// console.log(person.name)
// console.log(person.role)

// for (const hobby of person.hobby){
//     console.log(hobby)
// }

enum Role { Admin, Author, Actor }

const person = {
    name: 'sifat',
    age: 25,
    role: Role.Author
}

person.role = Role.Admin

console.log(person.role)