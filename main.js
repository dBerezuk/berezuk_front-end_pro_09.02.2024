//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let numbers = [];

for(let i = 20; i <= 30; i += 0.5) {
    numbers.push(i);
}

console.log(numbers.join(' '));

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
for(let i = 10; i <= 100; i += 10) {
    console.log(`${i}$ - ${i * 27}₴`);
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const N = +prompt('Введите число N');

for(let i = 1; i <= 100; i++) {
    const square = i ** 2;

    if(square > N) break;

    console.log(i);
}

/*
Дане ціле число. З'ясувати, чи є воно простим 
(простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
*/
const N2 = +prompt('Введите целое число');
let countDivisions = 0;

for(let i = 1; i <= N2; i++) {
    if(N2 % i === 0) {
        countDivisions += 1;

        if(countDivisions === 3) break;
    }
}

if(countDivisions === 2){
    console.log('Простое число');
} else {
    console.log('Не простое число');
}

/* 
Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
*/

let N3 = +prompt('Введите число');
let check = false;

for(let i = 1; i <= N3; i++) {
    if(3 ** i === N3) {
        check = true;
        break;
    } else {
        check = false;
    }
}

console.log(check);