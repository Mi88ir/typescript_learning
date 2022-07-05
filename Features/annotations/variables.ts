//Examples of type annotations:

let apples: number = 5;
let speed: string = "mph";
let hasName: boolean = false;

let nothing: null = null;
let und: undefined = undefined;
//--------------------------------------------------------------------

//Type annotation for an array

let colors: string[] = ["red", "green"];

let myNumbers: number[] = [1, 2, 3, 4, 5];

let truths: boolean[] = [true, false, false];

//--------------------------------------------------------------------

//Classes annotation

class Car {
  color: string;
  size: string;

  constructor(color: string, size: string) {
    this.color = color;
    this.size = size;
  }
}

let car: Car = new Car("red", "small");

console.log(car.color); //red

//--------------------------------------------------------------------

//Object annotations

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//--------------------------------------------------------------------

//Function annotations

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//--------------------------------------------------------------------

//When to use annotations

//1. When function returns any type

const json = '{"x": 1, "y":20}';
const cords: { x: number; y: number } = JSON.parse(json);

//2. When we declare variable on one line and initialize later

let words: string[] = ["a", "b", "c", "d", "e"];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "c") {
    foundWord = true;
  }
}

//3. Variable whose type cannot be inferred correctly

let numbers: number[] = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

//--------------------------------------------------------------------
