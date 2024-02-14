//задача 1

const str1 = prompt('Введите текст');
const str2 = prompt('Введите ещё раз текст');
const str3 = prompt('Введите ещё раз текст, это последний раз');

alert(`Результат: 
    ${str1} 
    ${str2} 
    ${str3}
`);

//задача 2

const number = prompt('Введите пятизначное число');

//вариант 1
const numberVerified1 = `${number[0]} ${number[1]} ${number[2]} ${number[3]} ${number[4]}`;
alert('Результат:' + ' ' + numberVerified1);

//вариант 2
// const numberVerified2 = number.split('').join(' ');
// alert('Результат:' + ' ' + numberVerified2);