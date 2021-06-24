// задача № 1. Продумать, где можно применить замыкания для практикума из седьмого урока.
// Можно применить для назначения ID товарам в каталоге товаров и в корзине.


// Задача № 2.	Не выполняя код, ответить, что выведет браузер и почему: 

// a. ------------------------------------------------------------------------------------------
if (!("a" in window)) {
    var a = 1;
}
alert(a);

// Атрибута «a» в window нет, и ему там неоткуда появится после if, поэтому undefined.-------

// b. -------------------------------------------------------------------------------------------

var b = function a(x) {
    x && a(--x);
};
alert(a);

// b = function a() { ...по имени «a» функцию видно только здесь } ...а здесь undefined (если выше не определили) 

// c. ------------------------------------------------------------------------------------------
function a(x) {
    return x * 2;
}
var a;
alert(a);
// Переменная "a" уже oбъявлена, по этому выведет содержимое функции "a" ---------------------

// d. ------------------------------------------------------------------------------------------
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
// "a" и arguments[2] — это ссылка на одно и то же значение, выведет 10 ------------------------

// e. ------------------------------------------------------------------------------------------
function a() {
    alert(this);
}
a.call(null);
// this в глобальной области указывает на window. Вызов call() у функции с параметром null равнозначно вызову call() без аргументов. Выведет - "[object Window]"




















