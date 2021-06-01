// Homework Lesson_1 ====================================================

const questionsAnswers_1 = document.getElementById('questionsAnswers_1');
const questionsAnswers_2 = document.getElementById('questionsAnswers_2');
const questionsAnswers_3 = document.getElementById('questionsAnswers_3');
const questionsAnswers_4 = document.getElementById('questionsAnswers_4');
const questionsAnswers_5 = document.getElementById('questionsAnswers_5');
const questionsAnswers_6 = document.getElementById('questionsAnswers_6');
const questionsAnswers_7 = document.getElementById('questionsAnswers_7');
const questionsAnswers_8 = document.getElementById('questionsAnswers_8');

const task__1 = document.getElementById('task_1');
const task__2 = document.getElementById('task_2');
const task__3 = document.getElementById('task_3');
const task__4 = document.getElementById('task_4');
const task__5 = document.getElementById('task_5');
const task__6 = document.getElementById('task_6');
const task__7 = document.getElementById('task_7');
const task__8 = document.getElementById('task_8');

const fulfillment_1 = document.getElementById('fulfillment_1');
const fulfillment_2 = document.getElementById('fulfillment_2');
const fulfillment_3 = document.getElementById('fulfillment_3');
const fulfillment_4 = document.getElementById('fulfillment_4');
const fulfillment_5 = document.getElementById('fulfillment_5');
const fulfillment_6 = document.getElementById('fulfillment_6');
const fulfillment_7 = document.getElementById('fulfillment_7');
const fulfillment_8 = document.getElementById('fulfillment_8');

const calc = document.getElementById('calc');
const add = document.getElementById('addition');
const sub = document.getElementById('subtraction');
const mult = document.getElementById('multiplication');
const div = document.getElementById('division');
const ent = document.getElementById('enter');
const men = document.getElementById('menu');


// ---------------------------------------------------------------------
function button_none() {
    task__1.style.display = 'none';
    task__2.style.display = 'none';
    task__3.style.display = 'none';
    task__4.style.display = 'none';
    task__5.style.display = 'none';
    task__6.style.display = 'none';
    task__7.style.display = 'none';
    task__8.style.display = 'none';
}

function button_block() {
    task__1.style.display = 'block';
    task__2.style.display = 'block';
    task__3.style.display = 'block';
    task__4.style.display = 'block';
    task__5.style.display = 'block';
    task__6.style.display = 'block';
    task__7.style.display = 'block';
    task__8.style.display = 'block';
}


// Task № 1. ------------------------------------------------------------

function task1() {
    questionsAnswers_1.style.display = 'block';
    button_none();
}

function fulfillment1() {

    var a = 1, b = 1, c, d;
    c = ++a;
    alert('a = 1\n++a = ' + c + '\nПрефиксная форма возвращает новое значение'); // 2
    d = b++;
    alert('b = 1\nb++ = ' + d + '\nПостфиксная форма возвращает старое значение');; // 1
    c = (2 + ++a);
    alert('(2 + ++a) = ' + c + '\nСтарое значение a = 2\nНовое значение a = 3\nПрефиксная форма использует новое значение'); // 5
    d = (2 + b++);
    alert('(2 + b++) = ' + d + '\nСтарое значение b = 2\nНовое значение b = 2\nПостфиксная форма использует старое значение'); // 4
    alert('Значение переменной a = ' + a + '\na = 1  =>  ++a  =>  a = 2  =>  ++a  =>  a = 3'); // 3
    alert('Значение переменной b = ' + b + '\nb = 1  =>\nb++  =>  b = 2 (повторное обращение)  =>\nb++  =>  b = 3 (повторное обращение)'); // 3

    questionsAnswers_1.style.display = 'none';
    button_block();
}

task__1.addEventListener('click', task1);
fulfillment_1.addEventListener('click', fulfillment1);

// Task № 2. -----------------------------------------------------------

function task2() {
    questionsAnswers_2.style.display = 'block';
    button_none();
}

function fulfillment2() {
    var a = 2;
    var x = 1 + (a *= 2);
    alert('x = ' + x)

    questionsAnswers_2.style.display = 'none';
    button_block();
}

task__2.addEventListener('click', task2);
fulfillment_2.addEventListener('click', fulfillment2);

// Task № 3 -----------------------------------------------------------

function task3() {
    questionsAnswers_3.style.display = 'block';
    button_none();
}

function fulfillment3() {
    let a = parseInt(prompt('Введите первое целое число: '));
    let b = parseInt(prompt('Введите второе целое число: '));

    if (a >= 0 && b >= 0) {
        let result = a - b;
        alert('Условие № 1. Разность чисел равна: ' + result);
    } else if (a < 0 && b < 0) {
        let result = a * b;
        alert('Условие № 2. Произведение чисел равно: ' + result);
    } else {
        let result = a + b;
        alert('Условие № 3. Сумма чисел равна: ' + result);
    }

    questionsAnswers_3.style.display = 'none';
    button_block();
}

task__3.addEventListener('click', task3);
fulfillment_3.addEventListener('click', fulfillment3);

// Task № 4. -----------------------------------------------------------

function task4() {
    questionsAnswers_4.style.display = 'block';
    button_none();
}

function fulfillment4() {
    let new_list = new Array();
    let number = parseInt(prompt('Введите целое число от 0 до 15: '));
    switch (number) {
        case 0:
            new_list.push(0);
        case 1:
            new_list.push(1);
        case 2:
            new_list.push(2);
        case 3:
            new_list.push(3);
        case 4:
            new_list.push(4);
        case 5:
            new_list.push(5);
        case 6:
            new_list.push(6);
        case 7:
            new_list.push(7);
        case 8:
            new_list.push(8);
        case 9:
            new_list.push(9);
        case 10:
            new_list.push(10);
        case 11:
            new_list.push(11);
        case 12:
            new_list.push(12);
        case 13:
            new_list.push(13);
        case 14:
            new_list.push(14);
        case 15:
            new_list.push(15);
            alert('Список по условию задачи: ' + new_list);
            break;
    }

    questionsAnswers_4.style.display = 'none';
    button_block();
}

task__4.addEventListener('click', task4);
fulfillment_4.addEventListener('click', fulfillment4);


// Task № 5. -----------------------------------------------------------
function addition(num_first, num_second) {
    return num_first + num_second;
}

function subtraction(num_first, num_second) {
    return num_first - num_second;
}

function multiplication(num_first, num_second) {
    return num_first * num_second;
}

function division(num_first, num_second) {
    if (num_second == 0) {
        alert('Деление на ноль ЗАПРЕЩЕНО!\nПовторите ввод данных.');
        return 'ошибка';
    }
    return num_first / num_second;
}

function task5() {
    questionsAnswers_5.style.display = 'block';
    button_none();
    fulfillment_5.addEventListener('click', fulfillment5);
}

function fulfillment5() {
    questionsAnswers_5.style.display = 'none';
    calc.style.display = 'block';
    add.addEventListener('click', alert_add);
    sub.addEventListener('click', alert_sub);
    mult.addEventListener('click', alert_mult);
    div.addEventListener('click', alert_div);
    men.addEventListener('click', back);
}

function alert_add() {
    alert("Реализована функция сложения: \n function addition(num_first, num_second) {\nreturn num_first + num_second;\n}");
}

function alert_sub() {
    alert("Реализована функция вычитания: \n function subtraction(num_first, num_second) {\nreturn num_first - num_second;\n}");
}

function alert_mult() {
    alert("Реализована функция умножения: \n function multiplication(num_first, num_second) {\nreturn num_first * num_second;\n}");
}

function alert_div() {
    alert("Реализована функция деления: \n function division(num_first, num_second) {\nif (num_second == 0) {\nalert('Деление на ноль ЗАПРЕЩЕНО!\nПовторите ввод данных.');\nreturn 'ошибка';\n}\nreturn num_first / num_second;\n}");
}

function back() {
    button_block();
    calc.style.display = 'none';
    add.removeEventListener("click", alert_add);
    sub.removeEventListener("click", alert_sub);
    mult.removeEventListener("click", alert_mult);
    div.removeEventListener("click", alert_div);
}

task__5.addEventListener('click', task5);

// Task № 6. -----------------------------------------------------------

let first_namber, second_namber, operation;


function adding_machine(first_namber, second_namber, operation) {
    let result;
    switch (operation) {
        case '+':
            result = addition(first_namber, second_namber);
            break;
        case '-':
            result = subtraction(first_namber, second_namber);
            break;
        case '*':
            result = multiplication(first_namber, second_namber);
            break;
        case '/':
            result = division(first_namber, second_namber);
            break;
    }
    return result
}

function number_sec() {
    second_namber = parseInt(document.getElementById('number').value);
    let result = adding_machine(first_namber, second_namber, operation);
    document.getElementById('number').value = result;
}

function number_first_add() {
    operation = '+';
    first_namber = parseInt(document.getElementById('number').value);
    document.getElementById('number').value = '';
}

function number_first_sub() {
    operation = '-';
    first_namber = parseInt(document.getElementById('number').value);
    document.getElementById('number').value = '';
}

function number_first_mul() {
    operation = '*';
    first_namber = parseInt(document.getElementById('number').value);
    document.getElementById('number').value = '';
}

function number_first_div() {
    operation = '/';
    first_namber = parseInt(document.getElementById('number').value);
    document.getElementById('number').value = '';
}

function task6() {
    questionsAnswers_6.style.display = 'block';
    button_none();
    fulfillment_6.addEventListener('click', fulfillment6);
}

function fulfillment6() {
    first_namber = 0;
    second_namber = 0;
    operation = '';

    questionsAnswers_6.style.display = 'none';
    calc.style.display = 'block';

    add.addEventListener('click', number_first_add);
    sub.addEventListener('click', number_first_sub);
    mult.addEventListener('click', number_first_mul);
    div.addEventListener('click', number_first_div);
    ent.addEventListener('click', number_sec);
    men.addEventListener('click', back);
}

task__6.addEventListener('click', task6);

// Task № 7*. ------------------------------------------------------------

function task7() {
    questionsAnswers_7.style.display = 'block';
    button_none();
}

function fulfillment7() {

    alert('null > 0; -> false\nnull == 0; -> false\nnull >= 0; -> true\nПричина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному');

    questionsAnswers_7.style.display = 'none';
    button_block();
}

task__7.addEventListener('click', task7);
fulfillment_7.addEventListener('click', fulfillment7);

// Task № 8*. -----------------------------------------------------------

function task8() {
    questionsAnswers_8.style.display = 'block';
    button_none();
}

let namber, extent
function recursion(number, extent) {
    if (extent == 1) {
        return number;
    }
    return number *= recursion(number, extent - 1);

}

function fulfillment8() {
    let val = parseInt(prompt('Введите число, возводимое в степень: '));
    let pow = parseInt(prompt('Введите степень числа: '));

    alert(val + ' ** ' + pow + ' = ' + recursion(val, pow));

    questionsAnswers_8.style.display = 'none';
    button_block();
}

task__8.addEventListener('click', task8);
fulfillment_8.addEventListener('click', fulfillment8);
