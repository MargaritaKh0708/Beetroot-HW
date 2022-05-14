//! MARKER 
// ?Реалізуй клас, що описує канцелярський маркер.У класі повинні бути такі компоненти:

// !поле, яке зберігає колір маркера;
// !поле, яке зберігає кількість чорнил у маркері(у відсотках);
// !метод для вводу(приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0, 5 % чорнил у маркері).
// ?Реалізуй клас, що описує маркер, який можна перезаправляти.Успадкуй цей клас від простого маркера і додай метод для заправки.

// *Продемонструй роботу написаних методів.


const inputField = document.getElementById('js-input');
const characterMsg = document.getElementById('js-message')

class Marker {
    constructor(markerColor, inkQuantity) {
        this.markerColor = markerColor,
            this.inkQuantity = inkQuantity
    }
    enterMethod() {
        const stepInk = 0.5;
        const maxCharacter = this.inkQuantity / stepInk;
        inputField.style.color = this.markerColor;

        inputField.addEventListener('keyup', event => {
            const userText = inputField.value.length;
            characterMsg.classList.add('active');
            characterMsg.innerHTML = userText + `/${maxCharacter} (Max Character: ${maxCharacter})`;
            if (userText >= maxCharacter)
                inputField.disabled = true;
        });


    }
}
const marker1 = new Marker('red', 10);
const marker2 = new Marker('green', 20);

console.log(marker2);

marker2.enterMethod();

class tankMarker extends Marker {
    addMarkerInk() {
        const userWishInkQuant = +prompt('How much do you want to fill your marker, %:');
        this.inkQuantity += userWishInkQuant;
        if (this.inkQuantity > 100)
            this.inkQuantity = 100;
    }
}

const marker4 = new tankMarker('orange', 40);

console.log(marker4);
console.log(marker4.inkQuantity);

marker4.addMarkerInk();

console.log(marker4);

