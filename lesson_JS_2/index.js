const catalog = [
    {

        name: 'Шампунь',
        price: 450,
        quantity: 3,
        productType: 'shampoo',
        bought: true,
    },
    {

        name: 'Маска для волосся',
        price: 900,
        quantity: 1,
        productType: 'hair mask',
        bought: false,
    },
    {

        name: 'Кава',
        price: 450,
        quantity: 1,
        productType: 'food',
        bought: false,
    },
    {

        name: 'Миргородська',
        price: 45,
        quantity: 6,
        productType: 'food',
        bought: false,
    },
    {

        name: 'Чай Batik',
        price: 50,
        quantity: 1,
        productType: 'food',
        bought: true,
    },
    {

        name: 'Огірки',
        price: 150,
        quantity: 4,
        productType: 'food',
        bought: false,
    },
    {

        name: 'Курятина',
        price: 160,
        quantity: 3,
        productType: 'food',
        bought: true,
    },


];


//* Add new product card

const newObj = {};
newObj.name = prompt('Введіть ІМ\'Я продукту, який бажаєте додати до списку покупок:');
newObj.price = prompt('Введіть ЦІНУ продукту, який бажаєте додати до списку покупок, грн:');
newObj.quantity = prompt('Введіть КІЛЬКІСТЬ одиниць продукту, який бажаєте додати до списку покупок:');
newObj.productType = prompt('Введіть ТИП продукту, який бажаєте додати до списку покупок:');
let buyStatus = prompt('Покупка вже була здійснена (так або ні)?')
if (buyStatus === 'так')
    newObj.bought = true;
else
    newObj.bought = false;

catalog.push(newObj);
console.log('Перегляньте список з доданим продуктом:', catalog);


//* What left to buy

function leftToBuy() {
    let userAnswer = prompt('Хочешь знати, що залишилось придбати (так або ні)?');
    if (userAnswer === 'так') {
        console.log('Залишилось придбати:');
        return catalog.filter(item => item.bought === false);
    }
    else
        console.log('Переглянь свої покупки:');
    return catalog.filter(item => item.bought === true);

}

console.log(leftToBuy());



//* Count how much money did user spend

totalSpend = 0;
totalWait = 0;

let userChoise = prompt('Хочешь знати скільки ти витратив (звісно, так)?');
if (userChoise === 'так') {
    catalog.forEach(function (element, index) {
        if (catalog[index].bought === true) {
            let allPriceSpend = catalog[index].price * catalog[index].quantity;
            totalSpend += allPriceSpend;
        }
        else {
            let allPriceWait = catalog[index].price * catalog[index].quantity;
            totalWait += allPriceWait;
        }
    });
}
console.log(`Це все що ти витратив: ${totalSpend}`, 'грн');
console.log(`Це все, що ти витратиш: ${totalWait}`, 'грн');



//* Delete product card

let itemDelete = () => {
    let userAnswer = prompt('Який продукт ти хочешь видалити?')
    catalog.forEach((element, index) => {
        if (catalog[index].name === userAnswer)
            itemIndex = index;
    }
    );
    catalog.splice(itemIndex, 1);
    console.log(`${userAnswer} видалено. Перегляньте оновлений список:`, catalog);
}
itemDelete()

