/* 1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».*/
const firstName = prompt("Как тебя зовут?");
const answer = "Привет, " + firstName + "!";
console.log(answer);
/* 2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.*/
const birth_year = +prompt("Какой твой год рождения?");
const now = new Date();
const now_year = now.getFullYear();
const age = now_year - birth_year;
console.log(age);
/*3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.*/
const side = +prompt('Введи размер стороны квадрата.');
const perimeter = side * 4;
console.log(perimeter);
/*4)   Запросите у пользователя радиус окружности и выведите площадь такой окружности.*/
const radius = +prompt("Введи радиус окружности.");
const pi = 3.14;
const area = radius * (pi ** 2);
console.log(area);
/*5)   Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость,
с которой необходимо двигаться, чтобы успеть вовремя.*/
const length = +prompt("Какое расстояние в км между двумя городами?");
const time = +prompt("За сколько часов хочешь добраться?");
const speed = Math.floor(length / time) + " km/hour";
console.log(speed);
/*6)   Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.*/
const usd_eur = 0.82;
const USD = +prompt("Введи цену в долларах.");
const EUR = USD * usd_eur;
console.log(EUR);
/*7)   Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.*/
const main_file = 820;
const flesh_drive = +prompt("Какой объем твоей флешки?");
const quantity_file = Math.floor(flesh_drive * 1000 / 820);
console.log(quantity_file);
/*8)   Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.*/
const account = +prompt("Какая сумма в кошельке?");
const prise_choco = +prompt("Цена шоколадки?");
const quantity_choco = Math.floor(account / prise_choco);
const change = account - prise_choco * quantity_choco;
console.log(quantity_choco, change);
/*9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).*/
const number = +prompt("Введи трехзначное число.");
const message = number % 10 * 100 + Math.floor(number / 10) % 10 * 10 + Math.floor(number / 100);
console.log(message);
/*10)   Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.*/
const account_bank = +prompt("Какая сумма лежит в банке?");
const percentage = 5;
const term = 2;
const accruals = account_bank * percentage / 1200 * term;
console.log(accruals);
