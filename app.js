var person = {
    name: 'Sifat M',
    age: 25,
    hobby: ['sports', 'programming'],
    role: [3, 'author']
};
console.log(person.name);
person.role.push('asdf');
console.log(person.role);
for (var _i = 0, _a = person.hobby; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
