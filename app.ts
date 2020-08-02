const person: {
    name: string;
    age: number;
    hobby: string[];
} = {
    name: 'Sifat M',
    age: 25,
    hobby: ['sports', 'programming']
}

console.log(person.name)

for (const hobby of person.hobby){
    console.log(hobby)
}