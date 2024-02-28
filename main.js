const dataStr = prompt('Введите цифры через пробел')?.trim();

if(dataStr) {
    const dataArr = dataStr.split(' ');
    console.log('Создан массив: ' + dataArr);

    dataArr.sort((a, b) => a - b);
    console.log('Отсортированный массив: ' + dataArr);
    
    dataArr.splice(1, 3);
    console.log('Удалено из массива 3 элемента: ' + dataArr);
} else if(dataStr === undefined) {
    alert('Вы отменили ввод данных');
} else {
    alert('Вы не ввели данные');
}