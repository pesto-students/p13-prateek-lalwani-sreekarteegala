// A petrol pump has petrol and distance to next petrol pump
class petrolPump {

    constructor(a, b) {
        this.petrol = a;
        this.distance = b;
    }
}

// The function returns starting point if there is a
// possible solution, otherwise returns -1
function printTour(p, n) {

    // deficit is used to store the value of the capacity as
    // soon as the value of capacity becomes negative so as
    // not to traverse the array twice in order to get the
    // solution
    var start = 0, deficit = 0;
    var capacity = 0;
    for (i = 0; i < n; i++) {
        capacity += p[i].petrol - p[i].distance;
        if (capacity < 0) {
            // If this particular step is not done then the
            // between steps would be redundant
            start = i + 1;
            deficit += capacity;
            capacity = 0;
        }
    }
    return (capacity + deficit >= 0) ? start : -1;
}

// console.log(printTour([[6, 4], [3, 6], [7, 3]]))
console.log(printTour([new petrolPump(6,4), new petrolPump(3,6), new petrolPump(7,3)], 3))