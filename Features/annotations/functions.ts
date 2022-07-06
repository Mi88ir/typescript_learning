//always use return annotations for functions

const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

function logger(name: string): void {
  console.log(name);
}

//never should be used for cases like infinite loops or as below
const throwError = (message: string): never => {
  throw new Error(message);
};
