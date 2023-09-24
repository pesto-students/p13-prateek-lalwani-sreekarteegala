function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.getDetails = function () {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
}

function Car(make, model, year, numDoors) {
    Vehicle.call(this, make, model, year);
    this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getDetails = function () {
    return `${Vehicle.prototype.getDetails.call(this)}, Number of Doors: ${this.numDoors}`;
};

const vehicle = new Vehicle("Toyota", "Camry", 2022);
const car = new Car("Honda", "Civic", 2023, 4);

console.log(vehicle.getDetails());
console.log(car.getDetails());