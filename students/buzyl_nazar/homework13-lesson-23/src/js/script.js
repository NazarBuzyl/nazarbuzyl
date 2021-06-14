// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
const age = +prompt('Введи свой возраст');
let person = "You are ";
if (age >= 0 && age <= 12) {
    person = person + 'baby.';
} else if (age > 12 && age <= 18) {
    person = person + 'teenager.';
} else if (age > 18 && age <= 60) {
    person = person + 'adult.';
} else if (age > 60 && age <= 200) {
    person = person + 'pensioner.';
} else {
    person = person + 'not human.';
}
console.log(person);
// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const number = +prompt('Введи число от 0 до 9');
let messageSymbol;
switch (number) {
    case 1:
        messageSymbol = '!';
        break;
    case 2:
        messageSymbol = '@';
        break;
    case 3:
        messageSymbol = '#';
        break;
    case 4:
        messageSymbol = '$';
        break;
    case 5:
        messageSymbol = '%';
        break;
    case 6:
        messageSymbol = '^';
        break;
    case 7:
        messageSymbol = '&';
        break;
    case 8:
        messageSymbol = '*';
        break;
    case 9:
        messageSymbol = '(';
        break;
    case 0:
        messageSymbol = ')';
        break;
}
console.log(messageSymbol);
// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
const threeDigit = +prompt('Введи трехзначное числою');
const numeralFirst = (threeDigit % 10);
const numeralSecond = Math.floor(threeDigit / 10) % 10;
const numeralThird = Math.floor(threeDigit / 100);
let answerEquality;
if (numeralFirst !== numeralSecond || numeralSecond !== numeralThird || numeralThird !== numeralFirst) {
    answerEquality = "all different.";
} else {
    answerEquality = "There are the same numbers.";
}
console.log(answerEquality);
// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
const yearCheck = +prompt('Введи год');
const heighYear = (yearCheck % 400 === 0 || (yearCheck % 4 === 0 && yearCheck % 100 !== 0)) ? 'Високосный год' : 'Простой год';
console.log(heighYear);
// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
const fiveDigit = +prompt('Введи пятизначное числою.');
const numeralFirst_5 = (fiveDigit % 10);
const numeralSecond_5 = Math.floor(fiveDigit / 10) % 10;
const numeralFirstandSecond = numeralSecond_5 + numeralFirst_5 * 10;
const numeralFourthandFiveth = Math.floor(fiveDigit / 1000);
const answerPalindrom = (numeralFirstandSecond === numeralFourthandFiveth) ? "Palindrom" : "Not palindrom";
console.log(answerPalindrom);
// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const money = +prompt('Введи количество денег в USD.');
const currency = prompt('Выбери валюту: EUR | UAN | AZN');
const USD_EUR = 0.82;
const USD_UAN = 27.25;
const USD_AZN = 1.70;
let sum;
switch (currency) {
    case 'EUR':
        sum = money * USD_EUR;
        break;
    case 'UAN':
        sum = money * USD_UAN;
        break;
    case 'AZN':
        sum = money * USD_AZN;
        break;
}
console.log(sum);
// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
const amountPurchase = +prompt('Введи сумму покупкию');
let discounts = 0;
if (amountPurchase >= 200 && amountPurchase < 300) {
    discounts = 0.97;
} else if (amountPurchase >= 300 && amountPurchase < 500) {
    discounts = 0.95;
} else if (amountPurchase >= 500) {
    discounts = 0.93;
}
const amountWithDiscount = amountPurchase * discounts;
console.log(amountWithDiscount);
// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
const circumference = +prompt('Введи длину окружности круга.');
const perimeterSquare = +prompt('Введи периметр квадрата.');
const pi = 3.14;
const sideSquare = perimeterSquare / 4;
const diametrCircle = circumference / pi;
if (diametrCircle <= sideSquare) console.log('It can do');
else console.log('It can not do');
// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

const firstQuestion = +prompt('Кто старее? Мужчина на 5 лет старше женщиныБ а женщина на 6 лет младше незнакомца. (Ответы: мужчина = 1, женщина = 2 незнакомец = 3?');
const secondQuestion = +prompt('Сколько будет 15*15? 115 | 225 | 625');
const thirdQuestion = +prompt('У меня 6 яблок, я Георгия в полтора больше чем у меня. А в Юры на 3 яблока меньше чем в Георгия. Сколько яблок в Георгия? 6 | 9 | 12');
let pointsAnswer = 0;
if (firstQuestion === 3) pointsAnswer += 2;
if (secondQuestion === 225) pointsAnswer += 2;
if (thirdQuestion === 6) pointsAnswer += 2;
console.log(pointsAnswer);
// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
let day = +prompt('Day?');
let month = +prompt('Month?');
let year = +prompt('Year?')
let quantityDays;
let checkDate;
const leapYear = (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) ? true : false;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        quantityDays = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        quantityDays = 30;
        break;
    case 2:
        quantityDays = (leapYear) ? 29 : 28;
        break;
}
if (day + 1 > quantityDays) {
    day = 1;
    if (month + 1 > 12) {
        month = 1;
        year++;
    } else month++;
} else day++;
console.log(day, month, year);
