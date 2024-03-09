'use strict';

//1.
const arr_1 = ['мир', 32, NaN, 14, Infinity, true, 2n, 6, 'строка', 2, 1, -Infinity, 3, 'марс'];
const arr_2 = [12, 13, 11, 99, 'Планета', 2.85];

const arithmetic = (arr) => {
    let summa = 0;
    let count = 0;

    arr.forEach(num => {
        if(typeof num === 'number' && isFinite(num)) {
            count += 1;
            summa += num;
        }
    });
    
    console.log('Результут: ' + (summa / count) );
}

arithmetic(arr_1);
arithmetic(arr_2);

//2.
const x = +prompt('Введите число');
const znak = prompt('Введите знак операции')?.trim();
const y = +prompt('Введите число');

const doMath = (x, znak, y) => {
    if(isNaN(x) || isNaN(y)) return alert('Числа введены некорректно');

    let num = 0;
    switch(znak) {
        case '+':
            num = x + y;
            break;
        case '-':
            num = x - y;
            break;
        case '*':
            num = x * y;
            break;
        case '/':
            num = x / y;
            break;
        case '%':
            num = x % y;
            break;
        case '^':
            num = x ** y;
            break;
        default:
            return alert('Знак операции введен некорректно');
    }

    alert(`Результат: ${x}${znak}${y}=${num}`);
}

doMath(x, znak, y);

//3.
const createArr = () => {
    let arr = [];
    const countArr = +prompt('Введите количество элементов которое нужно создать в массиве');

    for(let i = 1; i <= countArr; i++) {
        arr.push([]);

        const countSubArr = +prompt('Введите количество элементов для массива №' + i);
        for(let j = 1; j <= countSubArr; j++) {
            const text = prompt(`Введите текст элемента №${j} - для массива: №${i}`);

            arr[i - 1].push(text);
        }
    }

    console.log(arr);
}

createArr();


//4.
const str = prompt('Введите текст')?.trim();
const deleteStr = prompt('Введите через пробел символы который нужно удалить')?.split(' ');

const deleteSymbolsStr = (str, deleteStr) => {
    let newStr = str;
    deleteStr.forEach(char => {
        newStr = newStr.replaceAll(char, '');
    });

    alert(newStr);
}

if(!str) {
    alert('Вы не ввели текст');
} else if(!deleteStr) {
    alert('Вы не ввели символы которые нужно удалить');
} else {
    deleteSymbolsStr(str, deleteStr);
}
