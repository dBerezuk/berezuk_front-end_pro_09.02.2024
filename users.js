const styleSum = sum => sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

const usersAction = () => {
    const phones = [];
    let sum = 0;
    let totalSum = 0;

    users.forEach(({ balance, phone }) => {
        const balanceNum = +balance.replace('$', '').replaceAll(',', '');

        if (balanceNum > 2000) {
            phones.push(phone);
            sum += balanceNum;
        }

        totalSum += balanceNum;
    });

    return {
        phones,
        sum: styleSum(sum),
        totalSum: styleSum(totalSum)
    }
}