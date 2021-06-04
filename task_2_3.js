// Задача 2, 3.
// Товары в корзине хранятся в массиве. Задачи:
// a.	Организовать такой массив для хранения товаров в корзине;
// b.	Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(arr) {
    // Функция подсчета стоимости корзины

    let sum_price = 0;
    for (num of arr) {
        sum_price = sum_price + num;
    }
    return sum_price;
}

let basket_price = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Массив с ценами товаров

console.log('Стоимость корзины: ', countBasketPrice(basket_price));
