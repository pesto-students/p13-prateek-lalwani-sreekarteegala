// "use strict";

function Person(name, age, email) {
    Object.defineProperty(this, 'name', {
        value: name,
        writable: false,
    });

    Object.defineProperty(this, 'email', {
        value: email,
        writable: false,
    });

    this.age = age;

    this.getAge = function () {
        return this.age;
    };

    this.setAge = function (age) {
        if (age > 0)
            this.age = age;
        else
            throw new Error("Age Cannot be negetive")
    }
}

const person = new Person("Example Name", 27, "Example@email.com");

person.name = "Shankar"; // Throws an error in strict mode
console.log(person.name); // Expected output: Example Name

person.setAge(26);
console.log(person.getAge()); // Expected output: 26

// person.setAge(-26); // This fails as setAge doesnot accept negetive values


