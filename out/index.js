"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("prompt-sync/index"));
const prompt = (0, index_1.default)();
// Formulalar  
// 1-masala
// let a: number = +prompt('x: ');
// let y = 7 * a + 3 * a + 6;
// console.log("Javob " + y);
// let b: number = +prompt('x: ');
// let x = 12 * a + 7 * b + 12;
// console.log("Javob " + x);
// 2-masala
// let kvadratT: number = +prompt('Kvadrat tomonini kiriting ');
// let peremetr = kvadratT * 4;
// console.log(peremetr);
// 3-masala
// let radius: number = +prompt('Radiusni kiriting');
// console.log("Diametr " + (radius * 2));
// 4-masala
// let radius: number = +prompt('Radiusni kiriting');
// let s = 2 * 3.14 * radius;
// let uzunligi = (radius * 2) * 3.14
// console.log(s);
// console.log(uzunligi);
// 5-masala
// let a: number = +prompt('a soni ');
// let b: number = +prompt('b soni ');
// let sum = (a + b) / 2;
// console.log(sum);
// let a: number = +prompt('a soni ');
// let b: number = +prompt('b soni ');
// let sum = Math.pow(a * b, 1/3);
// console.log(sum);
// 6-masala
// let aT: number = +prompt('A tomon ')
// let bT: number = +prompt('B tomon ')
// let s = aT * bT;
// let p = 2 * (aT + bT)
// console.log('Yusasi ' + s);
// console.log('Perimetri ' + p);
// 7-masala
// let x: number = +prompt('Uzunligini kiritng');
// let y: number = +prompt('Balandligini kiritng');
// let kerpichX = 20;
// let kerpichY = 10;
// let sum = (x * y) / (kerpichX * kerpichY);
// let sum1 = (x / kerpichX) + (y * kerpichY);
// console.log('Shuncha kerpich ketadi ' + sum);
// console.log(sum1);
// 9-masala
// let sum = 12.500;
// let appleKg: number = +prompt('Qancha kg olma kerak 1kg olma narxi ' + sum);
// console.log(appleKg * sum);
// Arifmetik
// 1-masala
// let sm: number = +prompt('Santimetr kiriting ');
// console.log('Siz kiritgan sm ' + (sm / 100) + " metr boladi");
// 2-masala
// let kg: number = +prompt('Kg ni kiriting ');
// console.log('Tonna ' + (kg / 1000));
// 3-masala
// let m: number = +prompt('Metrni kiriting ');
// console.log('Kilometr ' + (m / 1000));
// 4-masala
// let day = 234;
// console.log('Hafta kunlari ' + (day / 7));
// Mantiqiy boolean
// 1 a 2
// Shartli if else
// 2-masala
// let a:number = +prompt('a:')
// let b:number = +prompt('b:')
// let sum = a > b ? a === b : b ;
// console.log(sum);
// switch
// let hafta = prompt('Hafta kuni ');
// let sum = ''
// switch(hafta){
//    case '1': sum = 'Dushanba'
//    case '2': sum = 'Seshanba'; break;   
//    case '3': sum = 'Chorshanba'; break;
//    case '4': sum = 'Payshanba'; break;
//    case '5': sum = 'Juma'; break;
//    case '6': sum = 'Shanba'; break;
//    case '7': sum = 'Yakshanba'; break
//    default : sum = 'Xatolik'
// }
// console.log(sum);
// 2-masala
// let oyRaqami = prompt('Oy raqami ');
// let sum = ''
// switch(oyRaqami){
//    case '12':
//    case '1':
//    case '2': sum = 'Qish'; break;
//    case '3':
//    case '4':
//    case '5': sum = 'Bahor'; break;
//    case '6':
//    case '7':
//    case '8': sum = 'Yoz'; break;
//    case '9':
//    case '10':
//    case '11': sum = 'Kuz'; break;
// }
// console.log(sum);
// Sikl
// for(let i = 1; i <= 10; i++){
//    console.log(20);
// }
// let j:number = +prompt('Son ')
// for(let i = 1; i <= j; i++){
//    console.log(j + ' * ' + i + ' = ' + (j * i));
// }
// let son: number = +prompt('Sonni kiriting  ');
// for(let i = 1; i < 10; i++){
//    for(let a = 1; a < 10; a++){
//        console.log(i + ' * ' + a + ' = ' + a * i)
//    }
//    console.log('-------------')
// }
// 8-masala
// let ax: number = 2
// let ay: number = 6
// let bx: number = 6
// let by: number = 4
// let ab:number = ax * bx;
// let bc:number = ay - by; 
// console.log('Perimetr  ' + 2 * (ab + bc));
// console.log('Yuzasi  ' + (ab * bc));
// let sum: number = 10000;
// let apple: number = +prompt('Qancha olma 1kg olma narxi ' + sum );
// let p: number = +prompt('Pecheniya  1kg pecheniya narxi ' + sum );
// let k: number = +prompt('Konfet  1kg konfet narxi ' + sum );
// let hisob = (apple * sum) + (p * sum) + (k * sum);
// console.log('Hammasi bolib  ' + hisob); 
//  let n: number = 90830;
//  let hour: number = Math.floor(n / 3600);
//  let minv: number = 5000 % 3600;
//  let min: number = Math.floor(minv / 60)
//  let sek: number = minv % 60;
// console.log(hour < 10 ? `0${hour}` : `${hour}`, min < 10 ? `0${min}` : `${min}`, sek < 10 ? `0${sek}` : `${sek}` );
// Masalalar davomi
// let name: string = prompt('Ismingizni kiriting  ');
// let surName: string = prompt('Familiyangizni kiriting  ');
// console.log(`Siznig ism sharifingiz ${name} ${surName}`);
// 2-masala
// let futbollClub: string = prompt('Futbol club nomini kiritng  ');
// console.log(`${futbollClub} so'zida  ${futbollClub.length} ta belgi bor`);
// 3-masala
// let countryOne: string= prompt('Davlat nomini kiriting  ')
// let countryTwo: string= prompt('Davlat nomini kiriting  ')
// console.log(countryOne.length > countryTwo.length ? 'Birinchi uzun' : 'Ikkinchi uzun');
// let word: string = prompt('Soz kiriting  ');
// console.log('3chi belgi ' + word.charAt(2));
// console.log('3chi belgi ' + word[2]);
// let word: string = prompt('Soz kiriting  ');
// let lastWord = word.length - 1;
// console.log('Oxirgi belgi  ' + word[lastWord]);
// 6-masala
//  let word: string = prompt('Soz kiriting  ');
//  for(let i = 0; i < word.length; i++){
//     console.log(word[i]);
//  }
//  let word: string = prompt('Soz kiriting  ');
//  for(let i = word.length; i >= 0; i--){
//     console.log(word[i]);
//  }
// Massivlar
// let arr = [12,'salom', 45,7,3,true, false, 'yoki'];
// let arr: string = prompt('Soz kiriting  ');
// let resualt = [];
// resualt.push(arr);
// console.log(resualt);
// 6chi
// let arr  = [1, 5, 7, 9, 13];
// let sum: number = 0;
// for(let key of arr) sum += key;
// console.log(sum);
// arr.reduce((ac: number, cv: number) => {
//    console.log(ac + cv);
// })
