"use strict";
let arr = ['t', 'e'];
// let arr: (string | number)[] = [66, 101];
let x = 'e';
// let x: string | number = 69;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr == 'string' && typeof x == 'string' && arr[i] === x) {
        console.log(arr[i]);
    }
}
