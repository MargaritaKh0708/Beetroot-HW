// Task 1

//! Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let userAnswer = confirm('Хочеш шоколадку?');

if (userAnswer) {
    let amountOfMoney = +prompt('Скільки грошей маєш? Введи суму:');
    let chocolatePrice = +prompt('Скільки коштує твоя улюблена шоколадка?');
    if (amountOfMoney % chocolatePrice === 0) {
        alert(`То можеш придбати аж ${Math.floor(amountOfMoney / chocolatePrice)}шт. шоколадок`);
    }
    else
        alert(`То можеш придбати аж ${Math.floor(amountOfMoney / chocolatePrice)}шт. шоколадок. Ще й ${amountOfMoney % chocolatePrice} грн. лишиться!`);
}

else
    alert(`Не хоч, як хоч!`);


// Task 2

//!Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5 % річних.Вивести суму нарахованих відсотків.

let amountOfDeposit = +prompt('Ми відкрили для тебе депозит під 5 % річних. \nСкільки коштів покладеш на рахунок на 2 місяці?');

let userProfit = (((amountOfDeposit * 0.05) / 12) * 2).toFixed(1);
alert(`Ти станеш багатіше на ${userProfit} гривень!`);
