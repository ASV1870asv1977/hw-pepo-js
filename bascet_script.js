

function bascet_card_draw(url_add, category, name, price, count_product) {
    // Функция отрисовки карточек корзины
    const content_bascet = document.getElementById('content_bascet');

    const bascet_card = document.createElement('div');
    bascet_card.classList.add('bascet_card');

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

    bascet_card.appendChild(bascet_card_img);
    bascet_card.appendChild(bascet_card_category);
    bascet_card.appendChild(bascet_card_desc);
    bascet_card.appendChild(bascet_card_price_unit);
    bascet_card.appendChild(bascet_card_quantity);
    bascet_card.appendChild(bascet_card_price_total);

    content_bascet.appendChild(bascet_card);
}



function bascet_draw() {
    // Функция заполнения корзины
    for (let product of bascet_content) {
        bascet_card_draw(product.url_add, product.category, product.name, product.price, product.count_product);
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
    pay.setAttribute('value', 'ПЕРЕЙТИ К ОПЛАТЕ');
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

// Список товаров в корзине
let bascet_content = JSON.parse(localStorage.getItem("bascet_content"));
if (bascet_content == null || bascet_content == []) {
    bascet_content = [];
}
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

const reset = document.getElementById('clear');
reset.addEventListener('click', bascet_clear);

console.log(bascet_content);
console.log(header_bascet_count, sum_bascet_price);
