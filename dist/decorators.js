"use strict";
// //Декоратор - патерн проэктирования. Cинтетическая обертка вокруг класса.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
function Bind(_, _2, descriptor) {
    const original = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this);
        }
    };
}
let CardComponent = class CardComponent {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component name: ${this.name}`);
    }
};
__decorate([
    Bind
], CardComponent.prototype, "logName", null);
CardComponent = __decorate([
    Component({
        selector: '#card',
        template: ` <div id="card">
        <div class="card-content">
            <h1 class="card-title">Card Component</h1>
        </div>
    </div>`
    })
], CardComponent);
const card = new CardComponent('My Car Component');
const btn = document.querySelector('.btn');
btn.addEventListener('click', card.logName);
const validators = {};
function Required(target, propName) {
    validators[target.constructor.name] = {
        [propName]: 'required'
    };
}
function validate(obj) {
    const objConfig = validators[obj.constructor.name];
    if (!objConfig) {
        return true;
    }
    let isValid = true;
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
// class Form {
//     @Required
//     public email: string | void;
//     constructor(email?: string) {
//         this.email = email;
//     }
// }
// const form = new Form('smth');
// if (validate(form)) {
//     console.log('valid: ', form);
// } else {
//     console.log('error valid');
// }
