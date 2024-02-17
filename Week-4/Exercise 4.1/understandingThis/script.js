class Person {
    constructor(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    };

    introduce() {
        return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}. `;
    };
};

class Student extends Person {
    constructor(name, age, gender, nationality, subject) {
        super(name, age, gender, nationality);
        this.subject = subject;
    };

    study() {
        return this.introduce() + `I am studying ${this.subject}. `;
    };
};


// Creating Person instance from Person class
const john = new Person("John Doe", 27, "Male", "Indian");
const mary = new Person("Mary Doe", 23, "Female", "Indian");
const satya = new Person("Satya", 25, "Male", "Indian");

console.log(john.introduce())
console.log(mary.introduce())
console.log(satya.introduce())

// Creating Student instance from Student class
const abhi = new Student("Abhi", 20, "Male", "Indian", "Computer Science");

console.log(abhi.study());