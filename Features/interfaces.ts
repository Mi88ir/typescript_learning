interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  manufactured: Date;
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
  manufactured: new Date(),
  summary(): string {
    return "This is a car";
  },
};

//function has a very long type annotation which is bad
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name is ${vehicle.name}`);
  console.log(`Year is ${vehicle.year}`);
  console.log(`Broken is ${vehicle.broken}`);
  console.log(`manufactured is ${vehicle.manufactured}`);

  console.log(`Summary is ${vehicle.summary()}`);
};

//printVehicle(oldCivic);

const cooldrink = {
  color: "red",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Sugar content is ${this.sugar}gms`;
  },
};
