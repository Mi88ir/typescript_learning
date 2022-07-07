class Vehicle {
  drive(): void {
    console.log("Vroom vroom");
  }

  honk(): void {
    console.log("Beep beep");
  }
}

//take all methods from the Vehicle class and use in Car class
class Car extends Vehicle {
  drive(): void {
    console.log("broom broom");
  }
}

const car = new Car();
car.drive();
car.honk();
