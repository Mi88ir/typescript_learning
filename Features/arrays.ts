//One-Dimensional Array
const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date(), new Date()];

//Two-Dimensional Array
const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

//Benefits

//1. Help with inference when extracting values
const car = carMakers[0]; //car type is set as string
const myCar = carMakers.pop(); //myCar type is set as string | undefined

//2. Prevent incompatible values

//carMakers.push(100); // this will fail

//3. Help with map

carMakers.map((car: string): string => {
  return car;
});

//Flexible Types

const importantDates: (string | Date)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-10-15");
importantDates.push(new Date());
