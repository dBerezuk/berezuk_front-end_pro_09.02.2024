'use strict';

class Man {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`Имя: ${this.name} | Возраст: ${this.age}`);
    }
}

class Car {
    brand;
    model;
    year;
    licensePlate;
    owner;

    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
    }

    setOwner(man) {
        if(man.age < 18) return console.warn(`${man.name} не сможет быть владельцем автомобиля ${this.brand} ${this.model}, потому что возраст владельца должен быть больше 18 лет.`);
        
        this.owner = man;
    }

    info() {
        console.groupCollapsed(`Информация о автомобиле - ${this.brand} ${this.model}`);
        
        console.log(`Марка: ${this.brand} | Модель: ${this.model} | Год выпуска: ${this.year} | Номерной знак: ${this.licensePlate}`);

        console.groupCollapsed('Владелец');

        this.owner ? this.owner.info() : console.log('Владельца нет');

        console.groupEnd();
        console.groupEnd();
    }
}

const manPaul = new Man('Павел', 31);
const manVasya = new Man('Василий', 27);
const manDima = new Man('Дима', 16);

const carBMW = new Car('BMW', 'M2', 2023, 'AO 240i');
const carTesla = new Car('Tesla', 'Model 3', 2022, 'AO 777 is');
const carVolkswagen = new Car('Volkswagen', 'Touareg', 2018, 'OO 8768');

carBMW.setOwner(manPaul);
carTesla.setOwner(manVasya);
carVolkswagen.setOwner(manDima);

carBMW.info();
carTesla.info();
carVolkswagen.info();