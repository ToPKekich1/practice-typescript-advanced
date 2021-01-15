//generic функция предназначена для понимания кода

const cars: string[] = ['Ford', 'Arrf'];
//generic запись
const cars2: Array<string> = ['Ford', 'Arrf'];

//generic Promise
const promise: Promise<number> = new Promise(resolve => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});

promise.then(data => {
    // console.log(data.toFixed());
});

//Универсальная generic функция для работы с объектами
//T extends object - ограничение что только объект
function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return {
        ...a,
        ...b
    };
}

const merged = mergeObjects({ name: 'A' }, { age: 24 });
// const merged1 = mergeObjects('11', '111');

// console.log(merged.age);

//=====================

interface ILenght {
    length: number;
}

function withCount<T extends ILenght>(value: T): { value: T; count: string } {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}

console.log(withCount('Privet'));
console.log(withCount(['a', 'a']));
// console.log(withCount(2));

//============

function getObjValues<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key];
}

const person = {
    name: 'Vladilen',
    age: 26
};
console.log(getObjValues(person, 'name'));
// console.log(getObjValues(person, 'job'));

class Collections<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item);
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item);
    }

    get items(): T[] {
        return this._items;
    }
}

const numbers = new Collections<number>([1, 2, 3]);
numbers.add(2);
numbers.remove(1);
console.log(numbers.items);

// const numbers = new Collections<object>([1, 2, 3]);

interface Car {
    model: string;
    year: number;
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}; //Partial - временно

    if (model.length > 3) {
        car.model = model;
    }

    if (year > 2000) {
        car.year = year;
    }
    return car as Car;
}

///

const cars3: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars3.shift(); НИЗЯ

const ford: Readonly<Car> = {
    model: 'ford',
    year: 2000
};

// ford.model = 'Ferrari'; NIZYA
