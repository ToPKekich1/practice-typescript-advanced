//Namespaces - сущности которые есть в ТС, которые позволяют декомпозировать и делать модульный код, обхединять элементы в группы

//импорт namespace в тс
/// <reference path="./form-namespace.ts"/>

namespace Form {
    class MyForm {
        private type: FormType = 'inline';
        private state: FormState = 'active';

        constructor(public email: string) {}

        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }

    export const myForm = new MyForm('a');
}

console.log(Form.myForm);
