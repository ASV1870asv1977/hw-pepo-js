function card_draw(url_add, category, name, price, quantity, i) {
    // Функция отрисовки карточки товара каталога  

    const content = document.getElementById('content_catalog');

    // Карточка товара
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', 'card_' + i);

    // Картинка товара
    const card_img = document.createElement('img');
    card_img.classList.add('img_product');
    card_img.style.cssText = "width: 280px; height: 260px; margin: 10px; margin-bottom: 0";
    card_img.setAttribute('src', url_add[0]);
    card_img.setAttribute('id', 'card_img_' + i);

    // Поле описания товара ----------------------------------------------------------
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
    card_desc_cont_desc3.setAttribute('id', 'card_desc_cont_desc3_' + i);

    const card_desc_cont4 = document.createElement('div');
    card_desc_cont4.style.cssText = "width: 280px; height: 30px; display: flex; justify-content: space-between;";

    const card_desc_cont_name4 = document.createElement('div');
    card_desc_cont_name4.style.cssText = "padding-right: 5px; width: 70px; height: 30px; text-align: left; font-size: 14px;";
    card_desc_cont_name4.textContent = 'Наличие';

    const card_desc_cont_desc4 = document.createElement('div');
    card_desc_cont_desc4.style.cssText = "padding-right: 5px; width: 210px; height: 30px; text-align: left; font-size: 14px;";
    card_desc_cont_desc4.textContent = quantity;
    card_desc_cont_desc4.setAttribute('id', 'card_desc_cont_desc4_' + i);
    // ----------------------------------------------------------------------------

    // Поле добавления в корзину ==================================================
    const card_purchase = document.createElement('div');
    card_purchase.style.cssText = "width: 280px; height: 30px; margin: 10px; display: flex; justify-content: space-between;";
    card_purchase.setAttribute('id', 'card_purchase_' + i);

    // Кнопка КУПИТЬ
    const card_purchase_key = document.createElement('input');
    card_purchase_key.classList.add('header_search_key');
    card_purchase_key.style.cssText = "margin: 0; width: 80px;";
    card_purchase_key.setAttribute('type', 'submit');
    card_purchase_key.setAttribute('value', 'КУПИТЬ');
    card_purchase_key.setAttribute('id', 'card_purchase_key_' + i);

    // Поле увеличения (уменьшения) количества товара ------------------------------
    const card_sale = document.createElement('div');
    card_sale.style.cssText = "text-align: center; width: 110px; height: 30px; margin: 0; background-color: #fff; display: flex; justify-content: space-between;";

    // Кнопка уменьшения
    const card_count_add = document.createElement('input');
    card_count_add.classList.add('header_menu_key');
    card_count_add.style.cssText = "margin: 0; width: 30px; height: 30px; padding: 0";
    card_count_add.setAttribute('type', 'submit');
    card_count_add.setAttribute('value', '+');
    card_count_add.setAttribute('id', 'card_count_add_' + i);

    // Поле количества
    const card_sale_count = document.createElement('div');
    card_sale_count.style.cssText = "width: 40px; height: 30px; margin: 0; font: 1em sans-serif; font-size: 14px; color:black; display: flex; justify-content: center; align-items: center;";
    card_sale_count.textContent = '0';
    card_sale_count.setAttribute('id', 'card_sale_count_' + i);

    // Кнопка увеличения
    const card_count_del = document.createElement('input');
    card_count_del.classList.add('header_menu_key');
    card_count_del.style.cssText = "margin: 0; width: 30px; height: 30px; padding: 0";
    card_count_del.setAttribute('type', 'submit');
    card_count_del.setAttribute('value', '-');
    card_count_del.setAttribute('id', 'card_count_del_' + i);
    // ----------------------------------------------------------------------------
    // ============================================================================

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
    let i = 1;
    for (let product of storehaus) {
        card_draw(product.url_add, product.category, product.name, product.price, product.quantity, i);
        i += 1;
    }

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

product_1 = new Product('Истребитель', ['http://pngimg.com/uploads/starwars/small/starwars_PNG48.png', 'https://static.wikia.nocookie.net/rustarwars/images/b/bd/TIEs_SoG.jpg/revision/latest?cb=20110904030030', 'https://i.pinimg.com/originals/f6/51/27/f651275ef8a82df5bebd62f453ba504d.png'], 'TIE/rc Fighter(Short Range Reconnaissance Fighter)', 350000, 30);
product_2 = new Product('Истребитель', ['http://pngimg.com/uploads/starwars/small/starwars_PNG29.png', 'https://tehnot.com/wp-content/uploads/2015/09/x-wing-project.jpg', 'https://img2.goodfon.ru/wallpaper/nbig/c/c1/star-wars-the-force-awakens-5043.jpg'], 'T-65B X-Wing (Space Superiority Fighter)', 400000, 20);
product_3 = new Product('Истребитель', ['http://pngimg.com/uploads/starwars/small/starwars_PNG54.png', 'https://cs8.pikabu.ru/post_img/big/2016/05/06/12/146256524919836779.jpg', 'https://i.redd.it/uvdv1hnq3bx41.jpg'], 'TIE/ad Fighter (Space Superiority Fighter)', 420000, 22);
product_4 = new Product('Боевая станция', ['http://pngimg.com/uploads/starwars/small/starwars_PNG56.png', 'https://www.kino-teatr.ru/news/3146/42687.jpg', 'https://yorick.kz/wp-content/uploads/2015/12/1.8.jpg'], 'Death Star (Deep-Space Mobile Battle Station)', 5000000, 1);
product_5 = new Product('Танк', ['http://pngimg.com/uploads/starwars/small/starwars_PNG33.png', 'https://diag38.ru/wp-content/uploads/tehnika-v-zvezdnyh-vojnah_2.jpg', 'https://diag38.ru/wp-content/uploads/tehnika-v-zvezdnyh-vojnah_1.jpg'], 'All Terrain Armoured Transport (AT-AT)', 40000, 12);
product_6 = new Product('Танк', ['http://pngimg.com/uploads/starwars/small/starwars_PNG49.png', 'http://starforge.info/wp-content/uploads/2019/7/image-1448.jpg', 'https://diag38.ru/wp-content/uploads/tehnika-v-zvezdnyh-vojnah_4.jpg'], 'All Terrain Scout Transport (AT-ST)', 25000, 22);
product_7 = new Product('Tранспорт', ['http://pngimg.com/uploads/starwars/starwars_PNG52.png', 'https://cs.pikabu.ru/images/big_size_comm/2014-01_4/13900619603745.jpg', 'https://cdn.oboi7.com/static/images/m/87/0d/870d8715d14c951c5aae8e4f371da6b0bcfb8c52.jpg'], 'Тысячилетний сокол', 800000, 1);
product_8 = new Product('Дроид', ['http://pngimg.com/uploads/starwars/small/starwars_PNG6.png', 'https://blog.allo.ua/wp-content/uploads/Obzor-robota-iz-Zvyozdnyh-vojn-Sphero-BB-8-kadr-iz-filma.jpg', 'http://nerdist.com/wp-content/uploads/2017/09/BB-8-thumbs-up-lighter-615x410.jpg'], 'Астромехнический дроид серии B (BB-8)', 6000, 12);
product_9 = new Product('Дроид', ['http://pngimg.com/uploads/starwars/small/starwars_PNG45.png', 'https://avatars.mds.yandex.net/get-zen_doc/1855206/pub_5e834d6e4b7ab909516e3b1e_5e835d45862a504fb17afe25/scale_1200', 'https://robotronic.ru/image/cache/catalog/Cat5/41rk4nbi7hl-500x500.jpg'], 'Дроид-посредник между людьми и киборгами 3PO', 4000, 22);

let storehaus = [product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8, product_9];

// Дщбавление в корзину =============================================================


function add_bascet(e) {
    // Функция добавления товара в корзину и просмотра товара
    console.log(e.target.getAttribute('id'));

    product_number_id = parseInt(e.target.getAttribute('id')[e.target.getAttribute('id').length - 1]);

    // Кнопка '+'
    if (e.target.getAttribute('id') == 'card_count_add_' + product_number_id) {
        list_num[product_number_id - 1] += 1;
        list_presence[product_number_id - 1] -= 1;

        if (list_presence[product_number_id - 1] < 0) {
            list_presence[product_number_id - 1] = 0;
            list_num[product_number_id - 1] -= 1;
            header_bascet_count -= 1;
        }

        document.getElementById('card_sale_count_' + product_number_id).textContent = list_num[product_number_id - 1];
        document.getElementById('card_desc_cont_desc4_' + product_number_id).textContent = list_presence[product_number_id - 1];
    }

    // Кнопка '-'
    if (e.target.getAttribute('id') == 'card_count_del_' + product_number_id) {
        list_num[product_number_id - 1] -= 1;
        list_presence[product_number_id - 1] += 1;

        if (list_num[product_number_id - 1] < 0) {
            list_num[product_number_id - 1] = 0;
            list_presence[product_number_id - 1] -= 1;
        }
        document.getElementById('card_sale_count_' + product_number_id).textContent = list_num[product_number_id - 1];
        document.getElementById('card_desc_cont_desc4_' + product_number_id).textContent = list_presence[product_number_id - 1];
    }

    // Кнопка КУПИТЬ 
    if (e.target.getAttribute('id') == 'card_purchase_key_' + product_number_id && list_num[product_number_id - 1] > '0') {
        e.stopPropagation();

        header_bascet_count += parseInt(document.getElementById('card_sale_count_' + product_number_id).textContent); // Увеличение счетчика корзины
        sum_bascet_price += parseInt(document.getElementById('card_desc_cont_desc3_' + product_number_id).textContent) * parseInt(document.getElementById('card_sale_count_' + product_number_id).textContent); // Увеличение счетчика корзины
        document.getElementById('header_bascet_count').style.backgroundColor = 'red';
        document.getElementById('header_bascet_count').textContent = header_bascet_count;
        document.getElementById('header_bascet_price').textContent = sum_bascet_price;
        document.getElementById('card_sale_count_' + product_number_id).textContent = 0;  // Обнуление поля количества товара

        // Заполнение объекта "Корзина"
        bascet_product = new Bascet_product(storehaus[product_number_id - 1]['category'], storehaus[product_number_id - 1]['url_add'][0], storehaus[product_number_id - 1]['name'], storehaus[product_number_id - 1]['price'], list_num[product_number_id - 1]);
        bascet_content.push(bascet_product);
        // Сохранение данных

        localStorage.setItem("bascet_content", JSON.stringify(bascet_content)); // Сохранение списка товаров в корзине
        localStorage.setItem("header_bascet_count", JSON.stringify(header_bascet_count)); // Сохранение количества товаров в корзине
        localStorage.setItem("sum_bascet_price", JSON.stringify(sum_bascet_price)); // Сохранение списка товаров в корзине
        // Сохранение данных по количеству товара на складе по наименованиям -------
        // -
        // -
        // -
        // -------------------------------------------------------------------------- 

    } else if (e.target.getAttribute('id') == 'card_purchase_key_' + product_number_id && list_num[product_number_id - 1] == '0') {
        alert('Не указано количество товара');
    }

    if (e.target.getAttribute('id') == 'card_img_' + product_number_id) {
        document.getElementById('present_product').style.display = 'block';
        document.getElementById('present_product_wind').setAttribute('src', storehaus[product_number_id - 1]['url_add'][0]);
    }
}

function show_img(e) {
    if (e.target.getAttribute('id') == 'present_product_key_right' || (e.type == 'keydown' && e.code == 'ArrowRight')) {
        count_img += 1;
        if (count_img > 2) {
            count_img = 0;
        }
        document.getElementById('present_product_wind').setAttribute('src', storehaus[product_number_id - 1]['url_add'][count_img]);
    }

    if (e.target.getAttribute('id') == 'present_product_key_left' || (e.type == 'keydown' && e.code == 'ArrowLeft')) {
        count_img -= 1;
        if (count_img < 0) {
            count_img = 2;
        }
        document.getElementById('present_product_wind').setAttribute('src', storehaus[product_number_id - 1]['url_add'][count_img]);
    }

    if (e.target.getAttribute('id') == 'present_product_key_exit' || (e.type == 'keydown' && e.code == 'Escape')) {
        count_img = 0;
        document.getElementById('present_product_wind').setAttribute('src', '');
        document.getElementById('present_product').style.display = 'none';
    }
}

catalog_draw();

let count_img = 0;            // Счетчик изображений при слайд-шоу
let list_num = [];            // Список количеств выбранных товаров
let list_presence = [];       // Список остатков товаров

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

let n = 1;
for (let product in storehaus) {
    list_num.push(parseInt(document.getElementById('card_sale_count_' + n).textContent));
    list_presence.push(storehaus[product]['quantity']);
    n += 1;
}

// Добавление обработчика событий на поле id="content_catalog"
const content_catalog = document.getElementById('content_catalog');
content_catalog.addEventListener('click', add_bascet);

// Добавление обработчика событий на поле id="present_product"
const present_product = document.getElementById('present_product');
present_product.addEventListener('click', show_img);
document.addEventListener('keydown', show_img);


console.log(bascet_content);
console.log(header_bascet_count, sum_bascet_price);










