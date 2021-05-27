// Homework Lesson_1 ====================================================

const questionsAnswers_1 = document.getElementById('questionsAnswers_1');
const questionsAnswers_2 = document.getElementById('questionsAnswers_2');
const questionsAnswers_3 = document.getElementById('questionsAnswers_3');
const questionsAnswers_4 = document.getElementById('questionsAnswers_4');

const task__1 = document.getElementById('task_1');
const task__2 = document.getElementById('task_2');
const task__3 = document.getElementById('task_3');
const task__4 = document.getElementById('task_4');

const fulfillment_1 = document.getElementById('fulfillment_1');
const fulfillment_2 = document.getElementById('fulfillment_2');
const fulfillment_3 = document.getElementById('fulfillment_3');
const fulfillment_4 = document.getElementById('fulfillment_4');

// Task № 1. ------------------------------------------------------------

function task1() {
    questionsAnswers_1.style.display = 'block';
    button_none();
}

function fulfillment1() {
    var degreesCelsius = prompt('Введите температуру в градусах Цельсия:');
    var degreesForingate = (9 / 5) * degreesCelsius + 32;
    alert('Температура в градусах Форенгейта равна ' + degreesForingate);
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
    var name = prompt('Введите имя ("Василий" по умолчанию):');
    if (name == '') {
        name = 'Василий';
    }
    var admin = name;
    alert(admin)
    questionsAnswers_2.style.display = 'none';
    button_block();
}

task__2.addEventListener('click', task2);
fulfillment_2.addEventListener('click', fulfillment2);

// Task № 3*. -----------------------------------------------------------

function task3() {
    questionsAnswers_3.style.display = 'block';
    button_none();
}

function fulfillment3() {
    alert('1000108 - неявное приведение типов')
    questionsAnswers_3.style.display = 'none';
    button_block();
}

task__3.addEventListener('click', task3);
fulfillment_3.addEventListener('click', fulfillment3);

// Task № 4*. -----------------------------------------------------------

function task4() {
    questionsAnswers_4.style.display = 'block';
    button_none();
}

function fulfillment4() {
    alert('Эти атрибуты используются для асинхронной(одновременной) загрузки скриптов и самой страницы. Async - первым выполнится тот скрипт, который загрузился первым. Defer - скрипты будут выполнятся в том порядке, в котором они добавлены на страницу. Используются для внешних скриптов.')
    questionsAnswers_4.style.display = 'none';
    button_block();
}

task__4.addEventListener('click', task4);
fulfillment_4.addEventListener('click', fulfillment4);

// ---------------------------------------------------------------------
function button_none() {
    task__1.style.display = 'none';
    task__2.style.display = 'none';
    task__3.style.display = 'none';
    task__4.style.display = 'none';
}

function button_block() {
    task__1.style.display = 'block';
    task__2.style.display = 'block';
    task__3.style.display = 'block';
    task__4.style.display = 'block';
}