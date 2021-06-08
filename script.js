// Homework Lesson_1 ====================================================

const questionsAnswers_1 = document.getElementById('questionsAnswers_1');
const questionsAnswers_2 = document.getElementById('questionsAnswers_2');
const questionsAnswers_3 = document.getElementById('questionsAnswers_3');


const task__1 = document.getElementById('task_1');
const task__2 = document.getElementById('task_2');
const task__3 = document.getElementById('task_3');


const fulfillment_1 = document.getElementById('fulfillment_1');
const fulfillment_2 = document.getElementById('fulfillment_2');
const fulfillment_3 = document.getElementById('fulfillment_3');


// Task № 1. ===================================================================

function task1() {
    questionsAnswers_1.style.display = 'block';
    button_none();
}

function dict_str(dict) {
    // Функция преобразования объекта в JSON-строку
    let str = JSON.stringify(dict);
    return str
}

function fulfillment1() {

    let numbers = {};
    // Ввод числа, определенного заданием (выход из цикла только по выполнении условия)
    do {
        var number = Number(prompt('Введите число от 0 до 999: '));
    } while (number < 0 || number >= 1000);

    // Код для выполнения условия задачи (в данном случае необязателльный) ------
    if (number > 999) {
        console.log('Введеное число превышает 999\n' + dict_str(numbers))
    }
    // --------------------------------------------------------------------------

    let num = number;

    for (let i = 0; i < String(number).length; i++) {
        let remainder = num % 10;

        num = Math.floor(num / 10);
        if (i == 0) {
            numbers['units'] = remainder;

        } else if (i == 1) {
            numbers['tens'] = remainder;
        } else {
            numbers['hundreds'] = remainder;
        }
    }

    alert('В числе ' + number + ':\n' + dict_str(numbers));

    questionsAnswers_1.style.display = 'none';
    button_block();
}

task__1.addEventListener('click', task1);
fulfillment_1.addEventListener('click', fulfillment1);

// Task № 2. ===========================================================

class Catalog {
    constructor(category) {
        this.category = category;;
    }
}

class Product extends Catalog {
    constructor(category, name, quantity, price) {
        super(category);
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

function countBasketPrice(arr) {
    // Функция подсчета стоимости корзины
    let sum_price = 0;
    for (num of arr) {
        sum_price = sum_price + num.product[1] * num.product[2];
    }
    return sum_price;
}

function task2() {
    questionsAnswers_2.style.display = 'block';
    button_none();
}

function fulfillment2() {
    alert('Товары в каталоге:\n' + dict_str(storehaus));
    alert('Товары в корзине:\n' + dict_str(bascet_price));
    alert('Стоимость корзины: ' + countBasketPrice(bascet_price));

    questionsAnswers_2.style.display = 'none';
    button_block();
}

// Определение товаров в каталог продуктов вручную
product_1 = new Product('auto', 'ZAZ', 30, 300000);
product_2 = new Product('auto', 'VAZ', 20, 400000);
product_3 = new Product('moto', 'ural', 3, 350000);
product_4 = new Product('moto', 'KTM', 22, 400000);

// Хранение товаров на складе (массив объектов)
let storehaus = [product_1, product_2, product_3, product_4];

// Tовары в корзине (массив объектов)
let bascet_price = [{ product: [product_1.name, product_1.price, 1] }, { product: [product_3.name, product_3.price, 1] }];

task__2.addEventListener('click', task2);
fulfillment_2.addEventListener('click', fulfillment2);

// Task № 3*. ==============================================================

function task3() {
    questionsAnswers_3.style.display = 'block';
    button_none();
}

function fulfillment3() {
    alert('Функцианал задания реализован в задачи № 2')

    questionsAnswers_3.style.display = 'none';
    button_block();
}

task__3.addEventListener('click', task3);
fulfillment_3.addEventListener('click', fulfillment3);


// ======================================================================
function button_none() {
    task__1.style.display = 'none';
    task__2.style.display = 'none';
    task__3.style.display = 'none';
}

function button_block() {
    task__1.style.display = 'block';
    task__2.style.display = 'block';
    task__3.style.display = 'block';
}