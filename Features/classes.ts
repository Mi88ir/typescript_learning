class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }

  // drive(): void {
  //   console.log("Vroom vroom");
  // }

  //protected allows access to methods in the same class or child classes
  protected honk(): void {
    console.log("Beep beep");
  }
}

const newColor = new Vehicle("blue");
console.log(newColor.color);

//take all methods from the Vehicle class and use in Car class
class Car extends Vehicle {
  //when creating a constructor in the child class, we need to invoke the constructor of the parent class using the super() method
  constructor(public wheels: number, color: string) {
    super(color); //parent class constructor
    this.wheels = wheels;
  }

  //private means only methods inside the class Car are allowed access
  private drive(): void {
    console.log("broom broom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

//const car = new Car();
//car.drive(); //not allowed because drive is private
//car.honk(); // not allowed because honk is protected
