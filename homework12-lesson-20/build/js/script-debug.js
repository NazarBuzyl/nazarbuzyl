"use strict";

/* 1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».*/
var firstName = prompt("Как тебя зовут?");
var answer = "Привет, " + firstName + "!";
console.log(answer);
/* 2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.*/

var birth_year = +prompt("Какой твой год рождения?");
var now = new Date();
var now_year = now.getFullYear();
var age = now_year - birth_year;
console.log(age);
/*3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.*/

var side = +prompt('Введи размер стороны квадрата.');
var perimeter = side * 4;
console.log(perimeter);
/*4)   Запросите у пользователя радиус окружности и выведите площадь такой окружности.*/

var radius = +prompt("Введи радиус окружности.");
var pi = 3.14;
var area = radius * Math.pow(pi, 2);
console.log(area);
/*5)   Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость,
с которой необходимо двигаться, чтобы успеть вовремя.*/

var length = +prompt("Какое расстояние в км между двумя городами?");
var time = +prompt("За сколько часов хочешь добраться?");
var speed = Math.floor(length / time) + " km/hour";
console.log(speed);
/*6)   Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.*/

var usd_eur = 0.82;
var USD = +prompt("Введи цену в долларах.");
var EUR = USD * usd_eur;
console.log(EUR);
/*7)   Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.*/

var main_file = 820;
var flesh_drive = +prompt("Какой объем твоей флешки?");
var quantity_file = Math.floor(flesh_drive * 1000 / 820);
console.log(quantity_file);
/*8)   Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.*/

var account = +prompt("Какая сумма в кошельке?");
var prise_choco = +prompt("Цена шоколадки?");
var quantity_choco = Math.floor(account / prise_choco);
var change = account - prise_choco * quantity_choco;
console.log(quantity_choco, change);
/*9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).*/

var number = +prompt("Введи трехзначное число.");
var message = number % 10 * 100 + Math.floor(number / 10) % 10 * 10 + Math.floor(number / 100);
console.log(message);
/*10)   Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.*/

var account_bank = +prompt("Какая сумма лежит в банке?");
var percentage = 5;
var term = 2;
var accruals = account_bank * percentage / 1200 * term;
console.log(accruals);