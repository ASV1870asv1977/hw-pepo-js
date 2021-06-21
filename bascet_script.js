

function bascet_card_draw(url_add, category, name, price, count_product, i) {
    // Функция отрисовки карточек корзины
    const content_bascet = document.getElementById('content_bascet');

    const bascet_card = document.createElement('div');
    bascet_card.classList.add('bascet_card');
    bascet_card.setAttribute('id', 'bascet_card_' + i);

    const bascet_card_img = document.createElement('img');
    bascet_card_img.style.cssText = "width: 110px; height: 110px; margin: 5px; background-color: #ccc;";
    bascet_card_img.setAttribute('src', url_add);

    const bascet_card_category = document.createElement('div');
    bascet_card_category.classList.add('bascet_card_category');
    bascet_card_category.textContent = category;

    const bascet_card_desc = document.createElement('div');
    bascet_card_desc.classList.add('bascet_card_desc');
    bascet_card_desc.textContent = name;

    const bascet_card_price_unit = document.createElement('div');
    bascet_card_price_unit.classList.add('bascet_card_price_unit');
    bascet_card_price_unit.textContent = price;

    const bascet_card_quantity = document.createElement('div');
    bascet_card_quantity.classList.add('bascet_card_quantity');
    bascet_card_quantity.textContent = count_product;

    const bascet_card_price_total = document.createElement('div');
    bascet_card_price_total.classList.add('bascet_card_price_total');
    bascet_card_price_total.textContent = count_product * price;

    const bascet_card_del = document.createElement('div');
    bascet_card_del.classList.add('bascet_card_del');
    bascet_card_del.setAttribute('id', 'bascet_card_del_' + i);
    bascet_card_del.textContent = 'Удалить';

    bascet_card.appendChild(bascet_card_img);
    bascet_card.appendChild(bascet_card_category);
    bascet_card.appendChild(bascet_card_desc);
    bascet_card.appendChild(bascet_card_price_unit);
    bascet_card.appendChild(bascet_card_quantity);
    bascet_card.appendChild(bascet_card_price_total);
    bascet_card.appendChild(bascet_card_del);

    content_bascet.appendChild(bascet_card);

}



function bascet_draw() {
    // Функция заполнения корзины
    const content_bascet = document.getElementById('content_bascet');

    let i = 1;
    for (let product of bascet_content) {
        bascet_card_draw(product.url_add, product.category, product.name, product.price, product.count_product, i);
        i += 1;
    }


    const bascet_total = document.createElement('div');
    bascet_total.classList.add('bascet_total');
    bascet_total.setAttribute('id', 'bascet_total');

    const bascet_total_text = document.createElement('div');
    bascet_total_text.classList.add('bascet_total_text');
    bascet_total_text.setAttribute('id', 'bascet_total_text');
    bascet_total_text.textContent = 'В корзине ' + header_bascet_count + ' товаров на сумму ' + sum_bascet_price;

    const pay = document.createElement('input');
    pay.classList.add('pay');
    pay.setAttribute('type', 'submit');
    pay.setAttribute('value', 'ОФОРМИТЬ ДОСТАВКУ');
    pay.setAttribute('id', 'pay');

    const clear = document.createElement('input');
    clear.classList.add('clear');
    clear.setAttribute('type', 'submit');
    clear.setAttribute('value', 'ОЧИСТИТЬ КОРЗИНУ');
    clear.setAttribute('id', 'clear');

    bascet_total.appendChild(bascet_total_text);
    bascet_total.appendChild(pay);
    bascet_total.appendChild(clear);
    content_bascet.appendChild(bascet_total);
}

function bascet_clear() {
    // Функция полной очистки корзины
    bascet_content = [];
    sum_bascet_price = 0;
    header_bascet_count = 0;

    document.getElementById('header_bascet_price').textContent = 'товары отсутствуют';
    document.getElementById('header_bascet_count').textContent = header_bascet_count;
    document.getElementById('header_bascet_count').style.backgroundColor = 'rgb(149, 170, 175)';
    localStorage.setItem("bascet_content", JSON.stringify(bascet_content)); // Сохранение списка товаров в корзине
    localStorage.setItem("header_bascet_count", JSON.stringify(header_bascet_count)); // Сохранение количества товаров в корзине
    localStorage.setItem("sum_bascet_price", JSON.stringify(sum_bascet_price)); // Сохранение списка товаров в корзине
    location.reload()
}

function bascet_del_product(e) {
    // Функция удаления товара из корзины
    product_number_id = parseInt(e.target.getAttribute('id')[e.target.getAttribute('id').length - 1]);
    header_bascet_count -= bascet_content[product_number_id - 1]['count_product'];
    sum_bascet_price -= bascet_content[product_number_id - 1]['price'] * bascet_content[product_number_id - 1]['count_product'];

    bascet_content.splice(product_number_id - 1, 1);

    localStorage.setItem("bascet_content", JSON.stringify(bascet_content)); // Сохранение списка товаров в корзине
    localStorage.setItem("header_bascet_count", JSON.stringify(header_bascet_count)); // Сохранение количества товаров в корзине
    localStorage.setItem("sum_bascet_price", JSON.stringify(sum_bascet_price)); // Сохранение списка товаров в корзине

    location.reload()
}

function bascet_delivery() {
    document.getElementById('registration').style.display = 'block';
    document.getElementById('content_bascet').style.display = 'none';
    document.getElementById('registration_message').style.display = 'none';
}

function bascet_message() {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('content_bascet').style.display = 'none';
    document.getElementById('message').style.display = 'block';
}

function cancel() {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('content_bascet').style.display = 'block';
    document.getElementById('message').style.display = 'none';
}

function message_send() {
    alert('Ваш коментарий отправлен')
}


// Список товаров в корзине
let bascet_content = JSON.parse(localStorage.getItem("bascet_content")) || [];
// Сумма товаров в корзине
let sum_bascet_price = JSON.parse(localStorage.getItem("sum_bascet_price"));
if (sum_bascet_price == null || sum_bascet_price == 0) {
    sum_bascet_price = 0;
    document.getElementById('header_bascet_price').textContent = 'товары отсутствуют';
} else {
    document.getElementById('header_bascet_price').textContent = sum_bascet_price;
}
// Количество товаров в корзине
let header_bascet_count = JSON.parse(localStorage.getItem("header_bascet_count"));
if (header_bascet_count == null || header_bascet_count == 0) {
    header_bascet_count = 0;
    document.getElementById('header_bascet_count').textContent = header_bascet_count;
    document.getElementById('header_bascet_count').style.backgroundColor = 'rgb(149, 170, 175)';
} else {
    document.getElementById('header_bascet_count').textContent = header_bascet_count;
    document.getElementById('header_bascet_count').style.backgroundColor = 'red';
}

bascet_draw();

// Обработчик события на очищение корзины
const reset = document.getElementById('clear');
reset.addEventListener('click', bascet_clear);

//Обработчик событий на поле id=content_bascet
const content_bascet = document.getElementById('content_bascet');
content_bascet.addEventListener('click', bascet_del_product);

// Обработчик события на "оформление заказа"
const delivery = document.getElementById('pay');
delivery.addEventListener('click', bascet_delivery);

// Обработчик события на кнопку "отмены"
const cancel_delivery = document.getElementById('cancel_delivery');
cancel_delivery.addEventListener('click', cancel);

// Обработчик события на кнопку "отмены"
const cancel_message = document.getElementById('cancel_message');
cancel_message.addEventListener('click', cancel);

// Обработчик события на "далее"
const message = document.getElementById('next');
message.addEventListener('click', bascet_message);

// Обработчик события на кнопку "отправить коментарий"
const message__send = document.getElementById('message_send');
message__send.addEventListener('click', message_send);



console.log(bascet_content);
console.log(header_bascet_count, sum_bascet_price);
