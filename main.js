//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let numbers = [];
for(let i = 10; i <= 20; i++) {
    numbers.push(i);
}

console.log(numbers.toString());

//Вивести квадрати чисел від 10 до 20.
for(let i = 10; i <= 20; i++) {
    console.log(i ** 2);
}

//Вивести таблицю множення на 7.
let multi = [];
for(let i = 1; i <= 10; i++) {
    multi.push(7 * i);
}

console.table(multi);

//Знайти суму всіх цілих чисел від 1 до 15.
let summa = 0;
for(let i = 1; i <= 15; i++) {
    summa += i;
}

console.log(summa);

//Знайти добуток усіх цілих чисел від 15 до 35.
let number = 15;

for(let i = 15; i <= 35; i++) {
    number *= i;
}

console.log(number);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum = 0;

for(let i = 1; i <= 500; i++) {
    sum += i;
}

console.log(sum / 500);

//Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum2 = 0;
for(let i = 30; i <= 80; i++) {
    if(i % 2 === 0){
        sum2 += i;
    }
}

console.log(sum2);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for(let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}

/*
Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
Визначити кількість його парних дільників.
Знайти суму його парних дільників.
*/

let naturalNumber = 12;
let countPairedDivisors = 0;
let summaPairedDivisors = 0;
const arrNumberDivider = [];

for(let i = 1; i <= naturalNumber; i++) {
    if(naturalNumber % i === 0) {
        arrNumberDivider.push(i);
        countPairedDivisors += i % 2 === 0;
        summaPairedDivisors += i % 2 === 0 && i;
    }
}

console.log(arrNumberDivider);
console.log(countPairedDivisors);
console.log(summaPairedDivisors);

//Надрукувати повну таблицю множення від 1 до 10.
const arrTableMulti = [];
for(let i = 1; i <= 10; i++) {
    arrTableMulti.push([]);

    for(let j = 1; j <= 10; j++) {
        arrTableMulti[i - 1].push(i * j);
    }
}

console.table(arrTableMulti);
