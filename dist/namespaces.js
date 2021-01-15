"use strict";
//Namespaces - сущности которые есть в ТС, которые позволяют декомпозировать и делать модульный код, обхединять элементы в группы
//импорт namespace в тс
/// <reference path="./form-namespace.ts"/>
var Form;
(function (Form) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    Form.myForm = new MyForm('a');
})(Form || (Form = {}));
console.log(Form.myForm);
