'use strict';

(function (users) {
    if (!(Array.isArray(users) && users.length !== 0)) return;

    const { phones, sum, totalSum } = usersAction();

    console.table(phones);
    console.log(`Общая сумма балансов пользователей у которых баланс больше $2000: ${sum}
-----    
Общая сумма балансов пользователей: ${totalSum}`);
})(users);