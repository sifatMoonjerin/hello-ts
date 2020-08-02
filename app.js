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
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Author"] = 1] = "Author";
    Role[Role["Actor"] = 2] = "Actor";
})(Role || (Role = {}));
var person = {
    name: 'sifat',
    age: 25,
    role: Role.Author
};
person.role = Role.Admin;
console.log(person.role);
