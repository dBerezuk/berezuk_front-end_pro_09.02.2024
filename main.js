'use strict';

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//1.
const positiveNumbers = (arr = []) => {
    let summa = 0;
    let countNum = 0;

    arr.forEach(item => {
        if(item >= 0) {
            summa += item;
            countNum++;
        }
    });

    console.log(`Количество позитивных элементов: ${countNum} - Сумма позитивных элементов: ${summa}`);
}

positiveNumbers(arr);

//2.
const minElem = (arr = []) => {
    let minNum = 0;
    let index;

    arr.forEach((item, i) => {
        if(item < minNum) {
            minNum = item;
            index = i;
        }
    });

    return {minNum, index};
}

console.log(minElem(arr));

//3.
const maxElem = (arr = []) => {
    let maxNum = 0;
    let index;

    arr.forEach((item, i) => {
        if(item > maxNum) {
            maxNum = item;
            index = i;
        }
    });

    return {maxNum, index};
}

console.log(maxElem(arr));

//4.
const countNegativeNumbers = (arr = []) => {
    let count = 0;

    arr.forEach(item => {
        if(item < 0) {
            count++;
        }
    });

    return count;
}

console.log( countNegativeNumbers(arr) );

//5.
const countUnpairedPositiveNumbers = (arr = []) => {
    let count = 0;

    arr.forEach(item => {
        if(item >= 0 && item % 2 === 1) {
            count++;
        }
    });  

    return count;
}

console.log( countUnpairedPositiveNumbers(arr) );

//6.
const countPairedPositiveNumbers = (arr = []) => {
    let count = 0;

    arr.forEach(item => {
        if(item >= 0 && item % 2 === 0) {
            count++;
        }
    });  

    return count;
}

console.log( countPairedPositiveNumbers(arr) );

//7.
const summaPairedPositiveNumbers = (arr = []) => {
    let summa = 0;

    arr.forEach(item => {
        if(item >= 0 && item % 2 === 0) {
            summa += item;
        }
    });  

    return summa;
}

console.log( summaPairedPositiveNumbers(arr) );

//8.
const summaUnpairedPositiveNumbers = (arr = []) => {
    let summa = 0;

    arr.forEach(item => {
        if(item >= 0 && item % 2 === 1) {
            summa += item;
        }
    });  

    return summa;
}

console.log( summaUnpairedPositiveNumbers(arr) );

//9.
const productPositiveNumbers = (arr = []) => {
    let product = 1;

    arr.forEach(item => {
        if(item >= 1) {
            product *= item;
        }
    });  

    return product;
}

console.log( productPositiveNumbers(arr) );

//10.
const maxElemTask = (arr = []) => {
    let maxNum = Math.max(...arr);
    let indexMaxNum = arr.indexOf(maxNum);

    arr.fill(0, 0, indexMaxNum);
    arr.fill(0, indexMaxNum + 1);

    console.log('Max number: ' + maxNum, arr);
}

maxElemTask(arr);