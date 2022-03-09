import { type } from "os";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

/* -------------------- 1 ---------------------------

let numbersArray: number[] = [-1,0,3,4,25,26];

for (const element of numbersArray) {
    if(Math.sqrt(element) % 1 === 0){
        console.log(true);
     }else{
        console.log(false);
     }
}

>>>>>>>>>>>> Refactored

let numbersArray: number[] = [-1, 0, 3, 4, 25, 26];

for (const element of numbersArray) {
   console.log(element, ' => ', Math.sqrt(element) % 1 === 0);
}

*/

/* -------------------- 2 ---------------------------

let numbers: number[] = [1,12,-31];

if(numbers[2] > 0){
   console.log(-numbers[2]);
}else{
   console.log(numbers[2]);
}

>>>>>>>>>>>> Refactored

1-Variant

let numbers: number[] = [1,12,-31];

for (const n of numbers) {
   if (n > 0) {
      console.log(-n);
   }
   else {
      console.log(n);
   }
}

2-Variant

for (const n of numbers) {
   console.log(n > 0 ? -n : n);
}

*/

/* -------------------- 3 ---------------------------

let number: number | string = 348597 + '';

let arr: (number | string)[] = [];
for(let i = 0; i < number.length; i++){
   arr.push(Number(number[i]))
}
console.log(arr);
console.log(typeof number);

>>>>>>>>>>>> Refactored

let num: string = (348597).toString()
let digits: number[] = [];

for(const digit of num){
   digits.push(+digit)
}
console.log(digits);

*/


/* -------------------- 4 ---------------------------

let words: string = 'test';

let juft: number | string  = (words.length / 2) - 1,
    juft2: number | string = words.length / 2,
    toq: number | string = (words.length / 2 ) - 0.5

if(words.length % 2 === 0){
   console.log(`'${words[juft]}${words[juft2]}'`);
}else{
   console.log(words[toq]);
}

>>>>>>>>>>>> Refactored

let word: string = 'middle';

if (word.length % 2 === 0) {
   let i = (word.length / 2) - 1
   console.log(word[i] + word[i + 1]);
}
else {
   let i = Math.floor(word.length/2)
   console.log(word[i]);
}

*/

/* -------------------- 5 ---------------------------

let arr: (string | number)[] = ['t', 'e'];
let arr: (string | number)[] = [66, 101];
let arr: (string | number)[] = ['what', 'a', 'greate', 'kata'];

let x: string | number = 'e';
let x: string | number = 66;
let x: string | number = 'kata';

if(arr.indexOf(x) >= 0){
   console.log(true);
}else{
   console.log(false);
}

>>>>>>>>>>>> Refactored

type Double = string | number

// let arr: Double[] = ['t', 'e'];
// let arr: Double[] = [66, 101];
let arr: Double[] = ['what', 'a', 'greate', 'kata'];

// let x: Double = 'e';
// let x: Double = 66;
let x: Double = 'kat';

console.log(arr.includes(x));
console.log(arr.indexOf(x) > -1);

*/

// Car object

// type Car = {
//    name: string,
//    countryNumber: string,
//    year: number,
//    km: number,
//    mator: Mator
// }

// type Mator = {
//    otKuch: number,
//    benzin: number
// }

// const carObject: Car = {
//    name: 'Nexia 2',
//    countryNumber: 'AAA8909',
//    year: 2016,
//    km: 9000,
//    mator: {
//       otKuch: 78,
//       benzin: 60
//    }
// }
// console.log(carObject);

// Car object

type Room = {
   fan: string,
   sinf: string,
   oquvchilar: string[],
   rahbar: string,
}

const roomObj: Room = {
   fan: 'Matem',
   sinf: '11A',
   oquvchilar: ['sds'],
   rahbar: 'a',
}