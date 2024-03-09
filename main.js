'use strict';

const pow = (num, degree) => {
    if(degree === 1) {
        return num;
    } else {
        return num * pow(num, --degree);
    }
}

console.log( pow(2, 4) );