class Vehicule {
    constructor() {

        this.passengers = [];
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicule {
    constructor() {
        super();
    }
    deployAirBags(){
        console.log("booooom");
    }

}

let v1 =new Vehicule();
v1.addPassenger("julisu");
v1.addPassenger("silci");
console.log(v1.passengers);

let c8= new Car();
c8.addPassenger("marbu");
c8.addPassenger("silci");
c8.deployAirBags();
console.log(c8.passengers);

for (const key in c8) {
    if
}