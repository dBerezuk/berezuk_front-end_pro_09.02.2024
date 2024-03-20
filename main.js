'use strict';

const action = (sum = 0) => {
    return num => {
        sum += num;
        console.log(sum);
    }
}

const sum = action();

sum(3);
sum(5);
sum(20);