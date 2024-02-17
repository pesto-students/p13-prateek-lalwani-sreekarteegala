class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        console.log(`Driving ${this.make} ${this.model}.`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}

const vehicle = new Vehicle("Toyota", "Camry", "2018", "White");
const car = new Car("Hyundai", "Tucson", "2020", "Red", 5);
const rideCar = new RideShareCar("KIA", "Seltos", "2021", "Black", 5, true);

console.log(vehicle)
vehicle.drive()
console.log(car)
car.drive();
console.log(rideCar)
rideCar.drive();