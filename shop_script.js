function card_draw(url_add, category, name, price, quantity) {
    // Функция отрисовки карточки товара каталога  

    const content = document.getElementById('content_catalog');

    const card = document.createElement('div');
    card.classList.add('card');

    const card_img = document.createElement('img');
    card_img.style.cssText = "width: 280px; height: 260px; margin: 10px; margin-bottom: 0";
    card_img.setAttribute('src', url_add);
    const card_desc = document.createElement('div');
    card_desc.style.cssText = "width: 280px; height: 120px; margin: 10px;";

    const card_desc_cont1 = document.createElement('div');
    card_desc_cont1.style.cssText = "width: 280px; height: 30px; display: flex; justify-content: space-between;";

    const card_desc_cont_name1 = document.createElement('div');
    card_desc_cont_name1.style.cssText = "padding-right: 5px; width: 70px; height: 30px; text-align: left; font-size: 14px;";
    card_desc_cont_name1.textContent = 'Категория';

    const card_desc_cont_desc1 = document.createElement('div');
    card_desc_cont_desc1.style.cssText = "padding-right: 5px; width: 210px; height: 30px; text-align: left; font-size: 14px;";
    card_desc_cont_desc1.textContent = category;

    const card_desc_cont2 = document.createElement('div');
    card_desc_cont2.style.cssText = "width: 280px; height: 30px; display: flex; justify-content: space-between;";

    const card_desc_cont_name2 = document.createElement('div');
    card_desc_cont_name2.style.cssText = "padding-right: 5px; width: 70px; height: 30px; text-align: left; font-size: 14px;";
    card_desc_cont_name2.textContent = 'Название';

    const card_desc_cont_desc2 = document.createElement('div');
    card_desc_cont_desc2.style.cssText = "padding-right: 5px; width: 210px; height: 30px; text-align: left; font-size: 14px;";
    card_desc_cont_desc2.textContent = name;

    const card_desc_cont3 = document.createElement('div');
    card_desc_cont3.style.cssText = "width: 280px; height: 30px; display: flex; justify-content: space-between;";

    const card_desc_cont_name3 = document.createElement('div');
    card_desc_cont_name3.style.cssText = "padding-right: 5px; width: 70px; height: 30px; text-align: left; font-size: 14px;";
    card_desc_cont_name3.textContent = 'Цена';

    const card_desc_cont_desc3 = document.createElement('div');
    card_desc_cont_desc3.style.cssText = "padding-right: 5px; width: 210px; height: 30px; text-align: left; font-size: 14px;";
    card_desc_cont_desc3.textContent = price;

    const card_desc_cont4 = document.createElement('div');
    card_desc_cont4.style.cssText = "width: 280px; height: 30px; display: flex; justify-content: space-between;";

    const card_desc_cont_name4 = document.createElement('div');
    card_desc_cont_name4.style.cssText = "padding-right: 5px; width: 70px; height: 30px; text-align: left; font-size: 14px;";
    card_desc_cont_name4.textContent = 'Наличие';

    const card_desc_cont_desc4 = document.createElement('div');
    card_desc_cont_desc4.style.cssText = "padding-right: 5px; width: 210px; height: 30px; text-align: left; font-size: 14px;";
    card_desc_cont_desc4.textContent = quantity;

    const card_purchase = document.createElement('div');
    card_purchase.style.cssText = "width: 280px; height: 30px; margin: 10px; display: flex; justify-content: space-between;";

    const card_purchase_key = document.createElement('input');
    card_purchase_key.classList.add('header_search_key');
    card_purchase_key.style.cssText = "margin: 0; width: 80px;";
    card_purchase_key.setAttribute('type', 'submit');
    card_purchase_key.setAttribute('value', 'КУПИТЬ');

    const card_sale = document.createElement('div');
    card_sale.style.cssText = "text-align: center; width: 110px; height: 30px; margin: 0; background-color: #fff; display: flex; justify-content: space-between;";

    const card_count_add = document.createElement('input');
    card_count_add.classList.add('header_menu_key');
    card_count_add.style.cssText = "margin: 0; width: 30px; height: 30px; padding: 0";
    card_count_add.setAttribute('type', 'submit');
    card_count_add.setAttribute('value', '-');

    const card_sale_count = document.createElement('div');
    card_sale_count.style.cssText = "width: 40px; height: 30px; margin: 0; font: 1em sans-serif; font-size: 14px; color:black; display: flex; justify-content: center; align-items: center;";
    card_sale_count.textContent = '0';

    const card_count_del = document.createElement('input');
    card_count_del.classList.add('header_menu_key');
    card_count_del.style.cssText = "margin: 0; width: 30px; height: 30px; padding: 0";
    card_count_del.setAttribute('type', 'submit');
    card_count_del.setAttribute('value', '+');

    card.appendChild(card_img);

    card.appendChild(card_desc);

    card_desc.appendChild(card_desc_cont1);
    card_desc_cont1.appendChild(card_desc_cont_name1);
    card_desc_cont1.appendChild(card_desc_cont_desc1);

    card_desc.appendChild(card_desc_cont2);
    card_desc_cont2.appendChild(card_desc_cont_name2);
    card_desc_cont2.appendChild(card_desc_cont_desc2);

    card_desc.appendChild(card_desc_cont3);
    card_desc_cont3.appendChild(card_desc_cont_name3);
    card_desc_cont3.appendChild(card_desc_cont_desc3);

    card_desc.appendChild(card_desc_cont4);
    card_desc_cont4.appendChild(card_desc_cont_name4);
    card_desc_cont4.appendChild(card_desc_cont_desc4);

    card.appendChild(card_purchase);
    card_purchase.appendChild(card_purchase_key);
    card_purchase.appendChild(card_sale);
    card_sale.appendChild(card_count_add);
    card_sale.appendChild(card_sale_count);
    card_sale.appendChild(card_count_del);
    content.appendChild(card);
}

function catalog_draw() {
    // Функция заполнения каталога
    for (let product of storehaus) {
        card_draw(product.url_add, product.category, product.name, product.price, product.quantity);
    }

}

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

let bascet_count_product = 0;
let bascet_total_price = 0
function bascet_draw() {
    // Функция заполнения корзины
    for (let product of bascet_content) {
        bascet_card_draw(product.url_add, product.category, product.name, product.price, product.count_product);
        bascet_count_product += product.count_product;
        bascet_total_price += product.price * product.count_product;
    }

    header_bascet();
}

function header_bascet() {
    const bascet_count_header = document.getElementById('header_bascet_count');
    bascet_count_header.textContent = bascet_count_product;
    bascet_count_header.style.backgroundColor = 'red';

    const header_bascet_price = document.getElementById('header_bascet_price');
    header_bascet_price.textContent = bascet_total_price;

}

class Product {
    constructor(category, url_add, name, price, quantity) {
        this.category = category;
        this.url_add = url_add;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Bascet_product extends Product {
    constructor(category, url_add, name, price, count_product) {
        super(category, url_add, name, price);
        this.count_product = count_product;
    }
}

product_1 = new Product('Истребитель', 'http://pngimg.com/uploads/starwars/small/starwars_PNG48.png', 'TIE/rc Fighter(Short Range Reconnaissance Fighter)', 350000, 30);
product_2 = new Product('Истребитель', 'http://pngimg.com/uploads/starwars/small/starwars_PNG29.png', 'T-65B X-Wing (Space Superiority Fighter)', 400000, 20);
product_3 = new Product('Истребитель', 'http://pngimg.com/uploads/starwars/small/starwars_PNG54.png', 'TIE/ad Fighter (Space Superiority Fighter)', 420000, 22);
product_4 = new Product('Боевая станция', 'http://pngimg.com/uploads/starwars/small/starwars_PNG56.png', 'Death Star (Deep-Space Mobile Battle Station)', 5000000, 1);
product_5 = new Product('Танк', 'http://pngimg.com/uploads/starwars/small/starwars_PNG33.png', 'All Terrain Armoured Transport (AT-AT)', 40000, 12);
product_6 = new Product('Танк', 'http://pngimg.com/uploads/starwars/small/starwars_PNG49.png', 'All Terrain Scout Transport (AT-ST)', 25000, 22);
product_7 = new Product('Tранспорт', 'http://pngimg.com/uploads/starwars/starwars_PNG52.png', 'Тысячилетний сокол', 800000, 1);
product_8 = new Product('Дроид', 'http://pngimg.com/uploads/starwars/small/starwars_PNG6.png', 'Астромехнический дроид серии B (BB-8)', 6000, 12);
product_9 = new Product('Дроид', 'http://pngimg.com/uploads/starwars/small/starwars_PNG45.png', 'Дроид-посредник между людьми и киборгами 3PO', 4000, 22);

let storehaus = [product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8, product_9];


bascet_product_1 = new Bascet_product(product_1.category, product_1.url_add, product_1.name, product_1.price, 2);
bascet_product_2 = new Bascet_product(product_5.category, product_5.url_add, product_5.name, product_5.price, 3);


let bascet_content = [bascet_product_1, bascet_product_2];

const catalog_main = document.getElementById('content_catalog');
const bascet_main = document.getElementById('content_bascet');

if (catalog_main) {
    catalog_draw();
} else if (bascet_main) {
    bascet_draw();
}



