"use strict";
//generic функция предназначена для понимания кода
const cars = ['Ford', 'Arrf'];
//generic запись
const cars2 = ['Ford', 'Arrf'];
//generic Promise
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});
promise.then(data => {
    // console.log(data.toFixed());
});
//Универсальная generic функция для работы с объектами
//T extends object - ограничение что только объект
function mergeObjects(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = mergeObjects({ name: 'A' }, { age: 24 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
console.log(withCount('Privet'));
console.log(withCount(['a', 'a']));
// console.log(withCount(2));
//============
function getObjValues(obj, key) {
    return obj[key];
}
const person = {
    name: 'Vladilen',
    age: 26
};
console.log(getObjValues(person, 'name'));
// console.log(getObjValues(person, 'job'));
class Collections {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const numbers = new Collections([1, 2, 3]);
numbers.add(2);
numbers.remove(1);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    const car = {}; //Partial - временно
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
///
const cars3 = ['Ford', 'Audi'];
// cars3.shift(); НИЗЯ
const ford = {
    model: 'ford',
    year: 2000
};
// ford.model = 'Ferrari'; NIZYA
