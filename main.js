const numberOne = +prompt('Введите первое число');
const numberTwo = +prompt('Введите второе число');

const calculationPlus = numberOne + numberTwo;
const calculationMinus = numberOne - numberTwo;
const calculationMultiplication = numberOne * numberTwo;
const calculationSeparation = numberOne / numberTwo;

alert(`
  ${numberOne}+${numberTwo}=${calculationPlus}
  ${numberOne}-${numberTwo}=${calculationMinus}
  ${numberOne}*${numberTwo}=${calculationMultiplication}
  ${numberOne}/${numberTwo}=${calculationSeparation}
`);