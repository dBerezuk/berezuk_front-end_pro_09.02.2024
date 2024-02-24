const currentYear = 2024;

const yearBirth = +prompt('Введіть ваш рік народження');

if(!yearBirth){
    alert('Шкода, що Ви не захотіли ввести свою дату народження');
}

const place = prompt('Введіть місто, в якому ви живете')?.trim().toLowerCase();

if(!place){
    alert('Шкода, що Ви не захотіли ввести своє місце');
}

const sport = prompt('Введіть ваш улюблений вид спорту')?.trim().toLowerCase();

if(!sport){
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
}

const userAge = yearBirth ? currentYear - yearBirth : 'Не вказано';

let placeMessage;
let sportMessage;

if(place === 'київ') {
    placeMessage = 'Ти живеш у столиці України';
} else if(place === 'вашингтон') {
    placeMessage = 'Ти живеш у столиці Америки';
} else if(place === 'лондон') {
    placeMessage = 'Ти живеш у столиці Великобританії';
} else if(place) {
    placeMessage = `Ти живеш у місті - ${place[0].toUpperCase() + place.slice(1)}`;
} else{
    placeMessage = 'Місце: Не вказано';
}

if(sport === 'футбол') {
    sportMessage = 'Круто! Хочеш стати Кріштіану Роналду ?';
} else if(sport === 'баскетбол') {
    sportMessage = 'Круто! Хочеш стати Леброном Джеймсом ?';
} else if(sport === 'хокей') {
    sportMessage = 'Круто! Хочеш стати Харламовом Валерієм ?';
} else if(sport) {
    sportMessage = 'Круто! бути самим собою';
} else{
    sportMessage = 'Спорт: Не вказано';
}

alert(`
    Ваш вік: ${userAge}
    ${placeMessage}
    ${sportMessage}
`);