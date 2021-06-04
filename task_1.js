
// Задача 1.
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let num = 0;
let simple_numbers = [];

while (num <= 100) {
    if (num == 0 || num == 1) {
        num++;
        continue;
    }
    let flag = true;
    let i = 2;
    while (i < num) {
        if (num % i == 0) {
            flag = false;
            break;
        }
        i++;
    }

    if (flag) {
        simple_numbers.push(num);
    }
    num++;
}

console.log('Простые числа от 0 до 100: ', simple_numbers);



