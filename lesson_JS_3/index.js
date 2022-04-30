
let rangeNumbers = [];
alert('Зараз буде магія! Загадай число від 0 до 100.\nP.S. Якщо зміниш його протягом гри - ти редіска.');
for (let i = 0; i <= 100; i++) {
    rangeNumbers.push(i);
}

let userNumber = () => {
    const userAnswer = prompt(`Твоє число більше (>), меньше (<) або дорівнює (=) ${Math.floor((rangeNumbers[0] + rangeNumbers[rangeNumbers.length - 1]) / 2)}?`);
    if (userAnswer === '>') {
        rangeNumbers = rangeNumbers.slice(Math.floor((rangeNumbers.length - 1) / 2));
        console.log(rangeNumbers);
        return userNumber();
    }

    else if (userAnswer === '<') {
        rangeNumbers = rangeNumbers.slice(0, Math.floor(rangeNumbers.length - 1) / 2);
        console.log(rangeNumbers);
        return userNumber();
    }
    else {
        alert(`Це було легко! Твоє число: ${rangeNumbers[Math.floor((rangeNumbers.length - 1) / 2)]}`);
        return;
    }

}

userNumber();
