const num: number = 4;
const message: string = 'This is the message';
const bool: boolean = true;
const someThing: undefined = undefined;

const fruits: string[] = ['Mangoes', 'Graphes'];

const point: { x: number; y: number } = {
  x: 10,
  y: 10,
};

const log: (num: number) => void = (num: number) => {
  console.log(num);
};

const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'green', 'blue'];

let foundword: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundword = true;
  }
}

let numbers = [1, 4, 5, -10];
let numberAbove: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 4) {
    numberAbove = numbers[i];
    console.log(numberAbove);
  }
}
